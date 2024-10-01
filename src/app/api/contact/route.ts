// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const sendGridApiKey = process.env.SENDGRID_API_KEY;

  const body = JSON.stringify({
    personalizations: [
      {
        to: [{ email: 'umendran6@gmail.com' }], // Fixed recipient (your email)
        subject: subject,
      },
    ],
    from: { email: email, name: name }, // Sender's email and name from the form
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      },
    ],
  });

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sendGridApiKey}`,
      },
      body,
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorResult = await response.json();
      return NextResponse.json(
        { success: false, error: errorResult },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
