// components/NavBar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // adapte le chemin selon ton projet
import { Menu, X } from "lucide-react"; // icônes

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logoNexo.png" alt="NEXOLIA" width={280} height={100} className="h-14 w-auto" />
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-[#727683] hover:text-[#53828a] transition-colors">
                            Accueil
                        </Link>

                        <Link href="/services/" className="text-[#727683] hover:text-[#53828a] transition-colors">
                            Services
                        </Link>
                        {/* <Link href="/industries" className="text-[#727683] hover:text-[#53828a] transition-colors">
                            Industries
                        </Link> */}
                        <Link href="/portfolio/" className="text-[#727683] hover:text-[#53828a] transition-colors">
                            Portfolio
                        </Link>
                        <Link href="/about/" className="text-[#727683] hover:text-[#53828a] transition-colors">
                            À Propos
                        </Link>
                        <Link href="/blog_news/" className="text-[#727683] hover:text-[#53828a] transition-colors">
                            Blog & News
                        </Link>
                        <Link href="/contact/">
                            <Button className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white">
                                Contact
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 z-50">
                        <div className="flex flex-col space-y-4">
                            <Link href="/out/" className="text-[#727683] hover:text-[#53828a] transition-colors block">
                                Accueil
                            </Link>

                            <Link href="/services/" className="text-[#727683] hover:text-[#53828a] transition-colors block">
                                Services
                            </Link>
                            {/* <Link href="/industries" className="text-[#53828a] font-semibold block">
                                Industries
                            </Link> */}
                            <Link href="/portfolio/" className="text-[#727683] hover:text-[#53828a] transition-colors block">
                                Portfolio
                            </Link>
                            <Link href="/about/" className="text-[#727683] hover:text-[#53828a] transition-colors block">
                                À Propos
                            </Link>
                            <Link href="/blog_news/" className="text-[#727683] hover:text-[#53828a] transition-colors block">
                                Blog & News
                            </Link>
                            <Link href="/contact/">
                                <Button className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white w-full">
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
