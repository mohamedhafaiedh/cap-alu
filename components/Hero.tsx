import { CallButton, FramedImage, Icon, QuoteButton } from './ui';

const POINTS = [
  'Disponibilité 24h/24 et 7j/7',
  "Intervention sur toute l'IDF",
  'Intervention en urgence ou sur RDV',
  "Équipe d'experts de +15 ans d'expérience"
];

export default function Hero() {
  return (
    <section className="bg-blueprint overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:px-8">
        <div className="m-rise-group lg:col-span-7">
          <h1 className="m-rise-lcp text-4xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Votre <span className="text-brand">vitrier et menuisier</span> à Paris et en Île-de-France
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            Fenêtres, portes, vitrines et façades vitrées : nous fabriquons et installons vos vitrages et menuiseries
            aluminium, PVC, bois et métal sur mesure, avec devis gratuit.
          </p>

          <ul className="mt-7 grid w-fit gap-x-10 gap-y-2.5 sm:grid-cols-[auto_auto]">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <Icon name="check" className="h-4 w-4 shrink-0 text-brand" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>

        <div className="m-rise mx-auto w-full max-w-[400px] px-5 lg:col-span-5" style={{ '--rise-delay': '0.2s' } as React.CSSProperties}>
          <FramedImage
            src="/images/cap-realisations-14.jpg"
            alt="Baie vitrée aluminium posée par CapAlu, donnant sur un jardin"
            width={600}
            height={700}
            sizes="(max-width: 1024px) 90vw, 400px"
            preload
          />
        </div>
      </div>
    </section>
  );
}
