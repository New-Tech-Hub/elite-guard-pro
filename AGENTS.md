# Project Architecture Rules

- Protect administrator pages with authenticated server-issued sessions and database-backed roles; never infer admin access from browser storage.
- Keep administrator authorization records separate from user-facing profile data to prevent privilege escalation.