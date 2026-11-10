import { readdir, readFile, access } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve('dist');
const errors = [];
const repository = process.env.GITHUB_REPOSITORY;
const [owner, name] = repository?.split('/') ?? [];
const userSite = name?.toLowerCase() === `${owner}.github.io`.toLowerCase();
const base = (process.env.BASE_PATH || (name && !userSite ? `/${name}/` : '/')).replace(/\/$/, '');
let count = 0;

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) { await walk(path); continue; }
    if (!entry.name.endsWith('.html')) continue;
    count++;
    const html = await readFile(path, 'utf8');
    for (const match of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
      const url = match[1];
      if (!url.startsWith('/') || url.startsWith('//')) continue;
      const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
      if (base && !(pathname === base || pathname.startsWith(`${base}/`))) {
        errors.push(`${path}: path escapes configured base: ${url}`); continue;
      }
      let target = pathname.slice(base.length);
      if (target.endsWith('/')) target += 'index.html';
      try { await access(join(root, target)); }
      catch { errors.push(`${path}: missing local resource ${url}`); }
    }
    if (!/<html[^>]*lang="ru"/.test(html)) errors.push(`${path}: missing Russian language`);
    if (!/<meta[^>]*name="description"/.test(html)) errors.push(`${path}: missing description`);
  }
}

await walk(root);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Verified ${count} HTML pages: local links, assets, base path and metadata.`);
