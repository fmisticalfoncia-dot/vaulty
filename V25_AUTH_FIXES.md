VAULT V25 AUTH FIXES

- Forces Supabase browser auth client to use PKCE for OAuth/recovery flows.
- Google callback now accepts both PKCE ?code= and legacy/implicit hash token responses.
- Google callback retries session lookup once before showing an error.
- Email confirmation links with code/hash responses are consumed by login.html.
- Password recovery links with code/hash responses reliably open the new-password form.
- Password reset errors now distinguish SMTP configuration failures and rate limits.
- All V15-V24 features and design remain cumulative.

Production URL currently used for testing: https://vaultco-gamma.vercel.app/
Supabase callback: https://zgnqkqyhxmgixleyuisj.supabase.co/auth/v1/callback
