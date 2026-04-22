import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Eleanor Whitfield",
    role: "Bought in Kensington",
    quote: "EstateEdge made buying our first London home feel effortless. Their team handled the legalities, the chain, even introduced us to a brilliant mortgage broker.",
  },
  {
    name: "Alistair MacGregor",
    role: "Sold in Edinburgh New Town",
    quote: "Sold our Georgian townhouse in 11 days at over the asking price. The marketing presentation was simply on another level — genuinely Awwwards-worthy.",
  },
  {
    name: "Priya Chatterjee",
    role: "Rented in Manchester",
    quote: "I relocated for work and had keys in hand within a fortnight. Transparent fees, honest advice, beautiful flat. I cannot recommend them highly enough.",
  },
  {
    name: "Henry Ashcombe-Lyons",
    role: "Investor, Greater London",
    quote: "I've worked with most of the big names. EstateEdge UK combines old-school British discretion with genuinely modern technology. They are now my only call.",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="py-24 md:py-32 bg-gradient-navy text-cream relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Quote className="mx-auto text-gold mb-8" size={56} strokeWidth={1} />

          <div className="relative min-h-[260px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="font-display text-2xl md:text-3xl lg:text-4xl text-cream leading-snug text-balance"
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="font-display text-lg text-cream">{t.name}</div>
              <div className="text-cream/60 text-sm">{t.role}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="h-10 w-10 rounded-full border border-gold/40 hover:bg-gold hover:text-navy text-gold transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-gold" : "w-1.5 bg-cream/30"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % testimonials.length)}
              className="h-10 w-10 rounded-full border border-gold/40 hover:bg-gold hover:text-navy text-gold transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
