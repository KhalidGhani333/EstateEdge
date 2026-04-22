import { motion } from "framer-motion";
import { ShieldCheck, BadgePoundSterling, Globe2, Calculator } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "RICS Registered Agents",
    desc: "Every agent is fully RICS-accredited and bound by the highest professional standards in UK property.",
  },
  {
    icon: BadgePoundSterling,
    title: "No Hidden Fees",
    desc: "Transparent, upfront pricing with no surprise commissions, admin charges or renewal fees — ever.",
  },
  {
    icon: Globe2,
    title: "Rightmove & Zoopla Integrated",
    desc: "Your listing reaches millions instantly through full feed integration with the UK's leading portals.",
  },
  {
    icon: Calculator,
    title: "Free Mortgage Advice",
    desc: "FCA-regulated independent advisors help you find the most competitive rates across UK lenders.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-navy text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">Why EstateEdge</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream text-balance">
            A trusted edge in <em className="text-gold not-italic">every transaction</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 rounded-md bg-navy-light/40 backdrop-blur-sm border border-white/5 hover:border-gold/40 transition-all duration-500 ease-luxe hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-sm bg-gradient-gold text-navy flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500 ease-luxe">
                <f.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">{f.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
