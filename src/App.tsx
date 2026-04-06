import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, 
  Globe, 
  Github, 
  Palette,
  MessageCircle,
  ShoppingBag,
  Tag,
  Briefcase
} from "lucide-react";
import { SiBehance, SiWhatsapp } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    name: "Website",
    icon: <Globe className="w-5 h-5" />,
    url: "https://fitrimahadzir.my",
    color: "hover:text-[#bbdb00] hover:border-[#bbdb00]"
  },
  {
    name: "Behance",
    icon: <SiBehance size={20} />,
    url: "https://www.behance.net/fitrimahadzir",
    color: "hover:text-[#0057ff] hover:border-[#0057ff]"
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/fitrimahadzir-dev",
    color: "hover:text-slate-900 hover:border-slate-900"
  },
  {
    name: "TikTok",
    icon: <Globe className="w-5 h-5" />,
    url: "https://tiktok.com/@fitri.mahadzir",
    color: "hover:text-black hover:border-black"
  }
];

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Premium UI Kit",
    price: "$24.00",
    image: "https://picsum.photos/seed/uikit/400/300",
    description: "Modern design system for web apps"
  },
  {
    id: 2,
    name: "Icon Set Pro",
    price: "$12.00",
    image: "https://picsum.photos/seed/icons/400/300",
    description: "500+ custom vector icons"
  },
  {
    id: 3,
    name: "Portfolio Template",
    price: "$35.00",
    image: "https://picsum.photos/seed/template/400/300",
    description: "Responsive React portfolio"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'links' | 'shop'>('links');
  const [showMaintenance, setShowMaintenance] = useState(false); {/* padam jika hbis maintance */}


  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-16 px-6 bg-[url('/images/wallpaper.svg')] bg-cover bg-right lg:bg-center bg-fixed">
      <div className="relative max-w-md w-full flex flex-col items-center space-y-6 sm:space-y-8">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 sm:space-y-4"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur-sm opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="/images/dp.jpg" 
              alt="Fitri Mahadzir" 
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#bbdb00] shadow-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#bbdb00]">Fitri Mahadzir</h1>
            <p className="text-sm sm:text-base text-[#ffffff] font-medium">Designer & Creative Developer</p>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 w-64"
        >
          <button 
            onClick={() => setActiveTab('links')}
            className={`relative flex-1 py-2 px-4 rounded-full text-sm font-bold transition-all duration-300 z-10 ${activeTab === 'links' ? 'text-white' : 'text-white/60 hover:text-white'}`}
          >
            {activeTab === 'links' && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-black rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Links
          </button>
          <button 
             onClick={() => setShowMaintenance(true)} {/* guna ini jika sudah hbis maintance */}
            className={`relative flex-1 py-2 px-4 rounded-full text-sm font-bold transition-all duration-300 z-10 ${activeTab === 'shop' ? 'text-white' : 'text-white/60 hover:text-white'}`}
          >
            {activeTab === 'shop' && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-black rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Shop
          </button>
        </motion.div>

        {/* Content Area */}
        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'links' ? (
              <motion.div
                key="links"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Primary Link */}
                <div className="w-full">
                  <a 
                    href="https://www.behance.net/gallery/246627031/PORTFOLIO-FITRI-MAHADZIR-(LATEST)" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex flex-col w-full bg-[#bbdb00] text-slate-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Portfolio Cover Image */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img 
                        src="/images/cover-portfolio.png" 
                        alt="Portfolio Cover" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 border-4 border-[#bbdb00] pointer-events-none rounded-t-2xl"></div>
                    </div>
                    
                    {/* Button Content */}
                    <div className="flex items-center justify-between p-3 sm:p-4">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="bg-slate-900/10 p-1.5 sm:p-2 rounded-xl group-hover:bg-slate-900/20 transition-colors">
                          <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="font-semibold text-base sm:text-lg">View My Portfolio</span>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                </div>

                {/* Social Links Section */}
                <div className="w-full space-y-2 sm:space-y-3">
                  {SOCIAL_LINKS.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between w-full p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group ${link.color}`}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="p-1.5 sm:p-2 rounded-xl bg-slate-50 group-hover:bg-inherit transition-colors">
                            {link.icon}
                          </div>
                          <span className="font-medium text-sm sm:text-base text-slate-700 group-hover:text-inherit">{link.name}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <div className="w-full pt-6">
                  <a 
                    href="https://wa.me/601170006477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-3 sm:p-4 bg-[#bbdb00] text-slate-900 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors">
                        <div className="sm:hidden">
                          <SiWhatsapp size={20} />
                        </div>
                        <div className="hidden sm:block">
                          <SiWhatsapp size={24} />
                        </div>
                      </div>
                      <span className="font-bold text-base sm:text-lg">Contact me on WhatsApp</span>
                    </div>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="shop"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full space-y-6"
              >
                <div className="text-center pb-2">
                  <h2 className="text-[#bbdb00] font-bold text-lg">Featured Products</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {DUMMY_PRODUCTS.map((product) => (
                    <motion.div 
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                          {product.price}
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-slate-900">{product.name}</h3>
                          <p className="text-sm text-slate-500">{product.description}</p>
                        </div>
                        <button className="bg-[#bbdb00] p-2 rounded-xl text-slate-900 hover:bg-[#a8c600] transition-colors">
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Shop CTA */}
                <div className="pt-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <Tag className="w-8 h-8 text-[#bbdb00] mx-auto mb-3" />
                    <h3 className="text-white font-bold mb-1">Custom Commissions</h3>
                    <p className="text-white/60 text-sm mb-4">Looking for something unique? Let's work together on your next project.</p>
                    <button className="w-full py-3 bg-[#bbdb00] text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-12 pb-24 text-center"
        >
          <p className="text-slate-400 text-sm font-medium">
            © 2026 Fitri Mahadzir. All rights reserved.
          </p>
        </motion.footer>

      </div>

      {/* Floating Hire Me Button */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-xs"
      >
        <a 
          href="mailto:thefitrimahadzir@gmail.com?subject=Hiring Inquiry"
          className="flex items-center justify-center space-x-2 w-full py-4 bg-black text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 backdrop-blur-sm group"
        >
          <Briefcase className="w-5 h-5 text-[#bbdb00] group-hover:animate-bounce" />
          <span className="font-bold tracking-wide">Hire Me</span>
        </a>
      </motion.div> */}

      {/* Maintenance Modal */}
      <AnimatePresence>
        {showMaintenance && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowMaintenance(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-xs w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-[#bbdb00]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-[#bbdb00]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Under Maintenance</h3>
              <p className="text-slate-500 mb-6">
                The shop is currently in the build process and will be available soon. Stay tuned!
              </p>
              <button
                onClick={() => setShowMaintenance(false)}
                className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
