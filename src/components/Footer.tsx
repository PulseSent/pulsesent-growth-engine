import { Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Pulsesent" className="h-5 w-5 invert" />
            <span className="font-display font-bold text-foreground text-sm">Pulsesent</span>
            <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">
              AI systems built to grow with you.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground/40 mt-8">
          © {new Date().getFullYear()} Pulsesent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
