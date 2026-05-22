"use client"

import React from "react"
import { Users, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import houda from "../../public/equipe/houda.jpeg"
import g1 from "../../public/equipe/g1.png"
import g2 from "../../public/equipe/g2.webp"
import f2 from "../../public/equipe/f2.jpg"
import f1 from "../../public/equipe/f1.webp"
import g4 from "../../public/equipe/g4.jpg"
import wahbi from "../../public/equipe/wahbi.jpg"
import aziz from "../../public/equipe/aziz.png"
import zayneb from "../../public/equipe/zayneb.png"
import mahmoud from "../../public/equipe/mahmoud.png"
import abdou from "../../public/equipe/WhatsApp Image 2026-05-13 at 11.50.56.jpeg"

const Team: React.FC = () => {
  const team = [

    {
      name: "Zayneb Kawana",
      role: "Responsable Commerciale & Ressources Humaines - Nexolia Consulting",
      bio: "Responsable commerciale et responsable des ressources humaines chez Nexolia Consulting. Elle assure le développement commercial, la gestion de la relation client ainsi que le pilotage des ressources humaines. Elle combine une forte expertise en management, recrutement, communication et stratégie commerciale pour accompagner la croissance de l’entreprise.",
      image: zayneb,
      expertise: [
        "Développement commercial",
        "Gestion de la relation client",
        "Ressources humaines",
        "Recrutement & gestion des talents",
        "Management d'équipe",
        "Stratégie commerciale",
        "Communication professionnelle"
      ],
      linkedin: "https://www.linkedin.com/in/zaineb-kaawana-154491407",
      gradient: "from-rose-500 to-orange-500",
    }
    ,

    {
      name: "Houda Jaeeaya",
      role: "Head Of Marketing & Coach",
      bio: "Experienced Head Of Marketing avec une solide expérience dans les télécoms. Spécialiste en négociation stratégique, business planning et e-commerce. Mastery des outils de développement personnel (NLP, Enneagram, Nova Profiling, coaching exécutif et branding).",
      image: houda,
      expertise: ["CHRO", "CSO", "Marketing", "Négociation", "Coaching", "Développement personnel", "E-commerce"],
      linkedin: "https://www.linkedin.com/in/houda-jarraya-2282527/",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      name: "Aziz Zribi",
      role: "Responsable Marketing Digital",
      bio: "Professionnel du marketing digital avec plus de 8 ans d'expérience dans la gestion de campagnes digitales, la stratégie de contenu et l'optimisation de la présence en ligne des entreprises.",
      image: aziz,
      expertise: ["CMO", "CSO", "Stratégie marketing digitale", "Campagnes publicitaires", "Content marketing", "KPIs"],
      linkedin: "https://www.linkedin.com/in/mohamed-aziz-zribi-099b19250/",
      gradient: "from-pink-500 to-red-600",
    },
    {
      name: "Abed Ejlil Chbil",
      role: "Administrateur Systèmes & Réseaux Senior",
      bio: "Administrateur systèmes et réseaux senior avec plus de 15 ans d’expérience dans l’architecture des infrastructures réseau bancaires. Expert en conception, déploiement et sécurisation des systèmes complexes. Certifié CCNA et CCNA Data Center, avec une forte spécialisation en cybersécurité et en protection des environnements critiques.",
      image: abdou,
      expertise: [
        "Administration Systèmes",
        "Administration Réseaux",
        "Architecture réseau bancaire",
        "Cybersécurité",
        "CCNA",
        "CCNA Data Center",
        "Sécurité des infrastructures",
        "Cloud & Datacenter"
      ],
      linkedin: "#",
      gradient: "from-slate-600 to-blue-700",
    },
   
    {
      name: "Mahmoud Bousbih",
      role: "Senior Full-Stack JavaScript Developer",
      bio: "Développeur full-stack senior spécialisé en JavaScript, avec une forte expertise en React, Next.js, Node.js et MongoDB. Expérimenté dans la création d’applications web et mobiles performantes avec React Native, ainsi que dans la conception d’interfaces UX/UI modernes et intuitives.",
      image: mahmoud,
      expertise: [
        "CTO",
        "Techlead",
        "Full-Stack JS",
        "Senior Developer",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React Native",
        "UX/UI Design"
      ],
      linkedin: "https://www.linkedin.com/in/mahmoudbh7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      gradient: "from-green-500 to-teal-600",
    }, {
      name: "Mohamed Wahbi Salwej",
      role: "Full-Stack Developer Microsoft & MERN",
      bio: "Spécialisé en développement d’applications web, mobiles et solutions Microsoft. Expert en MERN stack, React Native et Power Platform. Passionné par l’IA, l’analytique (Power BI) et les solutions cloud sécurisées.",
      image: wahbi,
      expertise: ["CEO", "CTO", "PMO", "Togaf", "Full-Stack Dev", "React Native", "Power Platform", "AI & Analytics"],
      linkedin: "https://www.linkedin.com/in/med-wahbi-salwej-692b7a282/",
      gradient: "from-blue-500 to-purple-600",
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden px-10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
            <Users className="w-4 h-4 text-[#53828a] mr-2" />
            <span className="text-[#53828a] font-semibold text-sm">Notre Équipe</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Notre Équipe de Direction</h2>
          <p className="text-xl text-[#727683] max-w-2xl mx-auto">
            Des leaders passionnés qui portent la vision NEXOLIA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Background Effect */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    style={{width:"50%", margin:"10px auto",borderRadius:"50%",border:"2px solid black"}}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Overlay LinkedIn Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${member.gradient} text-white shadow-lg hover:opacity-90 transition`}
                      >
                        <Linkedin className="mr-2 w-4 h-4" />
                        Voir le profil LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#53828a] mb-2 group-hover:text-[#b05f76] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#b05f76] font-semibold mb-3">{member.role}</p>
                  <p className="text-[#727683] text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-[#53828a]/10 text-[#53828a] text-xs hover:bg-[#53828a] hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Team


