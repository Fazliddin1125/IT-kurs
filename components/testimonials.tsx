"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, Quote, Briefcase, TrendingUp } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Abdulloh Karimov",
    role: "Frontend Developer",
    company: "EPAM Systems",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "TechEdu menga hayotimni o'zgartirdi. 6 oy oldin dasturlash nima ekanini bilmas edim, hozir esa xalqaro kompaniyada ishlayman. Mentorlar juda professional va har doim yordam berishga tayyor.",
    beforeSalary: "0",
    afterSalary: "$1,500",
    course: "Frontend Development",
  },
  {
    id: 2,
    name: "Malika Rahimova",
    role: "UI/UX Designer",
    company: "Uzum",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Dizayn kursini tugatganimdan keyin 2 haftada ish topdim. O'quv dasturi juda amaliy va portfolio yaratishga katta yordam berdi. Eng zo'ri - mentor qo'llab-quvvatlashi.",
    beforeSalary: "800,000 so'm",
    afterSalary: "8,000,000 so'm",
    course: "UI/UX Dizayn",
  },
  {
    id: 3,
    name: "Jasur Toshmatov",
    role: "Backend Developer",
    company: "Payme",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Python kursini o'qib, 3 oyda freelance loyihalar qila boshladim. Kurs oxirida esa Payme kompaniyasida ish topdim. TechEdu jamoasiga katta rahmat!",
    beforeSalary: "2,000,000 so'm",
    afterSalary: "12,000,000 so'm",
    course: "Python Dasturlash",
  },
  {
    id: 4,
    name: "Nilufar Saidova",
    role: "Full Stack Developer",
    company: "Click",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Full Stack kurs juda intensiv, lekin natijasi ajoyib. Hozir har ikki tomondan: frontend va backend da ishlay olaman. Bu menga katta ustunlik berdi.",
    beforeSalary: "3,000,000 so'm",
    afterSalary: "15,000,000 so'm",
    course: "Full Stack Development",
  },
  {
    id: 5,
    name: "Bekzod Aliyev",
    role: "Frontend Developer",
    company: "Najot Ta'lim",
    image: "/api/placeholder/100/100",
    rating: 5,
    text: "Ingliz tili kursi bilan birga Frontend o'rgandim. Bu kombinatsiya juda foydali bo'ldi. Hozir xorijiy kompaniyalar bilan bemalol muloqot qila olaman.",
    beforeSalary: "1,500,000 so'm",
    afterSalary: "10,000,000 so'm",
    course: "Frontend + English",
  },
]

const successStats = [
  { label: "O'rtacha ish haqi o'sishi", value: "4x", icon: TrendingUp },
  { label: "Ishga joylashish vaqti", value: "2 hafta", icon: Briefcase },
  { label: "Bitiruvchilar mamnuniyati", value: "98%", icon: Star },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="natijalar" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Natijalar</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Bitiruvchilarimiz muvaffaqiyati
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Minglab talabalarimiz o'z orzulariga erishdi. Ularning hikoyalarini o'qing va 
            keyingi muvaffaqiyat hikoyasi sizniki bo'lsin.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {successStats.map((stat) => (
            <Card key={stat.label} className="bg-card border-border text-center p-6">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border overflow-hidden">
                    <CardContent className="p-8">
                      <Quote className="w-10 h-10 text-primary/20 mb-6" />
                      <p className="text-lg text-foreground mb-8 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} @ {testimonial.company}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Before/After */}
                      <div className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Kursdan oldin</p>
                          <p className="font-semibold text-foreground">{testimonial.beforeSalary}</p>
                        </div>
                        <div className="w-12 h-px bg-gradient-to-r from-muted to-primary" />
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <div className="w-12 h-px bg-gradient-to-r from-primary to-muted" />
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-1">Kursdan keyin</p>
                          <p className="font-semibold text-primary">{testimonial.afterSalary}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mt-4">{testimonial.course}</Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
