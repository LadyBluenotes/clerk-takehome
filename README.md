# Clerk Content Engineer Technical Assessment

## Info

- App can be styled any way
- Theme switcher able to switch app **and** Clerk components between light and dark mode.
- Homepage and protected page can be the same, but show different UI to users who are not authenticated vs users who are
- 3 provided files:
  - `providers/theme-provider.tsx`
  - `providers/clerk-provider.tsx`
  - `app/layout.tsx`
- Email link to app repo, markdown file (can be within repo if easier)

Objectives:

- [ ] App can be styled any way
- Include:
  - [ ] Sign-in page with `<SignIn />`
  - [ ] Homepage
  - [ ] Protected page (eg. `/dashboard`)
    - Display:
      - [ ] User's name
      - [ ] Email
      - [ ] Session ID
      - [ ] If they have an `active organization`, should include organization ID and name
    - Must include:
      - [ ] `<UserButton />`
      - [ ] `<OrganizationSwitcher />`
- [ ] Write a guide
- [ ] Journey documentation in README.

### Guide

- In an MD/MDX file
- Topic: How to build a theme switcher for Clerk App
- Assumptions:
  - User came from `Clerk Next.js Quickstart`
- Use Clerk docs for reference to what guides / tutorials look like
  - Example: [Next.js RBAC guide]('https://clerk.com/docs/references/nextjs/basic-rbac')

### Document my journey

- Talk about struggles:
  - What was difficult during this project?
  - Where there things hard to understand / find in the Clerk Docs? With Clerk overall?
- Talk about successes:
  - Favourite part about the projecT?
  - Parts you take pride in?
  - Anything you're excited about?
- Any decisions you want to explain your "why" to?
- Ideas of how you could have done better (ie. more resources, time, etc.)
- No need to walk through code

## Document my journey ongoing comments

- Quick start guide means getting off the ground is quick & easy
