VAULT V27 AUTH FIX

Root cause of Google OAuth error:
- VAULT was configured with Supabase detectSessionInUrl: true while auth-callback.html also manually called exchangeCodeForSession(code).
- PKCE authorization codes are one-time use, so automatic URL detection could consume the code before the manual exchange, causing the callback error shown as 'Unable to exchange external code: 4/0A'.

Fix:
- Set detectSessionInUrl: false in vault-auth.js.
- Keep explicit code/hash handling in auth-callback.html and login.html.
- This makes the callback the single owner of the one-time OAuth code exchange.

Supabase PKCE codes are valid for a short period and can only be exchanged once.
