'use client';

import Link from 'next/link';
import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const FIELDS = [
  { name: 'name', label: 'Votre nom complet*', type: 'text', placeholder: 'Ex : Martin Dupont', autoComplete: 'name', full: true },
  { name: 'email', label: 'Votre email*', type: 'email', placeholder: 'Ex : contact@exemple.fr', autoComplete: 'email' },
  { name: 'phone', label: 'Votre téléphone*', type: 'tel', placeholder: 'Ex : 06 12 34 56 78', autoComplete: 'tel' },
  { name: 'address', label: 'Votre adresse*', type: 'text', placeholder: 'Ex : 12 Avenue des Champs-Élysées', autoComplete: 'street-address' },
  { name: 'postalCode', label: 'Votre code postal*', type: 'text', placeholder: 'Ex : 75008', autoComplete: 'postal-code' }
];

// Libellé centré dans le champ ; au focus (ou une fois rempli) il remonte en haut et laisse voir l'exemple
const inputClass =
  'peer block w-full rounded-md border-[1.5px] border-line bg-white px-4 text-[15px] text-ink transition placeholder:text-transparent hover:border-steel/40 focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none focus:placeholder:text-steel/60';

const labelClass =
  'pointer-events-none absolute left-4 max-w-[calc(100%-2rem)] truncate text-[15px] text-steel transition-all duration-200 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-autofill:top-2 peer-autofill:translate-y-0 peer-autofill:text-[11px]';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  // Netlify Forms : le formulaire est déclaré statiquement dans public/form.html
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form name="devis" method="POST" onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="form-name" value="devis" />
      <input type="hidden" name="subject" value="Nouvelle demande de devis" />
      <p className="hidden">
        <label>
          Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {FIELDS.map((field) => (
        <div key={field.name} className={`relative ${field.full ? 'sm:col-span-2' : ''}`}>
          <input
            id={`field-${field.name}`}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
            className={`${inputClass} h-14 pt-5 pb-1`}
          />
          <label htmlFor={`field-${field.name}`} className={`${labelClass} top-1/2 -translate-y-1/2`}>
            {field.label}
          </label>
        </div>
      ))}

      <div className="relative sm:col-span-2">
        <textarea
          id="field-message"
          name="message"
          rows={4}
          placeholder="Ex : Remplacement d'un double vitrage cassé..."
          className={`${inputClass} resize-y pt-7 pb-3`}
        />
        <label htmlFor="field-message" className={`${labelClass} top-4`}>
          Décrivez votre besoin (travaux, dimensions, urgence...)
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-md bg-brand px-6 py-4 text-base font-bold text-white transition hover:bg-brand-dark disabled:opacity-70 sm:col-span-2"
      >
        {status === 'sending' ? 'Envoi en cours...' : "J'obtiens mon devis GRATUIT"}
      </button>

      <p className="text-xs leading-relaxed text-steel sm:col-span-2">
        Vos informations servent uniquement à traiter votre demande de devis et ne sont jamais transmises à des tiers.{' '}
        <Link href="/mentions-legales" className="underline underline-offset-2 hover:text-brand">
          En savoir plus
        </Link>
      </p>

      <div aria-live="polite" className="sm:col-span-2">
        {status === 'success' && (
          <p className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
            Merci ! Votre demande de devis a bien été envoyée. Un expert CapAlu vous recontactera sous 1h.
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
            Erreur lors de l&apos;envoi. Veuillez réessayer ou nous contacter par téléphone.
          </p>
        )}
      </div>
    </form>
  );
}
