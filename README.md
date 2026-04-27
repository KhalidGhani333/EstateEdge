# EstateEdge Agency

A modern real estate agency platform focused on the UK market.

## Deployment to Vercel via GitHub

To deploy this project to Vercel, follow these steps:

1.  **Push to GitHub:**
    *   Initialize a git repository if you haven't already: `git init`
    *   Add your files: `git add .`
    *   Commit your changes: `git commit -m "Prepare for Vercel deployment"`
    *   Create a new repository on GitHub and push your code:
        ```bash
        git remote add origin <your-github-repo-url>
        git branch -M main
        git push -u origin main
        ```

2.  **Connect to Vercel:**
    *   Go to [Vercel](https://vercel.com/) and log in.
    *   Click **"Add New"** -> **"Project"**.
    *   Import your GitHub repository.
    *   Vercel should automatically detect **Vite** as the framework.
    *   Keep the default build settings:
        *   **Build Command:** `npm run build` or `vite build`
        *   **Output Directory:** `dist`
        *   **Install Command:** `npm install`
    *   Click **"Deploy"**.

## Features Included for Vercel

*   **SPA Routing:** A `vercel.json` file is included to ensure that page refreshes on sub-routes (like `/about` or `/listings`) work correctly by redirecting to `index.html`.
*   **Case Sensitivity Check:** The project has been checked for case-sensitive imports to ensure it builds correctly on Vercel's Linux environment.

## Note on Package Managers

The project contains both `package-lock.json` and `bun.lock`. It is recommended to use one package manager consistently. If you prefer `npm`, ensure `package-lock.json` is up to date. If you prefer `bun`, Vercel supports it natively if `bun.lockb` is present.
