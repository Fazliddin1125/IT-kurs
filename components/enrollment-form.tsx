"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Send, Phone, User, MessageSquare, BookOpen } from "lucide-react"

const courses = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "python", label: "Python Dasturlash" },
  { value: "uiux", label: "UI/UX Dizayn" },
  { value: "english", label: "English for IT" },
  { value: "fullstack", label: "Full Stack Development" },
]

export function EnrollmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Ism kiritish shart"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon raqam kiritish shart"
    } else if (!/^\+?[0-9]{9,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Noto'g'ri telefon raqam formati"
    }

    if (!formData.course) {
      newErrors.course = "Kurs tanlash shart"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="ariza" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Arizangiz qabul qilindi!
              </h3>
              <p className="text-muted-foreground mb-8">
                Tez orada menejerlarimiz siz bilan bog'lanadi. 
                O'rtacha javob vaqti: 30 daqiqa (ish vaqtida).
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: "", phone: "", course: "", message: "" })
                }}
                variant="outline"
              >
                Yangi ariza yuborish
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="ariza" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ariza</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Bepul konsultatsiya oling
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Formani to'ldiring va biz siz bilan 30 daqiqa ichida bog'lanamiz. 
            Barcha savollaringizga javob beramiz.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Ismingiz
                </Label>
                <Input
                  id="name"
                  placeholder="Ismingizni kiriting"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-secondary/50 border-border focus:border-primary ${
                    errors.name ? "border-destructive" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  Telefon raqamingiz
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`bg-secondary/50 border-border focus:border-primary ${
                    errors.phone ? "border-destructive" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              {/* Course Select */}
              <div className="space-y-2">
                <Label htmlFor="course" className="text-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  Kursni tanlang
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                >
                  <SelectTrigger
                    className={`bg-secondary/50 border-border ${
                      errors.course ? "border-destructive" : ""
                    }`}
                  >
                    <SelectValue placeholder="Kursni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.value} value={course.value}>
                        {course.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.course && (
                  <p className="text-sm text-destructive">{errors.course}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Xabar (ixtiyoriy)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Savollaringiz yoki qo'shimcha ma'lumot..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg py-6"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Ariza yuborish
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Ariza yuborish orqali siz{" "}
                <a href="#" className="text-primary hover:underline">
                  maxfiylik siyosatiga
                </a>{" "}
                rozilik bildirasiz.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
