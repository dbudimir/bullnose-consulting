export const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#7928ca",
    background: "#ffffff",
    text: "#333333",
    accent: "#f81ce5",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
};

export type Theme = typeof theme;
