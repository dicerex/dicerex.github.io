import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, name] = repository?.split('/') ?? [];
const userSite = name?.toLowerCase() === `${owner}.github.io`.toLowerCase();
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : undefined);
const base = process.env.BASE_PATH || (name && !userSite ? `/${name}/` : '/');

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
