VAULT™ V15 — AUTHENTICATION & DATA ARCHITECTURE

V15 prepares the site for real authentication without pretending that Google/email authentication is live before credentials are supplied.

Production flow:
1. Visitor selects Continue with Google or Continue with Email.
2. Authentication provider verifies identity.
3. Provider returns a session.
4. Protected Library and My Vault read the authenticated session.
5. User data is stored by user ID: profile, saved looks, activity, newsletter status, and later subscription data.
6. Sign out revokes the session and returns the visitor to public pages.

Required before launch:
- Choose an authentication/database provider.
- Create the project.
- Enable Google OAuth and email/password authentication.
- Add the provider's public client configuration to AUTH_PROVIDER_CONFIG.js.
- Configure allowed production domains/redirect URLs.
- Connect the SQL schema in DATABASE_SCHEMA.sql.
- Add server-side authorization rules so users can only read/write their own rows.
- Connect newsletter submission to an email provider.
- Connect payment provider webhooks to subscriptions.

Security:
- Never put service-role keys, database passwords, card numbers, CVV, or private OAuth secrets in frontend files.
- The browser should receive only public client configuration.
