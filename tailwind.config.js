/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        display: ["\"Space Grotesk\"", "system-ui", "sans-serif"],
        body: ["\"Sora\"", "system-ui", "sans-serif"]
      },
      colors: {
        base: {
          900: "#0b0d12",
          800: "#10131a",
          700: "#151a23"
        },
        accent: {
          500: "#58e6d9",
          600: "#3bcbbd",
          700: "#2aa79b"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(88, 230, 217, 0.25)",
        glass: "0 10px 40px rgba(0, 0, 0, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
