import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const articles = [
  {
    cat: "Market Insights",
    date: "18 Apr 2026",
    title: "UK House Prices: Spring 2026 Outlook for Buyers",
    excerpt: "With the Bank of England signalling further rate cuts, our analysts unpack what this means for first-time buyers and remortgaging homeowners.",
    grad: "from-navy to-navy-light",
  },
  {
    cat: "First-Time Buyers",
    date: "12 Apr 2026",
    title: "Help to Buy is Back: What You Need to Know",
    excerpt: "A complete guide to the new generation of government-backed schemes — eligibility, deposits, and which lenders are participating.",
    grad: "from-gold-dark to-gold",
  },
  {
    cat: "Investment",
    date: "04 Apr 2026",
    title: "Northern Powerhouse: The Best Buy-to-Let Cities of 2026",
    excerpt: "Manchester, Leeds and Liverpool continue to deliver impressive yields. We rank the top postcodes for landlords this year.",
    grad: "from-navy-light to-navy-deep",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold-dark uppercase tracking-[0.3em] text-xs font-medium">Journal</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
              UK Property <em className="text-gold-dark not-italic">Market Insights</em>
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group flex items-center gap-2 text-navy hover:text-gold-dark transition-colors font-medium"
          >
            All articles
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card rounded-md overflow-hidden shadow-soft hover-lift cursor-pointer"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${a.grad} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }} />
                <div className="absolute top-5 left-5 px-3 py-1 bg-cream/95 backdrop-blur text-navy text-[11px] uppercase tracking-widest font-semibold rounded-sm">
                  {a.cat}
                </div>
                <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full bg-gold/0 group-hover:bg-gold flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={18} className="text-cream group-hover:text-navy transition-colors" />
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={13} /> {a.date}
                </div>
                <h3 className="mt-3 font-display text-xl md:text-2xl text-navy leading-snug group-hover:text-gold-dark transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-dark link-gold">
                  Read More
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
