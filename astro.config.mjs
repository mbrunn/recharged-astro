import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        media_folder: "public/assets/uploads",
        public_folder: "/assets/uploads",
        logo_url: "/favicon.svg",
        collections: [
          // Define a blog post collection
          {
            name: 'dates',
            label: 'Gig Dates',
            folder: 'src/pages/dates',
            create: true,
            delete: true,
            fields: [
              { name: 'day', widget: 'date', label: 'Datum' },
              { name: 'time', widget: 'string', label: 'Uhrzeit' },
              { name: 'name', widget: 'string', label: 'Gig Name' },
              { name: 'location', widget: 'string', label: 'Location (z.B.: Sommerszene)' },
              { name: 'link', widget: 'string', label: 'Link zu Tickets / der VA' },
              { name: 'active', widget: 'boolean', label: 'Anzeigen' },
            ],
          },
        ],
      },
    })],
  ssr: {
    noExternal: ['@fortawesome/*']
  }
});