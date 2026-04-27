import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/estate/Navbar";
import { Footer } from "@/components/estate/Footer";
import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin, Zap, ArrowLeft, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

const listings = [
  { id: "1", img: p1, badge: "For Sale", price: "£1,250,000", title: "Edwardian Detached Residence", location: "Richmond, Surrey TW10", beds: 4, baths: 3, sqft: 2840, epc: "B", council: "Band G", transport: "8 min to Richmond Station" },
  { id: "2", img: p2, badge: "To Rent", price: "£650 pw", title: "Riverside Two-Bed Flat", location: "Canary Wharf, London E14", beds: 2, baths: 2, sqft: 980, epc: "A", council: "Band E", transport: "3 min to Canary Wharf Tube" },
  { id: "3", img: p3, badge: "For Sale", price: "£425,000", title: "Edwardian Semi with Garden", location: "Didsbury, Manchester M20", beds: 3, baths: 2, sqft: 1320, epc: "C", council: "Band D", transport: "12 min to East Didsbury Tram" },
  { id: "4", img: p4, badge: "For Sale", price: "£875,000", title: "Georgian Townhouse", location: "New Town, Edinburgh EH3", beds: 5, baths: 3, sqft: 2200, epc: "C", council: "Band F", transport: "5 min to Princes Street" },
  { id: "5", img: p5, badge: "For Sale", price: "£295,000", title: "Charming Terraced Home", location: "Edgbaston, Birmingham B15", beds: 2, baths: 1, sqft: 860, epc: "D", council: "Band C", transport: "10 min to Five Ways Station" },
  { id: "6", img: p6, badge: "To Rent", price: "£1,800 pcm", title: "Industrial Loft Studio", location: "Shoreditch, London E1", beds: 0, baths: 1, sqft: 540, epc: "B", council: "Band C", transport: "4 min to Shoreditch High St" },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const listing = listings.find(l => l.id === id) || listings[0];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container">
          <Link to="/listings" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-dark transition-colors mb-8">
            <ArrowLeft size={16} /> Back to listings
          </Link>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-luxe">
                  <img src={listing.img} alt={listing.title} className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-gradient-gold text-navy text-xs uppercase tracking-widest font-bold rounded-sm shadow-gold">
                      {listing.badge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                  <div>
                    <h1 className="font-display text-3xl md:text-5xl text-navy mb-2">{listing.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} className="text-gold-dark" />
                      {listing.location}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-display text-gold-dark">
                    {listing.price}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="p-4 bg-card border border-border rounded-lg text-center">
                    <Bed className="mx-auto mb-2 text-gold-dark" />
                    <div className="text-sm text-muted-foreground uppercase tracking-wider text-[10px]">Bedrooms</div>
                    <div className="font-semibold text-navy">{listing.beds === 0 ? "Studio" : listing.beds}</div>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg text-center">
                    <Bath className="mx-auto mb-2 text-gold-dark" />
                    <div className="text-sm text-muted-foreground uppercase tracking-wider text-[10px]">Bathrooms</div>
                    <div className="font-semibold text-navy">{listing.baths}</div>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg text-center">
                    <Square className="mx-auto mb-2 text-gold-dark" />
                    <div className="text-sm text-muted-foreground uppercase tracking-wider text-[10px]">Area</div>
                    <div className="font-semibold text-navy">{listing.sqft} sqft</div>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg text-center">
                    <Zap className="mx-auto mb-2 text-gold-dark" />
                    <div className="text-sm text-muted-foreground uppercase tracking-wider text-[10px]">EPC Rating</div>
                    <div className="font-semibold text-navy">{listing.epc}</div>
                  </div>
                </div>

                <div className="prose prose-navy max-w-none">
                  <h3 className="font-display text-2xl text-navy mb-4">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This exceptional property offers a unique blend of historical charm and modern luxury. Recently renovated to the highest standards, the interior features spacious living areas, high ceilings, and premium finishes throughout. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The heart of the home is the expansive open-plan kitchen and dining area, perfect for entertaining. Large windows flood the space with natural light and provide stunning views of the surrounding area. Each bedroom has been thoughtfully designed to provide a tranquil retreat, with the master suite benefiting from a private en-suite bathroom.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-navy p-8 rounded-xl text-cream shadow-luxe">
                  <h3 className="font-display text-2xl mb-6">Book a Viewing</h3>
                  <form className="space-y-4">
                    <Input className="bg-white/10 border-white/20 text-cream placeholder:text-cream/50" placeholder="Your Name" />
                    <Input className="bg-white/10 border-white/20 text-cream placeholder:text-cream/50" placeholder="Email Address" />
                    <Input className="bg-white/10 border-white/20 text-cream placeholder:text-cream/50" placeholder="Phone Number" />
                    <Button className="w-full bg-gradient-gold text-navy hover:shadow-gold transition-all duration-300 font-bold">
                      <Calendar className="mr-2 h-4 w-4" /> Request Viewing
                    </Button>
                  </form>
                  <p className="mt-4 text-[10px] text-cream/40 text-center">
                    By clicking "Request Viewing", you agree to our terms and privacy policy.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
                  <h3 className="font-display text-xl text-navy mb-4">Property Info</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Council Tax</span>
                      <span className="font-medium text-navy">{listing.council}</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Tenure</span>
                      <span className="font-medium text-navy">Freehold</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span className="text-muted-foreground">Nearest Station</span>
                      <span className="font-medium text-gold-dark">{listing.transport}</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6 border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white">
                    <Info className="mr-2 h-4 w-4" /> Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PropertyDetail;
