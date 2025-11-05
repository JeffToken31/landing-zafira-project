import './globals.css';
import Footer from '@/app/components/sections/footer';
import Navbar from '@/app/components/sections/navbar';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <head>
        <title>Zafira Solidaire Project</title>
        <meta name="description" content="A simple app durable, maintenable and scalable" />
      </head>
      <body className="antialiased bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}