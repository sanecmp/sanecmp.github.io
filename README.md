# sanecmp website

Static Russian/English landing page and branding for sanecmp, published at
<https://sanecmp.github.io/> from the public repository
[`sanecmp/sanecmp.github.io`](https://github.com/sanecmp/sanecmp.github.io).
No application server, framework or build step is required.

## Publishing

GitHub Pages deploys the `main` branch from the repository root. `.nojekyll`
disables Jekyll processing; pushes to `main` update the site automatically.
Keep website assets and `branding/` here, not in application repositories.
Local `preview-*.png` images are ignored and must not be published.

Review both languages and the installation commands before each publication.
The distribution names are `sanecmp-sanea`, `sanecmp-sanex` and `sanecmp-sanelib`;
application commands and Python imports keep their short names.

## Local preview

Run from this repository:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://127.0.0.1:8080/>. Use `?lang=ru` or `?lang=en` to choose a language.
All visual assets and scripts are served locally; the page loads no third-party
fonts, analytics or libraries.

## Organization profile

The public organization profile is maintained in
[`sanecmp/.github`](https://github.com/sanecmp/.github), as `profile/README.md`.
