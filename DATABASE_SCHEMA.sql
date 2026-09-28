-- VAULT™ V15 production data model (provider-neutral SQL)
-- Connect this schema to the database/auth provider selected for launch.

create table if not exists profiles (
  id uuid primary key,
  display_name varchar(120),
  avatar_url text,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);

create table if not exists saved_looks (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  look_id varchar(80) not null,
  saved_at timestamp default current_timestamp,
  unique(user_id, look_id)
);

create table if not exists look_activity (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  look_id varchar(80) not null,
  action varchar(30) not null,
  created_at timestamp default current_timestamp
);

create table if not exists newsletter_subscribers (
  id bigint generated always as identity primary key,
  email varchar(320) not null unique,
  subscribed_at timestamp default current_timestamp,
  status varchar(20) default 'active'
);

create table if not exists subscriptions (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  plan varchar(30) not null,
  billing_period varchar(20) not null,
  provider_customer_id varchar(255),
  provider_subscription_id varchar(255),
  status varchar(30) default 'pending',
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);
