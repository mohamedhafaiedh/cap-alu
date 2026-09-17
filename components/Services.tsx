import React from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Vitrerie & Miroiterie",
      description: "Installation et remplacement sur mesure de vitrages, double et triple vitrage, verre feuilleté et miroiterie d'art.",
      image: "/images/1.jpg"
    },
    {
      title: "Menuiserie Aluminium, PVC, Métal & Bois",
      description: "Conception et pose de fenêtres, portes, baies coulissantes, verrières et portails sur mesure garantissant sécurité et isolation.",
      image: "/images/3.jpg"
    },
    {
      title: "Vitrines & Façades Commerciales",
      description: "Aménagement sur mesure de devantures de magasins, verres anti-effraction, contrôle solaire et portes automatiques pour commerces.",
      image: "/images/4.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider font-extrabold text-[#3567AF] mb-2">Nos Prestations</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Des services de menuiserie et vitrerie sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3567AF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6">
                  <a
                    href="tel:+33745046175"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3567AF] hover:text-[#2a528c]"
                  >
                    Demander un conseil
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
