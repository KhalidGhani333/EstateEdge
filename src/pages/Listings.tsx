import { Navbar } from "@/components/estate/Navbar";
import { Footer } from "@/components/estate/Footer";
import { motion } from "framer-motion";
import { FeaturedListings } from "@/components/estate/FeaturedListings";

const Listings = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-20">
        <FeaturedListings />
      </div>
      <Footer />
    </main>
  );
};

export default Listings;
