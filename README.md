# Edgar.im Website Aesthetic Improvements

## Implementation Plan

### A. Remove dangerouslySetInnerHTML
- [x] ~~Install react-markdown package~~ Use marked for Markdown processing
- [x] Update article rendering to use properly parsed Markdown
- [x] Ensure all markdown content is properly parsed and rendered
- [x] Remove any instances of dangerouslySetInnerHTML except for critical needs (theme script and markdown rendering)

### B. Mobile Aesthetic Optimizations
- [x] Make article body text larger on mobile devices
- [x] Create a fuller reading experience similar to Twitter
- [x] Fix the white background issue on profile pages
- [x] Ensure consistent styling across all pages

### C. Theme Settings
- [x] Change default theme to light mode
- [x] Prevent theme flash on initial load
- [x] Make text selection visible in dark mode
- [x] Add gray hover effect for links in light mode

### D. Error Handling
- [x] Implement redirect to home page for invalid slugs
- [x] Maintain static rendering for optimal performance

## Fixed Issues
- [x] Resolved theme flashing issue by using inline script to apply theme immediately
- [x] Fixed invalid slug handling with proper error handling in article pages
- [x] Added proper error boundaries for unexpected errors
- [x] Improved theme detection and application for consistent experience
- [x] Fixed ESM module compatibility issues by using marked instead of react-markdown

## Development Rules
- Use Node 21 (nvm use 21)
- No theme flashing on initial page load
- Avoid dangerouslySetInnerHTML (except for critical theme script and markdown rendering)
- Ensure mobile-friendly design
- Maintain static rendering

# Personal Blog

A minimalist blog site that supports markdown articles.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

## Adding New Articles

1. Create a new markdown file in the `articles` directory
2. Add frontmatter with title and date:
```markdown
---
title: "Your Title"
date: "YYYY-MM-DD"
---

Your content here...
```

## Building for Production

```bash
npm run build
```

The static site will be generated in the `out` directory. 