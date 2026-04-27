import { motion } from "framer-motion";
import { Warehouse, CheckCircle2 } from "lucide-react";

export const TerracedContext = () => (
  <div className="space-y-8">
    <div className="bg-navy/5 p-8 rounded-xl border border-navy/10">
      <h3 className="font-display text-2xl text-navy mb-4 flex items-center gap-3">
        <Warehouse className="text-gold-dark" /> Classic Terraced Homes
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Characterful and centrally located, our terraced homes offer the charm of period architecture combined with the convenience of urban living. Often featuring high ceilings and original features, these homes are a staple of British property.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Period Character Homes",
        "Central Urban Locations",
        "Original Victorian Features",
        "Excellent Investment Potential"
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border border-border">
          <CheckCircle2 className="text-gold-dark" size={20} />
          <span className="font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
