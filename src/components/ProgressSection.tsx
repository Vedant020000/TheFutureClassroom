const ProgressSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 py-12 sm:py-16 show-scrollbar">
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-oxanium font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Coming Soon.
        </h2>
        <p className="text-muted-foreground/60 text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 font-mono">
          ~Vedant Sondur
        </p>
      </div>
    </section>
  );
};

export default ProgressSection;