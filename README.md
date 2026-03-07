# Cryptids of Tennessee

A field guide to Tennessee's unclassified creatures, built with [Eleventy](https://www.11ty.dev/) and [Decap CMS](https://decapcms.org/).

---

## Getting Started (Local Development)

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
yarn install

# Start local dev server (http://localhost:8080)
yarn start
```

---

## Deploying to Netlify

1. Push this repo to GitHub (or GitLab/Bitbucket)
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
3. Connect your repo — Netlify will auto-detect the build settings from `netlify.toml`
4. Click **Deploy**

### Enabling the CMS (Decap CMS)

After your first deploy:

1. In Netlify: **Site settings → Identity → Enable Identity**
2. Under Identity settings → **Registration → Invite only**
3. Under Identity settings → **Services → Git Gateway → Enable Git Gateway**
4. Under Identity settings → **Emails → Templates**, set custom template paths:
  - Invitation: `/identity-email-templates/invitation.html`
  - Confirmation: `/identity-email-templates/confirmation.html`
  - Password recovery: `/identity-email-templates/recovery.html`
  - Email change: `/identity-email-templates/email-change.html`
  (These templates are versioned in `identity-email-templates/` at the project root.)
5. Save settings, then invite contributors via **Identity → Invite users** (enter their email)
6. Contributors visit `https://your-site.netlify.app/admin/` and accept the invite

Contributors can then log in and add/edit cryptid entries through a visual interface — no code required.

---

## Project Structure

```
src/
├── _data/          # Site-wide data (site.json, home.json)
├── _includes/      # Reusable template partials
├── _layouts/       # Page layouts (base.njk, cryptid.njk)
├── admin/          # Decap CMS (index.html + config.yml)
├── cryptids/       # Cryptid entries (Markdown files)
├── css/            # Stylesheet
├── js/             # JavaScript
├── about/          # About page
├── submit/         # Sighting submission form
└── index.njk       # Homepage
```

---

## Adding a Cryptid (Manual / Technical)

Create a new `.md` file in `src/cryptids/` with this frontmatter:

```markdown
---
title: Creature Name
region: East Tennessee
county: Sevier County
first_reported: "1950s"
status: Unverified # Unverified | Multiple Witnesses | Photographic Evidence | Disputed
danger: Unknown # Unknown | Low | Moderate | High | Extreme
summary: One or two sentence overview for the listing page.
image: /images/your-image.jpg # optional
image_caption: "" # optional
sightings:
  - date: "June 2005"
    location: "Near Gatlinburg"
    witness: "Anonymous"
    account: "Description of the encounter."
---

Your full entry text in Markdown here.
```

---

## Adding a Cryptid (CMS / Non-Technical)

Visit `/admin/` on your deployed site, log in, and use the **Cryptids** collection to create a new entry through the visual editor.

---

## Sighting Form

The submission form on `/submit/` uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend required. Submissions appear in your Netlify dashboard under **Forms**.

---

## Customizing Site Info

Edit `src/_data/site.json` to change the site title, description, and URL.
Edit `src/_data/home.json` to update the homepage intro text (also editable via the CMS).
