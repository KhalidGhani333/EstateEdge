import { Navbar } from "@/components/estate/Navbar";
import { Hero } from "@/components/estate/Hero";
import { PropertyTypes } from "@/components/estate/PropertyTypes";
import { FeaturedListings } from "@/components/estate/FeaturedListings";
import { WhyChoose } from "@/components/estate/WhyChoose";
import { MortgageCalculator } from "@/components/estate/MortgageCalculator";
import { Regions } from "@/components/estate/Regions";
import { Testimonials } from "@/components/estate/Testimonials";
import { SellerCTA } from "@/components/estate/SellerCTA";
import { Footer } from "@/components/estate/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <h1 className="sr-only">EstateEdge UK — Premium UK property listings, mortgages and area guides</h1>
      <Hero />
      <PropertyTypes />
      <FeaturedListings />
      <WhyChoose />
      <MortgageCalculator />
      <Regions />
      <Testimonials />
      <SellerCTA />
      <Footer />
    </main>
  );
};

export default Index;
