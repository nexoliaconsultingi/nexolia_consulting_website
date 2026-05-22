import { Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './card'

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
              <Shield className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">Pourquoi Nous Choisir ?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Notre Expertise Sectorielle</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Une compréhension approfondie des enjeux métier pour des solutions parfaitement adaptées
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Conformité Garantie",
                description:
                  "Respect strict des réglementations sectorielles et standards de sécurité les plus exigeants",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Équipes Spécialisées",
                description:
                  "Consultants experts dans chaque domaine d'activité avec une expérience terrain approfondie",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation Continue",
                description:
                  "Veille technologique et R&D adaptées aux évolutions sectorielles et aux tendances émergentes",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background Effect */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${advantage.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${advantage.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-[#727683] leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChoose
