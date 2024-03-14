/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        nintendo: '0px 0px 14px 4px rgba(255, 0, 0, 0.4), 0 0px 8px 2px rgba(255, 0, 0, 0.06)',
        playstation: '0 0px 14px 4px rgba(107, 114, 128, 0.4), 0 0px 8px 2px rgba(107, 114, 128, 0.06)',
        xbox: '0px 0px 14px 4px rgba(60, 230, 120, 0.4), 0 0px 8px 2px rgba(52, 211, 153, 0.06)',
        steam: '0px 0px 14px 4px rgba(59, 130, 246, 0.4), 0 0px 8px 2px rgba(59, 130, 246, 0.06)',
      },
    },
  },
};
