'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeLink from './HomeLink';
import { Icon, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from './ui';

const EXIT_FALLBACK_MS = 600;

// Bloque le défilement de la page ; la largeur de la barre disparue est compensée pour éviter tout saut
function lockScroll() {
  const html = document.documentElement;
  const scrollbar = window.innerWidth - html.clientWidth;
  html.style.overflow = 'hidden';
  if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
}

function unlockScroll() {
  const html = document.documentElement;
  html.style.overflow = '';
  html.style.paddingRight = '';
}

/* Panneau latéral pleine hauteur (mobile/tablette), ouvert depuis la droite.
   <dialog> modal : focus gardé dans le panneau, page inactive derrière, Échap pour fermer.
   La croix est posée exactement sur le bouton menu de l'en-tête et s'anime depuis la forme burger. */
export default function MobileMenu({
  open,
  onClose,
  anchorRef
}: {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const [morph, setMorph] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  // Chaque ouverture/fermeture a son numéro : une fin de fermeture périmée n'agit plus
  const cycle = useRef(0);

  const requestClose = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closing) return;
    setMorph(false);
    setClosing(true);
    unlockScroll();
    // Le bouton de l'en-tête (caché sous la croix, même place) redevient burger pendant la sortie,
    // en même temps que la croix : rien ne s'anime plus une fois le panneau parti
    onClose();
    const token = ++cycle.current;
    const finish = () => {
      if (token !== cycle.current || !dialog.open) return;
      dialog.close();
      setClosing(false);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return finish();
    // On ne ferme qu'une fois le panneau entièrement sorti (fin réelle de la transition)
    const drawer = dialog.querySelector<HTMLElement>('.m-drawer');
    const onEnd = (e: TransitionEvent) => {
      if (e.target !== drawer || e.propertyName !== 'transform') return;
      drawer?.removeEventListener('transitionend', onEnd);
      finish();
    };
    drawer?.addEventListener('transitionend', onEnd);
    window.setTimeout(finish, EXIT_FALLBACK_MS);
  }, [closing, onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog || dialog.open) return;
    const rect = anchorRef.current?.getBoundingClientRect();
    if (rect) setPos({ top: rect.top, left: rect.left });
    cycle.current += 1;
    dialog.showModal();
    lockScroll();
    const frame = requestAnimationFrame(() => setMorph(true));
    return () => cancelAnimationFrame(frame);
  }, [open, anchorRef]);

  // Passage en affichage ordinateur (menu horizontal) : on referme
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && requestClose();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [open, requestClose]);

  return (
    <dialog
      ref={dialogRef}
      id="menu-mobile"
      aria-label="Menu"
      data-closing={closing || undefined}
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-transparent"
    >
      <div aria-hidden="true" onClick={requestClose} className="m-overlay absolute inset-0 bg-ink/50" />

      <div className="m-drawer absolute inset-y-0 right-0 flex w-[90%] max-w-[380px] min-[360px]:w-[85%] flex-col bg-white shadow-2xl">
        <div className="flex h-[72px] shrink-0 items-center border-b border-line px-5">
          <HomeLink onNavigate={requestClose} className="shrink-0">
            <Image src="/images/logo-capalu.png" alt="CapAlu" width={391} height={326} className="h-12 w-auto" />
          </HomeLink>
        </div>

        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="m-drop-group">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={requestClose}
                  className="group flex items-center justify-between rounded-md px-3 py-3.5 text-xl font-bold text-ink transition hover:bg-mist hover:text-brand"
                >
                  {link.label}
                  <Icon name="right" className="h-5 w-5 text-steel transition group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-line p-5">
          <div className="pb-2">
            <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-steel uppercase">
              <Icon name="clock" className="h-4 w-4 text-brand" />
              Horaires
            </p>
            <dl className="mt-2 divide-y divide-line text-xs min-[360px]:text-[13px] min-[390px]:text-sm">
              <div className="flex items-center justify-between gap-3 py-2">
                <dt className="text-steel">Interventions et devis</dt>
                <dd className="font-bold whitespace-nowrap text-ink">Lun-ven 8h-20h</dd>
              </div>
              <div className="flex items-center justify-between gap-3 py-2">
                <dt className="text-steel">Urgences</dt>
                <dd className="font-bold whitespace-nowrap text-ink">24h/24, 7j/7</dd>
              </div>
            </dl>
          </div>
          <a
            href={PHONE_HREF}
            aria-label={`Appeler le ${PHONE_DISPLAY}`}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-brand px-4 py-3.5 text-base font-bold whitespace-nowrap text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark active:scale-[0.98]"
          >
            <Icon name="phone" className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/#devis"
            onClick={requestClose}
            className="flex w-full items-center justify-center rounded-md border-2 border-brand px-3 py-3 text-[13px] font-bold whitespace-nowrap text-brand min-[360px]:px-4 min-[360px]:text-base transition hover:bg-brand hover:text-white active:scale-[0.98]"
          >
            J&apos;obtiens mon devis GRATUIT
          </Link>
        </div>
      </div>

      {/* Croix posée sur le bouton menu de l'en-tête (même place, même style) */}
      <button
        type="button"
        autoFocus
        onClick={requestClose}
        aria-label="Fermer le menu"
        aria-expanded={morph}
        style={pos ? { top: pos.top, left: pos.left } : { top: 14, right: 16 }}
        className="m-burger fixed z-10 inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-brand/40 hover:bg-mist hover:text-brand"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </dialog>
  );
}
