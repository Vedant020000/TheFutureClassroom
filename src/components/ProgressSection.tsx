import { Progress } from "@/components/ui/progress";

const ProgressSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Progress Card */}
        <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-12 mb-16 text-center hover:border-primary/30 transition-all duration-500">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Development Progress
          </h2>
          
          <div className="relative mb-6">
            <Progress value={43} className="w-full h-4 bg-muted/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm -z-10" />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">0%</span>
            <span className="text-primary font-semibold text-lg">43% Complete</span>
            <span className="text-muted-foreground">100%</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              We're building Slate from the ground up with teachers at the center of every decision. Our development roadmap focuses on creating genuinely useful tools that understand the complexity of real classrooms while maintaining the highest standards for privacy and security.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each feature is being carefully crafted through direct collaboration with educators, ensuring that Slate doesn't just add more technology to the classroom, but actually makes teaching more effective and enjoyable. We're committed to transparency throughout this process.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Join our beta community to help shape the future of AI-assisted teaching. Your feedback directly influences our priorities and helps us build something that truly serves the needs of educators and students alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;