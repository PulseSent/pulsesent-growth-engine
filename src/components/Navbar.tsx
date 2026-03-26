import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Activity, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "https://calendly.com/ryan-pulsesent/pulsesent-ai-strategy-call" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark border-b border-foreground/10" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-foreground" />
          <span className="text-lg font-display font-bold text-foreground">
            Pulsesent AI
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild className="border-foreground/20 text-foreground hover:bg-foreground/5">
            <a href="https://calendly.com/ryan-pulsesent/pulsesent-ai-strategy-call" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass-dark border-b border-foreground/10 px-6 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <Button variant="outline" className="w-full mt-2 border-foreground/20 text-foreground" asChild>
            <a href="https://calendly.com/ryan-pulsesent/pulsesent-ai-strategy-call" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Book a Free Call</a>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
