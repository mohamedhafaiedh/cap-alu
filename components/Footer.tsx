import Image from 'next/image';
import Link from 'next/link';
import CurrentYear from './CurrentYear';
import HomeLink from './HomeLink';
import { Icon, type IconName, NAV_LINKS } from './ui';

function InfoBlock({ icon, label, children }: { icon: IconName; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
        <Icon name={icon} />
      </span>
      <div>
        <p className="text-[11px] font-bold tracking-[0.2em] text-steel uppercase">{label}</p>
        <div className="mt-1 text-sm text-ink min-[360px]:whitespace-nowrap sm:text-[15px]">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Ligne d'infos : adresse puis horaires. Filet du haut masqué sous la page mentions légales */}
        <div className="border-y border-line py-7 in-[.legal-page+footer]:border-t-0">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <InfoBlock icon="pin" label="Adresse">
              <p className="font-semibold">44 rue Rébéval, 75019 Paris</p>
            </InfoBlock>
            <InfoBlock icon="clock" label="Horaires">
              <p className="flex flex-col gap-0.5 lg:flex-row lg:items-center lg:gap-3">
                <span>
                  <span className="text-steel">Interventions et devis :</span>{' '}
                  <strong className="font-semibold whitespace-nowrap">Lun-ven 8h-20h</strong>
                </span>
                <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-steel/40 lg:block" />
                <span>
                  <span className="text-steel">Urgences :</span> <strong className="font-semibold">24/7</strong>
                </span>
              </p>
            </InfoBlock>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <HomeLink className="shrink-0">
              <Image src="/images/logo-capalu.png" alt="CapAlu" width={391} height={326} className="h-24 w-auto" />
            </HomeLink>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft sm:border-l sm:border-line sm:pl-8">
              Spécialiste de la vitrerie et de la menuiserie aluminium, PVC, bois et métal sur mesure, à Paris et en
              Île-de-France.
            </p>
          </div>

          <nav aria-label="Plan du site">
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="m-underline text-sm font-semibold text-ink-soft transition hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-line py-5 text-xs text-steel sm:flex-row sm:items-center">
          <p>
            <CurrentYear serverYear={new Date().getFullYear()} /> © CapAlu.
          </p>
          <Link href="/mentions-legales" className="m-underline font-semibold transition hover:text-brand">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
