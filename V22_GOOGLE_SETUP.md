# VAULT V22 Google Login Setup

Google OAuth is wired in `vault-auth.js`.

Use the production site URL as the Google Authorized JavaScript Origin.
Use the Supabase callback as the Authorized Redirect URI:

https://zgnqkqyhxmgixleyuisj.supabase.co/auth/v1/callback

Then enable Google under Supabase Authentication Providers and paste the Google Client ID and Client Secret there. Never place the Client Secret in the frontend.
