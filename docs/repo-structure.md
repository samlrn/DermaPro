# Repository Structure

This repo starts as a single Ionic React application with mock data. It is ready for backend integration without committing to a backend vendor too early.

## Source Layout

```text
src/
  App.tsx                 Ionic router, tabs, and app shell
  main.tsx                React entry point and Ionic CSS imports
  App.css                 Ionic component overrides
  index.css               Global responsive layout and product styles
  components/
    AppHeader.tsx         Shared top toolbar
    ShiftCard.tsx         Reusable marketplace shift card
    StatCard.tsx          Reusable dashboard metric card
  data/
    marketplace.ts        Mock data and domain types
  pages/
    Dashboard.tsx         Marketplace command center
    Shifts.tsx            Shift discovery and posting draft form
    Bookings.tsx          Confirmation, calendar, and payment status
    Messages.tsx          Per-shift messaging placeholder
    Profile.tsx           Dermatologist profile and credential vault
  theme/
    variables.css         Ionic theme tokens
```

## Suggested Future Folders

Add these as soon as the app has real services:

```text
src/api/                  API clients and typed request helpers
src/auth/                 Session, role guards, and OAuth callbacks
src/hooks/                Reusable stateful UI hooks
src/lib/                  Formatting, validation, and small pure utilities
src/models/               Shared domain models if they outgrow page data
src/routes/               Route guards and deep-link helpers
src/tests/                Test utilities and fixtures
```

## Native App Notes

Capacitor should generate `ios/` and `android/` after `npm run build` and `npm run cap:sync`. Commit those folders when the team is ready to manage app identifiers, signing, platform permissions, app icons, splash screens, and push notification configuration.
