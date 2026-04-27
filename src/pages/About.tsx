import { Navbar } from "@/components/estate/Navbar";
import { Footer } from "@/components/estate/Footer";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-london.jpg";

const About = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl text-navy mb-8 text-center">Your <em className="text-gold-dark not-italic">Edge</em> in Property</h1>
            
            <div className="relative aspect-video rounded-xl overflow-hidden mb-16 shadow-luxe">
              <img src={heroImg} alt="London Skyline" className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl text-navy font-medium mb-6">
                EstateEdge Agency was founded on a simple principle: providing a premium, transparent, and results-driven service for the UK's most discerning property buyers and sellers.
              </p>
              <p className="mb-6">
                With over two decades of experience in the luxury real estate market, our team of experts brings unparalleled local knowledge and global reach. Whether you're looking for a chic apartment in Canary Wharf, a historic townhouse in Edinburgh, or a family estate in the Surrey countryside, we have the "edge" you need.
              </p>
              <div className="grid md:grid-cols-3 gap-8 my-12 text-center not-prose">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-display text-gold-dark mb-2">£2.5B+</div>
                  <div className="text-sm uppercase tracking-widest">Property Sold</div>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-display text-gold-dark mb-2">15+</div>
                  <div className="text-sm uppercase tracking-widest">UK Locations</div>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <div className="text-4xl font-display text-gold-dark mb-2">98%</div>
                  <div className="text-sm uppercase tracking-widest">Happy Clients</div>
                </div>
              </div>
              <p>
                We believe that technology should enhance, not replace, the personal touch. Our bespoke digital tools, including our advanced mortgage calculators and virtual area guides, are designed to empower you with data, while our agents provide the human insight that makes the difference in a successful transaction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
