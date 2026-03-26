import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Mail, Phone } from "lucide-react";
import RadarPulse from "./RadarPulse";

const CTABanner = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <RadarPulse />

      <div className="max-w-3xl mx-auto relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to put your growth on autopilot?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's talk about your business and find the smartest way to grow — no pressure, no pitch.
          </p>
          <Button size="lg" asChild className="relative overflow-hidden">
            <a href="https://calendly.com/ryan-pulsesent/pulsesent-ai-strategy-call" target="_blank" rel="noopener noreferrer">
              <Zap className="mr-2 h-4 w-4" /> Book Your Free Strategy Call
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" />
            </a>
          </Button>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-sm text-muted-foreground">
            <a href="mailto:ryan.pulsesent@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Mail className="h-4 w-4" /> ryan.pulsesent@gmail.com
            </a>
            <a href="tel:+14025958660" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> (402) 595-8660
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
