import { Brain, MessageSquare, Users, Calendar, BookOpen, Settings, BarChart } from "lucide-react";

const BrainSection = () => {
  const features = [
    { icon: MessageSquare, title: "Chat", description: "AI conversations", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
    { icon: Users, title: "Students", description: "Profile management", position: "top-1/4 right-0 translate-x-4" },
    { icon: BookOpen, title: "Lesson Bank", description: "Template library", position: "bottom-1/4 right-0 translate-x-4" },
    { icon: Calendar, title: "Calendar", description: "Schedule planning", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4" },
    { icon: Settings, title: "Resources", description: "Material management", position: "bottom-1/4 left-0 -translate-x-4" },
    { icon: BarChart, title: "Analytics", description: "Progress tracking", position: "top-1/4 left-0 -translate-x-4" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="relative w-96 h-96">
        {/* Central Brain */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
            <Brain size={48} className="text-primary" />
          </div>
        </div>

        {/* Feature Cards */}
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`absolute ${feature.position} w-32 h-20 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 text-center hover:bg-card transition-colors`}
          >
            <feature.icon size={24} className="text-primary mx-auto mb-1" />
            <h3 className="text-sm font-semibold">{feature.title}</h3>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {features.map((_, index) => (
            <line
              key={index}
              x1="50%"
              y1="50%"
              x2={
                index === 0 ? "50%" :
                index === 1 ? "75%" :
                index === 2 ? "75%" :
                index === 3 ? "50%" :
                index === 4 ? "25%" : "25%"
              }
              y2={
                index === 0 ? "20%" :
                index === 1 ? "35%" :
                index === 2 ? "65%" :
                index === 3 ? "80%" :
                index === 4 ? "65%" : "35%"
              }
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default BrainSection;