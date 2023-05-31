/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'lato':['Lato', 'sans-serif']
      },
      boxShadow:{
        pers: " 0px 1px 4px 0px rgba(0, 0, 0, 0.2)"
      },
      colors:{
        victoria:{
          buttonPrimary: "#2563eb",
          buttonSecondary:"#598EF3",
          heading: "#475569",
          body:"#1e293b",
          textPrimary:"#cbd5e1",
          textSecondary: "#94a0af",
          bgCardPrimary: "#334155",
          bgCardSecondary: "#1e293b",
          bodyText: "#62807e",
          icon: "#c7d3d2",
          footer:"#0f1825"

        }
      }
    },
  },
  plugins: [],
};
