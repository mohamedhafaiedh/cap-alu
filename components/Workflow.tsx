import React from 'react';
import Image from 'next/image';

export default function Workflow() {
  const steps = [
    {
      num: "1",
      title: "Contact",
      desc: "Téléphone, e-mail ou formulaire de devis en ligne.",
      icon: "/images/contact.png"
    },
    {
      num: "2",
      title: "Estimation GRATUITE",
      desc: "Notre expert vous fournit une première estimation adaptée à votre besoin.",
      icon: "/images/euro.png"
    },
    {
      num: "3",
      title: "Visite chantier & Devis",
      desc: "Visite technique sur place et devis définitif sans aucun frais caché.",
      icon: "/images/validation.png"
    },
    {
      num: "4",
      title: "Réalisation des travaux",
      desc: "Intervention soignée et rapide par notre équipe de professionnels.",
      icon: "/images/intervention.png"
    }
  ];

  return (
    <section className="py-16 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Déroulement de notre prestation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center p-3">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={48}
                  height={48}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                {step.num}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
