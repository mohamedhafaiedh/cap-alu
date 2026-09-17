'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    msg: string;
  }>({ type: 'idle', msg: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Envoi en cours...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus({
          type: 'success',
          msg: 'Merci ! Votre demande de devis a bien été envoyée. Un expert CapAlu vous recontactera sous 1h.'
        });
        setFormData({ name: '', email: '', phone: '', address: '', postalCode: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          msg: 'Une erreur s\'est produite. Veuillez réessayer ou nous appeler directement.'
        });
      }
    } catch {
      setStatus({
        type: 'error',
        msg: 'Erreur réseau. Veuillez vérifier votre connexion ou nous contacter par téléphone.'
      });
    }
  };

  return (
    <section id="devis" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Contactez-nous maintenant
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nos professionnels expérimentés sont à votre disposition 24h/24, 7j/7 pour répondre à tous vos besoins en vitrerie et menuiserie.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-[#3567AF] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 384 512">
                    <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase block">Téléphone Urgence 24/7</span>
                  <a href="tel:+33745046175" className="text-lg font-bold text-gray-900 hover:text-[#3567AF]">
                    +33 7 45 04 61 75
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-[#3567AF] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                    <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase block">E-mail</span>
                  <a href="mailto:contact@capalu.fr" className="text-lg font-bold text-gray-900 hover:text-[#3567AF]">
                    contact@capalu.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Demande de devis gratuit
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Remplissez le formulaire ci-dessous et un expert vous contactera dans un délai d'une heure.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3567AF] focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3567AF] focus:border-transparent outline-none transition-all text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre téléphone*"
                  aria-label="Votre téléphone*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3567AF] focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Votre adresse*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3567AF] focus:border-transparent outline-none transition-all text-sm"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Votre code postal*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3567AF] focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrire votre besoin"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3567AF] focus:border-transparent outline-none transition-all text-sm"
                ></textarea>
              </div>

              {status.msg && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : status.type === 'error'
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-blue-50 text-blue-800'
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-[#3567AF] hover:bg-[#2a528c] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base disabled:opacity-50"
              >
                {status.type === 'loading' ? 'Envoi en cours...' : "J'obtiens mon devis GRATUIT"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
