const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
  white: "#F9FCFD",
  black: "#100C53",
  blue: "#0000C2",
  green: "#46ECA1",
  purple: "#8330FF",
  gray: {
    "50": "#F2F3F8",
    "100": "#E7EAF2",
    "200": "#CFD0DC",
    "300": "#B4B4C7",
    "400": "#9695AE",
    "500": "#787696",
    "600": "#636188",
    "700": "#4A4878",
    "800": "#332F66",
    "900": "#1E1A5A",
  },
  error: "#FF568D",
  warning: "#FFB756",
};

const fallbackFonts = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji",
];

module.exports = {
  purge: ["./src/index.js", "./src/index.html"],
  mode: "jit",
  darkMode: false,
  theme: {
    colors,
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      headline: ["'SpaceGrotesk'", ...fallbackFonts],
      mono: ["'SpaceMono'", "monospace"],
      sans: ["Sora", ...fallbackFonts],
    },
    minWidth: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
    },
    boxShadow: {
      DEFAULT: "0 4px 0 0 rgba(87,83,122,0.05)",
      blue: `0 4px 0 0 ${colors.blue}`,
      purple: `0 4px 0 0 ${colors.purple}`,
      green: `0 4px 0 0 ${colors.green}`,
      inner: "inset 0 2px 0 0 rgba(87,83,122,0.05)",
      none: "none",
    },
    extend: {
      backgroundImage: {
        'sensor-page-header': "url('/images/sensor-page-header-pixels.svg')",
        'sensor-page-header-mobile': "url('/images/sensor-page-header-pixels-mobile.svg')",
      },
      animation: {
        borderpulse: "border-pulse 3s ease-in-out infinite",
        "borderpulse-blue": "border-pulse-blue 3s ease-in-out infinite",
        textpulse: "text-pulse 3s ease-out infinite",
        bgpulse: "bg-pulse 3s linear infinite",
      },
      keyframes: {
        "border-pulse": {
          "0%, 100%": {
            "border-color": colors.gray["200"],
            "box-shadow": `0 4px 0 0 rgba(87,83,122,0.05)`,
          },
          "25%": {
            "border-color": colors.purple,
            "box-shadow": `0 4px 0 0 ${colors.purple}`,
          },
          "50%": {
            "border-color": colors.blue,
            "box-shadow": `0 4px 0 0 ${colors.blue}`,
          },
          "75%": {
            "border-color": colors.green,
            "box-shadow": `0 4px 0 0 ${colors.green}`,
          },
        },
        "border-pulse-blue": {
          "0%, 100%": {
            "border-color": colors.blue,
            "box-shadow": `0 4px 0 0 ${colors.blue}`,
          },
          "33%": {
            "border-color": colors.green,
            "box-shadow": `0 4px 0 0 ${colors.green}`,
          },
          "66%": {
            "border-color": colors.purple,
            "box-shadow": `0 4px 0 0 ${colors.purple}`,
          },
        },
        "text-pulse": {
          "0%, 25%, 100%": { color: colors.purple },
          "50%": { color: colors.blue },
          "75%": { color: colors.green },
        },
        "bg-pulse": {
          "0%, 25%, 100%": { "background-color": colors.purple },
          "50%": { "background-color": colors.blue },
          "75%": { "background-color": colors.green },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline-green': { 'text-decoration-color': colors.green, },
        '.underline-blue': { 'text-decoration-color': colors.blue, },
        '.underline-purple': { 'text-decoration-color': colors.purple, },
        '.underline-gray': { 'text-decoration-color': colors.gray['200'], },
      }
      addUtilities(extendUnderline)
    }
  ],
};
