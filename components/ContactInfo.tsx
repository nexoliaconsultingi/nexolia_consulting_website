// components/ContactInfo.tsx
import { useState, useEffect } from 'react';
import {
    Phone, Mail, MapPin, Clock, MessageCircle, Copy, Check,
    Send, Navigation, Share2, Star, Users, Award, Coffee, Headphones,
    Facebook, Twitter, Linkedin, Instagram,
} from 'lucide-react';

// Types definitions
interface NotificationType {
    message: string;
    type: 'success' | 'error' | 'info';
}

interface PhoneType {
    number: string;
    label: string;
    type: string;
    country: string;
    available: boolean;
    priority?: number;
}

interface EmailType {
    address: string;
    label: string;
    department: string;
    responseTime: string;
    icon: string;
}

interface WhatsAppType {
    number: string;
    label: string;
    messageTemplate: string;
    availability: string;
    responseTime: string;
}

interface HourType {
    day: string;
    hours: string;
    status: 'open' | 'closed' | 'reduced';
}

interface ExceptionType {
    date: string;
    label: string;
    status: 'open' | 'closed' | 'reduced';
}

interface HoursType {
    standard: HourType[];
    exceptions: ExceptionType[];
}

interface MapType {
    address: string;
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
    wazeUrl: string;
    nearbyStations: string[];
    parking: string;
}

interface SocialLinksType {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube?: string;
}

interface CompanyType {
    name: string;
    tagline: string;
    satisfaction: string;
    clients: string;
    certifications: string[];
}

interface ContactDataType {
    company: CompanyType;
    phones: PhoneType[];
    emails: EmailType[];
    whatsapp: WhatsAppType;
    map: MapType;
    hours: HoursType;
    socialLinks: SocialLinksType;
}

interface ContactInfoProps {
    customData?: Partial<ContactDataType>;
    theme?: 'light' | 'dark';
}

