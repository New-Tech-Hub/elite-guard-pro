# Website discoverability, installability, and live data

## User-facing result
- Add a polished FAQ section/page answering common questions about bookings, locations, services, response, and payments.
- Improve search visibility with accurate page metadata, crawl guidance, sitemap, local business details, and structured data for the company, services, FAQ, and service area.
- Add AI-readable answers and entity details without inventing claims, prices, hours, or locations beyond the current site content.
- Make the site installable on phones and desktops with the existing shield branding.
- Move booking records into Lovable Cloud so new bookings and status changes can be stored and reflected live instead of relying on demo-only values.

## Technical approach
- Use Lovable Cloud for bookings, booking status, assignments, and payment-state records; protect user/admin data with authenticated access and separate server-validated roles.
- Keep payments in sandbox/demo mode unless a real payment provider is already connected; label any unconnected step clearly.
- Add a manifest-only PWA because offline use was not requested; do not add a service worker or offline cache.
- Add FAQ JSON-LD, LocalBusiness/Organization JSON-LD, Service JSON-LD, `robots.txt`, and `sitemap.xml`, while keeping all metadata consistent with the current public domain.
- Add a dedicated FAQ route and link it from the main navigation/footer where the existing layout supports it.

## Validation
- Confirm the app builds without errors.
- Check metadata, structured data, sitemap, manifest, FAQ interactions, and booking persistence in the preview.
- Verify mobile and desktop layouts do not clip text or controls.
