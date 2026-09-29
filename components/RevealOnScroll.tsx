'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Apparition au défilement des éléments [data-reveal] (voir motion.css).
// - Sans JavaScript ou avec « réduire les animations » : tout reste visible.
// - Relancé à chaque changement de page (navigation interne Next.js).
// - [data-reveal-stagger] sur un parent : ses [data-reveal] apparaissent en cascade.
// - L'attribut est retiré une fois l'animation finie : l'élément retrouve ses propres transitions.
const STAGGER_MS = 80;
const STAGGER_MAX = 4;

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    for (const group of document.querySelectorAll<HTMLElement>('[data-reveal-stagger]')) {
      group.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => {
        if (!el.style.getPropertyValue('--reveal-delay')) {
          el.style.setProperty('--reveal-delay', `${Math.min(i, STAGGER_MAX) * STAGGER_MS}ms`);
        }
      });
    }

    const release = (el: HTMLElement) => {
      el.removeAttribute('data-reveal');
      el.classList.remove('is-visible');
      el.style.removeProperty('--reveal-delay');
    };

    const show = (el: HTMLElement) => {
      el.classList.add('is-visible');
      const delay = parseFloat(el.style.getPropertyValue('--reveal-delay')) || 0;
      window.setTimeout(() => release(el), 1100 + delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          show(entry.target as HTMLElement);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')) {
      // Déjà à l'écran au chargement : on l'anime tout de suite, sans attendre l'observateur
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) show(el);
      else observer.observe(el);
    }

    document.documentElement.classList.add('reveal-ready');
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
