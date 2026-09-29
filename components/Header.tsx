'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeLink from './HomeLink';
import MobileMenu from './MobileMenu';
import { Icon, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from './ui';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-[0_1px_0_var(--color-line),0_8px_24px_rgb(14_23_38/0.06)]' : 'shadow-[0_1px_0_var(--color-line)]'}`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <HomeLink onNavigate={() => setOpen(false)} className="shrink-0">
          <Image src="/images/logo-capalu.png" alt="CapAlu" width={391} height={326} preload className="h-12 w-auto sm:h-14" />
        </HomeLink>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="m-underline text-sm font-semibold text-ink-soft transition hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Priorité en largeur réduite : le bouton d'appel garde son numéro, le devis part en premier */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            aria-label={`Appeler le ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2.5 text-sm font-bold whitespace-nowrap text-white transition hover:bg-brand-dark active:scale-[0.98] sm:px-4"
          >
            <Icon name="phone" className="hidden h-4 w-4 min-[360px]:block" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/#devis"
            className="hidden rounded-md border-2 border-brand px-4 py-2 text-sm font-bold whitespace-nowrap text-brand transition hover:bg-brand hover:text-white active:scale-[0.98] xl:inline-flex"
          >
            J&apos;obtiens mon devis GRATUIT
          </Link>
          <button
            ref={burgerRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="m-burger inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition hover:border-brand/40 hover:bg-mist hover:text-brand lg:hidden"
          >
            {/* Deux traits qui pivotent en croix, pilotés par aria-expanded */}
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={closeMenu} anchorRef={burgerRef} />
    </header>
  );
}
