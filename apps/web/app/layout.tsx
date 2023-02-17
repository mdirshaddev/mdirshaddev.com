// Tailwind Global CSS File
import 'src/styles/global.css';
import 'react-tippy/dist/tippy.css';

// My Own implementation of Theme Handling for this web app
import { ThemeProvider } from 'src/modules';

// Global Components
import { GlobalHeader, SearchPrompt } from 'src/shared/components';

/**
 * It renders the HTML document, including the global header, the main content, and the search prompt
 * @param props - React.PropsWithChildren
 */
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en' data-mode='dark'>
      <head>
        <title>Md Irshad - 💫 Full Stack Developer</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </head>
      <body>
        <ThemeProvider>
          <GlobalHeader />
          <main>{props.children}</main>
          <SearchPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
