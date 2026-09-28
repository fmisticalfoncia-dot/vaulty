# VAULT V21 — Email + Google + Newsletter setup

V21 is cumulative from V15 through V20. It adds:
- Resend confirmation-email retry UI
- Password reset/change-password flow
- Google OAuth UI and provider error handling
- Newsletter signup stored in Supabase

## 1. Email confirmation errors
Supabase's built-in email service is rate-limited and is not intended for production. Custom SMTP is recommended. For Resend SMTP use:
- Host: smtp.resend.com
- Port: 465
- Username: resend
- Password: your Resend API key
- Sender email: an address on a Resend-verified domain

Check Supabase Auth logs if confirmation emails fail. If Resend's domain/sender is not verified or SMTP credentials are wrong, the site cannot fix that from frontend code.

## 2. Google sign-in
In Supabase: Authentication -> Providers -> Google -> enable it.
Create a Web OAuth client in Google Cloud. Put your VAULT production origin in Authorized JavaScript origins. Put the exact Supabase callback URL shown on the Google provider page into Google's Authorized redirect URIs. Paste the Client ID and Client Secret into Supabase only. Never put the client secret in this site.

Production site URL:
Set this to the V21 production URL after deployment.

Suggested general redirect URL:
<YOUR_V21_PRODUCTION_URL>/**

## 3. Password reset
VAULT sends reset requests to:
<YOUR_V21_PRODUCTION_URL>/login.html?reset=1
This URL must be allowed in Supabase Redirect URLs. The user clicks the email link, returns to VAULT, enters a new password, and VAULT calls Supabase updateUser({ password }).

## 4. Newsletter
Run V21_DATABASE_UPDATES.sql in Supabase once. The homepage newsletter form then inserts the email into newsletter_subscribers.
The website does not expose subscriber emails.
For bulk/update emails, use Resend server-side (e.g. Supabase Edge Function) so the Resend API key never enters browser code. Only email addresses that explicitly opted in should receive updates.
