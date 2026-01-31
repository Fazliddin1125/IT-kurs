"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Gift, Zap, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const bonuses = [
  { icon: Gift, text: "Birinchi dars bepul" },
  { icon: CheckCircle2, text: "CV tayyorlash yordami" },
  { icon: Users, text: "Ishga joylashish qo'llab-quvvatlashi" },
  { icon: Zap, text: "Lifetime access to materials" },
]

export function Promo() {
  return (
    <section id="narxlar" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-1 shadow-2xl shadow-primary/20">
            <div className="bg-card rounded-[22px] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-destructive/10 text-destructive border-0 px-4 py-1">
                      <Clock className="w-4 h-4 mr-2" />
                      Cheklangan taklif
                    </Badge>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                    Yangi guruhga yoziling va{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      20% chegirma
                    </span>{" "}
                    oling!
                  </h2>

                  <p className="text-muted-foreground text-lg">
                    Fevral oyida boshlanadigan yangi guruhga joylar cheklangan. 
                    Hoziroq ro'yxatdan o'ting va maxsus chegirmadan foydalaning.
                  </p>

                  {/* Urgency indicator */}
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Bo'sh joylar</span>
                      <span className="text-sm font-semibold text-destructive">Faqat 8 ta qoldi!</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[35%] bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-xl shadow-primary/25 text-lg px-8"
                  >
                    <Link href="#ariza">
                      Hoziroq yozilish
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Right Content - Bonuses */}
                <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Ro'yxatdan o'tganlar uchun bonuslar:
                  </h3>
                  <div className="space-y-4">
                    {bonuses.map((bonus) => (
                      <div
                        key={bonus.text}
                        className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border hover:border-primary/20 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <bonus.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{bonus.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price comparison */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Oddiy narx</p>
                        <p className="text-xl text-muted-foreground line-through">3,000,000 so'm</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Chegirma bilan</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          2,400,000 so'm
                        </p>
                      </div>
                    </div>
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
