export const LINKS = {
  base: import.meta.env.BASE_URL,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  github: "https://github.com/nuerteyhanson9-sys",
  linkedin: "https://www.linkedin.com/in/hanson-nuertey-633b053b6",
  contra: "https://contra.com/hanson-nuertey",
  whatsapp: "https://wa.me/233509120845?text=Hi%20Hanson!%20I%27d%20like%20to%20work%20with%20you.",
  bekindLive: `${import.meta.env.BASE_URL}bekind/`,
  chowLive: `${import.meta.env.BASE_URL}chow-heaven/`,
  wedding: "https://nuerteyhanson9-sys.github.io/wedding-invitation/",
  apk: `${import.meta.env.BASE_URL}assets/shopwave.apk`
};

// Backend endpoint for the contact form (JSON POST).
export const BACKEND_URL =
  (import.meta.env.VITE_BACKEND_URL || "https://your-backend.onrender.com").replace(/\/$/, "");