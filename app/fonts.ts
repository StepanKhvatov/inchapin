import localFont from 'next/font/local';

export const proximaNova = localFont({
  src: [
    {
      path: '../public/fonts/ProximaNova/ProximaNova-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/ProximaNova/ProximaNova-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ProximaNova/ProximaNova-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/ProximaNova/ProximaNova-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-proxima',
  display: 'swap',
});
