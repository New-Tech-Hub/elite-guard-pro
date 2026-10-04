alter table public.bookings add column if not exists vehicle text;

grant update (vehicle, status, assigned_officers, updated_at) on public.bookings to authenticated;