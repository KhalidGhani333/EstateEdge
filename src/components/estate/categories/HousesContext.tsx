import { motion } from "framer-motion";
import { Home, CheckCircle2 } from "lucide-react";

export const HousesContext = () => (
  <div className="space-y-8">
    <div className="bg-navy/5 p-8 rounded-xl border border-navy/10">
      <h3 className="font-display text-2xl text-navy mb-4 flex items-center gap-3">
        <Home className="text-gold-dark" /> Luxury Houses & Estates
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Our house collection features everything from modern detached villas to historic country estates. Whether you're looking for extra garden space, a private driveway, or multiple floors for a growing family, our houses offer the ultimate in privacy and space.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Spacious Detached Properties",
        "Traditional Semi-Detached Homes",
        "Extended Family Residences",
        "Private Gardens & Driveways"
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border border-border">
          <CheckCircle2 className="text-gold-dark" size={20} />
          <span className="font-medium text-navy">{item}</span>
        </div>
      ))}
    </div>
  </div>
);
