# VAULT V22 Final Launch Checklist

## Already built in the site
- V15 foundation and 46-image Library
- Supabase Email Auth
- Password reset + new-password flow
- Google OAuth front-end flow
- Library gate and My Vault
- Saved looks + activity tables/hooks
- Newsletter signup stored in Supabase
- Updates / changelog
- Mobile Library click/tap handling
- Pricing plans + Monthly/Yearly selector
- Checkout page and plan-selection flow

## External production connections still required
1. Resend: verified sending domain + SMTP settings in Supabase.
2. Google: OAuth Client ID/Secret in Supabase and the production redirect URL.
3. Payments: choose/configure a payment provider and final plan prices; do not put secret API keys in frontend files.
4. Custom domain: connect the purchased domain to Vercel and update Supabase Site URL/Redirect URLs.

The site is designed to keep working on the Vercel domain while the custom domain is pending.
