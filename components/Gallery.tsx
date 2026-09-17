'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: "/images/1.jpg", title: "Remplacement vitrage sur mesure" },
    { src: "/images/3.jpg", title: "Pose de menuiserie Aluminium & PVC" },
    { src: "/images/4.jpg", title: "Aménagement vitrine commerciale" },
    { src: "/images/CAP-Vertical.jpg", title: "Installation baie vitrée sur mesure" },
    { src: "/images/hero1.jpg", title: "Façade vitrée & isolation thermique" },
    { src: "/images/1.jpg", title: "Double vitrage phonique et thermique" }
  ];

  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section id="realisations" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-sm uppercase tracking-wider font-extrabold text-[#3567AF] mb-2">Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Aperçu de nos dernières réalisations
          </p>
        </div>

        {/* 3 Column Explicit Grid as required by WordPress-to-NextJS Skill */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModal(img.src)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="aspect-video relative w-full overflow-hidden bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-semibold text-sm">
                    {img.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <Image
                src={activeModal}
                alt="Aperçu agrandi"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setActiveModal(null)}
                className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-gray-300"
              >
                ✕ Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
