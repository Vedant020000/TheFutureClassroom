import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  microcopy: string;
  icon?: ReactNode;
}

const FeatureCard = ({ title, description, microcopy, icon }: FeatureCardProps) => {
  return (
    <div className="card-hover rounded-xl p-8 text-center">
      {icon && (
        <div className="mb-6 flex justify-center">
          <div className="rounded-lg bg-secondary p-3 text-accent">
            {icon}
          </div>
        </div>
      )}
      <h3 className="mb-4 text-2xl font-bold text-foreground">{title}</h3>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      <p className="text-sm text-muted-foreground/80 leading-relaxed">{microcopy}</p>
    </div>
  );
};

export default FeatureCard;