# Deploy to Cloudflare Pages

This guide will walk you through deploying your zach7 landing page to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account with zach7.dev domain already configured

## Step 1: Push to GitHub

First, create a new repository on GitHub, then push your code:

```bash
# In the zach7-landing directory
git remote add origin https://github.com/YOUR_USERNAME/zach7-landing.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Navigate to https://dash.cloudflare.com
   - Go to **Workers & Pages** in the left sidebar

2. **Create New Pages Project**
   - Click **Create application**
   - Select the **Pages** tab
   - Click **Connect to Git**

3. **Connect GitHub Repository**
   - Authorize Cloudflare to access your GitHub account
   - Select the `zach7-landing` repository
   - Click **Begin setup**

## Step 3: Configure Build Settings

Use these **exact settings** in the Cloudflare Pages setup:

| Setting | Value |
|---------|-------|
| **Project name** | `zach7-landing` (or your choice) |
| **Production branch** | `main` |
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |

**Important:** Make sure to select "Next.js (Static HTML Export)" as the framework preset, not regular "Next.js".

## Step 4: Environment Variables (Optional)

For this landing page, no environment variables are needed. Skip this step.

## Step 5: Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Clone your repository
   - Run `npm install`
   - Run `npm run build`
   - Deploy the `out` directory to their global CDN

The first deployment takes 2-3 minutes.

## Step 6: Add Custom Domain

Once your site is deployed:

1. In the Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `zach7.dev`
4. Click **Continue**

Since your domain is already on Cloudflare, the DNS records will be configured **automatically**. No manual DNS changes needed!

You can also add `www.zach7.dev` as a second custom domain.

## Step 7: Verify Deployment

1. Wait for DNS to propagate (usually instant since domain is already on Cloudflare)
2. Visit https://zach7.dev
3. Your landing page should be live!

## Future Deployments

Every time you push to the `main` branch on GitHub, Cloudflare Pages will automatically rebuild and deploy your site.

### Preview Deployments

When you create a Pull Request, Cloudflare automatically creates a preview deployment with a unique URL for testing.

## Local Development

To run the site locally:

```bash
npm run dev
```

Visit http://localhost:3000

## Troubleshooting

### Build Fails

If the build fails:
- Check the build logs in Cloudflare Pages dashboard
- Make sure you selected "Next.js (Static HTML Export)" as framework preset
- Verify build output directory is set to `out`

### Domain Not Working

- Check that custom domain shows "Active" status in Cloudflare Pages
- Verify DNS propagation: https://dnschecker.org

### Need to Rebuild

To manually trigger a rebuild:
1. Go to Cloudflare Pages dashboard
2. Select your project
3. Click **Deployments** tab
4. Click **Retry deployment** or make a new commit to trigger rebuild

## What's Happening Under the Hood

1. **Static Export:** Your Next.js app is built as static HTML/CSS/JS
2. **Global CDN:** Files are distributed to Cloudflare's 200+ edge locations
3. **Automatic HTTPS:** SSL certificate is automatically provisioned
4. **Instant Updates:** New deployments go live in seconds

## Cost

Cloudflare Pages free tier includes:
- ✅ Unlimited projects
- ✅ Unlimited bandwidth
- ✅ Unlimited deployments
- ✅ 500 builds per month
- ✅ Concurrent builds: 1

This is more than enough for a landing page!

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Pages Limits](https://developers.cloudflare.com/pages/platform/limits/)
