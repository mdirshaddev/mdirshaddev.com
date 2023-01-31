import 'src/styles/global.css';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <title>Md Irshad - 💫 ServiceNow Developer</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
