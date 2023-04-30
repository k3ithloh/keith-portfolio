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
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 3.5s ease-out .8s infinite alternate both',
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' },
        },
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(2ch)' },
          '15%, 20%': { transform: 'translateX(4ch)' },
          '25%, 30%': { transform: 'translateX(7ch)' },
          '35%, 40%': { transform: 'translateX(10ch)' },
          '45%, 50%': { transform: 'translateX(13ch)' },
          '55%, 60%': { transform: 'translateX(16ch)' },
          '65%, 70%': { transform: 'translateX(19ch)' },
          '75%, 80%': { transform: 'translateX(21ch)' },
          '85%, 90%': { transform: 'translateX(24ch)' },
          '95%, 100%': { transform: 'translateX(25ch)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
