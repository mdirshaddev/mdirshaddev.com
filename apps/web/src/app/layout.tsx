import 'src/app/globals.css';

import { GlobalFooter, GlobalHeader } from 'src/modules/layout';

export const metadata = {
  title: 'Md Irshad - 💫 Software Developer',
  description: 'My Personal Website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
