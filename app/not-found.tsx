import type { Metadata } from 'next';
import Link from 'next/link';
import { CallButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Page introuvable – CapAlu',
  robots: { index: false }
};

export default function NotFound() {
  return (
    <main className="legal-page bg-blueprint py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="m-rise text-sm font-extrabold tracking-[0.25em] text-brand">ERREUR 404</p>
        <h1
          className="m-rise-lcp mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl"
          style={{ '--rise-delay': '0.08s' } as React.CSSProperties}
        >
          Cette page est introuvable
        </h1>
        <div className="m-rise" style={{ '--rise-delay': '0.16s' } as React.CSSProperties}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
            Le lien que vous avez suivi est peut-être ancien ou erroné. Retrouvez nos services de vitrerie et de
            menuiserie depuis l&apos;accueil, ou appelez-nous directement.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border-2 border-ink px-6 py-3 text-base font-bold text-ink transition hover:bg-ink hover:text-white active:scale-[0.98]"
            >
              Retour à l&apos;accueil
            </Link>
            <CallButton />
          </div>
        </div>
      </div>
    </main>
  );
}
