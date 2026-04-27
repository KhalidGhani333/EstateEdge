import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const NewBuildsContext = () => (
  <div className="space-y-8">
    <div className="bg-navy/5 p-8 rounded-xl border border-navy/10">
      <h3 className="font-display text-2xl text-navy mb-4 flex items-center gap-3">
        <Sparkles className="text-gold-dark" /> Contemporary New Builds
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Be the first to live in a brand-new home. Our new build properties feature the latest in energy efficiency, smart home technology, and contemporary design. Many come with developer warranties and incentives for first-time buyers.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Energy Efficient Design",
        "10-Year Build Warranties",
        "Modern Smart Home Tech",
        "Developer Incentives"
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border border-border">
          <CheckCircle2 className="text-gold-dark" size={20} />
          <span className="font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
