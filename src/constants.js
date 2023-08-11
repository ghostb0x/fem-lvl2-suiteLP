export const COLORS = {
  white: 'hsl(30deg 29% 97%)',
  darkBlue: 'hsl(219deg 43% 16%)',
  gray: 'hsl(218deg 20% 36%)',
  cream: 'hsl(30deg 33% 93%)',
  purple: 'hsl(264deg 100% 69%)',
  pink: 'hsl(292deg 76% 54%)',
  orange: 'hsl(31deg 100% 65%)',
};

export const WEIGHTS = {
  regular: 400,
  medium: 550,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

