"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "frontend",
    title: "Frontend Development",
    level: "Boshlang'ich",
    levelColor: "bg-green-500/10 text-green-600 border-green-200",
    duration: "6 oy",
    students: 245,
    description: "HTML, CSS, JavaScript va React asoslarini o'rganing. Zamonaviy va responsive veb-saytlar yaratishni boshlang.",
    price: "2,500,000",
    popular: true,
    icon: "🎨",
  },
  {
    id: "backend",
    title: "Backend Development",
    level: "O'rta",
    levelColor: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
    duration: "6 oy",
    students: 189,
    description: "Node.js, Express, MongoDB va PostgreSQL bilan server tomonini yaratishni o'rganing.",
    price: "2,800,000",
    popular: false,
    icon: "⚙️",
  },
  {
    id: "python",
    title: "Python Dasturlash",
    level: "Boshlang'ich",
    levelColor: "bg-green-500/10 text-green-600 border-green-200",
    duration: "5 oy",
    students: 312,
    description: "Python dasturlash tilini o'rganing. Data Science va automation asoslari bilan tanishing.",
    price: "2,200,000",
    popular: true,
    icon: "🐍",
  },
  {
    id: "uiux",
    title: "UI/UX Dizayn",
    level: "Boshlang'ich",
    levelColor: "bg-green-500/10 text-green-600 border-green-200",
    duration: "4 oy",
    students: 156,
    description: "Foydalanuvchi interfeysi va tajribasini loyihalashni o'rganing. Figma va prototiplash.",
    price: "1,800,000",
    popular: false,
    icon: "✨",
  },
  {
    id: "english",
    title: "English for IT",
    level: "Barcha darajalar",
    levelColor: "bg-blue-500/10 text-blue-600 border-blue-200",
    duration: "4 oy",
    students: 423,
    description: "IT sohasiga ixtisoslashgan ingliz tili kursi. Texnik terminologiya va muloqot.",
    price: "1,500,000",
    popular: false,
    icon: "🌐",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    level: "Murakkab",
    levelColor: "bg-red-500/10 text-red-600 border-red-200",
    duration: "9 oy",
    students: 98,
    description: "Frontend va Backend ni birgalikda o'rganing. Kompleks veb-ilovalar yarating.",
    price: "4,500,000",
    popular: true,
    icon: "🚀",
  },
]

export function Courses() {
  return (
    <section id="kurslar" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kurslar</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            O'zingizga mos yo'nalishni tanlang
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Biz sizga eng zamonaviy va bozorda talab yuqori bo'lgan yo'nalishlarni taklif qilamiz.
            Har bir kurs amaliy loyihalar va mentor yordami bilan ta'minlangan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 overflow-hidden relative ${
                course.popular ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Mashhur</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{course.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={course.levelColor}>
                    {course.level}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} talaba</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">so'm</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#dastur">Dastur</Link>
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-accent" asChild>
                    <Link href="#ariza">
                      Yozilish
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
