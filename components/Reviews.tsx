import React from 'react';

export default function Reviews() {
  const reviews = [
    {
      author: "Didier D.",
      rating: 5,
      comment: "Chantier pas facile, mais l'équipe a veillé à toujours être très réactive rapidement pour résoudre les problèmes qui ont pu survenir. Entreprise sérieuse, très bon contact."
    },
    {
      author: "Dan V.",
      rating: 5,
      comment: "L'intervention s'est déroulée parfaitement et rapidement. Une équipe de vrais professionnels à l'écoute et très efficaces."
    },
    {
      author: "Rémi",
      rating: 5,
      comment: "Parfaitement satisfait. Dispo rapidement, coût dans la moyenne basse des autres artisans, travail ultra propre et qualitatif. Merci encore !"
    }
  ];

  return (
    <section id="avis" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-wider text-[#3567AF] block mb-2">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            98% de nos clients sont satisfaits et ils nous le font savoir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200 mt-6">
                <span className="font-bold text-gray-900 block">{rev.author}</span>
                <span className="text-xs text-gray-500">Client vérifié Google</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
