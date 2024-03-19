const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ], 
  theme: {
    extend: {},
  },
  plugins:[
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fff",
            foreground: "#000000",
            primary: {
              50: "#EA580C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#EA580C",
             
            },
            focus: "#F182F6",
          },
        },
        
      },
    }),
  ],
}

