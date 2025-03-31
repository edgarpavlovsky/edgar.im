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