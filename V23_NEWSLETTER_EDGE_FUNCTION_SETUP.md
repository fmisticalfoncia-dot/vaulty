# VAULT V23 — Secure Newsletter Sending

V23 includes a server-side Supabase Edge Function template at:

`supabase/functions/send-newsletter/index.ts`

The function is intentionally **not deployed automatically**. It keeps the Resend API key off the browser and sends only to addresses stored in `newsletter_subscribers`.

## Production secrets to create in Supabase Edge Function Secrets

- `RESEND_API_KEY` — your Resend API key
- `VAULT_FROM_EMAIL` — a sender address on your Resend-verified domain
- `NEWSLETTER_ADMIN_TOKEN` — a long random admin-only token used to authorize newsletter sends
- `SUPABASE_SECRET_KEY` — your Supabase secret key (or use the legacy `SUPABASE_SERVICE_ROLE_KEY` if your project still exposes that variable)

Never commit these values into this ZIP or frontend JavaScript. Supabase documents Edge Function secrets as the place for sensitive credentials. See the official Supabase secrets documentation.

## After deployment

The function endpoint will be:

`https://zgnqkqyhxmgixleyuisj.supabase.co/functions/v1/send-newsletter`

Send a POST with:

```json
{
  "subject": "New inside VAULT™",
  "html": "<h1>New looks are here.</h1><p>We just added...</p>"
}
```

and an authorization header:

`Authorization: Bearer YOUR_NEWSLETTER_ADMIN_TOKEN`

The function reads opted-in emails from `newsletter_subscribers` and sends each message through Resend.

## Important

This is a secure server-side pattern, but it is still an operational tool: rate limits, unsubscribe handling, bounce/complaint handling, and batch sending should be added before large-volume campaigns.
