import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.png";

const cols = [
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Property",
    links: ["Buy", "Rent", "New Homes", "Commercial"],
  },
  {
    title: "Help & Tools",
    links: ["Mortgage Calculator", "Area Guides", "Stamp Duty Calculator", "Energy Ratings"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Modern Slavery"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-cream pt-20 pb-10 border-t border-gold/10">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-0 mb-6">
              <img src={logoImg} alt="EstateEdge Logo" className="h-16 w-auto object-contain" />
              <span className="font-display text-cream text-lg tracking-wide">EstateEdge</span>
            </div>
            <p className="text-cream/65 text-sm max-w-sm leading-relaxed">
              Your edge in the UK property market. Premium listings, expert agents and transparent advice — from London to the Highlands.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-gold text-sm uppercase tracking-[0.25em] mb-5">{c.title}</h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-cream/70 hover:text-gold text-sm transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/50 text-xs">
            Powered By <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline transition-all">AxisTechGroup</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
