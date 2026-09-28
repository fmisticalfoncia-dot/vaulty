V24 Google Callback Fix

Problem fixed:
- Google authorization succeeds but the browser can remain on/return to login without a reliable handoff into VAULT.

V24 changes:
- Added auth-callback.html.
- Google sign-in now redirects to /auth-callback.html after Supabase completes OAuth.
- Callback explicitly exchanges the Supabase PKCE authorization code with exchangeCodeForSession().
- Callback syncs the user's profile and then sends the user to Library when the original flow came from Enter the Vault, otherwise Home.
- Added a clear error screen instead of a blank/unclear page.

Supabase URL Configuration:
- Site URL: https://vault-swart-nu.vercel.app
- Redirect URL: https://vault-swart-nu.vercel.app/**

Google Cloud OAuth Client:
- Authorized JavaScript origin: https://vault-swart-nu.vercel.app
- Authorized redirect URI: https://zgnqkqyhxmgixleyuisj.supabase.co/auth/v1/callback

Do not put private Google client secrets in frontend files.
