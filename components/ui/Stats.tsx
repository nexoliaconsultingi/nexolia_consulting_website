import { Globe, Rocket, Star, Users } from 'lucide-react';
import React from 'react'

const Stats: React.FC = () => {

    const stats = [
        { number: "8+", label: "Projets Livrés", icon: <Rocket className="w-6 h-6" /> },
        { number: "10+", label: "Experts", icon: <Users className="w-6 h-6" /> },
        { number: "2+", label: "Solution SAAS", icon: <Globe className="w-6 h-6" /> },
        { number: "98%", label: "Satisfaction Client", icon: <Star className="w-6 h-6" /> },
    ]


    return (
            <section className="py-5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-2">{stat.number}</div>
                                <div className="text-[#727683] font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default Stats;
