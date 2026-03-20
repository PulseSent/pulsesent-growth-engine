import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
