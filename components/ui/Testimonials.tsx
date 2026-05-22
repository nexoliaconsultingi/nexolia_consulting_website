import React from 'react'
import { Card, CardContent } from './card'
import { Star } from 'lucide-react'
import Image from 'next/image'

// Imports corrects
import p1 from "../../public/clients/p1.webp"
import p2 from "../../public/clients/p2.png"
import p3 from "../../public/clients/p3.webp"

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStart",
      role: "CEO",
      content:
        "L'équipe NEXOLIA a transformé notre vision en une plateforme exceptionnelle. Leur réactivité et expertise sont remarquables.",
      rating: 5,
      avatar: p1,
    },
    {
      name: "Ahmed Ben Ali",
      company: "InnovCorp",
      role: "CTO",
      content:
        "Un partenaire de confiance qui comprend nos besoins techniques. Le support post-lancement est exceptionnel.",
      rating: 5,
      avatar: p2,
    },
    {
      name: "Sophie Martin",
      company: "DigitalFlow",
      role: "Directrice Marketing",
      content:
        "Processus transparent, délais respectés, résultats au-delà de nos attentes. Je recommande vivement !",
      rating: 5,
      avatar: p3,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-xl text-[#727683] max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#727683] mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#53828a]">{testimonial.name}</h4>
                    <p className="text-sm text-[#727683]">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
