import { Globe, Heart, Lightbulb, Shield, Target, Users } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './card'

const Values: React.FC = () => {
    const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Continue",
      description:
        "Nous repoussons constamment les limites technologiques pour offrir des solutions d'avant-garde qui transforment les entreprises",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Excellence Client",
      description:
        "La satisfaction de nos clients est au cœur de chaque décision et chaque ligne de code que nous écrivons",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Intégrité & Transparence",
      description:
        "Nous construisons des relations durables basées sur la confiance et la communication ouverte avec nos partenaires",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Esprit d'Équipe",
      description: "Notre force réside dans la collaboration et la diversité de nos talents internationaux",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Résultats Mesurables",
      description: "Nous nous engageons sur des objectifs concrets et des résultats quantifiables pour chaque projet",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact Positif",
      description:
        "Nous créons des solutions qui ont un impact positif sur les entreprises et la société dans son ensemble",
      gradient: "from-indigo-500 to-purple-600",
    },
  ]


  return (
 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-3">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 border border-[#53828a]/20 mb-6">
              <Heart className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">Nos Valeurs</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Nos Valeurs</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group bg-white relative overflow-hidden"
              >
                {/* Background Effect */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#727683] leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
  )
}

export default Values
