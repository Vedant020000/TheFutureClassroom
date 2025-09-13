import InteractiveParticleNetwork from "@/components/Starfield";
import HeroSection from "@/components/HeroSection";
import BrainSection from "@/components/BrainSection";
import FeatureDetailSection from "@/components/FeatureDetailSection";
import ProgressSection from "@/components/ProgressSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useScrollSnap } from "@/hooks/useScrollSnap";
import { MessageSquare, Users, BookOpen, Settings } from "lucide-react";

const Index = () => {
  useScrollSnap();

  const features = [
    {
      title: "Chat",
      description: "Engage in natural conversations with your AI teaching assistant. Get instant lesson ideas, teaching strategies, and personalized recommendations based on your classroom needs.",
      icon: MessageSquare,
      videoSrc: "/Chat.mp4"
    },
    {
      title: "Students",
      description: "Manage comprehensive student profiles with learning preferences, progress tracking, and personalized accommodations. Keep all student context in one secure place.",
      icon: Users,
      videoSrc: "/Students.mp4"
    },
    {
      title: "Lesson Bank",
      description: "Access a growing library of lesson templates, activities, and resources. Save, organize, and share your favorite teaching materials with colleagues.",
      icon: BookOpen,
      videoSrc: "/Lesson Bank.mp4"
    },
    {
      title: "Resources",
      description: "Upload, organize, and reference your teaching materials with smart tagging and search. Link documents, videos, and other resources to your lessons.",
      icon: Settings,
      videoSrc: "/Resources.mp4"
    },
  ];

  return (
    <div className="relative">
      <Header />
      <InteractiveParticleNetwork />
      <HeroSection />
      <BrainSection />
      {features.map((feature, index) => (
        <FeatureDetailSection
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          videoSrc={feature.videoSrc}
          reverse={index % 2 === 1}
        />
      ))}
      <ProgressSection />
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
