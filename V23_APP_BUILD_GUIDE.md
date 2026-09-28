# VAULT V23 — Web App + APK Roadmap

V23 adds an installable Progressive Web App (PWA) layer without changing the VAULT website architecture.

## What is live in the code
- `manifest.webmanifest`
- 192px and 512px app icons
- `service-worker.js`
- `pwa.js` install flow
- Android/desktop install support where the browser supports it
- iPhone/iPad install instructions via Safari share menu
- App shortcuts for Library, My Vault and Pricing

## What is still external
- Production Google OAuth credentials in Supabase
- Production Resend verified domain/SMTP
- Payment provider credentials + webhook
- Custom domain `vaultco.me` when purchased

## Future APK
When ready, package the same web-first app with Capacitor. Official Capacitor docs support existing modern JavaScript projects and native Android/iOS wrappers.

Typical build path:
1. Install Node + Android Studio + Android SDK.
2. `npm install @capacitor/core @capacitor/cli @capacitor/android`
3. `npx cap init` with a stable app id such as `com.misticalfoncia.vault`.
4. `npx cap add android`
5. `npx cap sync`
6. Open the Android project in Android Studio.
7. Build a signed AAB/APK for Google Play or direct installation.

Keep all Supabase auth and payment secrets out of the Android/web frontend.
