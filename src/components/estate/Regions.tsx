import { motion } from "framer-motion";
import london from "@/assets/region-london.jpg";
import manchester from "@/assets/region-manchester.jpg";
import edinburgh from "@/assets/region-edinburgh.jpg";
import birmingham from "@/assets/region-birmingham.jpg";
import bristol from "@/assets/region-bristol.jpg";
import leeds from "@/assets/region-leeds.jpg";
import liverpool from "@/assets/region-liverpool.jpg";
import oxford from "@/assets/region-oxford.jpg";
import { ArrowUpRight } from "lucide-react";

const regions = [
  { name: "London", img: london, avg: "£687,000", listings: 18420, span: "lg:col-span-2 lg:row-span-2" },
  { name: "Manchester", img: manchester, avg: "£245,000", listings: 4820 },
  { name: "Edinburgh", img: edinburgh, avg: "£328,000", listings: 2940 },
  { name: "Birmingham", img: birmingham, avg: "£238,000", listings: 5210 },
  { name: "Bristol", img: bristol, avg: "£365,000", listings: 2680 },
  { name: "Leeds", img: leeds, avg: "£228,000", listings: 3140 },
  { name: "Liverpool", img: liverpool, avg: "£195,000", listings: 2890 },
  { name: "Oxford", img: oxford, avg: "£495,000", listings: 1240 },
];

export const Regions = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold-dark uppercase tracking-[0.3em] text-xs font-medium">Discover</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
            Explore the <em className="text-gold-dark not-italic">United Kingdom</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Eight iconic regions. Thousands of homes. One trusted partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {regions.map((r, i) => (
            <motion.button
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-md overflow-hidden cursor-pointer ${r.span ?? ""}`}
            >
              <img
                src={r.img}
                alt={r.name}
                loading="lazy"
                width={800}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/40 to-navy/10" />
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-gold/60 ring-inset transition-all duration-500" />

              <div className="relative h-full p-5 md:p-6 flex flex-col justify-between text-cream">
                <div className="self-end h-9 w-9 rounded-full bg-cream/0 group-hover:bg-gold flex items-center justify-center transition-all duration-500 ease-luxe">
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-navy transition-opacity duration-500" />
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl">{r.name}</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-cream/75">
                    <span className="text-gold font-medium">{r.avg}</span>
                    <span className="opacity-60">avg.</span>
                    <span className="opacity-60">·</span>
                    <span>{r.listings.toLocaleString()} listings</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
