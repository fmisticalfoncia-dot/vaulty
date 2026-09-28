# VAULT V22 Payments Setup

The Pricing page now feeds a real checkout flow UI. Before accepting money, configure one payment provider (for example Flutterwave or Pesapal) and define the final Basic/Pro/Premium prices.

Security rules:
- Never put private API keys or secret keys in frontend JavaScript.
- Keep webhook secrets server-side.
- Use the `subscriptions` table to record provider-independent status.
- Activate paid access only after a verified payment webhook.

Until the payment provider is connected, the checkout page intentionally does not claim that a payment has been completed.
