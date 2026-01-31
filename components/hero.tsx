"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Users, Briefcase, Award, Code, Sparkles } from "lucide-react"

const stats = [
  { icon: Users, value: "2,500+", label: "Bitiruvchilar" },
  { icon: Briefcase, value: "95%", label: "Ishga joylashish" },
  { icon: Award, value: "50+", label: "Mentorlar" },
]

export function Hero() {
  return (
    <section id="bosh-sahifa" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-0 hover:bg-primary/15">
              <Sparkles className="w-4 h-4 mr-2" />
              2024-yil yangi guruhlar ochildi
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                IT sohasida{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  kelajagingizni
                </span>{" "}
                quring
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
                Zamonaviy dasturlash tillari va texnologiyalarini o'rganing. 
                Professional mentorlar yordamida 6 oy ichida ish topishga tayyor bo'ling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-xl shadow-primary/25 text-lg px-8"
              >
                <Link href="#kurslar">
                  Kurslarni ko'rish
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-secondary text-lg px-8 bg-transparent"
              >
                <Link href="#ariza">
                  <Play className="mr-2 w-5 h-5" />
                  Bepul dars
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Frontend Development</p>
                      <p className="text-sm text-muted-foreground">12 ta modul · 6 oy</p>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-2xl font-bold text-foreground">156</p>
                      <p className="text-sm text-muted-foreground">Darslar</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-2xl font-bold text-foreground">24</p>
                      <p className="text-sm text-muted-foreground">Loyihalar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-card rounded-xl shadow-xl border border-border p-4 transform -rotate-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Ishga joylashish</p>
                    <p className="text-xs text-green-600 font-medium">+95% bitiruvchilar</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl border border-border p-4 transform rotate-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Sertifikat</p>
                    <p className="text-xs text-muted-foreground">Xalqaro darajada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
