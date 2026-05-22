import { Award } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./card";
import Image from "next/image";

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "TOGAF Certified",
      logo: "/Certif/togaf.webp",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Scrum Agile Practitioner",
      logo: "/Certif/scrum.webp",
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "Computer Scientist – Harvard University",
      logo: "/Certif/hatverd.png",
      gradient: "from-red-600 to-yellow-500",
    },
    {
      name: "Microsoft Power Platform",
      logo: "/Certif/power-platform-solutions-architect-expert-420x420-1.webp",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      name: "ISTQB Tester Certified",
      logo: "/Certif/istqb.webp",
      gradient: "from-red-500 to-pink-600",
    },
    {
      name: "Adobe Designer",
      logo: "/Certif/design.webp",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div>
      <section className="py-20 bg-white px-5">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 border border-[#53828a]/20 mb-6">
              <Award className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">
                Certifications Équipe
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">
              Nos Certifications Professionnelles
            </h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Une équipe qualifiée avec des standards internationaux
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 bg-white relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${cert.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-6 relative">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={120}
                      height={80}
                      className="w-full h-16 object-contain mb-3"
                    />
                    <p className="text-xs text-[#727683] font-medium group-hover:text-[#53828a] transition-colors duration-300">
                      {cert.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
