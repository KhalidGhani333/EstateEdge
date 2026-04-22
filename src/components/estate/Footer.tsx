import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
            <div className="flex items-center gap-2 mb-5">
              <div className="h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="font-display text-navy font-bold text-xl leading-none">E</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-cream text-2xl tracking-wide">EstateEdge</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">UK</div>
              </div>
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

        <div className="mt-16 pt-8 border-t border-cream/10 grid md:grid-cols-2 gap-6 items-center">
          <p className="text-cream/50 text-xs">
            © 2026 EstateEdge UK Ltd. All Rights Reserved. Registered in England & Wales No. 11428392.
          </p>
          <p className="text-cream/50 text-xs md:text-right">
            EstateEdge UK is authorised and regulated by the Financial Conduct Authority (FCA No. 845210). RICS Regulated Firm.
          </p>
        </div>
      </div>
    </footer>
  );
};
