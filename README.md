# 🚀 Vinay Ninave | Full Stack Developer & GenAI Enthusiast

A high-performance, visually stunning portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Optimized for speed, responsiveness, and zero-backend deployment using serverless email integration.

## ✨ Key Features

- **💎 Premium UI/UX**: Modern glassmorphism design with smooth micro-animations.
- **📱 Fully Responsive**: Optimized for all devices from mobile to ultra-wide monitors.
- **📧 Serverless Contact Form**: Integrated with **Web3Forms** for direct email delivery (No Node.js backend needed).
- **⚡ Performance First**: Built with **Vite** for lightning-fast HMR and optimized production builds.
- **🌗 Mode Aware**: Sleek Dark/Light mode support with system preference detection.

## 🛠️ Tech Stack

- **Frontend**: React.js 18, Tailwind CSS, Framer Motion
- **Tooling**: Vite, PostCSS, Lucide Icons
- **Backend (Serverless)**: Web3Forms (Email API)
- **Deployment**: Vercel (SPA Optimized)

## 📁 Project Structure

```text
d:\portfolio\
├── public/          # Static assets (images, icons, resume)
├── src/             # Application logic
│   ├── api/         # API service (Web3Forms integration)
│   ├── components/  # Modular UI components
│   ├── data.js      # Centralized source of truth for portfolio content
│   └── index.css    # Design system & Tailwind layer configuration
├── vercel.json      # Routing configuration for Vercel
└── package.json     # Scripts & dependencies
```

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/ninavevinay/portfolio.git

# Install dependencies
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your Web3Forms Access Key:
```env
VITE_WEB3FORMS_KEY=your_access_key_here
```
*Get your free key at [web3forms.com](https://web3forms.com)*

### 4. Development
```bash
npm run dev
```

### 5. Production Build
```bash
npm run build
```

## 🌐 Deployment

This portfolio is optimized for **Vercel**. 
1. Push your code to GitHub.
2. Connect your repo to Vercel.
3. Add the `VITE_WEB3FORMS_KEY` in Vercel environment variables.
4. Deploy!

---

Built with ❤️ by [Vinay Ninave](https://github.com/ninavevinay)
