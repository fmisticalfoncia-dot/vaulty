VAULT V21 — FINAL DEPLOY-READY

Cumulative baseline: V15 → V16 → V17 → V18 → V19 → V20 → V21.

V21 includes:
- Supabase email/password authentication
- Email confirmation + resend confirmation UI
- Forgot password + new password flow
- Google OAuth UI + provider handoff
- Protected Library session gate
- Supabase profiles, saved looks, activity, newsletter subscribers
- Library click/tap fixes for desktop and mobile
- Updates / changelog page
- Dynamic auth redirect URLs based on the current site origin

DEPLOY
1. Deploy this folder to Vercel as the production site.
2. After Vercel gives the V21 production URL, set Supabase:
   Authentication → URL Configuration → Site URL = the V21 production URL
   Add Redirect URL = V21 production URL + /**
   Also allow V21 production URL + /login.html?reset=1
3. Then configure Google OAuth:
   Google Authorized JavaScript origin = V21 production origin
   Google Authorized redirect URI = https://zgnqkqyhxmgixleyuisj.supabase.co/auth/v1/callback
4. In Supabase Authentication → Providers → Google, paste the Google Client ID and Client Secret.
5. For email delivery, keep Custom SMTP in Supabase using your Resend SMTP credentials.

SECURITY
- Never place Google Client Secret, Resend API key, SMTP password, database password, or Supabase service-role/secret keys in frontend files.
- The frontend only contains the Supabase publishable key.
