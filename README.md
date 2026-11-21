# DevSpace — Developer Workspace Setup & Desk Gallery

DevSpace is a responsive workspace inspiration gallery. It helps users explore different desk and computer workspace setups, review their equipment and features, and compare estimated budgets.

## Features

- Responsive homepage and workspace gallery
- Six workspace examples: Minimal, Creative, Professional, Gaming, Student, and Developer
- Individual detail view for each workspace
- Search across workspace names, categories, descriptions, equipment, and features
- Category filtering
- Budget filtering
- Clear Filters control and results count
- Dark interface with purple accents

## Built With

- HTML
- CSS
- JavaScript (ES modules)
- Vite

Workspace information is stored in a JavaScript data array. The current project does not require a backend or database.

## Run Locally

### Requirements

- Node.js and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AsHar523/DevSpace-FED-05.git
   ```

2. Open the project folder:

   ```bash
   cd DevSpace-FED-05
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown in the terminal.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Vite generates the production files in the `dist` directory.

## Deployment

This project can be deployed to a static hosting service such as Netlify.

Recommended build settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: leave blank

Connect the GitHub repository to the hosting service and deploy the `main` branch. Add the final public deployment URL below after deployment.

**Live Demo:** To be added after deployment.

## Project Structure

```text
DevSpace-FED-05/
├── public/
├── src/
│   ├── assets/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Testing Checklist

Before final submission, verify the following in a browser:

- [ ] Homepage and navigation links
- [ ] All six workspace cards and their images
- [ ] Search by workspace name, category, and equipment
- [ ] Search with no matching result
- [ ] Each category filter
- [ ] Each budget filter
- [ ] Clear Filters resets search, category, and budget
- [ ] Each card opens the correct detail page
- [ ] Back to Gallery returns to the gallery
- [ ] Layout at desktop, tablet, and mobile widths
- [ ] Images load correctly
- [ ] Deployed website opens using its public URL

## Screenshots

Place project screenshots in a `screenshots/` folder and add them here:

- `screenshots/homepage.png`
- `screenshots/gallery-filters.png`
- `screenshots/workspace-details.png`
- `screenshots/mobile-view.png`

## Repository

[DevSpace-FED-05 on GitHub](https://github.com/AsHar523/DevSpace-FED-05)
