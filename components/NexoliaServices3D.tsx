import React, { useState, useEffect, useRef } from 'react';
import {
  FaLaptopCode, FaPaintBrush, FaChartLine, FaShareAlt,
  FaDatabase, FaCloud, FaServer, FaChevronLeft, FaChevronRight,
  FaThLarge, FaInfoCircle, FaUsers, FaChartBar, FaPlay, FaPause, FaTimes
} from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  clientsBenefited: number;
  clientsRequested: number;
  images: string[];
  tags: string[];
}

const NexoliaServicesEnhanced: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Services data with enhanced content
  const services: Service[] = [
    {
      id: 1,
      title: "Dev Web & Mobile Sur-Mesure",
      shortDesc: "Applications performantes avec SEO optimisé",
      fullDesc: "Nous développons des applications web et mobiles sur mesure, avec une attention particulière aux performances, à l'expérience utilisateur et à l'optimisation SEO pour maximiser votre visibilité en ligne.",
      icon: FaLaptopCode,
      clientsBenefited: 187,
      clientsRequested: 234,
      tags: ["React", "Node.js", "Flutter", "SEO"],
      images: [
        "/webmobile/web7.png",
        "/webmobile/web8.png",
        "/webmobile/web9.png",
        "/webmobile/web10.png",
        "/webmobile/webA.png",
        "/webmobile/web11.png",
        "/webmobile/web13.png",
        "/webmobile/webB.png",
        "/webmobile/web14.png",
        "/webmobile/web15.png",
        "/webmobile/web16.png",
        "/webmobile/web17.png",
        "/webmobile/web18.png",
        "/webmobile/webC.png",
        "/webmobile/web20.png",
      ]
    },
    {
      id: 2,
      title: "Design Graphique & Montage Vidéo",
      shortDesc: "Créations visuelles percutantes",
      fullDesc: "Des designs qui racontent votre histoire. Notre équipe crée des identités visuelles uniques, des supports marketing percutants et des vidéos professionnelles qui captivent votre audience.",
      icon: FaPaintBrush,
      clientsBenefited: 112,
      clientsRequested: 145,
      tags: ["Adobe Suite", "Motion Design", "Branding", "3D"],
      images: [
        "/designmontage/1.png",
        "/designmontage/2.png",
        "/designmontage/3.png",
        "/designmontage/4.png",
        "/designmontage/5.png",
        "/designmontage/6.png",
        "/designmontage/7.png",
        "/designmontage/8.png",
        "/designmontage/9.png",
        "/designmontage/10.png",
        "/designmontage/11.png"
      ]
    },
    {
      id: 3,
      title: "Dashboards Power BI",
      shortDesc: "Suivi des KPI en temps réel",
      fullDesc: "Transformez vos données en décisions stratégiques avec nos dashboards Power BI interactifs. Visualisez vos KPI, analysez les tendances et pilotez votre performance en temps réel.",
      icon: FaChartLine,
      clientsBenefited: 89,
      clientsRequested: 102,
      tags: ["Power BI", "Data Viz", "KPI", "Analytics"],
      images: [
        "/bi/1.png",
        "/bi/2.png",
        "/bi/3.png",
        "/bi/4.png",
        "/bi/5.png",
      ]
    },
    {
      id: 4,
      title: "Solutions Microsoft 365 Power Platform",
      shortDesc: "Personnalisation avancée collaborative",
      fullDesc: "Optimisez votre collaboration avec nos solutions SharePoint 365. Nous développons des applications SPFx sur mesure pour étendre les capacités de votre plateforme et automatiser vos processus.",
      icon: FaShareAlt,
      clientsBenefited: 64,
      clientsRequested: 87,
      tags: ["SharePoint", "SPFx", "Office 365", "Teams"],
      images: [
        "/spfx/1.png",
        "/spfx/2.png",
        "/spfx/3.png",
        "/spfx/4.png",
        "/spfx/5.png",
        "/spfx/6.png",
        "/spfx/7.png",
        "/spfx/8.png",
        "/spfx/9.png",
        "/spfx/10.png",
      ]
    },
    {
      id: 5,
      title: "ERP sur Mesure",
      shortDesc: "Gestion d'entreprise intégrée",
      fullDesc: "Un ERP adapté à vos processus métier. Nous concevons des solutions de gestion complètes qui intègrent toutes vos activités : finance, RH, stock, production et CRM.",
      icon: FaDatabase,
      clientsBenefited: 43,
      clientsRequested: 61,
      tags: ["ERP", "CRM", "Finance", "RH"],
      images: [
       "/erp/1.png",
       "/erp/2.png",
       "/erp/3.png",
       "/erp/4.png",
       "/erp/5.png",
       "/erp/6.png",
       "/erp/7.png",
       "/erp/8.png",
       "/erp/9.png",
       "/erp/10.png",
       "/erp/11.png",
       "/erp/12.png",
       "/erp/13.png",
       "/erp/14.png",
       "/erp/15.png",
       "/erp/16.png",
       "/erp/17.png",
       "/erp/18.png",
       "/erp/19.png",
       "/erp/20.png",
       "/erp/21.png",
       "/erp/22.png",
       "/erp/23.png",
       "/erp/24.png",
       "/erp/25.png",
       "/erp/26.png",
       "/erp/27.png",
       "/erp/28.png",
      ]
    },
    {
      id: 6,
      title: "Applications SaaS pour Startups",
      shortDesc: "Solutions cloud évolutives",
      fullDesc: "Accélérez la croissance de votre startup avec nos applications SaaS robustes. Architecture cloud, scalabilité automatique et paiement à l'usage pour un time-to-market réduit.",
      icon: FaCloud,
      clientsBenefited: 56,
      clientsRequested: 79,
      tags: ["SaaS", "Cloud", "AWS", "Scalabilité"],
      images: [
        "/saas/saas1.webp",
        "/saas/saas3.webp",
        "/saas/saas4.webp",
        "/saas/1.png",
        "/saas/2.png",
        "/saas/3.png",
        "/saas/4.png",
        "/saas/5.png",
        "/saas/6.png",
        "/saas/7.png",
        "/saas/8.png",
      ]
    },
    {
      id: 7,
      title: "Éco-système Project & SharePoint",
      shortDesc: "Gestion de projet et digitalisation",
      fullDesc: "Maîtrisez vos projets avec notre expertise MS Project et SharePoint. Formation, consulting et déploiement de solutions complètes pour la gestion de portefeuille projets.",
      icon: FaServer,
      clientsBenefited: 28,
      clientsRequested: 42,
      tags: ["MS Project", "PMP", "SharePoint", "Formation"],
      images: [
       "/pwa/1.png",
       "/pwa/2.png",
       "/pwa/3.png"
      ]
    },
  ];

  // Fonction pour démarrer le défilement automatique
  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(() => {
      if (selectedService && isAutoScrolling) {
        setSelectedImageIndex((prev) => (prev + 1) % selectedService.images.length);
      }
    }, 3000);
  };

  // Fonction pour arrêter le défilement automatique
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Fonction pour faire défiler vers la galerie
  const scrollToGallery = () => {
    if (galleryRef.current) {
      const yOffset = -80;
      const element = galleryRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Ouvrir la modale
  const openModal = (index: number) => {
    stopAutoScroll();
    setModalImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    if (isAutoScrolling) {
      startAutoScroll();
    }
  };

  // Navigation dans la modale
  const nextModalImage = () => {
    if (selectedService) {
      setModalImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const prevModalImage = () => {
    if (selectedService) {
      setModalImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
    }
  };

  // Gestion des touches du clavier pour la modale
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          prevModalImage();
        } else if (e.key === 'ArrowRight') {
          nextModalImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedService]);

  useEffect(() => {
    setSelectedService(services[0]);
  }, []);

  useEffect(() => {
    if (selectedService && isAutoScrolling) {
      startAutoScroll();
    }
    return () => {
      stopAutoScroll();
    };
  }, [selectedService, isAutoScrolling]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setSelectedImageIndex(0);
    setShowDetails(false);
    setTimeout(() => {
      scrollToGallery();
    }, 100);
  };

  const nextImage = () => {
    stopAutoScroll();
    if (selectedService) {
      setSelectedImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
    setTimeout(() => {
      if (isAutoScrolling) {
        startAutoScroll();
      }
    }, 5000);
  };

  const prevImage = () => {
    stopAutoScroll();
    if (selectedService) {
      setSelectedImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
    }
    setTimeout(() => {
      if (isAutoScrolling) {
        startAutoScroll();
      }
    }, 5000);
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
    if (!isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  };

  const getSuccessRate = (benefited: number, requested: number) => {
    return Math.round((benefited / requested) * 100);
  };

  return (
    <div className="enhanced-container">
      <div className="enhanced-wrapper">
        {/* LEFT COLUMN - Enhanced Gallery */}
        <div className="gallery-panel" ref={galleryRef}>
          {selectedService && (
            <div className="gallery-content">
              <div className="service-badge">
                <selectedService.icon className="badge-icon" />
                <span className="badge-text">Service actif</span>
              </div>

              <div className="main-image-container">
                <button className="nav-btn prev-btn" onClick={prevImage}>
                  <FaChevronLeft />
                </button>

                <div className="image-wrapper" onClick={() => openModal(selectedImageIndex)}>
                  <img
                    src={selectedService.images[selectedImageIndex]}
                    alt={selectedService.title}
                    className="main-image"
                  />
                  <div className="image-overlay">
                    <div className="image-counter-enhanced">
                      <FaThLarge />
                      <span>{selectedImageIndex + 1}/{selectedService.images.length}</span>
                    </div>
                    <button 
                      className={`auto-scroll-btn ${isAutoScrolling ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAutoScroll();
                      }}
                      title={isAutoScrolling ? "Arrêter le défilement automatique" : "Démarrer le défilement automatique"}
                    >
                      {isAutoScrolling ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                </div>

                <button className="nav-btn next-btn" onClick={nextImage}>
                  <FaChevronRight />
                </button>
              </div>

              <div className="thumbnail-strip">
                {selectedService.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail-enhanced ${idx === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => {
                      stopAutoScroll();
                      setSelectedImageIndex(idx);
                      setTimeout(() => {
                        if (isAutoScrolling) {
                          startAutoScroll();
                        }
                      }, 5000);
                    }}
                  >
                    <img src={img} alt={`Vue ${idx + 1}`} />
                    <div className="thumbnail-overlay"></div>
                  </button>
                ))}
              </div>

              <div className="service-info-panel">
                <div className="info-header">
                  <h2 className="info-title">{selectedService.title}</h2>
                  <button
                    className="info-toggle"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    <FaInfoCircle />
                  </button>
                </div>

                <div className={`info-details ${showDetails ? 'expanded' : ''}`}>
                  <p className="info-description">{selectedService.fullDesc}</p>
                  <div className="tags-container">
                    {selectedService.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <p className="info-short">{selectedService.shortDesc}</p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - Services List */}
        <div className="services-panel">
          <div className="panel-header">
            <div className='headerServ'>
              <div>
                <h1 className="panel-title">Nos Services</h1>
                <div className="header-decoration"></div>
              </div>

             
            </div>

            <p className="panel-subtitle">
              Découvrez notre expertise et <br />
              trouvez la solution adaptée à vos besoins
            </p>

             <button className='headerServBTN'>Voir Plus Des Services</button>
          </div>

          <div className="services-list">
            {services.map((service) => {
              const successRate = getSuccessRate(service.clientsBenefited, service.clientsRequested);
              const isActive = selectedService?.id === service.id;

              return (
                <div
                  key={service.id}
                  className={`service-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleServiceClick(service)}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="item-indicator">
                    <div className={`indicator-dot ${isActive ? 'active' : ''}`}></div>
                  </div>

                  <div className="item-icon">
                    <service.icon />
                  </div>

                  <div className="item-content">
                    <div className="item-header">
                      <h3 className="item-title">{service.title}</h3>
                      <div className="item-stats">
                        <div className="stat-badge">
                          <FaUsers />
                          <span>{service.clientsBenefited}</span>
                        </div>
                        <div className="stat-badge">
                          <FaChartBar />
                          <span>{successRate}%</span>
                        </div>
                      </div>
                    </div>
                    <p className="item-description">{service.shortDesc}</p>
                    <div className="item-progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${successRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="item-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL - Popup pour afficher l'image en plein écran */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <button className="modal-nav modal-prev" onClick={prevModalImage}>
              <FaChevronLeft />
            </button>
            
            <div className="modal-image-wrapper">
              <img 
                src={selectedService.images[modalImageIndex]} 
                alt={`${selectedService.title} - Image ${modalImageIndex + 1}`}
                className="modal-image"
              />
              <div className="modal-counter">
                <FaThLarge />
                <span>{modalImageIndex + 1} / {selectedService.images.length}</span>
              </div>
            </div>
            
            <button className="modal-nav modal-next" onClick={nextModalImage}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* DESIGN SYSTEM COLORS */
        :root {
          --primary-teal: #578089;
          --primary-rose: #ae5f76;
          --bg-light: #ede8e8;
          --bg-white: #ffffff;
          --accent-peach: #f4aa81;
          --text-dark: #2c3e44;
          --text-gray: #6b7c82;
          --shadow-sm: 0 4px 12px rgba(87, 128, 137, 0.08);
          --shadow-md: 0 8px 24px rgba(87, 128, 137, 0.12);
          --shadow-lg: 0 16px 32px rgba(87, 128, 137, 0.15);
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .enhanced-container {
          width: 100%;
          min-height: 100vh;
          background: #f4f4f4;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .enhanced-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1600px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
        }

        /* ========== LEFT PANEL - GALLERY ========== */
        .gallery-panel {
          background: var(--bg-white);
          border-radius: 32px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          transition: var(--transition);
          animation: fadeInUp 0.6s ease-out;
        }

        .gallery-content {
          background: #e3e3e3;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--primary-teal), var(--primary-rose));
          padding: 0.5rem 1rem;
          border-radius: 40px;
          width: fit-content;
          color: white;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .badge-icon {
          font-size: 1rem;
        }

        .main-image-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-white);
          border: 1px solid rgba(87, 128, 137, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-teal);
          transition: var(--transition);
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }

        .nav-btn:hover {
          background: var(--primary-teal);
          color: white;
          transform: scale(1.05);
          border-color: transparent;
        }

        .image-wrapper {
          flex: 1;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 16/10;
          background: var(--bg-light);
          box-shadow: var(--shadow-md);
          cursor: pointer;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .main-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .image-counter-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          padding: 0.4rem 0.8rem;
          border-radius: 40px;
          color: white;
          font-size: 0.8rem;
        }

        .auto-scroll-btn {
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          border: none;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          font-size: 0.9rem;
        }

        .auto-scroll-btn:hover {
          background: var(--primary-rose);
          transform: scale(1.05);
        }

        .auto-scroll-btn.active {
          background: var(--primary-rose);
        }

        .thumbnail-strip {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .thumbnail-enhanced {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: var(--transition);
          background: none;
          padding: 0;
          position: relative;
        }

        .thumbnail-enhanced img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: rgba(174, 95, 118, 0.3);
          opacity: 0;
          transition: var(--transition);
        }

        .thumbnail-enhanced:hover .thumbnail-overlay {
          opacity: 1;
        }

        .thumbnail-enhanced.active {
          border-color: var(--primary-rose);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .service-info-panel {
          background: var(--bg-light);
          border-radius: 20px;
          padding: 1.25rem;
          margin-top: 0.5rem;
        }

        .info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .info-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary-teal);
        }

        .info-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--primary-rose);
          font-size: 1.2rem;
          transition: var(--transition);
          padding: 0.25rem;
        }

        .info-toggle:hover {
          transform: scale(1.1);
          color: var(--primary-teal);
        }

        .info-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out;
        }

        .info-details.expanded {
          max-height: 300px;
          margin-bottom: 1rem;
        }

        .info-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: var(--bg-white);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.7rem;
          color: var(--primary-rose);
          font-weight: 500;
          border: 1px solid rgba(174, 95, 118, 0.3);
        }

        .info-short {
          color: var(--text-dark);
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0;
        }

        /* ========== RIGHT PANEL - SERVICES ========== */
        .services-panel {
          background: transparent;
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .panel-header {
          margin-bottom: 2rem;
          position: relative;
        }

        .headerServ {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .headerServBTN {
          background: linear-gradient(135deg, var(--primary-teal), var(--primary-rose));
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 40px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          margin-top:15px
        }

        .headerServBTN:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .panel-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(135deg, var(--primary-teal), var(--primary-rose));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }

        .header-decoration {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-rose), var(--accent-peach));
          border-radius: 2px;
          margin: 1rem 0;
        }

        .panel-subtitle {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: calc(100vh - 200px);
          overflow-y: auto;
          padding-right: 1.5rem;
        }

        .services-list::-webkit-scrollbar {
          width: 4px;
        }

        .services-list::-webkit-scrollbar-track {
          background: rgba(87, 128, 137, 0.1);
          border-radius: 10px;
        }

        .services-list::-webkit-scrollbar-thumb {
          background: var(--primary-rose);
          border-radius: 10px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-white);
          border-radius: 20px;
          padding: 1.25rem;
          cursor: pointer;
          transition: var(--transition);
          border: 1px solid rgba(87, 128, 137, 0.15);
          position: relative;
        }

        .service-item:hover {
          transform: translateX(8px);
          border-color: var(--primary-rose);
          box-shadow: var(--shadow-md);
        }

        .service-item.active {
          background: linear-gradient(135deg, var(--primary-teal), var(--primary-rose));
          border-color: transparent;
          box-shadow: var(--shadow-lg);
        }

        .service-item.active .item-title,
        .service-item.active .item-description {
          color: white;
        }

        .service-item.active .stat-badge {
          background: rgba(255,255,255,0.2);
          color: white;
        }

        .service-item.active .item-arrow {
          color: white;
          transform: translateX(4px);
        }

        .item-indicator {
          flex-shrink: 0;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(87, 128, 137, 0.3);
          transition: var(--transition);
        }

        .indicator-dot.active {
          background: var(--primary-rose);
          box-shadow: 0 0 0 3px rgba(174, 95, 118, 0.3);
        }

        .item-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(87, 128, 137, 0.1), rgba(174, 95, 118, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--primary-teal);
          flex-shrink: 0;
          transition: var(--transition);
        }

        .service-item.active .item-icon {
          background: rgba(255,255,255,0.2);
          color: white;
        }

        .item-content {
          flex: 1;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .item-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .item-stats {
          display: flex;
          gap: 0.5rem;
        }

        .stat-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(87, 128, 137, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--primary-teal);
        }

        .item-description {
          font-size: 0.8rem;
          color: var(--text-gray);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .item-progress {
          height: 3px;
          background: rgba(87, 128, 137, 0.15);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-rose), var(--accent-peach));
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        .service-item.active .progress-bar {
          background: rgba(255,255,255,0.6);
        }

        .item-arrow {
          color: var(--accent-peach);
          transition: var(--transition);
          flex-shrink: 0;
        }

        /* ========== MODAL STYLES ========== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-container {
          position: relative;
          width: 90vw;
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          z-index: 10;
          font-size: 1.5rem;
        }

        .modal-close:hover {
          background: var(--primary-rose);
          transform: scale(1.1);
        }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          z-index: 10;
          font-size: 1.5rem;
        }

        .modal-nav:hover {
          background: var(--primary-rose);
          transform: translateY(-50%) scale(1.1);
        }

        .modal-prev {
          left: 20px;
        }

        .modal-next {
          right: 20px;
        }

        .modal-image-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .modal-image {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          animation: zoomIn 0.3s ease-out;
        }

        .modal-counter {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          padding: 0.5rem 1rem;
          border-radius: 40px;
          color: white;
          font-size: 0.9rem;
          z-index: 10;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .enhanced-wrapper {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .services-list {
            max-height: 500px;
          }

          .panel-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .enhanced-wrapper {
            padding: 1rem;
          }

          .gallery-content {
            padding: 1.25rem;
          }

          .thumbnail-enhanced {
            width: 60px;
            height: 60px;
          }

          .nav-btn {
            width: 36px;
            height: 36px;
          }

          .service-item {
            padding: 1rem;
          }

          .item-icon {
            width: 44px;
            height: 44px;
            font-size: 1.2rem;
          }

          .item-title {
            font-size: 0.9rem;
          }

          .panel-title {
            font-size: 2rem;
          }

          .headerServ {
            flex-direction: column;
            gap: 1rem;
          }

          .modal-nav {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .modal-close {
            width: 40px;
            height: 40px;
            font-size: 1rem;
            top: 10px;
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default NexoliaServicesEnhanced;