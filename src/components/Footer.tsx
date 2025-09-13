import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-white font-mono text-xl font-semibold tracking-wide">
              TheFutureClassroom
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering teachers with AI-driven lesson planning and classroom management tools.
              Join the waitlist to transform your teaching experience.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white font-mono text-lg font-medium tracking-wide mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href="mailto:vedantsondur020@gmail.com"
                  className="text-muted-foreground hover:text-white transition-colors duration-300 text-sm"
                >
                  vedantsondur020@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-white font-mono text-lg font-medium tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/the_future_classroom/"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/thefutureclassroom/"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-muted-foreground text-xs leading-relaxed">
                Stay updated with our latest features and educational insights.
                Join our community of innovative educators.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </footer>
  );
};

export default Footer;
