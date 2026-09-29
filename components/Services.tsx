import { CallButton, FramedImage, SectionTitle } from './ui';

const SERVICES = [
  {
    title: 'Vitrerie & Miroiterie',
    image: '/images/cap-realisations-7.jpg',
    alt: 'Verrière de toiture en pente posée par CapAlu',
    // Photo en portrait : recadrée au format des deux autres, en gardant faîtage et vitrage
    crop: { ratio: '426 / 339', position: '50% 90%' },
    text: 'Nous concevons, fabriquons et installons des solutions en verre sur mesure pour apporter lumière, sécurité et élégance à vos espaces. De la pose de doubles vitrages performants aux parois de douche, garde-corps, crédences et miroirs décoratifs, nous intervenons avec précision et finitions haut de gamme. Conseils techniques, choix des traitements et teintes, prises de cotes millimétrées, intervention rapide en dépannage et remplacement de casse. Notre priorité : allier esthétique, confort thermique et acoustique, tout en respectant vos délais et votre budget.'
  },
  {
    title: 'Menuiserie Aluminium PVC - Métal - Bois',
    image: '/images/3.jpg',
    alt: 'Fenêtres à petits bois en menuiserie bois',
    text: 'Nous réalisons des menuiseries durables et performantes, adaptées à votre style et aux contraintes du site. Fenêtres, portes, baies coulissantes, verrières, portails et clôtures : chaque matériau est choisi pour ses atouts. Aluminium pour la finesse et la longévité, PVC pour l’isolation et l’entretien, bois pour la chaleur et l’authenticité, acier pour la robustesse et le design. Étanchéité, sécurité, quincailleries fiables, motorisations et normes en vigueur : nous garantissons des ouvrages sur mesure, esthétiques et faciles à vivre.'
  },
  {
    title: 'Vitrines et Façades Commerciales',
    image: '/images/4.jpg',
    alt: 'Devanture de boutique parisienne avec vitrine',
    text: 'Nous accompagnons marques et commerces pour créer des vitrines qui attirent le regard et des façades qui renforcent l’identité. Études techniques, respect des contraintes ERP, sécurité renforcée, contrôle solaire, intégration d’enseignes, éclairages et portes automatiques. Verres feuilletés, anti-effraction, sérigraphies et films vous offrent visibilité, protection et confort. Fabrication sur mesure, montage soigné, coordination de chantier et interventions rapides en maintenance. Objectif : optimiser l’expérience client, la performance énergétique et l’image de votre point de vente.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Nos services</SectionTitle>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={service.title} className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div data-reveal className={`mx-auto w-full max-w-[460px] px-5 lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
                  <FramedImage
                    src={service.image}
                    alt={service.alt}
                    width={426}
                    height={339}
                    sizes="(max-width: 1024px) 90vw, 440px"
                    flip={reversed}
                    crop={'crop' in service ? service.crop : undefined}
                  />
                </div>
                <div
                  data-reveal
                  style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
                  className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}
                >
                  <span className="text-sm font-extrabold tracking-[0.25em] text-brand">0{i + 1}</span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{service.title}</h3>
                  <div className="mt-5 h-0.5 w-12 bg-ink" />
                  <p className="mt-6 text-base leading-relaxed text-steel sm:text-[17px]">{service.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div data-reveal className="mt-20 flex justify-center">
          <CallButton />
        </div>
      </div>
    </section>
  );
}
