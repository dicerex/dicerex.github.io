# Project boundaries

- This directory (`www`) is the Git repository root and the complete portfolio project. Keep source, tooling, dependencies, previews and generated builds here.
- Materials in the parent directory are private research inputs. Do not add them to Git, copy them wholesale, or publish the original CV.
- Public commercial projects are selected in `src/data/projects.ts`: Amelia, Вратарница, Сэйв, Alean, UnitedMission, «Лёд и пламя», and GodenDo (explicitly approved after the owner supplied a screenshot). Do not add other client work without the owner's permission.
- Keep the portfolio on one page, dark only. Show one commercial project per row. Descriptions and real screenshots must be visible without opening details; only technical information may be collapsed.
- The hero must prominently show the owner's portrait. Keep the tone conversational and avoid generic marketing slogans.
- Website presentations should visibly combine desktop and mobile screenshots with layered, accessible controls; keep miniature phone frames for apps. Screenshot galleries open in a dialog. Do not restore separate project pages.
- Support Russian and natural English on the same URL, including labels, descriptions, image alternatives and controls. Preserve the visitor's chosen language.
- VPN platform, Crypto bot and Trade v2 are personal projects. Do not present them as commissioned commercial work or make profitability claims.
- Add real screenshots only from permitted projects and use demonstration data. Label diagrams as diagrams. Do not invent client quotes, outcomes, metrics or personal contributions.
- The owner confirmed the seven commercial contributions in conversation; preserve the visible bilingual `contribution` fields. Amelia is legacy app recovery, ongoing features and store releases; GodenDo is design, Flutter and backend integration. Do not imply original authorship of Amelia or backend development for GodenDo. Ice and Flame is a complete landing page without a backend.
- Target GitHub Pages with a static Astro build. Preserve support for repository subpaths and user-site repositories.
- Use Node.js 24 (`.nvmrc`), `npm ci`, and `npm run build`. Keep secrets out of static assets and client code.
