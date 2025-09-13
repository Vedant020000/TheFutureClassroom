import FeatureCard from "./FeatureCard";
import { Calendar, Users, Zap } from "lucide-react";

const ValueSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          What Slate does for teachers
        </h2>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <FeatureCard
            title="Plan"
            description="Generate editable lesson plans in seconds from plain language prompts."
            microcopy="Title, objectives, timings, materials — ready to drag to your calendar."
            icon={<Zap size={32} />}
          />
          <FeatureCard
            title="Personalize"
            description="Automatically adapt activities to student profiles and learning needs."
            microcopy="Differentiated instructions, scaffolds, and suggested interventions."
            icon={<Users size={32} />}
          />
          <FeatureCard
            title="Schedule"
            description="Drag lesson cards onto a calendar — with automatic reminders and version history."
            microcopy="One-click assign to classes, export to PDFs or LMS."
            icon={<Calendar size={32} />}
          />
        </div>

        <div className="text-center">
          <blockquote className="text-base sm:text-lg text-muted-foreground italic">
            "Saved me 8 hours/week on planning — 9/10 students were more engaged."
          </blockquote>
          <cite className="text-sm text-muted-foreground/70 mt-2 block">— Beta teacher</cite>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;