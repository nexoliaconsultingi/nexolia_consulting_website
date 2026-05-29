"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services/", label: "Services" },
    { href: "/portfolio/", label: "Portfolio" },
    { href: "/about/", label: "À Propos" },
    { href: "/blog_news/", label: "Blog & News" },
  ];

  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#53828a] focus:rounded-lg"
            aria-label="NEXOLIA Consulting - Retour à l'accueil"
          >
            <Image 
              src="/logoNexo.png" 
              alt="NEXOLIA Consulting - Agence IT Tunisie et France" 
              width={280} 
              height={100} 
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors focus:outline-none focus:text-[#53828a] focus:underline focus:underline-offset-4 ${
                    isActive 
                      ? "text-[#53828a] font-semibold" 
                      : "text-[#727683] hover:text-[#53828a]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact/">
              <Button 
                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                aria-label="Page de contact et devis gratuit"
              >
                Contact
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none focus:ring-2 focus:ring-[#53828a] focus:ring-offset-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              <span className="sr-only">
                {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
            </Button>
          </div>
        </nav>

        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl p-4 z-50"
            role="dialog"
            aria-label="Menu de navigation mobile"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`transition-colors block px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#53828a] ${
                      isActive 
                        ? "bg-[#53828a]/10 text-[#53828a] font-semibold" 
                        : "text-[#727683] hover:text-[#53828a] hover:bg-gray-50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/contact/" onClick={handleLinkClick} className="block">
                <Button className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white w-full shadow-md">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;