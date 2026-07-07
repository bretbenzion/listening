# Programme Notes

A small, private listening journal for classical music. Log a composer, a piece,
and — if it's helpful — a specific movement, give it a rating, and write down
your impressions in as much depth as you like.

- **No account, no server.** Everything is stored in your browser's
  `localStorage`, on your device only.
- **Works offline.** It's a PWA — install it and it'll keep working without a
  connection (after the first visit).
- **Composer → Piece → Movement.** Movements are optional; leave that field
  blank for a note about a whole work.
- **Conductor / performers and a recording link** are optional fields on each
  entry, for noting or linking the specific interpretation you listened to.
- **Backups are JSON.** Export any time; import to merge or fully restore.

## If the page shows raw code instead of the app

If you visit your site and see JavaScript printed out as page text (instead
of the actual app), it means the browser is treating `app.js`'s contents as
the HTML document rather than running it as a script. This isn't a bug in the
app — it means the file that's actually being served at that URL isn't the
`index.html` from this project. Check:

- **`index.html` is a plain-text file that starts with `<!DOCTYPE html>`.**
  Open it in GitHub's file viewer and confirm — if it instead shows JavaScript,
  its content and `app.js`'s content got swapped or merged somewhere during
  upload, and it needs to be re-uploaded from this project's `index.html`.
- **All files sit at the same folder level** — `index.html`, `style.css`,
  `app.js`, `sw.js`, `manifest.json`, and the `icons/` folder should all be
  siblings (e.g. all directly in the repo root, or all together inside one
  `docs/` folder if that's your Pages source) — not `index.html` in one place
  and the rest nested inside a subfolder like `programme-notes/`.
- **File names match exactly**, including case — GitHub Pages is
  case-sensitive.

## Hosting it on GitHub Pages

1. Create a new GitHub repository and add all the files in this folder to it
   (`index.html`, `style.css`, `app.js`, `sw.js`, `manifest.json`, `icons/`).
2. Commit and push to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   choose the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will give you a URL like `https://yourname.github.io/repo-name/`.
   Give it a minute after the first push, then visit it.

That's it — no build step, no dependencies to install.

### Installing it as an app

Once it's live on its `https://` URL, open it on your phone or computer and
use your browser's "Install app" / "Add to Home Screen" option. It'll behave
like a normal app icon and open without browser chrome.

Note: service workers (what makes offline mode work) require `https://` or
`localhost` — this is a browser rule, not something specific to this app. It
means the offline caching won't kick in if you just double-click `index.html`
on your own computer, but everything else (adding notes, import/export) works
fine either way.

## Backups

Use **Export** any time to download a dated `.json` file with everything in
your library — keep a copy somewhere safe (cloud drive, another device,
wherever you like).

Use **Import** to load a backup back in. You'll be asked whether to:

- **Merge** — add entries from the file into what's already here (entries
  sharing an ID are overwritten by the file's version), or
- **Replace** — wipe what's currently stored here and use the file instead.

## Editing the design

Everything is plain HTML/CSS/JS, no build tools:

- `style.css` — colors, type, and layout are set up as a small token system
  at the top of the file if you want to adjust the palette or fonts.
- `app.js` — all the logic; data lives in a single array of "entries", each
  one a composer + piece + optional movement + rating + notes + date.
- `sw.js` — the offline cache list. If you add new files, add their paths
  here too, and bump `CACHE_VERSION` so visitors pick up the change.
