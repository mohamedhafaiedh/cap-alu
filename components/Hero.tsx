import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50/60 to-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm text-sm">
              <span className="font-semibold text-gray-800">Noté 4.7/5 sur Google</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Votre <span className="text-[#3567AF]">vitrier et menuisier</span> à Paris et en Île-de-France
            </h1>

            {/* Benefit List */}
            <ul className="space-y-3 pt-2 text-gray-700 font-medium">
              {[
                "Disponibilité 24h/24 et 7j/7",
                "Intervention sur toute l'IDF",
                "Intervention en urgence ou sur RDV",
                "Équipe d'experts de +15 ans d'expérience"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#3567AF] flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33745046175"
                className="inline-flex items-center justify-center gap-3 bg-[#3567AF] hover:bg-[#2a528c] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
                  <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422z"/>
                </svg>
                J'appelle le +33 7 45 04 61 75
              </a>

              <a
                href="#devis"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold text-base px-6 py-3.5 rounded-xl transition-all"
              >
                J'obtiens mon devis GRATUIT
              </a>
            </div>

          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero1.jpg"
                alt="CapAlu Vitrier et Menuisier"
                width={450}
                height={387}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
