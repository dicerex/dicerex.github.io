# Project boundaries

- This directory (`www`) is the Git repository root and the complete portfolio project. Keep source, tooling, dependencies, previews and generated builds here.
- Materials in the parent directory are private research inputs. Do not add them to Git, copy them wholesale, or publish the original CV.
- Public commercial projects are selected in `src/data/projects.ts`: Amelia, Вратарница, Сэйв, Alean, UnitedMission and the requested «Лёд и пламя» site. Do not add other client work without the owner's permission.
- VPN platform, Crypto bot and Trade v2 are personal projects. Do not present them as commissioned commercial work or make profitability claims.
- Add real screenshots only from permitted projects and use demonstration data. Label diagrams as diagrams. Do not invent client quotes, outcomes, metrics or personal contributions.
- Target GitHub Pages with a static Astro build. Preserve support for repository subpaths and user-site repositories.
- Use Node.js 24 (`.nvmrc`), `npm ci`, and `npm run build`. Keep secrets out of static assets and client code.
