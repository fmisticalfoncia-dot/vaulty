# VAULT V20

Cumulative from V15-V19. V20 fixes: robust Library tile clicks/touch/keyboard, modal actions, password reset/change-password flow using Supabase auth.updateUser, clearer Google OAuth errors, and preserves the existing 46-image collection.

Google login still requires enabling the Google provider in Supabase and entering a Google OAuth Client ID/Client Secret. Do not put the client secret in the frontend.

Password reset requires the production callback URL to be present in Supabase Redirect URLs.
