'use client';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center sm:text-left">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Section à supprimer et import herosection à la place
        </h1>
        <p className="text-lg mb-8 text-foreground/80 max-w-lg">
          This is a portfolio project for the Holberton School. Explore the
          sections below to see features and information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a
            href="#features"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-background hover:bg-primary-hover transition"
          >
            Discover Features
          </a>
          <a
            href="#about"
            className="rounded-full border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-background transition"
          >
            About Us
          </a>
        </div>
        
      </section>

      {/* Placeholder for Features Section */}
      <section id="features" className="px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          {' '}
          Section à supprimer et import featuressection à la place
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cards / Features will go here */}
        </div>
      </section>

      {/* Placeholder for About Section */}
      <section id="about" className="px-6 py-24 bg-background/80">
        <h2 className="text-3xl font-bold text-center mb-12">
          {' '}
          Section à supprimer et import aboutsection à la place
        </h2>
        <p className="max-w-3xl mx-auto text-center text-foreground/80">
          Information about the project, team, and goals goes here.
        </p>
      </section>
    </div>
  );
}
