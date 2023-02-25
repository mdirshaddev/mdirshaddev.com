export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en' data-mode='dark'>
      <head>
        <title>Md Irshad - 💫 Software Developer</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
