"use client"

import React, { useState } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FooterWithMapAndNewsletter: React.FC = () => {
    const [email, setEmail] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) {
            alert("Veuillez entrer votre adresse email.")
            return
        }
        alert(`Merci pour votre inscription, ${email}! 🎉`)
        setEmail("")
    }

    return (
        <footer className="text-gray-200 mt-16 rounded-[10px] shadow-[0px_0px_20px_10px_#b7b7b7] bg-[#0c0745] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                {/* 🌍 MAP SECTION */}
                <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-300">
                    <iframe
                        title="Localisation Nexolia - Pôle Technologique El Ghazela"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8609849039735!2d10.184466275531582!3d36.89367376242539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb71841eca41%3A0x90bf0f4a4360e5fa!2sP%C3%B4le%20Technologique%20El%20Ghazala!5e0!3m2!1sfr!2stn!4v1760885902735!5m2!1sfr!2stn"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* ✉️ NEWSLETTER SECTION */}
                <div className="flex flex-col items-start space-y-5">
                    <h2 className="text-3xl font-extrabold text-white drop-shadow-md">
                        Inscrivez-vous à la newsletter Nexolia
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Recevez nos dernières actualités, offres exclusives et promotions directement dans votre boîte mail.
                    </p>

                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row w-full max-w-md bg-[#1c1765] rounded-full overflow-hidden shadow-md border border-gray-500 focus-within:ring-2 focus-within:ring-blue-500 transition-all"
                    >
                        {/* 📨 Icône */}
                        <div
                            className={`flex items-center justify-center w-full sm:w-12 h-12 sm:h-auto transition-all duration-300 ${isFocused ? "bg-[#2563eb]" : "bg-transparent"
                                }`}
                        >
                            <Mail
                                className={`w-5 h-5 transition-colors duration-300 ${isFocused ? "text-white" : "text-gray-400"
                                    }`}
                            />
                        </div>

                        {/* Champ email */}
                       <Input
    type="email"
    placeholder="Votre adresse e-mail"
    value={email}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    onChange={(e) => setEmail(e.target.value)}
    className="w-[95%] sm:w-80 md:w-96 lg:w-1/2 mx-auto bg-transparent text-white border-none focus:ring-0 focus:outline-none px-3 py-2 placeholder-gray-400 mb-2 mt-2"
/>




                        {/* Bouton */}
                        <Button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-14 sm:h-auto sm:ml-2 flex items-center gap-2 rounded-full transition-all"
                        >
                            <Send size={16} /> S’abonner
                        </Button>

                    </form>
                </div>
            </div>
        </footer>
    )
}

export default FooterWithMapAndNewsletter