const ContactInfo: React.FC<ContactInfoProps> = ({ customData, theme = 'light' }) => {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [notification, setNotification] = useState<NotificationType | null>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success'): void => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const copyToClipboard = (text: string, field: string): void => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        showNotification(`📋 ${text} copié !`);
        setTimeout(() => setCopiedField(null), 2000);
    };

    // Données par défaut avec le Pôle Technique El Ghazela
    const defaultContactData: ContactDataType = {
        company: {
            name: "Nexolia Consulting",
            tagline: "Solutions innovantes pour votre entreprise",
            satisfaction: "98%",
            clients: "500+",
            certifications: ["ISO 9001", "Qualiopi", "Tech Innovator"]
        },
        phones: [
            { number: "+216 23 267 646", label: "Standard", type: "fixed", country: "Tunisie", available: true, priority: 1 },
            { number: "+216 70 123 456", label: "Urgence", type: "mobile", country: "Tunisie", available: true, priority: 2 },
        ],
        emails: [
            { address: "contact@nexolia-consulting.com", label: "Commercial", department: "Ventes", responseTime: "< 2h", icon: "💼" },
            { address: "support@nexolia-consulting.com", label: "Support Technique", department: "IT", responseTime: "< 1h", icon: "🔧" },
        ],
        whatsapp: {
            number: "+216 23 267 646",
            label: "WhatsApp",
            messageTemplate: "Bonjour, je souhaite obtenir plus d'informations sur vos services.",
            availability: "Lun-Ven, 8h-17h",
            responseTime: "~5 min"
        },
        map: {
            address: "Pôle Technique El Ghazela, Rue de la Technologie, El Ghazela, Ariana, Tunisie",
            latitude: 36.8805,
            longitude: 10.1891,
            googleMapsUrl: "https://www.google.com/maps?q=36.8805,10.1891",
            wazeUrl: "https://www.waze.com/ul?ll=36.8805,10.1891&navigate=yes",
            nearbyStations: [
                " Station TGM: Tunis Marine (10 min en taxi)",
                " Bus Ligne 20: Arrêt El Ghazela",
                " Navette: Départ depuis Ariana Ville"
            ],
            parking: "Parking gratuit disponible sur place (100 places)"
        },
        hours: {
            standard: [
                { day: "Lundi", hours: "09:00 - 18:00", status: "open" },
                { day: "Mardi", hours: "09:00 - 18:00", status: "open" },
                { day: "Mercredi", hours: "09:00 - 18:00", status: "open" },
                { day: "Jeudi", hours: "09:00 - 18:00", status: "open" },
                { day: "Vendredi", hours: "09:00 - 17:00", status: "open" },
                { day: "Samedi", hours: "10:00 - 14:00", status: "reduced" },
                { day: "Dimanche", hours: "Fermé", status: "closed" }
            ],
            exceptions: [
                { date: "2025-01-01", label: "Jour de l'An", status: "closed" },
                { date: "2025-01-14", label: "Révolution et Jeunesse", status: "closed" },
                { date: "2025-03-20", label: "Fête de l'Indépendance", status: "closed" },
                { date: "2025-04-09", label: "Journée des Martyrs", status: "closed" },
                { date: "2025-05-01", label: "Fête du Travail", status: "closed" },
                { date: "2025-07-25", label: "Fête de la République", status: "closed" },
                { date: "2025-08-13", label: "Fête de la Femme", status: "closed" },
                { date: "2025-10-15", label: "Fête de l'Évacuation", status: "closed" },
                { date: "2025-12-17", label: "Révolution Tunisienne", status: "closed" },
                { date: "2025-12-25", label: "Noël", status: "closed" },
            ]
        },
        socialLinks: {
            linkedin: "https://linkedin.com/company/nexolia-consulting",
            twitter: "#",
            facebook: "https://www.facebook.com/profile.php?id=61589281981252",
            instagram: "https://www.instagram.com/nexoliaconsulting/"
        }
    };

    const data: ContactDataType = { ...defaultContactData, ...customData };

    const isOpen = (): boolean => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        if (day === 0) return false;
        if (day === 6) return hour >= 10 && hour < 14;
        return hour >= 9 && hour < (day === 5 ? 17 : 18);
    };

    const getCurrentStatus = (): { status: string; color: string; bgColor: string; icon: string } => {
        const open = isOpen();
        return {
            status: open ? 'ouvert' : 'fermé',
            color: open ? 'text-green-600' : 'text-red-600',
            bgColor: open ? 'bg-green-100' : 'bg-red-100',
            icon: open ? '🟢' : '🔴'
        };
    };

    const status = getCurrentStatus();

    const openWhatsApp = (): void => {
        const whatsappUrl = `https://wa.me/${data.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.whatsapp.messageTemplate)}`;
        window.open(whatsappUrl, '_blank');
        showNotification('📱 Redirection vers WhatsApp...', 'info');
    };

    // Chargement de la carte Leaflet
    useEffect(() => {
        const loadLeafletMap = () => {
            if (!mapLoaded && typeof window !== 'undefined') {
                // Vérifier si Leaflet est déjà chargé
                if (!document.querySelector('link[href*="leaflet.css"]')) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                    document.head.appendChild(link);
                }

                if (!document.querySelector('script[src*="leaflet.js"]')) {
                    const script = document.createElement('script');
                    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                    script.onload = () => {
                        setMapLoaded(true);
                    };
                    document.body.appendChild(script);
                } else {
                    setMapLoaded(true);
                }
            }
        };

        loadLeafletMap();
    }, []);

    // Initialisation de la carte après chargement
    useEffect(() => {
        if (mapLoaded && typeof window !== 'undefined' && (window as any).L) {
            const L = (window as any).L;

            // Vérifier si la carte existe déjà
            const mapContainer = document.getElementById('interactive-map');
            if (mapContainer && !mapContainer.hasAttribute('data-map-initialized')) {
                mapContainer.setAttribute('data-map-initialized', 'true');

                // Initialiser la carte
                const map = L.map('interactive-map').setView([data.map.latitude, data.map.longitude], 15);

                // Ajouter le fond de carte
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    maxZoom: 19,
                    minZoom: 3
                }).addTo(map);

                // Ajouter un marqueur personnalisé
                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background-color: #3b82f6; border-radius: 50%; padding: 8px; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.2);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>',
                    iconSize: [36, 36],
                    iconAnchor: [18, 36],
                    popupAnchor: [0, -36]
                });

                const marker = L.marker([data.map.latitude, data.map.longitude], { icon: customIcon }).addTo(map);

                // Ajouter un popup
                marker.bindPopup(`
                    <div style="font-family: sans-serif;">
                        <strong style="color: #1f2937;">Nexolia Consulting</strong><br/>
                        <span style="font-size: 12px; color: #6b7280;">Pôle Technique El Ghazela</span><br/>
                        <span style="font-size: 11px; color: #9ca3af;">Rue de la Technologie, Tunis</span>
                    </div>
                `).openPopup();

                // Ajouter un contrôle de zoom
                map.zoomControl.setPosition('bottomright');

                // Redimensionner la carte après un court délai
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);
            }
        }
    }, [mapLoaded, data.map.latitude, data.map.longitude]);

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'} py-8 px-4 sm:px-6 lg:px-8 relative`}>

            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-4 right-4 z-50 animate-slideInRight">
                    <div className={`${notification.type === 'success' ? 'bg-green-500' : notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`}>
                        {notification.type === 'success' ? <Check className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                        <span>{notification.message}</span>
                    </div>
                </div>
            )}

            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Contactez <span className="text-blue-600">Nexolia Consulting</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {data.company.tagline}
                    </p>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Colonne gauche - Contact principal */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Téléphones */}
                        <div
                            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                            onMouseEnter={() => setHoveredCard('phones')}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-6 h-6 text-white" />
                                    <h2 className="text-xl font-semibold text-white">Ligne directe</h2>
                                </div>
                            </div>



                            <div className="p-3 sm:p-6">
                                <div className="space-y-4">
                                    {data.phones.filter(p => p.available).map((phone, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                        >
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                    <p className="text-[12px] sm:text-lg font-semibold text-gray-900 break-all">
                                                        {phone.number}
                                                    </p>

                                                    {index === 0 && (
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] sm:text-xs rounded-full w-fit">
                                                            Prioritaire
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                                                    <p className="text-[10px] sm:text-sm text-gray-500">
                                                        {phone.label}
                                                    </p>

                                                    <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>

                                                    <p className="text-[10px] sm:text-sm text-gray-500">
                                                        {phone.country}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                                <button
                                                    onClick={() => window.location.href = `tel:${phone.number}`}
                                                    className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-[10px] sm:text-sm"
                                                >
                                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    Appeler
                                                </button>

                                                <button
                                                    onClick={() => copyToClipboard(phone.number, `phone-${index}`)}
                                                    className="w-full sm:w-auto p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                                                >
                                                    {copiedField === `phone-${index}` ? (
                                                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>








                        </div>

                        {/* Emails */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-3 sm:px-6 py-3 sm:py-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />

                                    <h2 className="text-xl font-semibold text-white">
                                        Adresses email
                                    </h2>
                                </div>
                            </div>

                            <div className="p-3 sm:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    {data.emails.map((email, index) => (
                                        <div
                                            key={index}
                                            className="group p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-300"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-lg sm:text-2xl">
                                                            {email.icon}
                                                        </span>

                                                        <p className="text-[11px] sm:text-base font-semibold text-gray-900">
                                                            {email.label}
                                                        </p>
                                                    </div>

                                                    <p className="text-[10px] sm:text-sm text-gray-600 font-mono mb-2 break-all">
                                                        {email.address}
                                                    </p>

                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-[9px] sm:text-xs w-fit">
                                                            {email.department}
                                                        </span>

                                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[9px] sm:text-xs w-fit">
                                                            Réponse {email.responseTime}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2 w-full sm:w-auto">
                                                    <button
                                                        onClick={() => window.location.href = `mailto:${email.address}`}
                                                        className="flex-1 sm:flex-none p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                                                    >
                                                        <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    </button>

                                                    <button
                                                        onClick={() => copyToClipboard(email.address, `email-${index}`)}
                                                        className="flex-1 sm:flex-none p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                                                    >
                                                        {copiedField === `email-${index}` ? (
                                                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                                                        ) : (
                                                            <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Horaires */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-6 h-6 text-white" />
                                        <h2 className="text-xl font-semibold text-white">Horaires d'ouverture</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-3">📅 Horaires standards</p>
                                        <div className="space-y-2">
                                            {data.hours.standard.map((hour, index) => (
                                                <div key={index} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600">{hour.day}</span>
                                                    <span className={`font-medium ${hour.status === 'open' ? 'text-green-600' :
                                                        hour.status === 'reduced' ? 'text-orange-600' : 'text-red-600'
                                                        }`}>
                                                        {hour.hours}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-3">📆 Prochaines fermetures</p>
                                        <div className="space-y-2">
                                            {data.hours.exceptions.map((exception, index) => (
                                                <div key={index} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600">{exception.label}</span>
                                                    <span className="text-red-600 font-medium">{exception.status === 'closed' ? 'Fermé' : 'Horaires réduits'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Infos supplémentaires */}
                                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Coffee className="w-4 h-4 text-blue-600" />
                                        <span className="text-gray-700">Permanence téléphonique : <strong className="text-blue-600">24/7</strong> pour les urgences</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm mt-2">
                                        <Headphones className="w-4 h-4 text-blue-600" />
                                        <span className="text-gray-700">Support technique : <strong className="text-blue-600">disponible jusqu'à 20h</strong> du lundi au vendredi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite - Widgets */}
                    <div className="space-y-6">

                        {/* WhatsApp Card */}
                        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-500">
                            <div className="flex items-center justify-between mb-4">
                                <MessageCircle className="w-12 h-12" />
                                <div className="text-right">
                                    <p className="text-sm opacity-90">Temps de réponse moyen</p>
                                    <p className="text-2xl font-bold">{data.whatsapp.responseTime}</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">WhatsApp Business</h3>
                            <p className="text-green-100 mb-3">{data.whatsapp.number}</p>
                            <p className="text-sm text-green-100 mb-4">{data.whatsapp.availability}</p>
                            <button
                                onClick={openWhatsApp}
                                className="w-full py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Démarrer la conversation
                            </button>
                        </div>

                        {/* Carte interactive améliorée */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-white" />
                                    <h2 className="text-xl font-semibold text-white">Notre localisation</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                {/* Carte interactive Leaflet */}
                                <div className="relative rounded-xl overflow-hidden mb-4 bg-gray-100" style={{ height: '250px' }}>
                                    <div id="interactive-map" style={{ height: '100%', width: '100%' }}></div>
                                    {!mapLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                            <div className="text-center">
                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                                                <p className="text-sm text-gray-500">Chargement de la carte...</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Adresse complète */}
                                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                    <p className="text-gray-800 font-semibold flex items-start gap-2">
                                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>{data.map.address}</span>
                                    </p>
                                </div>

                                {/* Accès détaillés */}
                                <div className="space-y-3 mb-4">
                                    <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <span className="text-lg"></span> Accès et transports :
                                    </p>
                                    <div className="space-y-1.5 ml-6">
                                        {data.map.nearbyStations.map((station, idx) => (
                                            <p key={idx} className="text-sm text-gray-600">{station}</p>
                                        ))}
                                        <p className="text-sm text-gray-600 mt-2 pt-2 border-t border-gray-200">
                                            🅿️ {data.map.parking}
                                        </p>
                                    </div>
                                </div>

                                {/* Boutons d'itinéraire */}
                                <div className="flex flex-col sm:flex-row gap-2">
  <a
    href={data.map.googleMapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 text-[10px] sm:text-sm"
  >
    <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
    Google Maps
  </a>

  <a
    href={data.map.wazeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 text-[10px] sm:text-sm"
  >
    <svg
      className="w-3 h-3 sm:w-4 sm:h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>

    Waze
  </a>

  <button
    onClick={() => copyToClipboard(data.map.address, "address")}
    className="w-full sm:w-auto p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center"
    title="Copier l'adresse"
  >
    {copiedField === "address" ? (
      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
    ) : (
      <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
    )}
  </button>
</div>

                                {/* Information supplémentaire */}
                                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <p className="text-xs text-yellow-800 flex items-center gap-2">
                                        <span>💡</span>
                                        Le Pôle Technique El Ghazela est un hub technologique majeur à Tunis, facilement accessible depuis le centre-ville.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Share2 className="w-5 h-5 text-blue-600" />
                                Suivez notre actualité
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all transform hover:scale-105">
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </a>
                                <a href={data.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-3 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-all transform hover:scale-105">
                                    <Twitter className="w-5 h-5" />
                                    Twitter
                                </a>
                                <a href={data.socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-all transform hover:scale-105">
                                    <Facebook className="w-5 h-5" />
                                    Facebook
                                </a>
                                <a href={data.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-all transform hover:scale-105">
                                    <Instagram className="w-5 h-5" />
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slideInRight {
                    animation: slideInRight 0.3s ease-out;
                }
                
                /* Styles pour la carte Leaflet */
                :global(.leaflet-container) {
                    border-radius: 12px;
                    z-index: 1;
                }
                
                :global(.leaflet-popup-content-wrapper) {
                    border-radius: 12px;
                    padding: 0;
                }
                
                :global(.leaflet-popup-content) {
                    margin: 10px 12px;
                }
                
                :global(.custom-marker) {
                    background: transparent;
                }
            `}</style>
        </div>
    );
};

export default ContactInfo;