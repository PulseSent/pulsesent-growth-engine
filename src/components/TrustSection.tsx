import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "Founder, GrowthLab Agency", quote: "Pulsesent transformed our lead generation. We went from manually chasing prospects to having a fully automated pipeline that books calls for us." },
  { name: "James Rodriguez", role: "CEO, QuickFix Services", quote: "The follow-up automation alone paid for itself in the first month. Our conversion rate tripled because no lead falls through the cracks anymore." },
  { name: "Priya Kapoor", role: "Director, WellCare Clinics", quote: "Our AI support handles 80% of patient inquiries automatically. Our staff can finally focus on what matters — patient care." },
];

const stats = [
  { value: 500, suffix: "+", label: "Hours Saved" },
  { value: 3, suffix: "x", label: "Avg. Lead Response Rate" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const TrustSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glow-card p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-5xl font-display font-extrabold text-foreground">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-foreground/30 text-foreground/30" />
                ))}
              </div>
              <p className="text-sm text-foreground/70 flex-1 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center font-display font-bold text-foreground/60 text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/80">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
