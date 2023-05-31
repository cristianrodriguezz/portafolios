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
          heading: "#1f2937",
          body:"#111827",
          textPrimary:"#cbd5e1",
          textSecondary: "#9ca3af",
          bgCardPrimary: "#374151",
          bgCardSecondary: "#1f2937",
          bodyText: "#62807e",
          icon: "#c7d3d2",
          footer:"#1f2937"

        }
      }
    },
  },
  plugins: [],
};
