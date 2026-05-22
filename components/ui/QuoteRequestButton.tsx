"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { ExternalLink } from "lucide-react"

export default function QuoteRequestButton() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSelect = (value: string) => {
    setForm({ ...form, projectType: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulaire de devis soumis :", form)
    setOpen(false)
    alert("Merci ! Votre demande de devis a été envoyée ✅")
  }

  return (
    <>
      {/* === Bouton principal === */}
      <Button
        size="lg"
        variant="outline"
        onClick={() => setOpen(true)}
        className="border-[#53828a] text-[#53828a] hover:bg-[#53828a] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <ExternalLink className="mr-2 w-5 h-5" />
        Demander Un Devis Gratuitement
      </Button>

      {/* === Popup (Dialog) === */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#53828a] text-2xl font-semibold">
              Demandez votre devis gratuit
            </DialogTitle>
            <DialogDescription>
              Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nom */}
            <Input
              name="name"
              placeholder="Votre nom complet"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <Input
              name="email"
              type="email"
              placeholder="Adresse e-mail"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Sélecteur de type de projet */}
            <Select onValueChange={handleSelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez un type de projet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developpement-web">Développement Web</SelectItem>
                <SelectItem value="developpement-mobile">Développement Mobile</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="erp">ERP</SelectItem>
                <SelectItem value="microsoft-365">Solution Microsoft 365</SelectItem>
                <SelectItem value="dashboard">Dashboard Analytique</SelectItem>
                <SelectItem value="automatisation">
                  Automatisation des procédures
                </SelectItem>
                <SelectItem value="migration-digitalisation">
                  Migration & Digitalisation d’entreprise
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Message */}
            <Textarea
              name="message"
              placeholder="Décrivez brièvement votre projet"
              value={form.message}
              onChange={handleChange}
              rows={4}
            />

            {/* Bouton d'envoi */}
            <DialogFooter>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Envoyer ma demande
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
