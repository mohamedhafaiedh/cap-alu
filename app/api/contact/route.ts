import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, postalCode, message } = body;

    if (!name || !email || !phone || !address || !postalCode) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    console.log('--- NOUVELLE DEMANDE DE DEVIS CAPALU ---');
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Téléphone: ${phone}`);
    console.log(`Adresse: ${address} (${postalCode})`);
    console.log(`Message: ${message || 'Aucun message'}`);
    console.log('----------------------------------------');

    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande de devis a été enregistrée avec succès. Un expert CapAlu vous recontactera très rapidement.'
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Erreur API Contact:', err);
    return NextResponse.json(
      { error: 'Une erreur interne est survenue.' },
      { status: 500 }
    );
  }
}
