# Next.js - Sanity template

Basic template for landing / multiple pages
Uses tailwind, framer motion, react icons.

# Sanity

Sanity is embedded within the app and available at the /admin route
Sanity uses Google for authentication

# Local development

Use node > v20 to develop locally

# Folder structure

/components - all the reusable components such as buttons, typography, sections
/sections - all the sections such as hero, about, centeredText,
/sanity - all the sanity configuration

# Sanity.config

DO NOT USE next.js turbopack ( --turbo ) sanity won't be rendered. Spent 1:20 hours trying to find what is the issue
