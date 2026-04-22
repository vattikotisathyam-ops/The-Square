/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  MessageCircle,
  UtensilsCrossed,
  ChefHat,
  Coffee,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Constants ---

const IMAGES = {
  hero: 'https://picsum.photos/seed/restaurant-hero/1920/1080',
  buffet: 'https://picsum.photos/seed/buffet-spread/800/600',
  interior: 'https://picsum.photos/seed/luxury-hotel/1200/800',
  gallery1: 'https://picsum.photos/seed/food1/600/800',
  gallery2: 'https://picsum.photos/seed/food2/600/800',
  gallery3: 'https://picsum.photos/seed/interior1/600/800',
  gallery4: 'https://picsum.photos/seed/interior2/600/800',
};

const MENU_CATEGORIES = [
  {
    id: 'breakfast',
    title: 'Breakfast Buffet',
    time: '6:30 AM - 10:30 AM',
    items: ['Artisanal Pastries', 'Live Omelette Station', 'South Indian Classics', 'Fresh Juices & Fruits']
  },
  {
    id: 'lunch',
    title: 'Global Lunch',
    time: '12:30 PM - 3:30 PM',
    items: ['Signature Hyderabadi Biryani', 'Continental Roasts', 'Dim Sum Basket', 'Indulgent Dessert Bar']
  },
  {
    id: 'dinner',
    title: 'Grand Dinner',
    time: '7:30 PM - 11:00 PM',
    items: ['Tandoori Specialties', 'Live Grills & Pasta', 'Wok-tossed Asian Delights', 'Exotic Seafood']
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#reserve' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-black/95 py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center text-cream">
        <a href="#home" className="text-2xl font-bold tracking-widest font-serif uppercase">
          THE <span className="text-primary-gold">SQUARE</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center uppercase text-[10px] tracking-[0.2em] font-semibold">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary-gold transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#reserve" className="border border-primary-gold px-6 py-2 text-primary-gold uppercase tracking-widest hover:bg-primary-gold hover:text-black transition-all">
            Reserve Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-black p-8 text-white flex flex-col gap-6 md:hidden text-center uppercase tracking-widest"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent z-10" />
    <img 
      src={IMAGES.hero} 
      alt="Luxury Dining"
      className="absolute inset-0 w-full h-full object-cover opacity-60"
      referrerPolicy="no-referrer"
    />
    
    <div className="relative z-20 text-cream max-w-5xl px-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-3 px-5 rounded-full border border-white/10 w-fit mb-8">
          <span className="text-primary-gold font-bold italic">★ 4.4</span>
          <span className="text-[10px] uppercase tracking-widest opacity-60">332 Reviews</span>
        </div>
        
        <h2 className="text-lg text-primary-gold italic mb-4 uppercase tracking-[0.3em] font-serif">Novotel Hyderabad Airport</h2>
        <h1 className="text-6xl md:text-8xl mb-8 leading-tight font-serif max-w-3xl">
          Experience Global <br /><span className="italic">Flavors.</span>
        </h1>
        
        <p className="text-sm opacity-80 leading-relaxed mb-12 border-l-2 border-primary-gold pl-8 max-w-xl">
          A premium buffet destination offering a symphony of Indian, Continental, and Asian cuisines in an atmosphere of refined luxury at the heart of Shamshabad.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <a href="#menu" className="bg-primary-gold text-black px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-cream shadow-2xl text-center">
            View Today's Menu
          </a>
          <a href="#reserve" className="bg-white/5 border border-white/20 px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] text-cream hover:bg-white/10 transition-colors text-center">
            Table Booking
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }} 
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 z-20 text-white/50"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary-gold to-transparent mx-auto" />
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-10 bg-luxury-black overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img 
            src={IMAGES.interior} 
            alt="Interior" 
            className="rounded-lg shadow-2xl relative z-10 w-full aspect-[16/10] object-cover border border-white/10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -inset-4 border border-primary-gold/20 -z-0 rounded-lg group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-cream"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary-gold font-bold mb-4 block italic">Novotel Excellence</span>
          <h2 className="text-4xl md:text-5xl mb-8 font-serif leading-tight">Refined Dining in <br/>an Atmosphere of <span className="text-primary-gold">Luxury.</span></h2>
          <p className="text-cream/60 leading-relaxed text-lg mb-8 font-sans">
            Located in the prestigious Novotel Hyderabad Airport, The Square is more than just a buffet—it's a celebration of global culinary excellence. We combine the comfort of luxury hospitality with an expansive menu featuring authentic Indian, Continental, and Asian flavors.
          </p>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8 bg-luxury-brown/50 backdrop-blur-sm border border-white/10 p-8 rounded-lg mt-12">
             <div className="text-center">
               <ChefHat size={32} className="text-primary-gold mx-auto mb-4" />
               <span className="text-[9px] uppercase tracking-[0.2em] font-bold block text-cream/70">Expert Chefs</span>
             </div>
             <div className="text-center">
               <Globe size={32} className="text-primary-gold mx-auto mb-4" />
               <span className="text-[9px] uppercase tracking-[0.2em] font-bold block text-cream/70">Global Fare</span>
             </div>
             <div className="text-center">
               <UtensilsCrossed size={32} className="text-primary-gold mx-auto mb-4" />
               <span className="text-[9px] uppercase tracking-[0.2em] font-bold block text-cream/70">Premium Spread</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState('lunch');

    return (
        <section id="menu" className="py-24 px-10 bg-luxury-brown border-y border-white/5">
            <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="text-left">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary-gold font-bold mb-4 block">Gourmet Selection</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-cream">A Symphony of Cuisines</h2>
                </div>
                
                <div className="flex gap-4 md:gap-8 border-b border-white/10 w-full md:w-auto">
                    {MENU_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`pb-4 px-2 uppercase text-[9px] tracking-[0.3em] transition-all relative ${activeTab === cat.id ? 'text-primary-gold font-bold' : 'text-cream/40 hover:text-cream'}`}
                        >
                            {cat.title}
                            {activeTab === cat.id && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-gold" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid md:grid-cols-12 gap-12"
                    >
                        <div className="md:col-span-7 rounded-sm overflow-hidden border border-white/10 group">
                             <img 
                                src={IMAGES.buffet} 
                                alt="Buffet Selection" 
                                className="w-full h-full min-h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                referrerPolicy="no-referrer"
                             />
                        </div>
                        <div className="md:col-span-5 flex flex-col justify-between py-4">
                            <div className="space-y-4">
                                <h3 className="text-3xl text-primary-gold font-serif italic mb-6">{MENU_CATEGORIES.find(c => c.id === activeTab)?.title}</h3>
                                
                                <div className="grid grid-cols-1 gap-2">
                                    {MENU_CATEGORIES.find(c => c.id === activeTab)?.items.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-luxury-black/30 border border-white/5 hover:border-primary-gold/30 transition-all group">
                                            <span className="text-cream/80 uppercase text-[11px] tracking-widest font-sans">{item}</span>
                                            <ChevronRight size={14} className="text-primary-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-luxury-black/60 backdrop-blur-md border border-primary-gold/10 p-8 rounded-sm mt-8">
                                <div className="text-[10px] uppercase tracking-widest text-primary-gold/60 mb-2">Service Timings</div>
                                <div className="text-lg font-serif mb-4 text-cream">{MENU_CATEGORIES.find(c => c.id === activeTab)?.time}</div>
                                <p className="text-xs font-light leading-relaxed text-cream/40 italic">
                                    "Our menus are curated seasonally to ensure the highest quality of regional and international ingredients."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

const ReservationSection = () => (
    <section id="reserve" className="py-24 px-10 bg-luxury-black text-cream relative">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary-gold font-bold mb-4 block italic">Reservation</span>
                <h2 className="text-4xl md:text-5xl mb-6 font-serif leading-tight">Secure Your Dining <br/> Experience</h2>
                <p className="text-cream/50 max-w-xl mx-auto">For exclusive corporate bookings or parties larger than 10, please contact our guest relation manager directly.</p>
            </div>

            <div className="bg-luxury-brown/40 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-sm shadow-2xl">
                <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-primary-gold/70 font-bold ml-2">Full Name</label>
                        <input type="text" placeholder="Your Name" className="w-full bg-black/20 border border-white/10 rounded-sm px-6 py-4 focus:border-primary-gold outline-none transition-all placeholder:text-cream/20 text-cream" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-primary-gold/70 font-bold ml-2">Phone Number</label>
                        <input type="tel" placeholder="040 6625 0000" className="w-full bg-black/20 border border-white/10 rounded-sm px-6 py-4 focus:border-primary-gold outline-none transition-all placeholder:text-cream/20 text-cream" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-primary-gold/70 font-bold ml-2">Reservation Date</label>
                        <input type="date" className="w-full bg-black/20 border border-white/10 rounded-sm px-6 py-4 focus:border-primary-gold outline-none transition-all dark:[color-scheme:dark] text-cream" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-primary-gold/70 font-bold ml-2">Guest Count</label>
                        <select className="w-full bg-black/20 border border-white/10 rounded-sm px-6 py-4 focus:border-primary-gold outline-none transition-all text-cream">
                            <option className="bg-luxury-black">2 Guests</option>
                            <option className="bg-luxury-black">4 Guests</option>
                            <option className="bg-luxury-black">6 Guests</option>
                            <option className="bg-luxury-black">Group (8+)</option>
                        </select>
                    </div>
                    <button className="md:col-span-2 bg-primary-gold text-black font-bold uppercase tracking-[0.2em] text-[11px] py-6 rounded-sm hover:invert transition-all transform shadow-2xl mt-4">
                        Request Availability
                    </button>
                </form>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-16 text-center border-t border-white/5 pt-20">
                 <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-cream/40 font-bold block">Concierge Call</span>
                    <a href="tel:04066250000" className="text-3xl font-serif text-cream hover:text-primary-gold transition-colors block">040 6625 0000</a>
                 </div>
                 <div className="hidden md:block w-px h-12 bg-white/10" />
                 <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-cream/40 font-bold block">WhatsApp Support</span>
                    <a href="https://wa.me/914066250000" className="text-3xl font-serif text-cream hover:text-primary-gold transition-colors block">Priority Chat</a>
                 </div>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact" className="py-24 px-10 bg-luxury-black overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/2 space-y-16">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary-gold font-bold mb-4 block italic">How to Reach Us</span>
                    <h2 className="text-4xl md:text-6xl mb-8 font-serif text-cream leading-[0.9]">Novotel <br />Airport <span className="text-primary-gold italic">Hyderabad</span></h2>
                    <p className="text-cream/50 text-lg font-sans leading-relaxed max-w-md">Conveniently situated on the Ground Floor, ideal for a gourmet break while traveling.</p>
                </div>

                <div className="space-y-12">
                    <div className="hover:translate-x-2 transition-transform cursor-default">
                        <h4 className="text-primary-gold italic font-serif text-2xl mb-4 font-light">The Location</h4>
                        <p className="text-cream/70 font-sans leading-relaxed text-sm tracking-wide opacity-80 uppercase">Ground Floor, Novotel Hyderabad Airport<br />Shamshabad, Mamidpally, Hyderabad 500108</p>
                    </div>
                    <div className="hover:translate-x-2 transition-transform cursor-default">
                        <h4 className="text-primary-gold italic font-serif text-2xl mb-4 font-light">Service Desk</h4>
                        <p className="text-cream/70 font-sans leading-relaxed text-sm tracking-wide opacity-80 uppercase">Daily: 06:30 — 11:00 PM</p>
                        <p className="text-cream/70 font-sans leading-relaxed text-sm tracking-wide opacity-80 uppercase">+91 40 6625 0000</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=6FR3+XR+Hyderabad,+Telangana"
                        target="_blank"
                        className="bg-primary-gold text-black px-10 py-5 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-cream transition-all shadow-xl"
                    >
                        Directions <Globe size={16} className="inline ml-2" />
                    </a>
                </div>
            </div>

            <div className="w-full lg:w-1/2 h-[600px] rounded-sm overflow-hidden shadow-2xl relative border border-white/10">
                <div className="absolute inset-0 bg-luxury-black/30 pointer-events-none z-10" />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.899388338781!2d78.47192667590822!3d17.22816998363365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb902ee2c6e6b%3A0x6b4556488ef97980!2sNovotel%20Hyderabad%20Airport!5e0!3m2!1sen!2sin!4v1713756408241!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="relative z-0"
                ></iframe>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-luxury-black text-cream py-16 px-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] opacity-60 font-semibold gap-8">
        <div>&copy; {new Date().getFullYear()} The Square - Novotel Hyderabad Airport</div>
        <div className="flex flex-wrap justify-center gap-12">
            <a href="#" className="hover:text-primary-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-gold transition-colors">Facebook</a>
            <a href="https://wa.me/914066250000" className="hover:text-primary-gold transition-colors">WhatsApp Support</a>
        </div>
        <div className="italic">6FR3+XR Hyderabad, Telangana</div>
    </footer>
);

export default function App() {
  return (
    <main className="min-h-screen selection:bg-primary-gold selection:text-luxury-black">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      
      {/* Gallery Section */}
      <section id="gallery" className="bg-luxury-black py-2">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[80vh] min-h-[500px]">
             {[IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4].map((img, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden group cursor-pointer"
                >
                    <ImageWithPlaceholder src={img} alt={`Gallery ${i}`} />
                    <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="w-12 h-[1px] bg-primary-gold" />
                    </div>
                </motion.div>
             ))}
         </div>
      </section>

      <ReservationSection />
      <ContactSection />
      
      {/* WhatsApp Floating Action */}
      <a 
        href="https://wa.me/914066250000" 
        target="_blank"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={32} />
      </a>

      <Footer />
    </main>
  );
}

// Utility for safe images with placeholders
function ImageWithPlaceholder({ src, alt }: { src: string; alt: string }) {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="w-full h-full bg-luxury-brown/20 relative">
            {!isLoaded && <div className="absolute inset-0 animate-pulse bg-luxury-brown/50" />}
            <img 
                src={src} 
                alt={alt} 
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                referrerPolicy="no-referrer"
            />
        </div>
    );
}
