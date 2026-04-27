import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/estate/Navbar";
import { Footer } from "@/components/estate/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Building, TreePine, Sparkles, Briefcase, Warehouse } from "lucide-react";
import { FeaturedListings } from "@/components/estate/FeaturedListings";

// Import custom contexts
import { HousesContext } from "@/components/estate/categories/HousesContext";
import { ApartmentsContext } from "@/components/estate/categories/ApartmentsContext";
import { BungalowsContext } from "@/components/estate/categories/BungalowsContext";
import { NewBuildsContext } from "@/components/estate/categories/NewBuildsContext";
import { CommercialContext } from "@/components/estate/categories/CommercialContext";
import { TerracedContext } from "@/components/estate/categories/TerracedContext";

const categoryData: Record<string, { title: string, icon: any, component: any }> = {
  "houses": { title: "Houses", icon: Home, component: HousesContext },
  "apartments": { title: "Apartments", icon: Building, component: ApartmentsContext },
  "bungalows": { title: "Bungalows", icon: TreePine, component: BungalowsContext },
  "new-builds": { title: "New Builds", icon: Sparkles, component: NewBuildsContext },
  "commercial": { title: "Commercial", icon: Briefcase, component: CommercialContext },
  "terraced": { title: "Terraced", icon: Warehouse, component: TerracedContext },
};

const CategoryDetail = () => {
  const { slug } = useParams();
  const data = slug ? categoryData[slug] : null;

  if (!data) return <div>Category not found</div>;

  const ContextComponent = data.component;

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-dark transition-colors mb-8">
            <ArrowLeft size={16} /> Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-xl bg-navy text-gold flex items-center justify-center shadow-luxe">
                <data.icon size={32} />
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-navy">
                {data.title} <em className="text-gold-dark not-italic">Collection</em>
              </h1>
            </div>

            <div className="mt-12 max-w-4xl">
               <ContextComponent />
            </div>
          </motion.div>

          <div className="pt-12 border-t border-border">
            <h2 className="font-display text-3xl text-navy mb-8">Available {data.title}</h2>
            <FeaturedListings />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CategoryDetail;
