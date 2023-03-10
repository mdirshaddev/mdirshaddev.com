import 'src/app/globals.css';

import { GlobalFooter, GlobalHeader } from 'src/modules/layout';

import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Md Irshad - 💫 Software Developer',
  description: 'My Personal Website'
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
