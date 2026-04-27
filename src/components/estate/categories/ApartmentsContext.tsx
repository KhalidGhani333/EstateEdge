import { motion } from "framer-motion";
import { Building, CheckCircle2 } from "lucide-react";

export const ApartmentsContext = () => (
  <div className="space-y-8">
    <div className="bg-navy/5 p-8 rounded-xl border border-navy/10">
      <h3 className="font-display text-2xl text-navy mb-4 flex items-center gap-3">
        <Building className="text-gold-dark" /> Modern Apartments & Penthouses
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Discover urban living at its finest. Our apartment portfolio ranges from sleek city-center studios to expansive riverside penthouses. Perfect for professionals, investors, or those seeking a low-maintenance lifestyle with premium amenities.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Luxury City Penthouses",
        "Modern Riverside Studios",
        "Concierge & Gym Services",
        "Underground Secure Parking"
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border border-border">
          <CheckCircle2 className="text-gold-dark" size={20} />
          <span className="font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
