'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Icon, SectionTitle } from './ui';

const PHOTOS = [
  'Véranda aluminium avec toiture vitrée',
  "Garde-corps en verre et verrière d'intérieur autour d'un escalier",
  'Verrière posée sur un toit plat',
  "Pose d'une vitrine de commerce",
  "Porte d'entrée et marquise en fer forgé",
  'Porte-fenêtre à deux vantaux sur balcon',
  'Verrière de toiture en pente',
  'Verrière zénithale de grande halle',
  'Lanterneau pyramidal sur toit-terrasse',
  'Véranda à ossature bois entièrement vitrée',
  'Baie vitrée coulissante ouvrant sur une terrasse',
  "Verrière de cour d'immeuble en cours de pose",
  'Fenêtre double vantail à petits bois',
  'Baie vitrée aluminium donnant sur jardin',
  'Façade vitrée intérieure de showroom',
  'Porte-fenêtre double vantail sur cour'
].map((alt, i) => ({ src: `/images/cap-realisations-${i + 1}.jpg`, alt }));

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    lbJustOpened.current = true;
    setIndex(i);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const step = useCallback((delta: number) => {
    setIndex((i) => (i === null ? i : (i + delta + PHOTOS.length) % PHOTOS.length));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step]);

  const current = index === null ? null : PHOTOS[index];

  // Lightbox : les photos sont sur une piste horizontale ; changer de photo la fait glisser
  // (miniature, flèches, clavier), et un balayage au doigt met à jour la photo active.
  const lbSlidesRef = useRef<HTMLUListElement>(null);
  const lbJustOpened = useRef(false);
  const lbTarget = useRef<number | null>(null);

  useEffect(() => {
    const el = lbSlidesRef.current;
    if (!el || index === null) return;
    const left = index * el.clientWidth;
    const instant = lbJustOpened.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    lbJustOpened.current = false;
    if (Math.abs(el.scrollLeft - left) < 2) return;
    lbTarget.current = instant ? null : index;
    el.scrollTo({ left, behavior: instant ? 'auto' : 'smooth' });
  }, [index]);

  const onSlidesScroll = () => {
    const el = lbSlidesRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    // Glissement lancé par le code : on ignore les positions intermédiaires jusqu'à l'arrivée
    if (lbTarget.current !== null) {
      if (i === lbTarget.current && Math.abs(el.scrollLeft - i * el.clientWidth) < 2) lbTarget.current = null;
      return;
    }
    setIndex((prev) => (prev === null || prev === i ? prev : i));
  };

  const lbThumbsRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const strip = lbThumbsRef.current;
    const thumb = index === null ? undefined : (strip?.children[index] as HTMLElement | undefined);
    if (!strip || !thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.offsetWidth / 2, behavior: 'smooth' });
    // Focus sur une miniature : il suit la photo affichée, pour n'avoir qu'une miniature en surbrillance
    if (strip.contains(document.activeElement)) thumb.querySelector('button')?.focus({ preventScroll: true });
  }, [index]);

  // Carrousel : une ligne, glisser à la souris + boutons précédent/suivant
  const trackRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const [dragging, setDragging] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });

  // Miniatures : photo active = première visible, ou celle choisie via une miniature
  const thumbsRef = useRef<HTMLUListElement>(null);
  const picked = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const card = trackRef.current?.querySelector('li');
    return card ? card.offsetWidth + 16 : 1;
  };

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  const onTrackScroll = () => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    const step = cardStep();
    const first = Math.round(el.scrollLeft / step);
    const visible = Math.max(1, Math.round(el.clientWidth / step));
    const p = picked.current;
    // Photo choisie en fin de liste : elle ne peut pas passer en premier, on la garde active
    if (p !== null && p >= first && p < first + visible) setActive(p);
    else if (p === null) setActive(Math.min(first, PHOTOS.length - 1));
  };

  const releasePick = () => {
    picked.current = null;
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    picked.current = i;
    setActive(i);
    el.scrollTo({ left: Math.min(i * cardStep(), el.scrollWidth - el.clientWidth), behavior: 'smooth' });
  };

  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.offsetWidth / 2, behavior: 'smooth' });
  }, [active]);

  const scrollByCard = (dir: 1 | -1) => {
    releasePick();
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    releasePick();
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { active: true, moved: false, startX: e.clientX, startScroll: e.currentTarget.scrollLeft };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.moved) e.currentTarget.scrollLeft = d.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };

  // Un glisser ne doit pas ouvrir la photo
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="realisations" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Un aperçu de nos dernières réalisations</SectionTitle>

        <div data-reveal className="relative mt-14">
          <ul
            ref={trackRef}
            onScroll={onTrackScroll}
            onWheel={releasePick}
            onTouchStart={releasePick}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
            className={`flex gap-4 overflow-x-auto [scrollbar-width:none] select-none [&::-webkit-scrollbar]:hidden ${dragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory scroll-smooth'}`}
          >
            {PHOTOS.map((photo, i) => (
              <li key={photo.src} className="w-[72%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]">
                <button
                  type="button"
                  onClick={() => open(i)}
                  className="group relative block aspect-[6/7] w-full cursor-[inherit] overflow-hidden bg-line focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-brand"
                  aria-label={`Agrandir : ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 72vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="object-cover transition duration-[1.2s] group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="flex w-full items-end justify-between gap-3 text-left text-sm font-semibold text-white">
                      {photo.alt}
                      <Icon name="expand" className="h-4 w-4 shrink-0" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={edges.start}
            aria-label="Réalisations précédentes"
            className="absolute top-1/2 left-0 flex h-12 w-12 -translate-x-1/3 -translate-y-1/2 items-center justify-center bg-ink text-white shadow-lg transition hover:bg-brand disabled:pointer-events-none disabled:opacity-0 sm:-translate-x-1/2"
          >
            <Icon name="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={edges.end}
            aria-label="Réalisations suivantes"
            className="absolute top-1/2 right-0 flex h-12 w-12 translate-x-1/3 -translate-y-1/2 items-center justify-center bg-ink text-white shadow-lg transition hover:bg-brand disabled:pointer-events-none disabled:opacity-0 sm:translate-x-1/2"
          >
            <Icon name="right" />
          </button>
        </div>

        <ul
          ref={thumbsRef}
          data-reveal
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          aria-label="Miniatures des réalisations"
          className="relative mt-6 flex gap-2 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PHOTOS.map((photo, i) => (
            <li key={photo.src} className="w-14 shrink-0 sm:w-16 lg:w-auto lg:flex-1">
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Afficher : ${photo.alt}`}
                aria-current={active === i}
                className={`relative block aspect-[6/7] w-full overflow-hidden rounded-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${active === i ? 'opacity-100 ring-2 ring-brand ring-offset-2 ring-offset-mist' : 'opacity-50 hover:opacity-100'}`}
              >
                <Image src={photo.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label="Photo de réalisation"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 open:flex open:items-center open:justify-center"
      >
        {current && (
          <figure className="flex w-full flex-col items-center px-4 sm:px-20">
            <ul
              ref={lbSlidesRef}
              onScroll={onSlidesScroll}
              className="flex h-[62dvh] w-full max-w-[680px] snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PHOTOS.map((photo, i) => (
                <li key={photo.src} className="relative h-full w-full shrink-0 snap-center" aria-hidden={index !== i}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="680px" className="object-contain" />
                </li>
              ))}
            </ul>
            <figcaption className="mt-4 text-center text-sm font-semibold text-white">
              {current.alt} <span className="text-white/60">· {index! + 1}/{PHOTOS.length}</span>
            </figcaption>
            <ul
              ref={lbThumbsRef}
              aria-label="Miniatures"
              className="mt-5 flex w-fit max-w-full gap-2 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PHOTOS.map((photo, i) => (
                <li key={photo.src} className="w-10 shrink-0 sm:w-12">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Afficher : ${photo.alt}`}
                    aria-current={index === i}
                    className={`relative block aspect-[6/7] w-full overflow-hidden rounded-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${index === i ? 'opacity-100 ring-2 ring-white ring-offset-2 ring-offset-ink' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <Image src={photo.src} alt="" fill sizes="48px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Photo précédente"
              className="absolute top-1/2 left-3 flex sm:left-6 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white ring-1 ring-white/20 hover:bg-white/20"
            >
              <Icon name="left" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Photo suivante"
              className="absolute top-1/2 right-3 flex sm:right-6 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white ring-1 ring-white/20 hover:bg-white/20"
            >
              <Icon name="right" />
            </button>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="absolute top-4 right-3 flex sm:right-6 h-11 w-11 items-center justify-center rounded-full bg-ink/60 text-white ring-1 ring-white/20 hover:bg-white/20"
            >
              <Icon name="close" />
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
