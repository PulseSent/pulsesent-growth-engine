import { Activity, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Pulsesent" className="h-6 w-6" />
            <span className="font-display font-bold text-foreground">
              Pulse<span className="text-primary">sent</span>
            </span>
            <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">
              AI systems built to grow with you.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Pulsesent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
