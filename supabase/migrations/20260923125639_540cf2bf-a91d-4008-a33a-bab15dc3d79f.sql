drop policy if exists "Clients can view their own bookings" on public.bookings;
drop policy if exists "Admins can update bookings" on public.bookings;

create policy "Clients can view their own bookings"
on public.bookings for select
to authenticated
using (
  user_id = auth.uid()
  or exists (
    select 1 from public.user_roles
    where user_roles.user_id = auth.uid()
      and user_roles.role = 'admin'
  )
);

create policy "Admins can update bookings"
on public.bookings for update
to authenticated
using (
  exists (
    select 1 from public.user_roles
    where user_roles.user_id = auth.uid()
      and user_roles.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.user_roles
    where user_roles.user_id = auth.uid()
      and user_roles.role = 'admin'
  )
);

drop function if exists public.has_role(uuid, public.app_role);
drop function if exists private.has_role(uuid, public.app_role);
drop schema if exists private;