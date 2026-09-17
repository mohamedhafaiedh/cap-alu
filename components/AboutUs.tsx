import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/CAP-Vertical.jpg"
                alt="CapAlu Réalisations Sur Mesure"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-extrabold uppercase tracking-wider text-[#3567AF]">À Propos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              CapAlu, votre choix de confiance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              CapAlu est une entreprise spécialisée dans les travaux de vitrerie et de menuiserie en Île-de-France.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Experts en fabrication et installation, nous réalisons avec précision et rapidité vos projets de fenêtres, portes, façades vitrées, vérandas et aménagements sur mesure. Notre équipe qualifiée maîtrise parfaitement les techniques modernes de vitrerie et de menuiserie (aluminium – PVC – métallique – bois), garantissant des réalisations esthétiques, solides et durables.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Notre objectif : vous offrir des solutions élégantes, fiables et adaptées à vos besoins, tout en assurant confort, sécurité et isolation optimale.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 font-semibold text-gray-900">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#3567AF] flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                +1000 projets et interventions réalisés
              </li>
              <li className="flex items-center gap-3 font-semibold text-gray-900">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-[#3567AF] flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                +900 clients satisfaits en Île-de-France
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="tel:+33745046175"
                className="inline-flex items-center justify-center bg-[#3567AF] hover:bg-[#2a528c] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm"
              >
                J'appelle le +33 7 45 04 61 75
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
