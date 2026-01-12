# Contact Form Setup Guide

Your landing page now has a beautiful contact form modal! Here's how to complete the setup:

## Step 1: Get Your Web3Forms Access Key (Free)

1. **Go to** [https://web3forms.com](https://web3forms.com)
2. **Click** "Get Started" or "Sign Up"
3. **Enter your email:** `elliott.zach@gmail.com` (or any email you prefer)
4. **Verify your email** - Check your inbox for verification link
5. **Copy your Access Key** - After verification, you'll see your unique access key

## Step 2: Configure Your Environment Variable

### For Local Development:

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your access key:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

### For Cloudflare Pages:

1. **Go to** Cloudflare Dashboard
2. Select your **zach7-landing** project
3. Go to **Settings** → **Environment variables**
4. Click **Add variable**
5. Set:
   - **Variable name:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value:** Your access key from Web3Forms
   - **Environment:** Production (and Preview if you want)
6. Click **Save**
7. **Redeploy** your site (or push a new commit)

## Step 3: Configure Web3Forms (Optional)

In your Web3Forms dashboard, you can:

1. **Set the recipient email** to `hello@zach7.dev`
2. **Enable spam protection** (recommended)
3. **Customize email templates**
4. **Set up auto-responders** (to thank people for contacting you)
5. **View submission history**

## How It Works

When someone fills out the contact form:
1. Form data is sent to Web3Forms API
2. Web3Forms forwards it to your email (`hello@zach7.dev`)
3. You get an email notification
4. The sender sees a success message

## Testing

1. Make sure you've added the environment variable
2. Build and run locally: `npm run dev`
3. Click "Get in Touch" button
4. Fill out the form and submit
5. Check your email!

## Features

✅ No backend code needed
✅ Spam protection built-in
✅ Beautiful modal design
✅ Loading states and error handling
✅ Success/error messages
✅ Auto-closes after successful submission
✅ Fully accessible and keyboard-friendly
✅ Matches your blue theme

## Free Tier Limits

Web3Forms free tier includes:
- 250 submissions per month
- Email notifications
- Spam protection
- No branding required

Perfect for a landing page!

## Need Help?

If you run into issues:
1. Check that the environment variable is set correctly
2. Verify your Web3Forms account is activated
3. Check browser console for any errors
4. Make sure the form fields are filled out correctly

---

**That's it!** Your contact form is ready to go. 🎉
