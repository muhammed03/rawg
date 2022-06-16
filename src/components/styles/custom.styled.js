export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
};

export const color = {
  primary: '#fff',
  secondary: '#000',
  tertiary: '#6c6c6c',
  primaryBg: '#3b3b3b',
  secondaryBg: '#202020',
  tertiaryBg: '#303030',
};

export const gridColumns = {
  mobile: 1,
  tablet: 3,
  laptop: 4,
  laptopL: 5,
};
