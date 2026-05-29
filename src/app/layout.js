export const metadata = {
  title: "NBA Players",
  description: "Projeto NBA com Next.js",
};

export default function RootLayout({ children }) {

  return (

    <html lang="pt-BR">

      <body>

        {children}

      </body>

    </html>

  );

}