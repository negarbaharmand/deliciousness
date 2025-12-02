// src/styles/theme.js
export const theme = {
  bp: {
    xs: 360,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

// Convenience media-query helpers
export const mq = Object.fromEntries(
  Object.entries(theme.bp).map(([k, v]) => [k, `@media (max-width: ${v}px)`])
);
