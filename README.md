# Xhaun Alexi S. Lozada — E-Portfolio

A self-contained, responsive portfolio built from the supplied CV. No installation, paid service, API key, or build command is needed. Uses HTML, CSS, and a small JavaScript file. All visuals are included as CSS/SVG, with no external font or image dependencies.

## Preview on your computer

Extract the ZIP, then double-click `index.html`. Keep `styles.css`, `script.js`, and `favicon.svg` in the same folder. The email-copy feature may require HTTPS; a manual copy message is provided when clipboard access is unavailable.

## Publish on GitHub Pages — no terminal needed

1. Sign in to GitHub and create a new **public** repository named `portfolio`. Initialize it with a README if needed so the upload controls are visible.
2. Open the repository, choose **Add file → Upload files**, and upload the **extracted files**, not the ZIP or its parent folder. `index.html` must appear directly at the top level of the repository. Replace the generated README with this one if desired.
3. Choose **Commit changes** to save the files on the `main` branch.
4. Go to the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
6. Wait for the Pages deployment to finish. Use the published URL shown on the Pages settings screen. If it has not appeared, check the repository's **Actions** tab for deployment progress or errors.

For a repository called `portfolio`, the expected address format is `https://YOUR-USERNAME.github.io/portfolio/`. Replace `YOUR-USERNAME` with your actual GitHub username. This is a template, not an already published website.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

For an address without `/portfolio/`, name the repository `YOUR-USERNAME.github.io` instead. Use your exact username.

## Edit your content

- `index.html`: text, projects, experience, education, email, and LinkedIn links.
- `styles.css`: colors, spacing, typography, desktop/mobile layouts. The main colors are at the top under `:root`.
- `script.js`: email-copy button and copyright year. If changing the email address, update it here and in `index.html`.
- `favicon.svg`: XA browser-tab icon.

To update the live site, edit or replace these files in GitHub and commit your changes. Pages will deploy the updated version.

## Add another project

Copy one complete `<article class="project"> ... </article>` block in `index.html`, paste it inside the `work` section before the additional-project paragraph, and replace its title, year, summary, tags, and expanded details with verified information.

To use a real project image, upload it under an `assets` folder and replace that project's visual div with, for example:

```html
<img src="assets/parking-system.jpg"
     alt="Actual parking-system interface showing detected parking slots"
     style="width:100%;height:auto;display:block" loading="lazy">
```

Use relative paths like `assets/photo.jpg` (without a leading slash) so files also work under a GitHub project URL. Match filename capitalization exactly.

## Content notes and useful additions

- The CV identifies you as a student; this version does not claim a completed degree. Education dates are reproduced as 2023–2026.
- Startup responsibilities are described as assigned/ongoing work, without claiming completed deployments or unreported results.
- Project graphics are labeled concept visuals, not system screenshots or experimental results.
- The Secure Mini Banking System is mentioned without invented implementation details.
- Your exact home address, phone number, and original CV PDF are not included in this public package. Your professional contact email and LinkedIn URL are included.
- Useful next additions: a professional portrait, actual project screenshots, repository/demo URLs, your individual contribution to each project, verified performance results, and certificate images.
- To add a downloadable CV, first create a public-safe PDF, place it in `assets/cv.pdf`, and add `<a href="assets/cv.pdf" download>Download CV</a>` where desired.

## Features

Responsive page layout, keyboard-accessible navigation, skip link, expandable native project details, email and LinkedIn links, copy-email feedback, reduced-motion support, and print styles. The core portfolio remains readable without JavaScript. No analytics or form backend is included. Clicking the email link opens the visitor's email app; it does not automatically send a message.
