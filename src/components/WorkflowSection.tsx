import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const messages = [
  { role: "client", text: "Hi, I was in a car accident last week. Can someone help me?" },
  { role: "ai", text: "I'm sorry to hear that. I'd be happy to help connect you with an attorney. When did the accident happen?" },
  { role: "client", text: "Last Thursday, on the highway." },
  { role: "ai", text: "Were you or anyone else injured in the accident?" },
  { role: "client", text: "Yes, I have back pain and went to the ER." },
  { role: "ai", text: "Thank you for sharing that. Based on your situation, I'd recommend a free consultation with one of our attorneys. Would you like to schedule one?" },
  { role: "client", text: "Yes, that would be great." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const WorkflowSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            See how AI responds to new client inquiries instantly
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Responds in seconds. Qualifies prospects. Helps book consultations automatically.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glow-card p-6 md:p-8 space-y-4 relative"
        >
          {/* Overlay label */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-sm px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              AI handling client inquiries in real time
            </span>
          </div>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className={`flex ${msg.role === "client" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "client"
                    ? "bg-foreground/5 border border-foreground/10 text-foreground/80"
                    : "bg-foreground/10 border border-foreground/15 text-foreground/90"
                }`}
              >
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">
                  {msg.role === "client" ? "Potential Client" : "AI Assistant"}
                </span>
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Booked confirmation */}
          <motion.div
            custom={messages.length}
            variants={fadeUp}
            className="flex justify-center pt-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-5 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-foreground/80">
                Consultation booked — Friday at 2:00 PM
              </span>
            </div>
          </motion.div>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Your AI works 24/7 — so you never miss a potential client again.
        </p>
      </div>
    </section>
  );
};

export default WorkflowSection;
