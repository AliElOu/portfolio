# Ali El Ouankrimi — Portfolio

Personal portfolio for Ali El Ouankrimi, a Data Scientist and AI Engineer. The
site presents selected projects, professional experience, education, technical
skills, and certifications in English and French.

## Tech stack

- Next.js 15 and React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- Motion
- Vercel Analytics and Speed Insights

## Local development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The application redirects
to the default English locale at `/en`; French is available at `/fr`.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Main content

- `messages/en.json` and `messages/fr.json`: localized content
- `src/data/projects.ts`: project links, images, and technology stacks
- `src/data/certificates.ts`: certification details
- `public/images`: portfolio media

## Deployment

The application is configured for deployment on Vercel. Add any required
environment variables in the deployment settings before publishing.

## Contact

- [GitHub](https://github.com/AliElOu)
- [LinkedIn](https://www.linkedin.com/in/alielouankrimi/)
- [Email](mailto:alielouankrimi@gmail.com)
