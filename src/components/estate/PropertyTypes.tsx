import { motion } from "framer-motion";
import { Home, Building2, Building, Warehouse, TreePine, Sparkles, Briefcase, GraduationCap } from "lucide-react";

const types = [
  { icon: Home, label: "Detached House", count: "3,240" },
  { icon: Building2, label: "Semi-Detached", count: "5,180" },
  { icon: Building, label: "Flat / Apartment", count: "8,920" },
  { icon: Warehouse, label: "Terraced", count: "4,650" },
  { icon: TreePine, label: "Bungalow", count: "1,420" },
  { icon: Sparkles, label: "New Build", count: "2,310" },
  { icon: Briefcase, label: "Commercial", count: "890" },
  { icon: GraduationCap, label: "Student", count: "1,640" },
];

export const PropertyTypes = () => {
  return (
    <section className="py-24 md:py-32 bg-cream relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold-dark uppercase tracking-[0.3em] text-xs font-medium">Categories</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
            Browse by <em className="text-gold-dark not-italic">Property Type</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From Georgian townhouses to riverside flats — find the home that suits your life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {types.map((t, i) => (
            <motion.button
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card rounded-md p-6 md:p-8 text-left shadow-soft hover:shadow-luxe transition-all duration-500 ease-luxe hover:-translate-y-1 border border-transparent hover:border-gold/40 overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-all duration-700 ease-luxe" />
              <div className="relative">
                <div className="h-12 w-12 rounded-sm bg-navy text-gold flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-navy transition-all duration-500 ease-luxe">
                  <t.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="font-display text-lg text-navy group-hover:text-gold-dark transition-colors">
                  {t.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{t.count} listings</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
