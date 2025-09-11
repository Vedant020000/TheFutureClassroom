import { Brain, MessageSquare, Users, Calendar, BookOpen, Settings, BarChart } from "lucide-react";

const BrainSection = () => {
  const features = [
    { icon: MessageSquare, title: "Chat", description: "AI conversations", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-12" },
    { icon: Users, title: "Students", description: "Profile management", position: "top-1/4 right-0 translate-x-12" },
    { icon: BookOpen, title: "Lesson Bank", description: "Template library", position: "bottom-1/4 right-0 translate-x-12" },
    { icon: Calendar, title: "Calendar", description: "Schedule planning", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-12" },
    { icon: Settings, title: "Resources", description: "Material management", position: "bottom-1/4 left-0 -translate-x-12" },
    { icon: BarChart, title: "Analytics", description: "Progress tracking", position: "top-1/4 left-0 -translate-x-12" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="relative w-full max-w-4xl h-96">
        {/* Central Brain */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 shadow-2xl">
            <Brain size={60} className="text-primary drop-shadow-lg" />
          </div>
        </div>

        {/* Feature Cards */}
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`absolute ${feature.position} group cursor-pointer`}
          >
            <div className="w-36 h-24 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-4 text-center hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50">
              <feature.icon size={20} className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 4px rgba(138, 97, 255, 0.2))' }}>
          {features.map((_, index) => {
            const centerX = "50%";
            const centerY = "50%";
            let endX, endY;
            
            switch(index) {
              case 0: endX = "50%"; endY = "25%"; break;
              case 1: endX = "75%"; endY = "37.5%"; break;
              case 2: endX = "75%"; endY = "62.5%"; break;
              case 3: endX = "50%"; endY = "75%"; break;
              case 4: endX = "25%"; endY = "62.5%"; break;
              case 5: endX = "25%"; endY = "37.5%"; break;
              default: endX = "50%"; endY = "50%";
            }
            
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="url(#gradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default BrainSection;
