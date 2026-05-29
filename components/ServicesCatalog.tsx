'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Cloud,
  BarChart3,
  Workflow,
  Building2,
  LayoutDashboard,
  FolderKanban,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Rocket,
  Headphones,
  Award,
  ShieldCheck,
  Target,
  AppWindow,
  Paintbrush,
  Workflow as WorkflowIcon,
  BarChart as BarChartIcon,
  FolderTree,
  Share2,
  Globe2,
  Code2,
  Server,
  Network,
  Cpu,
  PieChart,
  LineChart,
  Brain,
  GitBranch,
  Settings,
  Bot,
  ShoppingBag,
  Store,
  Package,
  CloudCog,
  GanttChart,
  Timer,
  Menu,
  X
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  badge?: string;
  gradient: string;
  technologies?: string[];
  slug?: string; // ← AJOUTÉ pour les liens
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  services: Service[];
  color: string;
}

const ServicesCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('web');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const categories: ServiceCategory[] = [
    {
      id: 'web',
      name: 'Développement Web & Digital',
      description: 'Solutions web complètes et performantes',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          id: 'website-standard',
          slug: 'site-vitrine-standard',
          title: 'Site Vitrine Standard',
          description: 'Solution idéale pour votre présence en ligne professionnelle',
          icon: Globe2,
          badge: 'Populaire',
          gradient: 'from-blue-50 to-cyan-50',
          features: [
            'Design responsive',
            'Pages présentation',
            'Formulaire de contact',
            'SEO basique',
            'Optimisation mobile',
            'Intégration réseaux sociaux'
          ]
        },
        {
          id: 'website-enterprise',
          slug: 'enterprise-website',
          title: 'Enterprise Website',
          description: 'Site vitrine premium avec fonctionnalités avancées',
          icon: Building2,
          badge: 'Premium',
          gradient: 'from-indigo-50 to-purple-50',
          features: [
            'UI/UX premium',
            'CMS dynamique',
            'Multi-langues',
            'Blog professionnel',
            'Optimisation SEO avancée',
            'Haute performance',
            'Sécurité renforcée',
            'Analytics intégrés'
          ]
        },
        {
          id: 'website-custom',
          slug: 'custom-website-solution',
          title: 'Custom Website Solution',
          description: 'Solution web sur mesure 100% personnalisée',
          icon: Code2,
          badge: 'Sur mesure',
          gradient: 'from-purple-50 to-pink-50',
          features: [
            'Architecture sur mesure',
            'Expérience utilisateur personnalisée',
            'Intégrations API',
            'Automatisation avancée',
            'Modules spécifiques métier',
            'Infrastructure scalable'
          ]
        }
      ]
    },
    {
      id: 'webapp',
      name: 'Applications Web',
      description: 'Applications web robustes et évolutives',
      icon: LayoutDashboard,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          id: 'webapp-standard',
          slug: 'standard-web-application',
          title: 'Standard Web Application',
          description: 'Application web avec fonctionnalités essentielles',
          icon: LayoutDashboard,
          gradient: 'from-purple-50 to-pink-50',
          features: [
            'Dashboard administrateur',
            'Authentification utilisateurs',
            'Base de données',
            'Gestion contenu',
            'Responsive design',
            'API standard'
          ]
        },
        {
          id: 'webapp-enterprise',
          slug: 'enterprise-web-platform',
          title: 'Enterprise Web Platform',
          description: 'Plateforme web d\'entreprise haut de gamme',
          icon: Server,
          badge: 'Enterprise',
          gradient: 'from-indigo-50 to-blue-50',
          features: [
            'Multi-utilisateurs',
            'Permissions avancées',
            'Temps réel',
            'Cloud deployment',
            'Sécurité entreprise',
            'Reporting avancé',
            'Intégrations ERP/CRM'
          ]
        },
        {
          id: 'webapp-custom',
          slug: 'custom-enterprise-solution',
          title: 'Custom Enterprise Solution',
          description: 'Solution web architecturée sur mesure',
          icon: Network,
          badge: 'Custom',
          gradient: 'from-red-50 to-orange-50',
          features: [
            'Architecture personnalisée',
            'Microservices',
            'Haute disponibilité',
            'IA & automatisation',
            'Scalabilité cloud',
            'Intégrations complexes',
            'Infrastructure enterprise'
          ]
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Applications Mobile',
      description: 'Apps mobiles natives et cross-platform',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          id: 'mobile-standard',
          slug: 'standard-mobile-app',
          title: 'Standard Mobile App',
          description: 'Application mobile performante et intuitive',
          icon: Smartphone,
          gradient: 'from-green-50 to-emerald-50',
          features: [
            'Android/iOS',
            'Authentification',
            'Notifications push',
            'Synchronisation API',
            'UI moderne'
          ]
        },
        {
          id: 'mobile-enterprise',
          slug: 'enterprise-mobile-platform',
          title: 'Enterprise Mobile Platform',
          description: 'Plateforme mobile d\'entreprise avancée',
          icon: ShieldCheck,
          badge: 'Premium',
          gradient: 'from-teal-50 to-blue-50',
          features: [
            'Temps réel',
            'Géolocalisation',
            'Offline mode',
            'Sécurité avancée',
            'Dashboard mobile',
            'Synchronisation cloud'
          ]
        },
        {
          id: 'mobile-custom',
          slug: 'custom-mobile-ecosystem',
          title: 'Custom Mobile Ecosystem',
          description: 'Écosystème mobile personnalisé complet',
          icon: Cpu,
          badge: 'Innovant',
          gradient: 'from-cyan-50 to-blue-50',
          features: [
            'Architecture mobile sur mesure',
            'Intégration IoT/API',
            'Intelligence artificielle',
            'Workflow métier',
            'Synchronisation multi-systèmes',
            'Performance avancée'
          ]
        }
      ]
    },
    {
      id: 'ecommerce',
      name: 'Solutions E-Commerce',
      description: 'Plates-formes de vente en ligne performantes',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          id: 'ecommerce-standard',
          slug: 'standard-e-commerce',
          title: 'Standard E-Commerce',
          description: 'Boutique en ligne clé en main',
          icon: ShoppingBag,
          gradient: 'from-orange-50 to-red-50',
          features: [
            'Catalogue produits',
            'Gestion commandes',
            'Paiement en ligne',
            'Dashboard ventes',
            'Gestion clients'
          ]
        },
        {
          id: 'ecommerce-enterprise',
          slug: 'enterprise-commerce-platform',
          title: 'Enterprise Commerce Platform',
          description: 'Plateforme e-commerce d\'entreprise',
          icon: Store,
          badge: 'Enterprise',
          gradient: 'from-amber-50 to-orange-50',
          features: [
            'Multi-vendeurs',
            'Gestion stock avancée',
            'ERP integration',
            'Facturation automatique',
            'Analytics avancés',
            'Marketing automation'
          ]
        },
        {
          id: 'ecommerce-custom',
          slug: 'custom-commerce-ecosystem',
          title: 'Custom Commerce Ecosystem',
          description: 'Écosystème commerce personnalisé',
          icon: Package,
          badge: 'Scalable',
          gradient: 'from-yellow-50 to-orange-50',
          features: [
            'Marketplace personnalisée',
            'Architecture scalable',
            'IA recommandations',
            'Omnichannel commerce',
            'Intégration logistique',
            'Solutions métier spécifiques'
          ]
        }
      ]
    },
    {
      id: 'saas',
      name: 'Solutions SaaS',
      description: 'Applications SaaS robustes et évolutives',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      services: [
        {
          id: 'saas-standard',
          slug: 'standard-saas-solution',
          title: 'Standard SaaS Solution',
          description: 'Solution SaaS clé en main',
          icon: Cloud,
          gradient: 'from-sky-50 to-blue-50',
          features: [
            'Gestion utilisateurs',
            'Abonnements',
            'Dashboard SaaS',
            'Hébergement cloud',
            'Sécurité standard'
          ]
        },
        {
          id: 'saas-enterprise',
          slug: 'enterprise-saas-platform',
          title: 'Enterprise SaaS Platform',
          description: 'Plateforme SaaS d\'entreprise haut de gamme',
          icon: CloudCog,
          badge: 'Enterprise',
          gradient: 'from-blue-50 to-indigo-50',
          features: [
            'Multi-tenant',
            'Haute disponibilité',
            'Monitoring avancé',
            'API management',
            'Analytics temps réel',
            'Sécurité enterprise'
          ]
        },
        {
          id: 'saas-custom',
          slug: 'custom-saas-ecosystem',
          title: 'Custom SaaS Ecosystem',
          description: 'Écosystème SaaS sur mesure',
          icon: Server,
          badge: 'Cloud-native',
          gradient: 'from-cyan-50 to-blue-50',
          features: [
            'Architecture cloud-native',
            'Scalabilité avancée',
            'Microservices',
            'Automatisation intelligente',
            'Intégrations complexes',
            'Infrastructure dédiée'
          ]
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Dashboards & Analytics',
      description: 'Solutions BI et visualisation de données',
      icon: BarChart3,
      color: 'from-violet-500 to-purple-500',
      services: [
        {
          id: 'analytics-standard',
          slug: 'standard-analytics-dashboard',
          title: 'Standard Analytics Dashboard',
          description: 'Dashboard analytics essentiel',
          icon: PieChart,
          gradient: 'from-violet-50 to-purple-50',
          features: [
            'KPIs principaux',
            'Graphiques interactifs',
            'Reporting standard',
            'Export PDF/Excel'
          ]
        },
        {
          id: 'analytics-enterprise',
          slug: 'enterprise-bi-platform',
          title: 'Enterprise BI Platform',
          description: 'Plateforme BI d\'entreprise avancée',
          icon: LineChart,
          badge: 'Premium',
          gradient: 'from-fuchsia-50 to-purple-50',
          features: [
            'Business Intelligence',
            'Data analytics avancés',
            'Temps réel',
            'Multi-sources données',
            'Reporting exécutif',
            'Data visualization'
          ]
        },
        {
          id: 'analytics-custom',
          slug: 'custom-analytics-ecosystem',
          title: 'Custom Analytics Ecosystem',
          description: 'Écosystème analytics personnalisé',
          icon: Brain,
          badge: 'IA Analytics',
          gradient: 'from-pink-50 to-rose-50',
          features: [
            'Intelligence décisionnelle',
            'IA analytique',
            'Big Data integration',
            'Data warehouse',
            'Reporting stratégique',
            'Analyse prédictive'
          ]
        }
      ]
    },
    {
      id: 'automation',
      name: 'Workflow & Automatisation',
      description: 'Solutions d\'automatisation intelligente',
      icon: Workflow,
      color: 'from-rose-500 to-red-500',
      services: [
        {
          id: 'automation-standard',
          slug: 'standard-workflow-automation',
          title: 'Standard Workflow Automation',
          description: 'Automatisation de processus essentielle',
          icon: GitBranch,
          gradient: 'from-rose-50 to-red-50',
          features: [
            'Process automation',
            'Notifications automatiques',
            'Validation workflows',
            'Gestion tâches'
          ]
        },
        {
          id: 'automation-enterprise',
          slug: 'enterprise-automation-platform',
          title: 'Enterprise Automation Platform',
          description: 'Plateforme automation d\'entreprise',
          icon: Settings,
          badge: 'Avancé',
          gradient: 'from-red-50 to-orange-50',
          features: [
            'BPM enterprise',
            'Intégration ERP/CRM',
            'Automatisation métier',
            'Workflows complexes',
            'Monitoring processus'
          ]
        },
        {
          id: 'automation-custom',
          slug: 'custom-intelligent-automation',
          title: 'Custom Intelligent Automation',
          description: 'Automatisation intelligente sur mesure',
          icon: Bot,
          badge: 'IA Powered',
          gradient: 'from-purple-50 to-pink-50',
          features: [
            'IA & automatisation',
            'Processus intelligents',
            'Intégration multi-systèmes',
            'Orchestration avancée',
            'Automatisation stratégique'
          ]
        }
      ]
    },
    {
      id: 'microsoft',
      name: 'Microsoft Solutions & Power Platform',
      description: 'Solutions Microsoft complètes pour l\'entreprise moderne',
      icon: Building2,
      color: 'from-blue-600 to-indigo-600',
      services: [
        {
          id: 'powerapps-dev',
          slug: 'power-apps-development',
          title: 'Power Apps Development',
          description: 'Applications métier rapides avec Power Apps',
          icon: AppWindow,
          badge: 'Low-Code',
          gradient: 'from-blue-50 to-indigo-50',
          technologies: ['Power Apps', 'Dataverse', 'Connectors', 'AI Builder'],
          features: [
            'Applications canvas personnalisées',
            'Applications model-driven',
            'Portails Power Apps',
            'Intégration Dataverse',
            'Connecteurs personnalisés',
            'Interface utilisateur intuitive',
            'Sécurité niveau ligne',
            'Déploiement rapide'
          ]
        },
        {
          id: 'spfx-dev',
          slug: 'sharepoint-spfx-development',
          title: 'SharePoint SPFx Development',
          description: 'Interfaces métier hautement personnalisées avec SPFx',
          icon: Paintbrush,
          badge: 'Expert',
          gradient: 'from-indigo-50 to-purple-50',
          technologies: ['SPFx', 'React', 'TypeScript', 'Graph API'],
          features: [
            'Web Parts personnalisés',
            'Extensions SharePoint',
            'Adaptive Card Extensions',
            'Library Components',
            'Intégration Graph API',
            'Command Sets personnalisés',
            'Field Customizers',
            'Application Customizers'
          ]
        },
        {
          id: 'automation-workflows',
          slug: 'power-automate-n8n',
          title: 'Power Automate & n8n',
          description: 'Automatisation intelligente des processus métier',
          icon: WorkflowIcon,
          badge: 'Automation',
          gradient: 'from-green-50 to-emerald-50',
          technologies: ['Power Automate', 'n8n', 'AI Builder', 'RPA'],
          features: [
            'Flows automatisés cloud',
            'Robotic Process Automation (RPA)',
            'Processus d\'approbation',
            'Intégration n8n workflows',
            'Connecteurs 400+ services',
            'Business process flows',
            'UI Flows (RPA desktop)',
            'Process Advisor & analytics'
          ]
        },
        {
          id: 'powerbi-analytics',
          slug: 'power-bi-analytics',
          title: 'Power BI Analytics',
          description: 'Dashboards analytiques avancés et Business Intelligence',
          icon: BarChartIcon,
          badge: 'BI Premium',
          gradient: 'from-yellow-50 to-orange-50',
          technologies: ['Power BI', 'DAX', 'Power Query', 'Row-Level Security'],
          features: [
            'Tableaux de bord interactifs',
            'Modélisation data avancée',
            'KPI temps réel',
            'Dataflows & datamarts',
            'Security row-level',
            'Embedded analytics',
            'Mobile dashboards',
            'Export multi-formats'
          ]
        },
        {
          id: 'project-server',
          slug: 'project-server-eppm',
          title: 'Project Server & EPPM',
          description: 'Installation et configuration complète de Project Server',
          icon: FolderTree,
          badge: 'Enterprise',
          gradient: 'from-cyan-50 to-blue-50',
          technologies: ['Project Server', 'SharePoint', 'SQL Server'],
          features: [
            'Installation Microsoft Project Server',
            'Configuration domaine entreprise',
            'Portfolio Management',
            'Gestion ressources projets',
            'Workflows d\'approbation',
            'Timesheets & reporting',
            'Intégration PWA',
            'Plan de sauvegarde'
          ]
        },
        {
          id: 'sharepoint-subscription',
          slug: 'sharepoint-subscription-edition',
          title: 'SharePoint Subscription Edition',
          description: 'Plateforme collaborative nouvelle génération',
          icon: Share2,
          badge: 'Latest',
          gradient: 'from-red-50 to-pink-50',
          technologies: ['SharePoint SE', 'Viva', 'Teams', 'Graph API'],
          features: [
            'Architecture moderne',
            'Sites communication & team',
            'Migration version antérieure',
            'Custom development',
            'Intégration Viva',
            'Security & compliance',
            'Gestion documents avancée',
            'Search & metadata'
          ]
        }
      ]
    },
    {
      id: 'project',
      name: 'Microsoft Project Server & EPPM',
      description: 'Gestion de projets et portefeuilles',
      icon: FolderKanban,
      color: 'from-emerald-500 to-teal-500',
      services: [
        {
          id: 'project-standard',
          slug: 'standard-deployment',
          title: 'Standard Deployment',
          description: 'Déploiement Project Server standard',
          icon: GanttChart,
          gradient: 'from-emerald-50 to-teal-50',
          features: [
            'Installation Microsoft Project Server',
            'Déploiement domaine entreprise',
            'Configuration initiale',
            'Accès portail projet'
          ]
        },
        {
          id: 'project-professional',
          slug: 'professional-eppm-solution',
          title: 'Professional EPPM Solution',
          description: 'Solution EPPM professionnelle',
          icon: Timer,
          badge: 'Professional',
          gradient: 'from-teal-50 to-cyan-50',
          features: [
            'Personnalisation EPPM',
            'Portfolio Management',
            'Workflows projets',
            'Formation équipes',
            'Gouvernance projet',
            'Reporting avancé'
          ]
        },
        {
          id: 'project-enterprise',
          slug: 'enterprise-strategic-platform',
          title: 'Enterprise Strategic Platform',
          description: 'Plateforme stratégique enterprise',
          icon: Rocket,
          badge: 'Strategic',
          gradient: 'from-cyan-50 to-blue-50',
          features: [
            'SharePoint Subscription Edition',
            'Intégration ERP (Oracle/SAP)',
            'Facturation automatique projets',
            'Maintenance avancée',
            'PMO stratégique',
            'Accompagnement transformation digitale',
            'Support premium entreprise'
          ]
        }
      ]
    }
  ];
  const getIcon = (Icon: React.ElementType) => {
    return <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />;
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (isMobile) setIsMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" style={{ height: "45vh" }}>
        <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Solutions Digitales sur Mesure
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Des solutions innovantes et performantes adaptées à vos besoins spécifiques,
              de la simple vitrine à l'écosystème digital complexe
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#F3F4F6" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {!isMobile && (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 max-w-6xl">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium whitespace-nowrap ${activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                      }`}
                    aria-pressed={activeCategory === category.id}
                  >
                    {getIcon(category.icon)}
                    <span className="truncate">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="px-4 py-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Fermer le menu des catégories" : "Ouvrir le menu des catégories"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex items-center gap-3">
                {getIcon(categories.find(c => c.id === activeCategory)?.icon || Globe)}
                <span className="font-semibold text-sm">
                  {categories.find(c => c.id === activeCategory)?.name}
                </span>
              </div>
              {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>

            <div className={`absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl overflow-hidden transition-all duration-300 z-50 ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-3 overflow-y-auto max-h-[80vh]">
                <div className="grid grid-cols-1 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${activeCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      aria-pressed={activeCategory === category.id}
                    >
                      <div className={`p-2 rounded-lg ${activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'}`}>
                        {getIcon(category.icon)}
                      </div>
                      <span className="flex-1 text-left">{category.name}</span>
                      {activeCategory === category.id && <ChevronRight className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {categories.map((category) => (
          activeCategory === category.id && (
            <div key={category.id} className="animate-fadeIn">
              <div className="text-center mb-12">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-4 shadow-lg`} aria-hidden="true">
                  {getIcon(category.icon)}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {category.name}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.services.map((service) => (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true"></div>

                    {service.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {service.badge}
                        </div>
                      </div>
                    )}

                    <div className="relative z-10 p-6 sm:p-8">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`} aria-hidden="true">
                        {getIcon(service.icon)}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 mb-4 group-hover:text-gray-700">
                        {service.description}
                      </p>

                      {service.technologies && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span key={idx} className="text-xs bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-gray-700 border border-gray-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-2 mb-6 max-h-60 overflow-y-auto custom-scrollbar">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-800">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 6 && (
                          <div className="text-xs text-blue-600 font-medium mt-2">
                            +{service.features.length - 6} autres fonctionnalités
                          </div>
                        )}
                      </div>

                      <Link
                        href="/contact"
                        className="w-full group/btn bg-gradient-to-r from-gray-900 to-gray-800 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base inline-flex items-center justify-center gap-2"
                        aria-label="Demander un devis gratuit pour ce service"
                      >
                        Passez votre Devis gratuitement
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-300 pointer-events-none" aria-hidden="true"></div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
      `}</style>
    </main>
  );
};

export default ServicesCatalog;