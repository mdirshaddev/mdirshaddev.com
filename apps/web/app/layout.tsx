// Tailwind Global CSS File
import 'src/styles/global.css';

// Custom Providers
import { ThemeProvider } from 'src/contexts';

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
