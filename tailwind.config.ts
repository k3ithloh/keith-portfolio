import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        silver : "#b2aca5",
        jet : "#3c3835",
        white : "#fdfdfc",
        ebony : "#626352",
        platinum : "#dcdcdd",
      },
    },
  },
  plugins: [],
} satisfies Config;
