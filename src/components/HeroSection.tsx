import { Button } from "@/components/ui/button";
import WaitlistDialog from "@/components/WaitlistDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 show-scrollbar">
      <div className="text-center lg:text-left w-full max-w-6xl mx-auto ">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-8 sm:mb-12 flex flex-col lg:flex-row lg:items-center justify-center">
          Introducing <span className="gradient-text text-shadow lg:ml-10">Slate</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-center items-center lg:items-start flex items-center justify-center">
          <WaitlistDialog>
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto text-sm sm:text-lg px-6 sm:px-10"
              aria-label="Join the Slate waitlist"
            >
              Join the waitlist
            </Button>
          </WaitlistDialog>
          {/* <Button
            variant="heroSecondary"
            size="xl"
            className="w-full sm:w-auto text-sm sm:text-lg px-6 sm:px-10"
            aria-label="See a demo lesson"
          >
            See the demo
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;