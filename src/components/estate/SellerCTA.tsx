import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const SellerCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-lg bg-gradient-navy text-cream p-10 md:p-16 lg:p-20 shadow-luxe"
        >
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />

          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">Sellers & Landlords</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                Selling or renting your <em className="text-gold not-italic">property?</em>
              </h2>
              <p className="mt-6 text-cream/75 max-w-xl text-lg">
                Receive a free, no-obligation valuation from a RICS-qualified local expert within 24 hours. We'll show you exactly what your home is worth in today's market.
              </p>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-3">
              <button className="group bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-sm flex items-center justify-center gap-3 shadow-gold hover:shadow-luxe transition-all duration-500 ease-luxe hover:-translate-y-0.5">
                Get Free Valuation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border border-cream/20 text-cream font-medium px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-500">
                Speak to an Agent
              </button>
              <p className="text-center text-cream/50 text-xs mt-2">
                Trusted by 12,000+ UK homeowners this year
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
