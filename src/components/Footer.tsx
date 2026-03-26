import { Activity, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-foreground/60" />
            <span className="font-display font-bold text-foreground text-sm">Pulsesent AI</span>
            <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">
              AI systems built to grow with you.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="mailto:ryan.pulsesent@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> ryan.pulsesent@gmail.com
            </a>
            <a href="tel:+14025958660" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> (402) 595-8660
            </a>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://www.linkedin.com/in/ryan-swanson-87963a300/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground/40 mt-8">
          © {new Date().getFullYear()} Pulsesent AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
