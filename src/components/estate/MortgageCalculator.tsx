import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Info } from "lucide-react";

const formatGBP = (n: number) =>
  n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

// Simplified UK SDLT (residential, single home) bands as of 2025/26
const calcSDLT = (price: number) => {
  const bands = [
    { upTo: 250000, rate: 0 },
    { upTo: 925000, rate: 0.05 },
    { upTo: 1500000, rate: 0.1 },
    { upTo: Infinity, rate: 0.12 },
  ];
  let prev = 0;
  let tax = 0;
  for (const b of bands) {
    if (price > prev) {
      tax += (Math.min(price, b.upTo) - prev) * b.rate;
    }
    prev = b.upTo;
  }
  return Math.max(0, tax);
};

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={Math.round(value)}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="inline-block"
      >
        {prefix}{Math.round(value).toLocaleString("en-GB")}{suffix}
      </motion.span>
    </AnimatePresence>
  );
};

export const MortgageCalculator = () => {
  const [price, setPrice] = useState(450000);
  const [deposit, setDeposit] = useState(45000);
  const [rate, setRate] = useState(5.25);
  const [term, setTerm] = useState(25);

  const { monthly, total, ltv, sdlt } = useMemo(() => {
    const principal = Math.max(0, price - deposit);
    const r = rate / 100 / 12;
    const n = term * 12;
    const m = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
    return {
      monthly: isFinite(m) ? m : 0,
      total: isFinite(m) ? m * n : 0,
      ltv: price > 0 ? (principal / price) * 100 : 0,
      sdlt: calcSDLT(price),
    };
  }, [price, deposit, rate, term]);

  return (
    <section id="calculator" className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold-dark uppercase tracking-[0.3em] text-xs font-medium">Plan Your Move</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">
              Calculate Your <em className="text-gold-dark not-italic">Monthly Payments</em>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Live UK mortgage estimates with Stamp Duty Land Tax included. Adjust the sliders and watch your numbers update in real time.
            </p>

            <div className="mt-10 space-y-7">
              <Slider label="Property Value" value={price} setValue={setPrice} min={50000} max={3000000} step={5000} format={formatGBP} />
              <Slider label="Deposit Amount" value={deposit} setValue={setDeposit} min={0} max={Math.min(price, 1500000)} step={1000} format={formatGBP} />
              <Slider label="Interest Rate" value={rate} setValue={setRate} min={0.5} max={10} step={0.05} format={(v) => `${v.toFixed(2)}%`} />
              <Slider label="Mortgage Term" value={term} setValue={setTerm} min={5} max={40} step={1} format={(v) => `${v} years`} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <div className="relative bg-gradient-navy text-cream rounded-lg p-8 md:p-10 shadow-luxe">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center text-navy">
                  <Calculator size={18} />
                </div>
                <div>
                  <div className="text-cream/60 text-xs uppercase tracking-widest">Estimated</div>
                  <div className="font-display text-cream">Monthly Payment</div>
                </div>
              </div>

              <div className="font-display text-6xl md:text-7xl text-gold leading-none">
                <AnimatedNumber value={monthly} prefix="£" />
              </div>
              <div className="mt-2 text-cream/60 text-sm">per month over {term} years</div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <Stat label="Total Repayable" value={<AnimatedNumber value={total} prefix="£" />} />
                <Stat label="Loan-to-Value (LTV)" value={<AnimatedNumber value={ltv} suffix="%" />} />
                <Stat label="Stamp Duty (SDLT)" value={<AnimatedNumber value={sdlt} prefix="£" />} highlight />
                <Stat label="Loan Amount" value={<AnimatedNumber value={price - deposit} prefix="£" />} />
              </div>

              <div className="mt-8 p-4 rounded-sm bg-navy-deep/60 border border-gold/20 flex gap-3">
                <Info size={16} className="text-gold shrink-0 mt-0.5" />
                <p className="text-xs text-cream/70 leading-relaxed">
                  First-time buyers may qualify for SDLT relief. <span className="text-gold">Help to Buy</span> and <span className="text-gold">First Homes</span> schemes available on selected new builds.
                </p>
              </div>

              <button className="mt-6 w-full bg-gradient-gold text-navy font-semibold py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-gold hover:shadow-luxe transition-all duration-500 ease-luxe">
                <TrendingUp size={16} /> Speak to a Mortgage Advisor
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Slider = ({
  label, value, setValue, min, max, step, format,
}: {
  label: string; value: number; setValue: (v: number) => void;
  min: number; max: number; step: number; format: (v: number) => string;
}) => (
  <div>
    <div className="flex items-baseline justify-between mb-3">
      <label className="text-sm text-navy font-medium">{label}</label>
      <span className="font-display text-xl text-gold-dark">{format(value)}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(parseFloat(e.target.value))}
      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-cream-dark accent-gold"
      style={{
        background: `linear-gradient(to right, hsl(var(--gold)) 0%, hsl(var(--gold)) ${((value - min) / (max - min)) * 100}%, hsl(var(--cream-dark)) ${((value - min) / (max - min)) * 100}%, hsl(var(--cream-dark)) 100%)`,
      }}
    />
  </div>
);

const Stat = ({ label, value, highlight }: { label: string; value: React.ReactNode; highlight?: boolean }) => (
  <div className={`p-4 rounded-sm ${highlight ? "bg-gold/10 border border-gold/30" : "bg-navy-deep/40 border border-white/5"}`}>
    <div className="text-cream/60 text-[11px] uppercase tracking-widest">{label}</div>
    <div className="font-display text-xl text-cream mt-1">{value}</div>
  </div>
);
