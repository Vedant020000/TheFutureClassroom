import { LucideIcon } from "lucide-react";

interface FeatureDetailSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imagePlaceholder?: string;
  reverse?: boolean;
}

const FeatureDetailSection = ({ title, description, icon: Icon, imagePlaceholder = "/placeholder.svg", reverse = false }: FeatureDetailSectionProps) => {
  return (
    <section className="min-h-screen flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-2' : ''} relative group`}>
            <div className="aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border border-border/50 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center space-y-4">
                  <Icon size={72} className="text-primary/40 mx-auto" />
                  <p className="text-sm text-muted-foreground">Feature Preview</p>
                </div>
              </div>
            </div>
            {/* Decorative gradient orb */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
          </div>
          
          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-8`}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-primary/30 shadow-lg">
                <Icon size={32} className="text-primary" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {title}
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <div className="pt-4">
              <button className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetailSection;