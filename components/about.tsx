"use client"

import { BookOpen, Rocket, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BookOpen,
    title: "Amaliy darslar",
    description: "Nazariya bilan birga real loyihalar ustida ishlash orqali amaliy tajriba orttiring.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Rocket,
    title: "Real loyihalar",
    description: "Portfolio uchun 10+ real loyihalar yarating va ish beruvchilarga ko'rsating.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Users,
    title: "Mentor yordami",
    description: "Tajribali mentorlar har bir savolingizga javob beradi va yo'l ko'rsatadi.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Target,
    title: "Karyera qo'llab-quvvatlash",
    description: "CV tayyorlash, intervyuga tayyorgarlik va ish qidirish bo'yicha yordam.",
    color: "bg-orange-500/10 text-orange-500",
  },
]

export function About() {
  return (
    <section id="biz-haqimizda" className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Biz haqimizda</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Nima uchun bizni tanlashadi?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            TechEdu — bu zamonaviy IT ta'lim markazi bo'lib, bizning maqsadimiz har bir o'quvchini 
            bozorda talab yuqori bo'lgan mutaxassisga aylantirish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 overflow-hidden"
            >
              <CardContent className="p-6">
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Bizning vazifamiz — texnologiya bo'yicha yangi avlod mutaxassislarini tayyorlash
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Biz 2019-yildan beri IT ta'lim sohasida faoliyat yuritamiz. Bu davr ichida 
              2500+ talaba ta'lim oldi va ularning 95% ishga joylashdi. Bizning o'quv dasturimiz 
              dunyo standartlariga mos keladi va doimiy ravishda yangilanib turadi.
            </p>
            <ul className="space-y-3">
              {[
                "Eng yangi texnologiyalar va frameworklar",
                "Kichik guruhlar (8-12 kishi)",
                "Kundalik amaliy mashqlar",
                "24/7 mentor qo'llab-quvvatlashi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border border-border">
              <div className="absolute inset-4 bg-card rounded-xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <p className="text-muted-foreground">Yillik tajriba</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
