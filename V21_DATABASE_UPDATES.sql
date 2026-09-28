-- VAULT V21: newsletter + auth email support
-- Run once in Supabase SQL Editor if these policies are not already present.

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "newsletter_public_insert" on public.newsletter_subscribers;
create policy "newsletter_public_insert"
on public.newsletter_subscribers
for insert
with check (email is not null and length(trim(email)) > 3);

drop policy if exists "newsletter_no_public_select" on public.newsletter_subscribers;
-- No SELECT policy: subscriber emails are not exposed to anonymous visitors.
