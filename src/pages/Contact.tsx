import { Navbar } from "@/components/estate/Navbar";
import { Footer } from "@/components/estate/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl text-navy mb-6">Contact <em className="text-gold-dark not-italic">Us</em></h1>
            <p className="text-muted-foreground text-lg">We're here to help you find your perfect home or sell your current one.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl text-navy mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Phone</p>
                    <p className="text-muted-foreground">+44 (0) 20 7123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <p className="text-muted-foreground">hello@estateedge.co.uk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Office</p>
                    <p className="text-muted-foreground">123 Knightsbridge, London, SW1X 7RJ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border shadow-soft">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-gradient-gold text-navy hover:shadow-gold transition-all duration-300">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
