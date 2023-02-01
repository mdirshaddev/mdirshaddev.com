// Tailwind Global CSS File
import 'src/styles/global.css';

// My Own implementation of Theme Provider
import { ThemeProvider } from 'src/modules';

/**
 * It returns an HTML document with a head and a body. The body contains a ThemeProvider component that
 * wraps the children of the RootLayout component
 * @param props - React.PropsWithChildren
 * @returns A React component that renders an HTML document.
 */
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <title>Md Irshad - 💫 ServiceNow Developer</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </head>
      <body>
        <ThemeProvider enableSystem={true}>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
