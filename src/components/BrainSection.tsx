import { useEffect, useRef, useState } from "react";
import { Brain, MessageSquare, Users, BookOpen, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Feature = {
  icon: typeof MessageSquare;
  title: string;
  description: string;
};

const features: Feature[] = [
  { icon: MessageSquare, title: "Chat", description: "AI conversations" },
  { icon: Users, title: "Students", description: "Profile management" },
  { icon: BookOpen, title: "Lesson Bank", description: "Template library" },
  { icon: Settings, title: "Resources", description: "Material management" },
];

const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
  const angleRad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
};

const connectorPath = (cx: number, cy: number, startR: number, endR: number, angleDeg: number) => {
  const start = polarToCartesian(cx, cy, startR, angleDeg);
  const end = polarToCartesian(cx, cy, endR, angleDeg);
  const midR = (startR + endR) / 2;
  const c1 = polarToCartesian(cx, cy, midR, angleDeg - 10); // Adjust angle for curvature
  const c2 = polarToCartesian(cx, cy, midR, angleDeg + 10); // Adjust angle for curvature
  return `M ${start.x},${start.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${end.x},${end.y}`;
};

const BrainSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [ringRadius, setRingRadius] = useState(200);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const brainNodeSize = 32; // w-32 h-32 for the central brain div
  const brainOuterRadius = brainNodeSize / 2; // Radius of the central brain circle

  const angles = [270, 315, 45, 90]; // positions around the ring

  useEffect(() => {
    const computeLayout = () => {
      const el = containerRef.current;
      const cardEl = cardRef.current;
      if (!el || !cardEl) return;

      const rect = el.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setCenter({ x: cx, y: cy });
      setCardDimensions({ width: cardRect.width, height: cardRect.height });

      const maxAvailableRadius = Math.min(rect.width, rect.height) / 2;
      
      // Minimum ringRadius should ensure the card is not overlapping with the brain
      // ringRadius is the center of the card
      const minRingRadiusForCard = brainOuterRadius + 150 + (cardRect.height / 2);
      setRingRadius(Math.max(minRingRadiusForCard, Math.min(400, maxAvailableRadius - (cardRect.height / 2) - 50)));

    };

    computeLayout();
    const ro = new ResizeObserver(computeLayout);
    if (containerRef.current) ro.observe(containerRef.current);
    if (cardRef.current) ro.observe(cardRef.current);

    window.addEventListener("resize", computeLayout);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computeLayout);
    };
  }, [brainOuterRadius]); // Depend on brainOuterRadius if it could change

  // Calculate connector start and end points dynamically
  const connectorStartRadius = brainOuterRadius + 50; // Start 50px from brain's edge
  const connectorEndRadius = ringRadius - (cardDimensions.height / 2) - 40; // End 40px before card's edge

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 relative align-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className={`text-center lg:text-left mb-12 sm:mb-16 transition-all duration-600 ease-out flex justify-center align-center ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            The power of AI, now in the hands of teachers
          </h2>
        </div>

        {/* Mobile: Simple grid layout */}
        <div className="block lg:hidden">
          <div className={`grid grid-cols-1 gap-4 mb-8 transition-all duration-600 ease-out delay-200 ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}>
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-4 sm:p-6 text-center hover:bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-foreground/40 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${600 + (idx * 100)}ms`
                }}
              >
                <feature.icon size={20} className="sm:w-6 sm:h-6 text-foreground/90 mb-3 mx-auto" />
                <h3 className="text-sm sm:text-base font-semibold leading-tight mb-1">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Original complex layout */}
        <div ref={containerRef} className={`hidden lg:block relative w-full h-[600px] transition-all duration-600 ease-out delay-200 ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
        }`}>
          {/* Central Brain */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-32 h-32 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-full flex items-center justify-center border border-foreground/30 shadow-[0_0_60px_rgba(255,255,255,0.06)] transition-all duration-600 ease-out delay-400 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75'
            }`}>
              <Brain size={48} className="text-foreground" />
            </div>
          </div>

          {/* Connection Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
            <defs>
              <linearGradient id="connectorGradientBrain" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {angles.map((angle, idx) => (
              <path
                key={idx}
                d={connectorPath(center.x, center.y, connectorStartRadius, connectorEndRadius, angle)}
                className="connector-path"
                stroke="url(#connectorGradientBrain)"
              />
            ))}
          </svg>

          {/* Feature Cards placed with polar coordinates */}
          {features.map((feature, idx) => {
            const angle = angles[idx % angles.length];
            const pos = polarToCartesian(center.x, center.y, ringRadius, angle);
            return (
              <div
                key={feature.title}
                className={`absolute group transition-all duration-600 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                  transitionDelay: `${600 + (idx * 100)}ms`
                }}
              >
                <div
                  ref={idx === 0 ? cardRef : null} // Attach ref to the first card to measure dimensions
                  className="w-44 sm:w-48 md:w-52 lg:w-56 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-3 sm:p-4 text-left hover:bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-foreground/40"
                >
                  <feature.icon size={18} className="text-foreground/90 mb-2" />
                  <h3 className="text-base font-semibold leading-tight mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrainSection;
