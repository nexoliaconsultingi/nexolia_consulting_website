"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
  Sparkles,
  Cpu,
  Code2,
  Brain,
  Zap,
  Globe,
  Clock,
  Award,
  Heart,
  TrendingUp,
  ChevronRight,
  Coffee,
  Smile,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fullText = "Innover intelligemment. Exceller durablement";
  const footerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typing animation
  useEffect(() => {
    let index = 0;
    let timeout: NodeJS.Timeout;
    const typeNext = () => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
        timeout = setTimeout(typeNext, 60);
      } else {
        timeout = setTimeout(() => {
          index = 0;
          setTypedText("");
          timeout = setTimeout(typeNext, 400);
        }, 2500);
      }
    };
    typeNext();
    return () => clearTimeout(timeout);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05, rootMargin: "30px" }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (footerRef.current) {
      const rect = footerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    setEmail("");
    setIsLoading(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const servicesList = [
    { name: "Développement Web", icon: Code2, path: "/services", color: "#3b82f6" },
    { name: "Applications Mobile", icon: Zap, path: "/services", color: "#f59e0b" },
    { name: "Solutions SaaS", icon: Zap, path: "/services", color: "#10b981" },
    { name: "Design & UX/UI", icon: Brain, path: "/services", color: "#8b5cf6" },
    { name: "Conseil & Audit", icon: TrendingUp, path: "/services", color: "#ec4899" },
  ];

  // Données structurées JSON-LD (organisation)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEXOLIA CONSULTING",
    url: "https://www.nexolia-consulting.com",
    logo: "https://www.nexolia-consulting.com/logoNexo.png",
    sameAs: [
      "https://www.instagram.com/nexoliaconsulting/",
      "https://www.facebook.com/profile.php?id=61589281981252",
      "https://www.linkedin.com/in/med-wahbi-salwej-692b7a282/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+21623267646",
      email: "contact@nexolia-consulting.com",
      contactType: "customer service",
      availableLanguage: ["French", "English", "Arabic"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pôle Technologique El Ghazala",
      addressLocality: "Ariana",
      postalCode: "2088",
      addressCountry: "TN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <footer
        ref={footerRef}
        className={`footer-premium ${isVisible ? "visible" : ""}`}
        onMouseMove={handleMouseMove}
        style={
          {
            "--mouse-x": `${mousePosition.x}%`,
            "--mouse-y": `${mousePosition.y}%`,
          } as React.CSSProperties
        }
        aria-label="Pied de page"
      >
        {/* Arrière‑plan décoratif (masqué aux lecteurs d'écran) */}
        <div className="bg-ambient-light" aria-hidden="true" />
        <div className="pattern-overlay" aria-hidden="true" />

        <div className="footer-container">
          {/* Bannière IA */}
          <div className="smart-banner">
            <div className="banner-glow" aria-hidden="true" />
            <div className="smart-content">
              <div className="ai-indicator" aria-hidden="true">
                <div className="ai-pulse" />
                <Cpu className="ai-chip" />
              </div>
              <div className="typing-wrapper" aria-label="Message d'innovation">
                <span className="ai-label" aria-hidden="true">
                  AI
                </span>
                <span className="typing-text">{typedText}</span>
                <span className="cursor-blink" aria-hidden="true">
                  _
                </span>
              </div>
              <div className="banner-stats" aria-label="Statistiques">
                <div className="stat">
                  <span className="stat-number">128+</span>
                  <span className="stat-label">Projets</span>
                </div>
                <div className="stat-divider" aria-hidden="true" />
                <div className="stat">
                  <span className="stat-number">96+</span>
                  <span className="stat-label">Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grille principale */}
          <div className="footer-grid">
            {/* Colonne marque */}
            <div className="brand-col">
              <div className="brand-wrapper">
                <Link href="/" className="brand-link" aria-label="NEXOLIA Consulting, retour à l'accueil">
                  <Image
                    src="/logoNexo.png"
                    alt="NEXOLIA Consulting - Agence IT Tunisie et France"
                    width={180}
                    height={60}
                    className="brand-logo"
                    priority={false}
                  />
                </Link>
                <div className="brand-glow" aria-hidden="true" />
              </div>
              <p className="brand-desc">
                Votre partenaire digital de confiance pour des solutions innovantes et performantes.
              </p>
              <div className="certifications">
                <div className="cert-badge">
                  <Shield size={12} aria-hidden="true" />
                  <span>RGPD</span>
                </div>
                <div className="cert-badge">
                  <Award size={12} aria-hidden="true" />
                  <span>ISO 27001</span>
                </div>
              </div>
            </div>

            {/* Colonne Services */}
            <div className="links-col">
              <h4 className="col-title">
                <code className="title-tag" aria-hidden="true">
                  &lt;services&gt;
                </code>
                <div className="title-underline" aria-hidden="true" />
                <span className="sr-only">Nos services</span>
              </h4>
              <ul className="links-list" aria-label="Liste de nos services">
                {servicesList.map((service, idx) => (
                  <li
                    key={idx}
                    className="link-item"
                    onMouseEnter={() => setHoveredService(idx)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => handleNavigate(service.path)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleNavigate(service.path)}
                    aria-label={`En savoir plus sur ${service.name}`}
                  >
                    <div
                      className="link-icon-wrapper"
                      style={{ "--service-color": service.color } as React.CSSProperties}
                      aria-hidden="true"
                    >
                      <service.icon size={14} />
                    </div>
                    <span>{service.name}</span>
                    <ChevronRight
                      size={14}
                      className={`link-arrow ${hoveredService === idx ? "visible" : ""}`}
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne Entreprise */}
            <div className="links-col">
              <h4 className="col-title">
                <code className="title-tag" aria-hidden="true">
                  &lt;company&gt;
                </code>
                <div className="title-underline" aria-hidden="true" />
                <span className="sr-only">Entreprise</span>
              </h4>
              <ul className="links-list" aria-label="Liens vers les pages entreprise">
                <li onClick={() => handleNavigate("/about")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleNavigate("/about")} aria-label="À propos de NEXOLIA">
                  <div className="link-icon-wrapper" aria-hidden="true">
                    <Smile size={14} />
                  </div>
                  <span>À Propos</span>
                  <ChevronRight size={14} className="link-arrow" aria-hidden="true" />
                </li>
                <li onClick={() => handleNavigate("/portfolio")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleNavigate("/portfolio")} aria-label="Carrières chez NEXOLIA">
                  <div className="link-icon-wrapper" aria-hidden="true">
                    <Coffee size={14} />
                  </div>
                  <span>Carrières</span>
                  <ChevronRight size={14} className="link-arrow" aria-hidden="true" />
                </li>
                <li onClick={() => handleNavigate("/blog_news")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleNavigate("/blog_news")} aria-label="Blog et actualités">
                  <div className="link-icon-wrapper" aria-hidden="true">
                    <Zap size={14} />
                  </div>
                  <span>Blog & News</span>
                  <ChevronRight size={14} className="link-arrow" aria-hidden="true" />
                </li>
                <li onClick={() => handleNavigate("/contact")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleNavigate("/contact")} aria-label="Demander un devis gratuit">
                  <div className="link-icon-wrapper" aria-hidden="true">
                    <Shield size={14} />
                  </div>
                  <span>Passer votre devis gratuitement !</span>
                  <ChevronRight size={14} className="link-arrow" aria-hidden="true" />
                </li>
              </ul>
            </div>

            {/* Colonne Contact */}
            <div className="contact-col">
              <h4 className="col-title">
                <code className="title-tag" aria-hidden="true">
                  &lt;contact&gt;
                </code>
                <div className="title-underline" aria-hidden="true" />
                <span className="sr-only">Coordonnées</span>
              </h4>
              <ul className="contact-list" aria-label="Informations de contact">
                <li>
                  <Mail size={14} aria-hidden="true" />
                  <a href="mailto:contact@nexolia-consulting.com" aria-label="Envoyer un email à contact@nexolia-consulting.com">
                    contact@nexolia-consulting.com
                  </a>
                </li>
                <li>
                  <Mail size={14} aria-hidden="true" />
                  <a href="mailto:info@nexolia-consulting.com" aria-label="Envoyer un email à info@nexolia-consulting.com">
                    info@nexolia-consulting.com
                  </a>
                </li>
                <li>
                  <Phone size={14} aria-hidden="true" />
                  <a href="tel:+21646384214" aria-label="Téléphone +216 46 384 214">
                    +216 46 384 214
                  </a>
                </li>
                <li>
                  <Phone size={14} aria-hidden="true" />
                  <a href="tel:+21692233647" aria-label="Téléphone +216 92 233 647">
                    +216 92 233 647
                  </a>
                </li>
                <li>
                  <MapPin size={14} aria-hidden="true" />
                  <span>Pôle Technologique El Ghazela</span>
                </li>
                <li>
                  <Clock size={14} aria-hidden="true" />
                  <span>Lun - Ven: 8h00 - 17h00</span>
                </li>
              </ul>
              <div className="social-group">
                <div className="social-label">Suivez-nous</div>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/company/nexolia-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn NEXOLIA"
                  >
                    <Linkedin size={14} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/nexoliaconsulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Instagram NEXOLIA"
                  >
                    <Instagram size={14} aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Twitter NEXOLIA"
                  >
                    <Twitter size={14} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61589281981252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Facebook NEXOLIA"
                  >
                    <Facebook size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter (décommentez selon besoin) */}
          {/* ... */}

          {/* Bas de page */}
          <div className="footer-bottom">
            <div className="bottom-inner">
              <p className="copyright">
                <span>© {new Date().getFullYear()} NEXOLIA CONSULTING</span>
                <span className="separator" aria-hidden="true">
                  •
                </span>
                <span>Tous droits réservés</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bouton retour haut de page */}
        <button
          className={`scroll-to-top ${isVisible ? "show" : ""}`}
          onClick={scrollToTop}
          aria-label="Retour en haut de page"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
 <style jsx>{`
        /* ========== PREMIUM FOOTER STYLES - LIGHT VERSION ========== */
        .footer-premium {
          position: relative;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          color: #334155;
          padding: 3rem 0 0 0;
          overflow: hidden;
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          opacity: 0;
          transform: translateY(20px);
        }

        .footer-premium.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Light Ambient Background */
        .bg-ambient-light {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .gradient-sphere-light {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
        }

        .sphere-1-light {
          width: 350px;
          height: 350px;
          background: #3b82f6;
          top: -150px;
          left: -150px;
        }

        .sphere-2-light {
          width: 400px;
          height: 400px;
          background: #8b5cf6;
          bottom: -200px;
          right: -200px;
        }

        .sphere-3-light {
          width: 250px;
          height: 250px;
          background: #ec4899;
          top: 40%;
          left: 30%;
        }

        .pattern-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* Smart Banner - Light */
        .smart-banner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto 2.5rem auto;
          background: white;
          border-radius: 60px;
          padding: 0.6rem 1.8rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .smart-banner:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-1px);
        }

        .banner-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.06), transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 60px;
        }

        .smart-banner:hover .banner-glow {
          opacity: 1;
        }

        .smart-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          position: relative;
          z-index: 2;
        }

        .ai-indicator {
          position: relative;
          display: flex;
          align-items: center;
        }

        .ai-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #3b82f6;
          animation: pulseRing 2s ease-out infinite;
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2); opacity: 0; }
        }

        .ai-chip {
          position: relative;
          width: 22px;
          height: 22px;
          color: #3b82f6;
        }

        .typing-wrapper {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: monospace;
        }

        .ai-label {
          color: #8b5cf6;
          font-weight: 600;
          font-size: 0.85rem;
          background: #f3e8ff;
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
        }

        .typing-text {
          color: #3b82f6;
          font-size: 0.9rem;
        }

        .cursor-blink {
          color: #3b82f6;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .banner-stats {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .stat-number {
          font-weight: 600;
          font-size: 0.9rem;
          color: #f59e0b;
        }

        .stat-label {
          font-size: 0.7rem;
          color: #64748b;
        }

        .stat-divider {
          width: 1px;
          height: 20px;
          background: #e2e8f0;
        }

        /* Footer Container */
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Footer Grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        /* Brand Column */
        .brand-col {
          animation: fadeUp 0.4s ease forwards;
          opacity: 0;
          animation-delay: 0.1s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .brand-wrapper {
          position: relative;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .brand-logo {
          height: 50px;
          width: auto;
        }

        .brand-glow {
          display: none;
        }

        .brand-desc {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #64748b;
          margin-bottom: 1.2rem;
        }

        .certifications {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .cert-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: #f1f5f9;
          padding: 0.3rem 0.7rem;
          border-radius: 40px;
          font-size: 0.7rem;
          color: #475569;
          transition: all 0.2s ease;
        }

        .cert-badge:hover {
          background: #e2e8f0;
          transform: translateY(-1px);
        }

        /* Links Columns */
        .links-col, .contact-col {
          animation: fadeUp 0.4s ease forwards;
          opacity: 0;
        }

        .links-col:nth-child(2) { animation-delay: 0.15s; }
        .links-col:nth-child(3) { animation-delay: 0.2s; }
        .contact-col { animation-delay: 0.25s; }

        .col-title {
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 1.2rem;
          position: relative;
        }

        .title-tag {
          color: #8b5cf6;
          font-family: monospace;
          font-size: 0.75rem;
          background: #f3e8ff;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
        }

        .title-underline {
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          transition: width 0.25s ease;
        }

        .col-title:hover .title-underline {
          width: 45px;
        }

        .links-list {
          list-style: none;
          padding: 0;
        }

        .link-item, .links-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          color: #64748b;
        }

        .link-icon-wrapper {
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #f1f5f9;
          transition: all 0.2s ease;
        }

        .link-item:hover, .links-list li:hover {
          transform: translateX(4px);
          color: #3b82f6;
        }

        .link-item:hover .link-icon-wrapper {
          background: #3b82f6;
          color: white;
        }

        .link-arrow {
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          color: #3b82f6;
        }

        .link-arrow.visible, .links-list li:hover .link-arrow {
          opacity: 1;
          transform: translateX(2px);
        }

        /* Contact List */
        .contact-list {
          list-style: none;
          padding: 0;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.8rem;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .contact-list li svg {
          color: #8b5cf6;
          flex-shrink: 0;
        }

        .contact-list li a, .contact-list li span {
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-list li:hover a, .contact-list li:hover span {
          color: #3b82f6;
        }

        .contact-list li:hover svg {
          transform: scale(1.05);
        }

        /* Social Group */
        .social-group {
          margin-top: 1.2rem;
        }

        .social-label {
          font-size: 0.7rem;
          color: #8b5cf6;
          margin-bottom: 0.6rem;
          letter-spacing: 0.5px;
        }

        .social-icons {
          display: flex;
          gap: 0.6rem;
        }

        .social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .social-btn:hover {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          transform: translateY(-2px);
        }

        /* Newsletter Card - Light */
        .newsletter-card {
          background: white;
          border-radius: 20px;
          padding: 1.2rem 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .newsletter-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }

        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.2rem;
        }

        .newsletter-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .newsletter-icon-wrapper {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-icon-wrapper svg {
          color: white;
        }

        .icon-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1px solid rgba(59, 130, 246, 0.3);
          animation: ringPulse 2s ease-out infinite;
        }

        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        .newsletter-text h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.2rem;
        }

        .newsletter-text p {
          font-size: 0.75rem;
          color: #64748b;
        }

        .newsletter-form {
          flex: 1;
          min-width: 260px;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-group svg:first-child {
          position: absolute;
          left: 1rem;
          width: 14px;
          height: 14px;
          color: #94a3b8;
        }

        .input-group input {
          width: 100%;
          padding: 0.7rem 1rem 0.7rem 2.5rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 48px;
          color: #1e293b;
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }

        .input-group input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input-group input::placeholder {
          color: #94a3b8;
        }

        .input-group button {
          position: absolute;
          right: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .input-group button:hover:not(:disabled) {
          transform: scale(1.02);
          gap: 0.6rem;
        }

        .input-group button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loader {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-toast {
          margin-top: 0.6rem;
          padding: 0.5rem 0.8rem;
          background: #dcfce7;
          border: 1px solid #22c55e;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #166534;
          animation: slideIn 0.25s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #e2e8f0;
          padding: 1.2rem 0;
          margin-top: 0.5rem;
        }

        .bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          font-size: 0.7rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .heart {
          color: #ec4899;
          animation: heartBeat 1.5s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .legal-links {
          display: flex;
          gap: 1.2rem;
        }

        .legal-links a {
          font-size: 0.7rem;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-links a:hover {
          color: #3b82f6;
        }

        /* Scroll to Top */
        .scroll-to-top {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0;
          transform: scale(0);
          transition: all 0.25s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .scroll-to-top.show {
          opacity: 1;
          transform: scale(1);
        }

        .scroll-to-top:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 1.2rem;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .smart-content {
            flex-direction: column;
            text-align: center;
          }
          
          .newsletter-inner {
            flex-direction: column;
            text-align: center;
          }
          
          .newsletter-left {
            flex-direction: column;
            text-align: center;
          }
          
          .bottom-inner {
            flex-direction: column;
            text-align: center;
          }
          
          .smart-banner {
            border-radius: 24px;
            padding: 0.8rem 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 1rem;
          }
          
          .input-group button span {
            display: none;
          }
          
          .input-group button {
            padding: 0.4rem 0.8rem;
          }
          
          .banner-stats {
            display: none;
          }
        }
          .newsletter-card {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.newsletter-inner {
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #0f172a;
  border-radius: 16px;
  padding: 20px 24px;
  flex-wrap: wrap;
}

/* LEFT */
.newsletter-left {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  min-width: 250px;
}

.newsletter-text h3 {
  font-size: 18px;
  margin: 0;
}

.newsletter-text p {
  font-size: 13px;
  opacity: 0.7;
  margin: 0;
}

/* FORM */
.newsletter-form {
  flex: 1;
  min-width: 280px;
}

/* INPUT GROUP */
.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #1e293b;
  border-radius: 10px;
  padding: 6px 8px;
}

.input-group input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-size: 14px;
}

/* BUTTON */
.input-group button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #6366f1;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
}

/* SUCCESS */
.success-toast {
  margin-top: 8px;
  font-size: 12px;
  color: #22c55e;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ========================= */
/* 📱 RESPONSIVE BREAKPOINTS */
/* ========================= */

/* TABLET */
@media (max-width: 768px) {
  .newsletter-inner {
    flex-direction: column;
    align-items: stretch;
  }

  .newsletter-left {
    justify-content: center;
    text-align: center;
  }

  .newsletter-form {
    width: 100%;
  }
}

/* MOBILE */
@media (max-width: 480px) {
  .input-group {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .input-group button {
    width: 100%;
    justify-content: center;
  }

  .newsletter-text h3 {
    font-size: 16px;
  }

  .newsletter-text p {
    font-size: 12px;
  }
}
      `}</style>
      </footer>
    </>
  );
};

export default Footer;