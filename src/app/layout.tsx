import '@/app/globals.css';
import Navbar from '@/app/components/sections/navbar';
import Footer from '@/app/components/sections/footer';
import BackgroundBubbles from '@/app/components/Backgroundbublles';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>Zafira Landing Page</title>
        <meta
          name="description"
          content="A durable, maintainable and scalable portfolio project"
        />
      </head>
      <body className="relative antialiased bg-background text-foreground font-body">
        <BackgroundBubbles />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
