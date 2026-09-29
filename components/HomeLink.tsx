'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* Lien vers l'accueil ; si on y est déjà, remonte en haut de page au lieu de ne rien faire */
export default function HomeLink({
  children,
  className,
  onNavigate
}: {
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const onClick = (e: React.MouseEvent) => {
    onNavigate?.();
    if (pathname !== '/') return;
    e.preventDefault();
    window.history.replaceState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link href="/" onClick={onClick} aria-label="CapAlu, retour à l'accueil" className={className}>
      {children}
    </Link>
  );
}
