import { LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import VideoJS from "./VideoJS";

interface FeatureDetailSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imagePlaceholder?: string;
  videoSrc?: string;
  reverse?: boolean;
}

const FeatureDetailSection = ({ title, description, icon: Icon, imagePlaceholder = "/placeholder.svg", videoSrc, reverse = false }: FeatureDetailSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const videoJsOptions = videoSrc ? {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted: true,
    loop: true,
    preload: 'metadata',
    poster: '/placeholder.svg',
    sources: [{
      src: videoSrc,
      type: 'video/mp4'
    }]
  } : null;

  const handlePlayerReady = (player: any) => {
    // Player is ready, you can handle events here if needed
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center lg:items-start transition-all duration-600 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        } ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-2' : ''} relative group transition-all duration-600 ease-out delay-200 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-0 ${reverse ? 'translate-x-12' : '-translate-x-12'}`
          }`}>
            <div className="aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border border-border/50 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-foreground/50 hover:shadow-2xl relative group">
              {videoSrc && videoJsOptions ? (
                <VideoJS
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
                  <div className="text-center space-y-4">
                    <Icon size={72} className="text-foreground/40 mx-auto" />
                    <p className="text-sm text-muted-foreground">Feature Preview</p>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative gradient orb */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6 sm:space-y-8 transition-all duration-600 ease-out delay-300 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : `opacity-0 ${reverse ? '-translate-x-12' : 'translate-x-12'}`
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-2xl flex items-center justify-center border border-foreground/30 shadow-lg flex-shrink-0">
                <Icon size={24} className="sm:w-8 sm:h-8 text-foreground" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent text-left">
                {title}
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-left">
              {description}
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="group inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
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