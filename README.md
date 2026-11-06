# sebastienboulnois.com

Portfolio site for Sébastien Boulnois, Human Factors & Human-Systems Integration Engineer.

Built with [Eleventy](https://www.11ty.dev/) and hosted on Cloudflare Workers (static assets). See [CONVENTIONS.md](CONVENTIONS.md) for the rules every change follows.

## Run it locally

```sh
npm install
npm start      # local preview at http://localhost:8080
npm run build  # static site in _site/
```

## Cloudflare settings

- Project name: `sebastienboulnois` (must match `name` in `wrangler.jsonc`)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Static files are served from `_site`, as set in `wrangler.jsonc`
