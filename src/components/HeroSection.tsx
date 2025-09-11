import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Introducing{" "}
          <span className="gradient-text text-shadow">Slate</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button 
            variant="hero" 
            size="xl"
            className="w-full sm:w-auto"
            aria-label="Join the Slate waitlist"
          >
            Get on the waitlist
          </Button>
          <Button 
            variant="heroSecondary" 
            size="xl"
            className="w-full sm:w-auto"
            aria-label="See a demo lesson"
          >
            See a demo lesson
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;