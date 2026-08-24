/**
 * SENTEC asset routing: hosted paths preserve the managed preview, while local mode
 * serves the same source-controlled files from client/public/assets for standard hosting.
 */
const hostedAssets = {
  darkLogo: "/manus-storage/SENTECNEWWHITELOGO_2ba86ec2.webp",
  lightLogo: "/manus-storage/SENTECNEWLOGO_b206fe12.webp",
  heroTexture: "/manus-storage/sentec-hero-texture_fbda6e33.png",
  aboutTexture: "/manus-storage/sentec-about-texture_326034d4.png",
  projectTexture: "/manus-storage/sentec-project-texture_223a946e.png",
} as const;

const localAssets = {
  darkLogo: "/assets/SENTECNEWWHITELOGO.webp",
  lightLogo: "/assets/SENTECNEWLOGO.webp",
  heroTexture: "/assets/sentec-hero-texture.png",
  aboutTexture: "/assets/sentec-about-texture.png",
  projectTexture: "/assets/sentec-project-texture.png",
} as const;

export const siteAssets = import.meta.env.VITE_ASSET_MODE === "local" ? localAssets : hostedAssets;
