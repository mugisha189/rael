# RAEL
Rael website will be a website designed to contain RCA news, classified, a timeline, and a student list profile. It will have all the possible news any newbie in RCA can need to know about RCA in the past and present.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Guidelines
### General
- Use `yarn` to install packages.

### Components
- Use `Text` component for all text. `RText` is a wrapper around `Text` that sets the font to Righteous. `PText` is a wrapper around `Text` that sets the font to Poppins.

### Styling
- Use `tailwindcss` for styling. You can use `className` prop to add classes to components.
- Add `dark` class to the specific component to make it dark. This will be used to toggle between light and dark mode.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.