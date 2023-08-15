import { createGlobalStyle } from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-darkBlue: ${COLORS.darkBlue};
  --color-gray: ${COLORS.gray};
  --color-cream: ${COLORS.cream};
  --color-purple: ${COLORS.purple};
  --color-pink: ${COLORS.pink};
  --color-orange: ${COLORS.orange};

  --font-weight-regular: ${WEIGHTS.regular};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};

  /* font shorthand follows pattern: 
  font-style font-weight font-size/line-height font-family */
  --font-h1-desktop: normal var(--font-weight-regular) 4.5rem/4.875rem Epilogue;
  --font-h1-tablet: normal var(--font-weight-regular) 3.5rem/4rem Epilogue;
  --font-h1-mobile: normal var(--font-weight-regular) 2.375rem/2.75rem Epilogue;

  /* h2 desktop bolded also used for callout stats on all viewports */
  --font-h2-desktop: normal var(--font-weight-regular) 3rem/3.5rem Epilogue;
  --font-h2-tablet: normal var(--font-weight-regular) 2.5rem/3rem Epilogue;
  --font-h2-mobile: normal var(--font-weight-regular) 2.5rem/3rem Epilogue;

  /* hm used on quote name */
  --font-hm: normal var(--font-weight-bold) 1.125rem/2rem Epilogue;
  /* hs used on callout stats subtitle and quote title/company */
  --font-hs: normal var(--font-weight-regular) 1rem/1.625rem Epilogue;

  --font-footer: normal var(--font-weight-regular) 0.9375rem/2rem Epilogue;

  --font-body-desktop: normal var(--font-weight-regular) 1.125rem/2rem Epilogue;
  --font-body-tablet: normal var(--font-weight-regular) 1rem/1.75rem Epilogue;
  --font-body-mobile: normal var(--font-weight-regular) 1rem/1.75rem Epilogue;

  --font-quote-desktop: normal var(--font-weight-regular) 1.25rem/2.1875rem Epilogue;
  --font-quote-tablet: normal var(--font-weight-regular) 1.125rem/2rem Epilogue;
  --font-quote-mobile: normal var(--font-weight-regular) 1.125rem/2rem Epilogue;

  --font-button-header-desktop: normal var(--font-weight-bold) 1rem/2rem Epilogue;
  --font-button-header-tablet: normal var(--font-weight-bold) 1rem/2rem Epilogue;
  --font-button-header-mobile: normal var(--font-weight-bold) 0.875rem/1.5rem Epilogue;

  --font-button-hero: normal var(--font-weight-bold) 1.125rem/2rem Epilogue;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: var(--color-gray-100);
  font-family: 'Crimson Pro', sans-serif;
}

/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
