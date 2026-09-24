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

    const encode = (data: Record<string, string>) =>
      Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'devis',
          subject: 'Nouvelle demande de devis',
          ...formData
        })
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
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase block">WhatsApp</span>
                  <a href="https://wa.me/33745046175" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 hover:text-[#3567AF]">
                    +33 7 45 04 61 75
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

            <form
              name="devis"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="devis" />
              <input type="hidden" name="subject" value="Nouvelle demande de devis" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>Ne pas remplir : <input name="bot-field" /></label>
              </p>
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
                className="w-full bg-[#3567AF] hover:bg-[#275291] text-white font-bold py-3.5 px-6 rounded-md transition-colors text-base disabled:opacity-50"
                style={{ transform: 'none', boxShadow: 'none' }}
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
