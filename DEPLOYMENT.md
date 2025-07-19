# GitHub Pages Deployment Guide

This guide will help you deploy your Maria Luisa ESL Teacher portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your project pushed to a GitHub repository

## Setup Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `mariasite` (or your preferred name)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license

### 2. Update Repository Name

In `package.json`, update the homepage URL to match your GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/mariasite"
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mariasite.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. This will use the workflow we created in `.github/workflows/deploy.yml`

### 5. Install Dependencies and Deploy

```bash
npm install
npm run deploy
```

## Automatic Deployment

Once set up, every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your project
2. Deploy it to GitHub Pages

## Manual Deployment

If you want to deploy manually:

```bash
npm run build
npm run deploy
```

## Access Your Site

Your site will be available at: `https://YOUR_USERNAME.github.io/mariasite`

## Troubleshooting

### If the site doesn't load:
1. Check that the repository is public
2. Verify the homepage URL in package.json matches your GitHub username
3. Wait a few minutes for the first deployment to complete
4. Check the Actions tab in your repository for any build errors

### If assets don't load:
1. Make sure the base path in `vite.config.ts` matches your repository name
2. Clear your browser cache
3. Check the browser console for 404 errors

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS settings
3. Update the homepage in package.json to your custom domain 