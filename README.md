# DevSpace — Developer Workspace Setup & Desk Gallery

DevSpace is a responsive workspace inspiration gallery. It helps users explore different desk and computer workspace setups, review their equipment and features, and compare estimated budgets.

## Live Demo

https://devspace-fed-05.netlify.app/

## Features

- Responsive homepage and workspace gallery
- Six workspace examples: Minimal, Creative, Professional, Gaming, Student, and Developer
- Individual detail view for each workspace
- Search across workspace information
- Category filtering
- Budget filtering
- Clear Filters control
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

The application is deployed on Netlify and connected to the GitHub `main` branch.

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: blank

Every push to `main` triggers a new deployment.

## Testing

The following checks were performed manually in the browser:

- Homepage loads successfully on the deployed website
- Workspace gallery displays
- Search and filters work
- Workspace detail pages open correctly
- Navigation works
- Desktop, tablet, and mobile layouts should be checked before final submission

## Screenshots

Project screenshots are stored in the `screenshots/` folder:

- `screenshots/homepage.png` — deployed homepage
- `screenshots/gallery-filters.png` — gallery and filtering
- `screenshots/workspace-details.png` — workspace detail page
- `screenshots/mobile-view.png` — mobile layout

Add the corresponding screenshots to this folder before final submission.

## Repository

https://github.com/AsHar523/DevSpace-FED-05
