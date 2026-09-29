'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/* Année courante : `serverYear` (calculée au rendu serveur) pour l'hydratation, puis l'année du navigateur,
   le site étant pré-généré au build */
export default function CurrentYear({ serverYear }: { serverYear: number }) {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => serverYear);
  return <>{year}</>;
}
