# Next.js - Sanity template
Basic template for landing / multiple pages<br/>
Uses tailwind, framer motion, react icons.<br/>
Configured to deploy on Vercel

# Sanity
Sanity is embedded within the app and available at the /admin route<br/>
Sanity uses Google for authentication

# Local development
Use node > v20 to develop locally<br/>
**DO NOT USE** next.js turbopack ( --turbo ) sanity might not be rendered on Windows.<br/><br/>
```npx install-peerdeps --yarn next-sanity```<br/>
To install all the peer deps for sanity


# Folder structure
/components - all the reusable components such as buttons, typography, sections etc..<br/>
/sections - all the sections such as: hero, about, centeredText<br/>
/sanity - sanityClient, fetch, queries, modules etc..<br/>
/lib - some utility functions

# Sanity modules

## Page

    - Title
    - Slug
    - SEO
        -   Title
        -   Description
        -   Keywords
        -   Metadatabase
        -   Canonical link
        -   Category
        -   Opengraph
        -   Robots (hidden from google)

### Page Modules down below:

### Hero

    -   Eyebrow
    -   Title
    -   Body text
    -   Button and link url
    -   Image

### Text and image row

    -   Eyebrow
    -   Title
    -   Body text
    -   Button text and url
    -   Revert section
    -   Image

### Centered text

    -   Eyebrow
    -   Title
    -   Body text
    -   Button text and url

### Services

    -   Eyebrow
    -   Title
    -   Body text
    -   Button text and url
    -   Array of cards
        -   Eyebrow
        -   Title
        -   Body text
        -   Button text and url
        -   Image

### Reviews

    -   Eyebrow
    -   Title
    -   Body text
    -   Button text and url
    -   Array of cards
        -   Image
        -   Eyebrow
        -   Title
        -   Body text
        -   Rating (1 to 5 dropdown)

### FAQ

    -   Eyebrow
    -   Title
    -   Body text
    -   Button text and url
    -   Array of cards
        -   Question
        -   Answer


## Singletons

### Website settings

    - Brand name
    - Brand subtitle
    - Logo
    - Phone numbers
    - Email
    - Address

    - Social links
        - Title
        - URL
        - Icon (5 icons to choose from)

    - Navigation links
        - Title
        - URL   
