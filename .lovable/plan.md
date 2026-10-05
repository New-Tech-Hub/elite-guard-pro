# Secure Admin Access and Logo Update

## What will change
- Replace the navigation and footer shield with the attached 1145 Allied Protections logo.
- Add a dedicated admin sign-in screen using email and password.
- Protect the admin dashboard so only signed-in users with the `admin` role can open it.
- Show clear loading, denied-access, sign-out, and failed-login states.
- Keep administrator permissions in the existing protected roles system; no profile records will be added.

## Technical details
- Store the uploaded logo through the project asset service and reference the resulting image in both locations.
- Validate the signed-in user with the authentication service, then verify the server-controlled admin role before rendering dashboard data.
- Preserve the database's existing row-level access rules as the final enforcement layer.
- Add `/admin/login` and redirect unauthorized `/admin` visits there.

## Validation
- Confirm the new logo renders in the navigation and footer on desktop and mobile.
- Confirm signed-out visitors cannot see admin records.
- Confirm non-admin users receive an access-denied state.
- Confirm an authorized admin can view live bookings and sign out.
- Confirm the app builds without errors.
