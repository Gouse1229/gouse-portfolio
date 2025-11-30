# Deployment Guide for Render

This guide explains how to deploy both the frontend and backend to Render.

## Architecture

You'll need **2 separate services** on Render:
1. **Frontend** (Static Site) - Your React portfolio
2. **Backend** (Web Service) - API server for contact form

---

## Step 1: Deploy Backend API

### 1.1 Create New Web Service

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:

**Settings:**
- **Name**: `portfolio-backend` (or any name you prefer)
- **Environment**: `Node`
- **Build Command**: `cd server && npm install`
- **Start Command**: `cd server && npm start`
- **Plan**: Free tier is fine for testing

### 1.2 Set Environment Variables

In the Render dashboard, go to **Environment** tab and add:

```
NODE_ENV=production
PORT=10000
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

**Important**: 
- Use Gmail App Password (not regular password)
- Get it from: https://myaccount.google.com/apppasswords

### 1.3 Deploy

Click **"Create Web Service"** and wait for deployment.

**Note the URL**: You'll get something like `https://portfolio-backend-xxxx.onrender.com`

---

## Step 2: Deploy Frontend

### 2.1 Create New Static Site

1. In Render Dashboard, click **"New +"** → **"Static Site"**
2. Connect the same GitHub repository
3. Configure:

**Settings:**
- **Name**: `portfolio-frontend` (or any name)
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Plan**: Free tier

### 2.2 Set Environment Variables

Add to frontend environment variables:

```
VITE_API_URL=https://portfolio-backend-xxxx.onrender.com
```

**Replace** `portfolio-backend-xxxx.onrender.com` with your actual backend URL from Step 1.3.

### 2.3 Deploy

Click **"Create Static Site"** and wait for deployment.

---

## Step 3: Update CORS (if needed)

The backend already has CORS enabled, but if you encounter CORS errors, you can update `server/server.js`:

```javascript
app.use(cors({
  origin: ['https://your-frontend-url.onrender.com', 'http://localhost:5173'],
  credentials: true
}));
```

---

## Alternative: Single Repository with Monorepo Structure

If you prefer, you can keep everything in one repo and deploy both services from the same repository:

1. **Backend Service**: 
   - Root Directory: `server`
   - Build: `npm install`
   - Start: `npm start`

2. **Frontend Service**:
   - Root Directory: `/` (root)
   - Build: `npm install && npm run build`
   - Publish: `dist`

---

## Testing After Deployment

1. **Test Backend Health**: 
   - Visit: `https://your-backend-url.onrender.com/api/health`
   - Should return: `{"status":"ok","message":"Server is running"}`

2. **Test Contact Form**:
   - Go to your frontend URL
   - Fill out and submit the contact form
   - Check your email inbox

---

## Troubleshooting

### Backend not starting?
- Check Render logs for errors
- Verify all environment variables are set
- Ensure `server/package.json` has correct start script

### CORS errors?
- Verify `VITE_API_URL` matches your backend URL exactly
- Check backend CORS configuration

### Email not sending?
- Verify Gmail App Password is correct
- Check Render logs for email errors
- Ensure 2-Step Verification is enabled on Gmail

### Frontend can't connect to backend?
- Verify `VITE_API_URL` environment variable is set
- Check that backend URL is accessible
- Ensure backend service is running (not sleeping)

---

## Render Free Tier Notes

- Services may "sleep" after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- Consider upgrading to paid plan for always-on service

---

## Cost Estimate

- **Free Tier**: Both services free (with sleep limitations)
- **Paid Tier**: ~$7/month per service for always-on

---

## Quick Checklist

- [ ] Backend deployed and running
- [ ] Backend environment variables set
- [ ] Backend health check works
- [ ] Frontend deployed
- [ ] Frontend `VITE_API_URL` points to backend
- [ ] Contact form tested and working
- [ ] Email received successfully

