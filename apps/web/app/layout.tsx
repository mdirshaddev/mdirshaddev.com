export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <title>Md Irshad - 💫 Software Developer</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
