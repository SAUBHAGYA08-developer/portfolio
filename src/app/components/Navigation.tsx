"use client";

import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { NAVIGATION } from "../../constants/portfolio";
import Image from "next/image";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {

   const handleNavigate = (section: string) => {
    if (section==="blog"){
      window.open("https://blog.thefrontify.com/", "_blank");
      return;
    }
    onNavigate(section);
  }
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white"
          >
            <Image
              src="/my-logo.png"
              alt="Saubhagya Shukla Logo"
              width={100}
              height={20}
              priority
              className="h-20 w-auto"
            />
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {NAVIGATION.sections.map((section) => (
              <button
                key={section}
                onClick={()=>handleNavigate(section)}
                className={`capitalize hover:text-blue-400 transition-colors ${
                  activeSection === section ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <MobileNav onNavigate={onNavigate} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </nav>
  );
}
