create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can read their own roles"
on public.user_roles for select
to authenticated
using (user_id = auth.uid());

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  full_name text not null,
  phone text not null,
  email text not null,
  pickup_location text not null,
  destination text not null,
  service_type text not null default 'vip_escort',
  escort_type text not null default 'armed',
  officers integer not null default 1,
  duration_days integer not null default 1,
  booking_date date not null,
  booking_time time not null,
  add_ons jsonb not null default '{}'::jsonb,
  estimated_total numeric(12,2) not null default 0,
  flight_number text,
  arrival_time time,
  notes text,
  status text not null default 'pending',
  payment_status text not null default 'unpaid',
  assigned_officers jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant insert on public.bookings to anon;
grant select, insert, update on public.bookings to authenticated;
grant all on public.bookings to service_role;

alter table public.bookings enable row level security;

create policy "Anyone can submit a booking request"
on public.bookings for insert
to anon, authenticated
with check (
  length(trim(full_name)) between 2 and 160
  and length(trim(phone)) between 7 and 40
  and length(trim(email)) between 5 and 255
  and length(trim(pickup_location)) between 2 and 500
  and length(trim(destination)) between 2 and 500
  and officers between 1 and 25
  and duration_days between 1 and 365
  and estimated_total >= 0
);

create policy "Clients can view their own bookings"
on public.bookings for select
to authenticated
using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "Admins can update bookings"
on public.bookings for update
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger update_bookings_updated_at
before update on public.bookings
for each row execute function public.update_updated_at_column();

alter publication supabase_realtime add table public.bookings;