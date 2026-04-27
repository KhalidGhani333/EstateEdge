import { motion } from "framer-motion";
import { TreePine, CheckCircle2 } from "lucide-react";

export const BungalowsContext = () => (
  <div className="space-y-8">
    <div className="bg-navy/5 p-8 rounded-xl border border-navy/10">
      <h3 className="font-display text-2xl text-navy mb-4 flex items-center gap-3">
        <TreePine className="text-gold-dark" /> Single-Level Bungalows
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Experience the ease of single-level living. Our bungalows are carefully selected for their accessibility, spacious layouts, and often generous plot sizes. Ideal for those looking to downsize or seeking a home without the hassle of stairs.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Accessible Single-Floor Layouts",
        "Generous Plot Sizes",
        "Quiet Residential Areas",
        "Refurbished Modern Interiors"
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border border-border">
          <CheckCircle2 className="text-gold-dark" size={20} />
          <span className="font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
