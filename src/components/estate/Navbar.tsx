import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const links = [
  { label: "Buy", to: "/listings?type=sale" },
  { label: "Rent", to: "/listings?type=rent" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Mortgages", to: "/#calculator" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxe",
        !isHome || scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0 group">
          <img src={logoImg} alt="EstateEdge Logo" className="h-14 md:h-16 w-auto object-contain" />
          <span className="font-display text-cream text-base md:text-lg tracking-wide group-hover:text-gold transition-colors">EstateEdge</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm text-cream/85 hover:text-gold transition-colors link-gold font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <button className="px-5 py-2.5 bg-gradient-gold text-navy font-semibold text-sm rounded-sm shadow-gold hover:shadow-luxe transition-all duration-500 ease-luxe hover:-translate-y-0.5">
              List Property
            </button>
          </Link>
        </div>

        <button
          className="lg:hidden text-cream"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-navy-deep border-t border-white/5"
          >
            <div className="container py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-cream/85 hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}>
                <button className="w-full px-5 py-3 bg-gradient-gold text-navy font-semibold rounded-sm">
                  List Property
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
