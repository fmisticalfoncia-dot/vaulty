VAULT V26 AUTH HARDENING

- Hardened Google callback handling for code and token/hash responses.
- Callback now waits briefly for Supabase auth state when the provider redirect arrives asynchronously.
- Preserves the requested post-login destination (Library vs Home).
- Hardened password recovery handling for both code and token/hash links.
- Added a clearer recovery state and safer return behavior after password update.
- Kept all V15-V25 cumulative features and design.

Production URL used for testing:
https://vaultco-gamma.vercel.app/

Supabase callback:
https://zgnqkqyhxmgixleyuisj.supabase.co/auth/v1/callback
