"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image?: string
  date: string
  author: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Les Activités de Nexolia en Octobre",
    excerpt: "Retour sur les événements marquants et les réalisations de notre équipe ce mois-ci...",
    image: "/nexolia-team-activities.jpg",
    date: "21 Octobre 2025",
    author: "Équipe Nexolia",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Comment Optimiser Votre Stratégie Digitale",
    excerpt: "Conseils pratiques pour transformer votre présence en ligne et augmenter votre ROI...",
    image: "/digital-strategy-optimization.jpg",
    date: "18 Octobre 2025",
    author: "Expert Digital",
    readTime: "8 min",
  },
]

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#916a7c] via-[#b05f76] to-transparent rounded-full"></div>
        <h2 className="text-5xl font-bold text-[#916a7c] tracking-tight mb-2">BLOG</h2>
        <p className="text-base text-[#727683] font-light">Activités & Insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className={`border-0 overflow-hidden shadow-md hover-lift transition-all duration-500 h-full flex flex-col card-premium ${hoveredId === post.id ? "shadow-2xl shadow-[#916a7c]/20" : ""}`}
            >
              {post.image && (
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#916a7c]/10 to-[#b05f76]/10">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#727683] font-light">{post.date}</span>
                  <span className="text-xs bg-gradient-to-r from-[#916a7c] to-[#b05f76] text-white px-4 py-2 rounded-full shadow-md font-semibold">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <p className="text-xs text-[#727683] font-light">Par {post.author}</p>
                  <button className="text-[#53828a] hover:text-[#b05f76] transition-all duration-300 font-semibold text-sm hover-scale">
                    →
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
