"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Star, Play, Zap, Code } from "lucide-react";

export interface Filter {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  image: string;
  popular?: boolean;
  gradient: string;
  features: string[];
  technologies: string[];
  results: {
    metric1: { value: string; label: string };
    metric2: { value: string; label: string };
    metric3: { value: string; label: string };
  };
  captures?: { src: string; description: string }[];
}

interface PortfolioContentProps {
  filters: Filter[];
  activeFilter: string;
  setActiveFilter: (filterId: string) => void;
  filteredProjects: Project[];
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({
  filters,
  activeFilter,
  setActiveFilter,
  filteredProjects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Section filtres */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#53828a] to-[#b05f76] mb-4 tracking-tight">
              Nos Projets
            </h1>
            <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] mb-6 animate-pulse"></div>
            <h2 className="text-2xl font-bold text-[#53828a] mb-2">
              Filtrer par Catégorie
            </h2>
            <p className="text-[#727683]">Explorez nos réalisations par domaine d'expertise</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    : "border-[#53828a] text-[#53828a] hover:bg-[#53828a] hover:text-white bg-white shadow-md hover:shadow-lg transition-all duration-300"
                }
              >
                {filter.icon}
                <span className="ml-2">{filter.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Section projets */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-1 gap-24">
            {filteredProjects.map((project, index) => (
              <div key={project.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Card className="border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 relative w-full">
                      {project.popular && (
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Populaire
                          </div>
                        </div>
                      )}

                      <div
                        className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                      ></div>

                      <div className="relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                            <Button
                              size="sm"
                              className="bg-white text-[#53828a] hover:bg-white/90 shadow-lg text-xs sm:text-sm"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Play className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                              Détails +
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Détails */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-6 text-center sm:text-left">
                      <div>
                        <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 sm:space-x-3 mb-3">
                          <Badge className={`bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm`}>
                            {filters.find((f) => f.id === project.category)?.label}
                          </Badge>
                          <span className="text-[#727683] text-xs sm:text-base font-medium">
                            Client: {project.client}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#53828a] mb-3">
                          {project.title}
                        </h2>
                        <p className="text-[#727683] text-sm sm:text-base leading-relaxed px-2 sm:px-0">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#53828a] mb-2 flex justify-center sm:justify-start items-center text-sm sm:text-base">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Fonctionnalités Clés :
                        </h4>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {project.features.map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-[#b05f76]/10 text-[#b05f76] hover:bg-[#b05f76] hover:text-white transition-all duration-300 text-xs sm:text-sm"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#53828a] mb-2 flex justify-center sm:justify-start items-center text-sm sm:text-base">
                          <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Technologies :
                        </h4>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-[#53828a] text-[#53828a] hover:bg-[#53828a] hover:text-white transition-all duration-300 text-xs sm:text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 rounded-lg backdrop-blur-sm">
                        {Object.values(project.results).map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg sm:text-2xl font-bold text-[#53828a]">{metric.value}</div>
                            <div className="text-xs sm:text-sm text-[#727683] font-medium">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Séparateur */}
                {index < filteredProjects.length - 1 && (
                  <div className="my-12 sm:my-20 flex justify-center">
                    <div className="w-3/4 h-[2px] bg-gradient-to-r from-[#53828a]/40 via-[#b05f76]/40 to-[#53828a]/40 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal Scrollable */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-auto p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative shadow-2xl">
            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Contenu scrollable */}
            <div className="overflow-y-auto max-h-[80vh] space-y-6">
              <h2 className="text-2xl font-bold text-[#53828a]">{selectedProject.title}</h2>
              <p className="text-gray-700">{selectedProject.description}</p>

              <h3 className="text-xl font-semibold text-[#53828a] mt-4">Innovation / Fonctionnalités</h3>
              <p className="text-gray-700">{selectedProject.features.join(", ")}</p>

              <h3 className="text-xl font-semibold text-[#53828a] mt-4">Captures de l'application</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.captures?.map((cap, idx) => (
                  <div key={idx} className="space-y-2">
                    <Image
                      src={cap.src}
                      alt={`${selectedProject.title} capture ${idx + 1}`}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-gray-600 text-sm">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioContent;
