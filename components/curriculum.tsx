"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, BookOpen, Code, Layers, Palette, Globe, Server } from "lucide-react"

const curriculumData = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Palette,
    duration: "6 oy",
    modules: [
      {
        name: "HTML & CSS Asoslari",
        weeks: "1-4 hafta",
        topics: [
          "HTML5 semantik teglar",
          "CSS selektorlar va xususiyatlar",
          "Box model va layout",
          "Responsive dizayn asoslari",
        ],
      },
      {
        name: "Flexbox & Grid",
        weeks: "5-8 hafta",
        topics: [
          "Flexbox container va items",
          "Grid layout tizimi",
          "Responsive grid patterns",
          "Real loyiha: Landing page",
        ],
      },
      {
        name: "JavaScript Asoslari",
        weeks: "9-14 hafta",
        topics: [
          "Ma'lumot turlari va o'zgaruvchilar",
          "Funktsiyalar va scope",
          "DOM manipulyatsiya",
          "Event handling",
        ],
      },
      {
        name: "JavaScript Ilg'or",
        weeks: "15-18 hafta",
        topics: [
          "ES6+ xususiyatlar",
          "Async/Await va Promises",
          "API bilan ishlash",
          "Error handling",
        ],
      },
      {
        name: "React Asoslari",
        weeks: "19-22 hafta",
        topics: [
          "Components va JSX",
          "State va Props",
          "Hooks: useState, useEffect",
          "React Router",
        ],
      },
      {
        name: "Yakuniy Loyiha",
        weeks: "23-24 hafta",
        topics: [
          "Portfolio veb-sayt",
          "E-commerce loyiha",
          "Kod review",
          "Deploy va hosting",
        ],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    duration: "6 oy",
    modules: [
      {
        name: "Node.js Asoslari",
        weeks: "1-4 hafta",
        topics: [
          "Node.js arxitekturasi",
          "NPM va paketlar",
          "File system va streams",
          "HTTP server yaratish",
        ],
      },
      {
        name: "Express.js Framework",
        weeks: "5-8 hafta",
        topics: [
          "REST API dizayn",
          "Middleware pattern",
          "Routing va controllers",
          "Error handling",
        ],
      },
      {
        name: "Ma'lumotlar bazasi",
        weeks: "9-14 hafta",
        topics: [
          "MongoDB asoslari",
          "Mongoose ORM",
          "PostgreSQL va SQL",
          "Database dizayn",
        ],
      },
      {
        name: "Autentifikatsiya",
        weeks: "15-18 hafta",
        topics: [
          "JWT tokens",
          "OAuth 2.0",
          "Session management",
          "Security best practices",
        ],
      },
      {
        name: "Ilg'or mavzular",
        weeks: "19-22 hafta",
        topics: [
          "Caching strategiyalari",
          "Message queues",
          "WebSockets",
          "Testing va CI/CD",
        ],
      },
      {
        name: "Yakuniy Loyiha",
        weeks: "23-24 hafta",
        topics: [
          "Full API development",
          "Docker va deployment",
          "Documentation",
          "Production optimization",
        ],
      },
    ],
  },
  {
    id: "python",
    title: "Python Dasturlash",
    icon: Code,
    duration: "5 oy",
    modules: [
      {
        name: "Python Asoslari",
        weeks: "1-4 hafta",
        topics: [
          "Sintaksis va ma'lumot turlari",
          "Control flow va loops",
          "Functions va modules",
          "OOP asoslari",
        ],
      },
      {
        name: "Ma'lumotlar bilan ishlash",
        weeks: "5-8 hafta",
        topics: [
          "File I/O",
          "JSON va CSV",
          "Pandas kutubxonasi",
          "Data cleaning",
        ],
      },
      {
        name: "Web Development",
        weeks: "9-12 hafta",
        topics: [
          "Django framework",
          "REST API with DRF",
          "Database integration",
          "Authentication",
        ],
      },
      {
        name: "Automation",
        weeks: "13-16 hafta",
        topics: [
          "Web scraping",
          "Task automation",
          "API integration",
          "Telegram bots",
        ],
      },
      {
        name: "Yakuniy Loyiha",
        weeks: "17-20 hafta",
        topics: [
          "Real-world application",
          "Testing",
          "Deployment",
          "Documentation",
        ],
      },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Dizayn",
    icon: Layers,
    duration: "4 oy",
    modules: [
      {
        name: "Dizayn Asoslari",
        weeks: "1-3 hafta",
        topics: [
          "Ranglar nazariyasi",
          "Typography",
          "Layout principles",
          "Visual hierarchy",
        ],
      },
      {
        name: "Figma Mastery",
        weeks: "4-7 hafta",
        topics: [
          "Figma interface",
          "Components va variants",
          "Auto layout",
          "Design systems",
        ],
      },
      {
        name: "UX Research",
        weeks: "8-11 hafta",
        topics: [
          "User research methods",
          "User personas",
          "User journey mapping",
          "Usability testing",
        ],
      },
      {
        name: "Prototyping",
        weeks: "12-16 hafta",
        topics: [
          "Wireframing",
          "Interactive prototypes",
          "Micro-interactions",
          "Portfolio loyiha",
        ],
      },
    ],
  },
  {
    id: "english",
    title: "English for IT",
    icon: Globe,
    duration: "4 oy",
    modules: [
      {
        name: "Technical Vocabulary",
        weeks: "1-4 hafta",
        topics: [
          "Programming terminology",
          "IT documentation o'qish",
          "Technical writing",
          "Code comments",
        ],
      },
      {
        name: "Communication Skills",
        weeks: "5-8 hafta",
        topics: [
          "Daily standups",
          "Code review discussions",
          "Email writing",
          "Slack communication",
        ],
      },
      {
        name: "Interview Preparation",
        weeks: "9-12 hafta",
        topics: [
          "Self-introduction",
          "Behavioral questions",
          "Technical interviews",
          "Salary negotiation",
        ],
      },
      {
        name: "Professional English",
        weeks: "13-16 hafta",
        topics: [
          "Presentation skills",
          "Meeting participation",
          "Documentation writing",
          "LinkedIn optimization",
        ],
      },
    ],
  },
]

export function Curriculum() {
  return (
    <section id="dastur" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">O'quv dasturi</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Kurs dasturini ko'ring
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Har bir kurs puxta o'ylangan modullarga bo'lingan. Bosqichma-bosqich bilim olasiz 
            va har bir modul oxirida amaliy loyiha topshirasiz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {curriculumData.map((course) => (
            <div key={course.id} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Accordion type="single" collapsible>
                <AccordionItem value={course.id} className="border-0">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                        <course.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {course.modules.length} modul
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {course.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 pt-4">
                      {course.modules.map((module, moduleIndex) => (
                        <div
                          key={module.name}
                          className="bg-secondary/30 rounded-xl p-4 border border-border/50"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                                {moduleIndex + 1}
                              </div>
                              <div>
                                <h4 className="font-medium text-foreground">{module.name}</h4>
                                <p className="text-sm text-muted-foreground">{module.weeks}</p>
                              </div>
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2 pl-11">
                            {module.topics.map((topic) => (
                              <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
