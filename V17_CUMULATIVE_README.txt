VAULT V17 — CUMULATIVE RELEASE

This release keeps the V15 visual/layout/image foundation, carries forward the V16 Supabase authentication/database layer, and adds the V17 product-update layer.

Included:
- V15 design, hero, video, navigation, 46-image Library, prompts, downloads, Pricing, About and How It Works.
- V16 Supabase URL/public key wiring, Email auth, session handling, profiles, schema/RLS and Google OAuth handoff.
- V17 Supabase saved looks + look activity hooks.
- Real database-backed My Vault rendering.
- New public Updates page showing V15 → V16 → V17 cumulatively.
- Homepage latest-updates teaser and direct Updates navigation.

Google OAuth still requires Google provider configuration inside Supabase before it can sign users in.
Do not put service-role/secret keys in frontend files.
