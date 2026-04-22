import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Home, PoundSterling, BedDouble, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-london.jpg";
import { cn } from "@/lib/utils";

const tabs = ["For Sale", "To Rent", "New Homes"] as const;

const Counter = ({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(eased * to);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-GB", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

export const Hero = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]>("For Sale");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-navy-deep">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="London skyline at twilight"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-navy-deep/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container pt-40 pb-24 min-h-[100svh] flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">
            Your Edge in the UK Property Market
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl text-balance"
        >
          Find Your Perfect Home <em className="text-gold not-italic">Across the UK</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl"
        >
          Over 50,000 properties listed from London to Edinburgh — handpicked, expertly verified, beautifully presented.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-12 w-full max-w-5xl"
        >
          <div className="flex gap-1 mb-0">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-t-md transition-all duration-300 ease-luxe relative",
                  tab === t
                    ? "bg-cream text-navy"
                    : "bg-navy/40 text-cream/70 hover:bg-navy/60 hover:text-cream backdrop-blur-md"
                )}
              >
                {t}
                {tab === t && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute -bottom-px inset-x-0 h-px bg-gold"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="bg-cream rounded-md rounded-tl-none shadow-luxe p-2 md:p-3">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <Field icon={MapPin} placeholder="London, Manchester, Edinburgh…" className="md:col-span-4" />
              <Field icon={Home} placeholder="Property type" className="md:col-span-2" />
              <Field icon={PoundSterling} placeholder="Min price" className="md:col-span-2" />
              <Field icon={PoundSterling} placeholder="Max price" className="md:col-span-2" />
              <button className="md:col-span-2 group bg-gradient-gold text-navy font-semibold rounded-sm px-5 py-3.5 flex items-center justify-center gap-2 shadow-gold hover:shadow-luxe transition-all duration-500 ease-luxe">
                <Search size={16} />
                <span>Search</span>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 mt-2 px-2">
              <BedDouble size={14} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Bedrooms:</span>
              {["Studio", "1", "2", "3", "4", "5+"].map((b) => (
                <button
                  key={b}
                  className="text-xs px-3 py-1 rounded-full border border-border hover:border-gold hover:text-gold-dark transition-colors"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
        >
          {[
            { v: <Counter to={12430} />, l: "Active Listings" },
            { v: <><Counter to={98} />%</>, l: "Client Satisfaction" },
            { v: <>£<Counter to={2.3} decimals={1} />B</>, l: "Sold This Year" },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-md px-6 py-5"
            >
              <div className="font-display text-3xl text-gold">{s.v}</div>
              <div className="text-cream/70 text-xs uppercase tracking-widest mt-1">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/60 text-xs flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.3em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

const Field = ({
  icon: Icon,
  placeholder,
  className,
}: {
  icon: typeof MapPin;
  placeholder: string;
  className?: string;
}) => (
  <div
    className={cn(
      "flex items-center gap-2 px-3 py-3 rounded-sm border border-transparent focus-within:border-gold focus-within:bg-secondary/50 transition-all duration-300",
      className
    )}
  >
    <Icon size={16} className="text-muted-foreground shrink-0" />
    <input
      placeholder={placeholder}
      className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground text-navy"
    />
  </div>
);
