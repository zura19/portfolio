# Project Instructions

## Mandatory Session Rules

Read this file before doing any work in this repository.

Do not run terminal commands without asking first.

Do not run:

- npm run dev
- npm run build
- npm run start
- npm test
- npm run lint
- browser automation
- commands that start background processes

Ask before every verification command.

Before editing code:

1. Explain the problem.
2. List files you want to edit.
3. Wait for approval.
4. Make the smallest possible change.

Never touch `.env*` files unless explicitly asked.
Never install dependencies unless explicitly asked.

## Tech stack

- Frontend: Next.js / React / TypeScript

## Folder Structure

src/
├─ app/[locale]/... # Next.js routes, server/client entry points
├─ domain/ # Pure models, enums, DTO contracts
├─ infrastructure/
│ ├─ api/ # API route handlers
│ ├─ repositories/ # Axios wrappers (API clients)
│ ├─ dto/ # API DTO definitions (mirrors backend)
│ ├─ hooks/ # Shared hooks (React Query, business logic)
│ ├─ layouts/ # App-level layout shells
│ ├─ libs/ # Primitive UI components (Button, Modal, Select…)
│ ├─ pages/ # Feature page modules (see §3)
│ ├─ shared/ # Cross-page components, dialogs, icons, tables
│ ├─ store/ # Redux Toolkit slices
│ ├─ types/ # Shared app and external API TypeScript types
│ ├─ utils/ # Cross-cutting helpers (cn, formatting, etc.)
├─ providers/ # Context and boundary providers

## Every page module MUST follow this layout:

📁 page-name/
├── index.ts # Public barrel export
├── PageName.tsx # Root page component
│
├── 📁 components/ # All React components scoped to this page
│ ├── PageNameTable.tsx
│ ├── PageNameTableHeader.tsx
│ ├── PageNameCardView.tsx
│ ├── PageNameFooter.tsx
│ ├── PageNameModal.tsx
│ ├── PageNameSectionLayout.tsx
│ └── ...
│
├── 📁 hooks/ # Custom React hooks (data, state, effects)
│ ├── usePageNameData.ts
│ ├── usePageNameFilters.ts
│ ├── usePageNameActions.ts
│ └── ...
│
├── 📁 config/ # Declarative configuration (no logic)
│ ├── table-columns.tsx
│ ├── dropdown-renderers.tsx
│ ├── sort-options.ts
│ ├── filter-options.ts
│ ├── form-config.ts
│ └── constants.ts
│
├── 📁 utils/ # Pure functions (no React, no side effects)
│ ├── mappers.ts
│ ├── validators.ts
│ ├── formatters.ts
│ └── helpers.ts
│
└── 📁 types/ # Page-scoped TypeScript types
├── index.ts
└── view-models.ts

## Rules

- Do not edit files without explaining the change first.
- Do not run terminal commands without asking.
- Prefer small, safe changes.
- Follow the existing folder structure.
- `src/infrastructure/libs` is reserved for primitive UI libraries/components. Do not put general helpers there.
- If a hook, helper, formatter, utility, or shared logic is used by more than one page module, move it out of `src/infrastructure/pages/...` into the matching global folder, such as `src/infrastructure/hooks` or `src/infrastructure/utils`.
- Page-local helpers, formatters, and utilities belong in that page module's `utils` folder, not `libs`.
- Shared or reusable TypeScript types belong in `src/infrastructure/types`. Page-local types may stay in `src/infrastructure/pages/{page}/types` only when they are not used outside that page module.
- Raw external API response types used by services belong in `src/infrastructure/types`.
- Use TypeScript types properly.
- Do not touch `.env` files.
- Do not install new dependencies without asking.
- Do not change package versions unless asked.
- Use absolute imports like `import { ComponentName } from '@/infrastructure/components'`.

## How to work

Before changing code:

1. Explain the problem.
2. List files you want to edit.
3. Wait for approval.
4. Make the smallest possible change.

Allowed without asking:

- Reading AGENTS.md
- Reading source files needed to understand the task

Ask before:

- Running any terminal command
- Running tests, lint, build, or dev servers
- Editing files
