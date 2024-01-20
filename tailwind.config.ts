import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-color": "#303030",
      },
      boxShadow: {
        "upload-image":
          "inset 0 -0.0625rem 0 #b5b5b5,inset -0.0625rem 0 0 #e3e3e3,inset 0.0625rem 0 0 #e3e3e3,inset 0 0.0625rem 0 #e3e3e3",
      },
      backgroundColor: {
        header: "#1A1A1A",
        modal: "rgba(0, 0, 0, 0.8)",
      },
      width: {
        "table-wrapper": "min(1200px, 100% - 3rem)",
      },
      height: {
        header: "4rem",
      },
      gridTemplateColumns: {
        "header-3": "1fr minmax(auto, 36.25rem) 1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
