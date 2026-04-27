import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

export const CommercialContext = () => (
  <div className="space-y-8">
    <div className="bg-navy/5 p-8 rounded-xl border border-navy/10">
      <h3 className="font-display text-2xl text-navy mb-4 flex items-center gap-3">
        <Briefcase className="text-gold-dark" /> Commercial & Investment
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Expand your business or portfolio with our commercial listings. From prime retail spaces and modern offices to industrial units, we help you find the right environment for your commercial goals.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Prime Retail Locations",
        "Modern Office Complexes",
        "Industrial & Warehousing",
        "High Yield Investments"
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border border-border">
          <CheckCircle2 className="text-gold-dark" size={20} />
          <span className="font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
