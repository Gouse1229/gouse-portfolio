# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, theme support, and a contact form integrated with a Spring Boot backend.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Theme Support**: Light and dark theme modes
- **Smooth Navigation**: Section-based navigation with scroll animations
- **Contact Form**: Integrated with Spring Boot backend API
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## 📦 Prerequisites

- Node.js 18+ and npm
- Backend API running (Spring Boot) - See [Backend Repository](https://github.com/your-username/portfolio-backend)

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-frontend-repo-url>
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL
# For local development
VITE_API_URL=http://localhost:8080

# For production, use your deployed backend URL
# VITE_API_URL=https://your-backend-url.onrender.com
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, PDFs, and other assets
│   ├── components/     # Reusable components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewChatbot.jsx
│   │   └── SectionNav.jsx
│   ├── context/        # React context providers
│   │   ├── NavigationContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── Portfolio.jsx
│   │   └── NotFound.jsx
│   ├── utils/          # Utility functions
│   │   └── themeStyles.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## 🎨 Pages

- **Home**: Landing page with introduction and quick links
- **Work Experience**: Professional work history
- **Projects**: Showcase of major projects and contributions
- **Education**: Academic background and qualifications
- **Skills**: Technical skills and tools expertise
- **Contact**: Contact form for inquiries (integrated with backend API)

## 🔌 Backend Integration

The frontend communicates with a Spring Boot backend API for the contact form:

- **Endpoint**: `POST /api/contact`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in working with you."
  }
  ```

The backend URL is configured via the `VITE_API_URL` environment variable.

## 🚢 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variable: `VITE_API_URL=https://your-backend-url.com`
3. Deploy

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variable: `VITE_API_URL=https://your-backend-url.com`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features in Detail

### Theme System
- Light and dark mode support
- Smooth theme transitions
- Theme preference persistence

### Animations
- Scroll-triggered animations using Framer Motion
- Smooth page transitions
- Interactive hover effects

### Contact Form
- Real-time validation
- Loading states
- Success/error feedback
- Integrated with Spring Boot backend

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:8080` |

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## 📄 License

Private and proprietary.

## 👤 Author

**Gouse Mohiddin Shaik**
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/gouse-mohiddin-shaik-2682b720b/)
- GitHub: [GitHub Profile](https://github.com/Gouse1229/)

---

Built with ❤️ using React and Vite

