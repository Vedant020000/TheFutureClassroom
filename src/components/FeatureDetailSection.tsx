import { LucideIcon } from "lucide-react";

interface FeatureDetailSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imagePlaceholder?: string;
}

const FeatureDetailSection = ({ title, description, icon: Icon, imagePlaceholder = "/placeholder.svg" }: FeatureDetailSectionProps) => {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on left */}
          <div className="order-2 md:order-1">
            <div className="aspect-video bg-muted/20 rounded-lg border border-border flex items-center justify-center">
              <img 
                src={imagePlaceholder} 
                alt={`${title} feature preview`}
                className="w-full h-full object-cover rounded-lg opacity-50"
              />
            </div>
          </div>
          
          {/* Content on right */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon size={24} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetailSection;