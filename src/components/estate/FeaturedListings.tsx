import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin, Heart, ArrowUpRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import { cn } from "@/lib/utils";

type Listing = {
  id: string;
  img: string;
  badge: "For Sale" | "To Rent";
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  epc: string;
  council: string;
  transport: string;
};

const listings: Listing[] = [
  {
    id: "1",
    img: p1,
    badge: "For Sale",
    price: "£1,250,000",
    title: "Edwardian Detached Residence",
    location: "Richmond, Surrey TW10",
    beds: 4, baths: 3, sqft: 2840,
    epc: "B", council: "Band G",
    transport: "8 min to Richmond Station",
  },
  {
    id: "2",
    img: p2,
    badge: "To Rent",
    price: "£650 pw",
    title: "Riverside Two-Bed Flat",
    location: "Canary Wharf, London E14",
    beds: 2, baths: 2, sqft: 980,
    epc: "A", council: "Band E",
    transport: "3 min to Canary Wharf Tube",
  },
  {
    id: "3",
    img: p3,
    badge: "For Sale",
    price: "£425,000",
    title: "Edwardian Semi with Garden",
    location: "Didsbury, Manchester M20",
    beds: 3, baths: 2, sqft: 1320,
    epc: "C", council: "Band D",
    transport: "12 min to East Didsbury Tram",
  },
  {
    id: "4",
    img: p4,
    badge: "For Sale",
    price: "£875,000",
    title: "Georgian Townhouse",
    location: "New Town, Edinburgh EH3",
    beds: 5, baths: 3, sqft: 2200,
    epc: "C", council: "Band F",
    transport: "5 min to Princes Street",
  },
  {
    id: "5",
    img: p5,
    badge: "For Sale",
    price: "£295,000",
    title: "Charming Terraced Home",
    location: "Edgbaston, Birmingham B15",
    beds: 2, baths: 1, sqft: 860,
    epc: "D", council: "Band C",
    transport: "10 min to Five Ways Station",
  },
  {
    id: "6",
    img: p6,
    badge: "To Rent",
    price: "£1,800 pcm",
    title: "Industrial Loft Studio",
    location: "Shoreditch, London E1",
    beds: 0, baths: 1, sqft: 540,
    epc: "B", council: "Band C",
    transport: "4 min to Shoreditch High St",
  },
];

export const FeaturedListings = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold-dark uppercase tracking-[0.3em] text-xs font-medium">
                Curated Selection
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance max-w-xl">
              Featured <em className="text-gold-dark not-italic">Properties</em>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/listings" className="group flex items-center gap-2 text-navy hover:text-gold-dark transition-colors font-medium">
              View all listings
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {listings.map((l, i) => (
            <ListingCard key={l.title} listing={l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ListingCard = ({ listing, index }: { listing: Listing; index: number }) => {
  const epcColors: Record<string, string> = {
    A: "bg-emerald-600",
    B: "bg-green-600",
    C: "bg-lime-500",
    D: "bg-yellow-500",
    E: "bg-orange-500",
    F: "bg-red-500",
    G: "bg-red-700",
  };
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-card rounded-md overflow-hidden shadow-soft hover-lift cursor-pointer"
    >
      <Link to={`/property/${listing.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={listing.img}
            alt={listing.title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={cn(
              "px-3 py-1 text-[11px] uppercase tracking-widest font-semibold rounded-sm",
              listing.badge === "For Sale" ? "bg-gradient-gold text-navy" : "bg-navy text-cream"
            )}>
              {listing.badge}
            </span>
            <span className={cn("flex items-center gap-1 px-2 py-1 text-[11px] text-white font-semibold rounded-sm", epcColors[listing.epc])}>
              <Zap size={11} /> EPC {listing.epc}
            </span>
          </div>

          <button className="absolute top-4 right-4 h-9 w-9 rounded-full bg-cream/95 backdrop-blur flex items-center justify-center text-navy hover:bg-gold hover:text-navy transition-colors">
            <Heart size={16} />
          </button>

          <div className="absolute bottom-4 inset-x-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-luxe">
            <div className="w-full bg-gradient-gold text-navy font-semibold py-2.5 rounded-sm flex items-center justify-center gap-2 shadow-gold text-center">
              View Details <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="font-display text-2xl text-navy">{listing.price}</div>
          <h3 className="mt-1 font-medium text-navy">{listing.title}</h3>
          <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
            <MapPin size={13} /> {listing.location}
          </div>

          <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
            <Spec icon={Bed} value={listing.beds === 0 ? "Studio" : `${listing.beds} bed`} />
            <Spec icon={Bath} value={`${listing.baths} bath`} />
            <Spec icon={Square} value={`${listing.sqft.toLocaleString()} sqft`} />
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground uppercase tracking-wider">
            <span>Council Tax {listing.council}</span>
            <span className="text-gold-dark">{listing.transport}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

const Spec = ({ icon: Icon, value }: { icon: typeof Bed; value: string }) => (
  <div className="flex items-center gap-1.5">
    <Icon size={15} className="text-gold-dark" />
    <span>{value}</span>
  </div>
);
