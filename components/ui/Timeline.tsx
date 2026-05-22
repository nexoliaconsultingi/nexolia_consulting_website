import { Award, Globe, Lightbulb, Rocket, Star, TrendingUp, Users } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './card'

const Timeline: React.FC = () => {
     const timeline = [
  {
    year: "2020",
    title: "Naissance de l’idée",
    description: "Lancement de l’idée de créer notre entreprise Nexolia avec une vision tournée vers l’innovation digitale.",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    year: "2021",
    title: "Étude des besoins",
    description: "Analyse de l’agrandissement continu des entreprises, PME et PMI pour identifier leurs besoins en solutions numériques.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-600",
  },
  {
    year: "2022",
    title: "Spécialisation stratégique",
    description: "Définition de nos futures solutions et spécialisation dans les solutions SaaS et Microsoft.",
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    year: "2023",
    title: "Premier ERP",
    description: "Développement du premier ERP dédié à la gestion des activités financières.",
    icon: <Award className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600",
  },
  {
    year: "2024",
    title: "Deuxième ERP",
    description: "Développement du deuxième ERP axé sur la gestion des ressources humaines.",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    year: "2025",
    title: "Création officielle",
    description: "Création de la startup Nexolia et ouverture au marché IT national et intérnational.",
    icon: <Star className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-700",
  },
];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
              <TrendingUp className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">Notre Parcours</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Notre Histoire</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Un parcours d'innovation et de croissance continue
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#53828a] to-[#b05f76]"></div>

              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                      {/* Background Effect */}
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${event.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      <CardContent className="p-6 relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-[#53828a]">{event.year}</div>
                          <div
                            className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {event.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-[#53828a] mb-2 group-hover:text-[#b05f76] transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-[#727683] leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${event.gradient} rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Timeline
