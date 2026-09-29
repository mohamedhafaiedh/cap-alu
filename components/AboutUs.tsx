import { CallButton, FramedImage, SectionTitle } from './ui';

const STATS = [
  { value: '+1000', label: 'projets et interventions réalisés' },
  { value: '+900', label: 'clients satisfaits' }
];

export default function AboutUs() {
  return (
    <section id="a-propos" className="bg-mist py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div data-reveal className="mx-auto w-full max-w-[380px] px-5 lg:col-span-5">
          <FramedImage
            src="/images/CAP-Vertical.jpg"
            alt="Chantier CapAlu en façade d'immeuble à Paris, vue sur la tour Eiffel"
            width={800}
            height={1200}
            sizes="(max-width: 1024px) 80vw, 380px"
          />
        </div>

        <div className="lg:col-span-7">
          <SectionTitle align="left">CapAlu, votre choix de confiance</SectionTitle>

          <div data-reveal className="mt-6 space-y-4 text-base leading-relaxed text-steel sm:text-[17px]">
            <p>CapAlu est une entreprise spécialisée dans les travaux de vitrerie et de menuiserie en Île-de-France.</p>
            <p>
              Experts en fabrication et installation, nous réalisons avec précision et rapidité vos projets de fenêtres,
              portes, façades vitrées, vérandas et aménagements sur mesure. Notre équipe qualifiée maîtrise parfaitement
              les techniques modernes de vitrerie et de menuiserie (aluminium – PVC – métallique – bois), garantissant des
              réalisations esthétiques, solides et durables.
            </p>
            <p className="font-semibold text-ink-soft">
              Notre objectif : vous offrir des solutions élégantes, fiables et adaptées à vos besoins, tout en assurant
              confort, sécurité et isolation optimale.
            </p>
          </div>

          <dl data-reveal-stagger className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} data-reveal className="border-l-4 border-brand bg-white px-5 py-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-extrabold tracking-tight text-ink">{stat.value}</span>
                  <span className="mt-1 block text-sm font-semibold text-steel">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="mt-10">
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
}
