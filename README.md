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

- [x] App can be styled any way
- Include:
  - [x] Sign-in page with `<SignIn />`
  - [x] Homepage
  - [x] Protected page (eg. `/dashboard`)
    - Display:
      - [x] User's name
      - [x] Email
      - [x] Session ID
      - [x] If they have an `active organization`, should include organization ID and name
    - Must include:
      - [x] `<UserButton />`
      - [x] `<OrganizationSwitcher />`
- [x] Write a guide
- [x] Journey documentation in README.

## Guide

- In an MD/MDX file
- Topic: How to build a theme switcher for Clerk App
- Assumptions:
  - User came from `Clerk Next.js Quickstart`
- Use Clerk docs for reference to what guides / tutorials look like
  - Example: [Next.js RBAC guide]('https://clerk.com/docs/references/nextjs/basic-rbac')

## Document my journey

### Clerk Guidees

Getting an idea of how Clerk handles guides made me appreciate how well scoped a lot of them are. Having reviewed and written my fair share of guides and how often they can be mistaken for tutorials, I found that they supplied enough of an idea I could get started, while also linking out to the areas I could go to for more information, if needed.

### What Clerk provides

The versatility of the components is something I really came to appreciate while working through this assignment. The way the `variables` and `elements` props are laid out, it was easy to target the elements I wished to customize. While I was a big fan of having the lock emoji to explicitly show which classes are available for customization, regularly going into the devtools to find the classes I wanted to target to felt a bit cumbersome. I found myself thinking it might be nice to see a list of the classes and what elements they're associated with.

After spending some time on the site (docs and otherwise), I can see how Clerk has provided aimed at improving dev experience. Putting Clerk into an application didn't feel like a big lift, like I have experienced with other tools in the past. Clerk's hooks also made it extremely easy to access the appropriate information I needed to display.

### Writing the guide

When approaching this task, I really wanted to exemplify the guides I had read. I had comtemplated adding how to implement a CSS framework with the theme switcher, but upon further review I felt like that would've added unnecessary complexity for what was being asked. For example, I found that few of Clerk's guides introduced more than one concept at a time. Since the task itself was to build a guide for a theme switcher, I didn't want to overcomplicate it by introducing something else to go through.

That being said, I did feel like a necessary section was to mention how the theme switching works, hence why I added the CSS customization section. I felt it added just enough information for a user to be able to proceed either with a CSS framework or standard CSS.

### General experience

I enjoyed this exercise because I found it a good way to re-familiarize myself with the Clerk onboarding experience. It not only made me appreciate the work that the dev team has done, but the effort that's been put into the documentation.

One thing I did struggle with in this assignment was having high expectations of myself. I always want to be proud of my work which means I tend to want to withold the work until I find it "perfect". With time frames and other priorities, this means that I need to understand the barrier that is "good enough" and iteration is where you can work towards the goal of "perfect".

While I did this assignment, I wrote out the requirements and the steps I took as I built things out. Following this, I wanted to make sure I displayed the information and everything worked as intended. If were to redo this assignment, rather than continuing on to the styling and displaying the information once a user has been authenticated, I would've focused more on the guide. This would've given me more time to review / iterate over it prior to it needing to be submitted.

I think overall, I'm happy with what I've done. While I feel I could iterate over and improve the guide as well as the app, I think that would be something I would feel at any stage. I didn't perfectly style the app to what I had wanted, but I feel like at the state it's in, it's not bad.

### Additional

While going through documentation, however, I did notice a bug I wanted to let you know of:

If you are searching for something within the docs site, there are instances where your selected SDK will change. For example, when I was searching `useUser`, I found I was frequently navigated away from the `Next.js` SDK to the `Vue` one. Following this, if I were to switch the SDK back to `Next.js`, I would be navigated away from the page and back to the `Next.js Quickstart (App Router)` page.

## Thank you!

Thank you for the opportunity to work on this assignment! I appreciate the experience it has given me.
