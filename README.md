# Suda Zhao — Artist Portfolio

A minimalist painting portfolio built with [Astro](https://astro.build), styled
after the Squarespace "Ventura" template, and deployed to GitHub Pages at
**www.sudazhao.com**.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the production build
```

## Adding artwork

1. Drop the full-resolution image into `src/content/artworks/`
   (e.g. `morning-light.jpg`). Astro auto-generates optimized + responsive
   versions at build time, so commit the original.
2. Create a matching `.md` file next to it:

   ```markdown
   ---
   title: "无题 · 一"
   image: "./morning-light.jpg"
   year: 2025
   medium: "布面油画"
   series: "梦境系列"   # 作品集页面按系列分组；留空则归入「其他作品」
   order: 1            # 数字越小越靠前
   featured: true      # 只在一幅作品上设为 true，用作首页大图
   ---
   ```

3. Commit and push to `main` — the site rebuilds and deploys automatically.

The three `sample-0*` entries are placeholders; delete them once real work is in.

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project to the `main` branch.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every
   push to `main`.

### Custom domain (www.sudazhao.com)

`public/CNAME` already contains `www.sudazhao.com`. At your domain registrar,
add DNS records:

| Type  | Host | Value                |
|-------|------|----------------------|
| CNAME | www  | `<username>.github.io.` |

To also serve the apex `sudazhao.com`, add four `A` records pointing to
GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
`185.199.111.153`) and enable "Enforce HTTPS" in Settings → Pages.

## Sharing artwork (US ↔ China)

The artist sends full-resolution originals via a **OneDrive** shared folder
(works in mainland China without a VPN). Avoid WeChat for files — it compresses
images; if used, send each as a File (文件), not a Photo. Cindy adds the
originals to `src/content/artworks/` and pushes.

## Roadmap — v2 self-serve CMS

Plan to add a git-based CMS (e.g. Decap CMS) so the artist can upload work
himself. Note: the CMS admin must be reachable from mainland China, so verify
the chosen backend/login (GitHub OAuth is usually OK but can be flaky).
