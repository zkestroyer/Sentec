# SENTEC — Engineering the Future

SENTEC is a React and Vite landing site with responsive public pages, a persistent dark/clinical-light theme, and the exact supplied SENTEC artwork animated as registered image layers.

## Run it locally with local assets

The repository includes all logo and texture source files in the root `assets/` directory. Run the following commands after cloning the repository:

```bash
pnpm install
pnpm dev:local
```

Open `http://localhost:3000`. The `dev:local` command copies the tracked assets into Vite’s generated public directory and changes the application from managed `/manus-storage/...` URLs to ordinary local `/assets/...` URLs.

| Command | Use |
|---|---|
| `pnpm dev` | Runs the managed-preview configuration. |
| `pnpm dev:local` | Runs the local-asset configuration for normal development. |
| `pnpm build:local` | Produces a local-asset production build. |
| `pnpm start` | Starts the production server after a build. |

## Asset workflow

Replace files in root `assets/` when updating a logo or texture, while preserving the filenames. Then rerun `pnpm dev:local` or `pnpm build:local`. The generated `client/public/assets/` directory is ignored by Git; only the root `assets/` directory should be committed.

## Documentation

The complete local and self-hosted setup is in [LOCAL_HOSTING.md](./LOCAL_HOSTING.md). Architecture, route mapping, theme behavior, animation guidance, and safe editing notes are in [PROJECT_GUIDE.md](./PROJECT_GUIDE.md).
