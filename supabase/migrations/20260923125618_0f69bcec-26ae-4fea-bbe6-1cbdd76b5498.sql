create schema if not exists private;

create or replace function private.has_role(_user_id uuid, _role public.app_role)
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

grant usage on schema private to authenticated;
grant execute on function private.has_role(uuid, public.app_role) to authenticated;
revoke execute on function private.has_role(uuid, public.app_role) from anon;
revoke execute on function private.has_role(uuid, public.app_role) from public;

alter policy "Clients can view their own bookings"
on public.bookings
using (user_id = auth.uid() or private.has_role(auth.uid(), 'admin'));

alter policy "Admins can update bookings"
on public.bookings
using (private.has_role(auth.uid(), 'admin'))
with check (private.has_role(auth.uid(), 'admin'));

revoke execute on function public.has_role(uuid, public.app_role) from anon;
revoke execute on function public.has_role(uuid, public.app_role) from public;