import { motion } from "motion/react";
import { 
  ExternalLink, 
  Globe, 
  Github, 
  Palette,
  MessageCircle
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

export default function App() {
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

        {/* Primary Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full"
        >
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
              {/* "Fat" outline overlay to ensure it's on top of the image */}
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
        </motion.div>

        {/* Social Links Section */}
        <div className="w-full space-y-2 sm:space-y-3">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full pt-6"
        >
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
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-12 pb-2 text-center"
        >
          <p className="text-slate-400 text-sm font-medium">
            Copyright © 2026 Fitri Mahadzir.<br></br>All rights reserved.
          </p>
        </motion.footer>

      </div>
    </div>
  );
}
