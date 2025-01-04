import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenMain: "#22c55e",
      },
      width: {
        "32rem": "32rem",
        "create-account-width": "38rem",
      },
      backgroundImage: {
        "create-account": "url('/loginBackground.jpg')",
        homepage: "url('/backgroundHome.jpg')",
        witcher:
          "url('https://images7.alphacoders.com/135/thumb-1920-1358613.jpeg')",
        fast9: "url('/fast9.jpg')",
        badboys: "url('/badboys.jpg')",
        chicago: "url('/chicago.jpg')",
      },
      padding: {
        "1/2": "30vh",
      },
      zIndex: {
        "100": "100",
      },
    },
  },
  plugins: [],
} satisfies Config;
