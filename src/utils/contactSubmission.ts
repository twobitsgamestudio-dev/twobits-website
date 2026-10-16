/**
 * ─────────────────────────────────────────────────────────────
 * CONTACT FORM CONFIGURATION — the only place to wire up sending.
 * ─────────────────────────────────────────────────────────────
 *
 * Set CONTACT_FORM_ENDPOINT to a URL that accepts a JSON POST, for example
 * a Formspree / Basin form endpoint or your own serverless function.
 *
 *   Request:  POST <endpoint>
 *             Content-Type: application/json
 *             { "name": string, "email": string, "subject": string, "message": string }
 *   Success:  any 2xx response.
 *
 * While the value is null the form still validates, but on submit it tells
 * visitors honestly that messages can't be sent yet — it never shows a
 * success state without a real successful request.
 */
export const CONTACT_FORM_ENDPOINT: string | null = null;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactNotConfiguredError extends Error {
  constructor() {
    super('Contact form endpoint is not configured.');
    this.name = 'ContactNotConfiguredError';
  }
}

export async function submitContactMessage(payload: ContactPayload): Promise<void> {
  if (!CONTACT_FORM_ENDPOINT) {
    throw new ContactNotConfiguredError();
  }

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}`);
  }
}