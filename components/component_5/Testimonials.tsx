"use client";

import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { Button } from '../ui/button';
import { ReviewFormSection } from './ReviewFormSection';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

// Type pour un avis
type Review = {
  _id: string;
  userName: string;
  email: string;
  profileImage?: string;
  service: string;
  reviewText: string;
  rating: number;
  city: string;
  createdAt: string;
};

// Données statiques des avis clients
const STATIC_REVIEWS: Review[] = [
  {
    _id: "1",
    userName: "Sophie Martin",
    email: "sophie@example.com",
    profileImage: "/clients/sophie.png",
    service: "Développement application mobile",
    reviewText: "Application mobile fluide et bien conçue. L’équipe a parfaitement compris nos besoins et livré un produit de qualité.",
    rating: 5,
    city: "France",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "2",
    userName: "Thomas Bernard",
    email: "thomas@example.com",
    profileImage: "/clients/thomas.png",
    service: "Site web & SEO",
    reviewText: "Excellent travail sur notre site web avec un référencement SEO très performant. Nous avons gagné en visibilité rapidement.",
    rating: 5,
    city: "¨Paris",
    createdAt: "2024-01-20T14:30:00Z"
  },
  {
    _id: "3",
    userName: "Mariam lifi",
    email: "mariam@example.com",
    profileImage: "/clients/marie.png",
    service: "Solution Microsoft SPFx",
    reviewText: "Très bonne expertise sur SharePoint SPFx. La solution livrée est stable, moderne et parfaitement intégrée à notre système.",
    rating: 4,
    city: "Tunis",
    createdAt: "2024-01-25T09:15:00Z"
  },
  {
    _id: "4",
    userName: "Ahmed Ben Ali",
    email: "ahmed@example.com",
    profileImage: "/clients/ahmed.png",
    service: "Dashboard Power BI",
    reviewText: "Tableaux de bord Power BI très clairs et puissants. Cela a transformé notre manière de suivre nos indicateurs.",
    rating: 5,
    city: "La Marsa",
    createdAt: "2024-02-01T11:45:00Z"
  },
  {
    _id: "5",
    userName: "Emani wefi",
    email: "emani@example.com",
    profileImage: "/clients/claire.png",
    service: "Formation MS Project",
    reviewText: "Formation MS Project très bien structurée. J’ai pu maîtriser la planification de projets efficacement.",
    rating: 5,
    city: "Sfax",
    createdAt: "2024-02-05T16:20:00Z"
  },
  {
    _id: "6",
    userName: "Nicolas Rousseau",
    email: "nicolas@example.com",
    profileImage: "/clients/nicola.png",
    service: "Développement application mobile",
    reviewText: "Application mobile rapide et intuitive. L’équipe est très professionnelle et à l’écoute.",
    rating: 4,
    city: "france",
    createdAt: "2024-02-10T13:00:00Z"
  },
  {
    _id: "7",
    userName: "Fatima Zahra",
    email: "fatima@example.com",
    profileImage: "/clients/fatima.png",
    service: "Site web & SEO",
    reviewText: "Très bon site web optimisé SEO. Le design est moderne et les performances sont excellentes.",
    rating: 5,
    city: "Nabeul",
    createdAt: "2024-02-12T10:30:00Z"
  },
  {
    _id: "8",
    userName: "Hamza tborski",
    email: "hamza@example.com",
    profileImage: "/clients/pier.png",
    service: "Dashboard Power BI",
    reviewText: "Super dashboard Power BI qui nous aide à prendre de meilleures décisions grâce aux données en temps réel.",
    rating: 5,
    city: "Hammamet",
    createdAt: "2024-02-15T08:45:00Z"
  }
];

const ITEMS_PER_PAGE = 4;
const AUTO_PLAY_DELAY = 4500;

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(STATIC_REVIEWS);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  // Auto-play du carrousel
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, AUTO_PLAY_DELAY);
    return () => clearInterval(interval);
  }, [totalPages, reviews.length]);

  const visibleItems = reviews.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleAddReview = (newReview: Review) => {
    // Ajouter le nouvel avis à la liste existante
    setReviews(prevReviews => [newReview, ...prevReviews]);
    setIsModalOpen(false);
  };

  return (
    <section className="tm-section">
      <div className="tm-shape-bg top-right-gradient"></div>
      <div className="tm-shape-bg bottom-left-gradient"></div>
      <div className="tm-shape-accent-square"></div>

      <div className="tm-container">
        <div className="tm-content">
          {/* Header */}
          <div className="tm-header">
            <h2 className="tm-main-title">
              Témoignages <br />
              <span className="tm-bold-title">de nos clients</span>
            </h2>
            <p className="tm-description">
              Découvrez ce que nos clients pensent de nos services et de notre professionnalisme.
            </p>

            {/* <div className="text-center mt-12">
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)}>
                Laissez votre avis
              </Button>
            </div> */}
          </div>

          {/* Carousel */}
          {reviews.length > 0 ? (
            <div className="tm-carousel">
              <div key={page} className="tm-grid tm-grid-animate">
                {visibleItems.map((review) => (
                  <div key={review._id} className="tm-card-wrapper">
                    <div className="tm-card">
                      <div className="tm-quote-icon tm-quote-top">“</div>

                      <div className="tm-card-content">
                        <div className="tm-profile-section">
                          <div className="tm-avatar">
                            <img
                              src={review.profileImage || '/default-avatar.png'}
                              alt={review.userName}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/default-avatar.png';
                              }}
                            />
                          </div>
                          <div className="tm-meta">
                            <div className="tm-stars">
                              {"★".repeat(review.rating)}
                              {"☆".repeat(5 - review.rating)}
                            </div>
                            <p className="tm-user-info">
                              <strong>{review.userName}</strong> | {review.city}
                            </p>
                            <p className="tm-service">Service : {review.service}</p>
                          </div>
                        </div>

                        <h4 className="tm-card-heading">Avis client</h4>
                        <p className="tm-card-text">{review.reviewText}</p>
                      </div>

                      <div className="tm-quote-icon tm-quote-bottom">”</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              {totalPages > 1 && (
                <div className="tm-dots">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <span
                      key={i}
                      className={`tm-dot ${i === page ? 'active' : ''}`}
                      onClick={() => setPage(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Aucun avis pour le moment. Soyez le premier à donner votre avis !
            </div>
          )}
        </div>
      </div>

      {/* Modale avec le formulaire */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-xl font-semibold mb-4">
            Laisser un avis
          </DialogTitle>
          <ReviewFormSection onAddReview={handleAddReview} isModal />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Testimonials;