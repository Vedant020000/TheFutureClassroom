import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Introducing{" "}
          <span className="gradient-text text-shadow">Slate</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A dark, chat-first AI teaching assistant that helps teachers plan, personalize, and schedule lessons faster — while keeping classroom context and student needs front and center.
        </h2>
        
        <p className="text-lg mb-12 text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
          Slate combines natural-language lesson authoring, classroom memory, and a calendar-first workflow so you spend less time composing materials and more time teaching. Designed for real classrooms, built for privacy, and tuned to scale across classrooms and schools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
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
        
        <p className="text-sm text-muted-foreground/60">
          No credit card. Early access for teachers and schools.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;