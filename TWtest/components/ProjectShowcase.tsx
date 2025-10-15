"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  number: string;
  image: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Horigo style",
    number: "03",
    image: "/galaxie.jpg",
    gradient: "from-indigo-900 via-purple-900 to-purple-800"
  },
  {
    id: 2,
    title: "Lordsleep App",
    number: "04",
    image: "/galaxie.jpg",
    gradient: "from-blue-900 via-purple-900 to-purple-800"
  },
  {
    id: 3,
    title: "Datingford",
    number: "05",
    image: "/galaxie.jpg",
    gradient: "from-purple-900 via-pink-900 to-purple-800"
  },
  {
    id: 4,
    title: "Holigan",
    number: "06",
    image: "/galaxie.jpg",
    gradient: "from-violet-900 via-purple-900 to-indigo-900"
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(2); // Lordsleep App est actif par défaut

  return (
    <section className={`relative min-h-screen bg-white flex items-center justify-between px-16 py-20 overflow-hidden`}>
      {/* Image de fond qui prend toute la section */}
      <div className="absolute inset-6 transition-opacity duration-700 rounded-3xl overflow-hidden">
        <Image
          src={projects[activeProject - 1].image}
          alt={projects[activeProject - 1].title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        {/* Overlay gradient pour l'effet */}
        <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject - 1].gradient} opacity-70 mix-blend-multiply transition-all duration-700 rounded-3xl`}></div>
        {/* Effet holographique */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 mix-blend-overlay rounded-3xl"></div>
      </div>

      {/* Liste des projets - Gauche */}
      <div className="flex flex-col gap-6 z-10 relative">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project.id)}
            className={`text-left transition-all duration-500 group ${
              activeProject === project.id ? "translate-x-0" : "translate-x-0"
            }`}
          >
            <div className="flex items-baseline gap-4">
              <h3
                className={`text-5xl md:text-6xl font-bold transition-all duration-500 ${
                  activeProject === project.id
                    ? "text-white opacity-100 scale-100"
                    : "text-white/30 opacity-40 scale-95 group-hover:opacity-60"
                }`}
              >
                {project.title}
              </h3>
              <span
                className={`text-2xl transition-all duration-500 ${
                  activeProject === project.id
                    ? "text-white/60"
                    : "text-white/20"
                }`}
              >
                {project.number}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Espace pour équilibrer la mise en page */}
      <div className="w-1/3"></div>

      {/* Compteur en bas à gauche */}
      <div className="absolute bottom-12 left-16 z-10">
        <div className="flex items-center gap-2">
          <div className="w-1 h-16 bg-white/40"></div>
          <div className="flex flex-col">
            <span className="text-white text-3xl font-bold">
              {projects[activeProject - 1].number}
            </span>
            <span className="text-white/40 text-lg">/08</span>
          </div>
        </div>
      </div>

      {/* Effet de lumière d'ambiance */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

