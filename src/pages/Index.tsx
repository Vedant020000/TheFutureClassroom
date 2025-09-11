import Starfield from "@/components/Starfield";
import HeroSection from "@/components/HeroSection";
import BrainSection from "@/components/BrainSection";
import FeatureDetailSection from "@/components/FeatureDetailSection";
import ProgressSection from "@/components/ProgressSection";
import { useScrollSnap } from "@/hooks/useScrollSnap";
import { MessageSquare, Users, Calendar, BookOpen, Settings, BarChart } from "lucide-react";

const Index = () => {
  useScrollSnap();

  const features = [
    {
      title: "Chat",
      description: "Engage in natural conversations with your AI teaching assistant. Get instant lesson ideas, teaching strategies, and personalized recommendations based on your classroom needs.",
      icon: MessageSquare
    },
    {
      title: "Students",
      description: "Manage comprehensive student profiles with learning preferences, progress tracking, and personalized accommodations. Keep all student context in one secure place.",
      icon: Users
    },
    {
      title: "Lesson Bank",
      description: "Access a growing library of lesson templates, activities, and resources. Save, organize, and share your favorite teaching materials with colleagues.",
      icon: BookOpen
    },
    {
      title: "Calendar",
      description: "Seamlessly integrate lesson planning with your teaching schedule. Drag and drop lessons, set reminders, and sync with your existing calendar systems.",
      icon: Calendar
    },
    {
      title: "Resources",
      description: "Upload, organize, and reference your teaching materials with smart tagging and search. Link documents, videos, and other resources to your lessons.",
      icon: Settings
    },
    {
      title: "Analytics",
      description: "Track student progress, lesson effectiveness, and classroom insights with intuitive dashboards. Make data-driven decisions to improve learning outcomes.",
      icon: BarChart
    }
  ];

  return (
    <div className="relative">
      <Starfield />
      <HeroSection />
      <BrainSection />
      {features.map((feature, index) => (
        <FeatureDetailSection
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          reverse={index % 2 === 1}
        />
      ))}
      <ProgressSection />
    </div>
  );
};

export default Index;
