"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Kursga qanday ro'yxatdan o'taman?",
    answer:
      "Ro'yxatdan o'tish uchun yuqoridagi formani to'ldiring yoki bizga qo'ng'iroq qiling. Menejerlarimiz siz bilan bog'lanib, barcha savollaringizga javob beradi va to'lov jarayonini tushuntiradi.",
  },
  {
    question: "Dasturlash haqida hech narsa bilmayman. Boshlasam bo'ladimi?",
    answer:
      "Albatta! Bizning kurslarimiz noldan boshlanadi. Siz oldindan hech qanday bilimga ega bo'lmasangiz ham, bosqichma-bosqich o'rganasiz. Mentorlarimiz har bir qadamda yordam beradi.",
  },
  {
    question: "Kurs qancha davom etadi va darslar qachon bo'ladi?",
    answer:
      "Kurslar 4-9 oy davom etadi (yo'nalishga qarab). Darslar haftada 3-4 marta, odatda kechki vaqtda (18:00-21:00) yoki dam olish kunlari bo'ladi. Online va offline formatlar mavjud.",
  },
  {
    question: "To'lovni qanday amalga oshiraman?",
    answer:
      "To'lovni bir martada yoki bo'lib-bo'lib to'lash mumkin. Biz Click, Payme, bank kartasi va naqd pul qabul qilamiz. Talabalar uchun 10% chegirma ham mavjud.",
  },
  {
    question: "Kurs tugagandan keyin sertifikat beriladi mi?",
    answer:
      "Ha, kursni muvaffaqiyatli yakunlagan barcha o'quvchilarga sertifikat beriladi. Sertifikat sizning portfolio'ngiz uchun muhim hujjat bo'lib, ish qidirishda yordam beradi.",
  },
  {
    question: "Ishga joylashishda yordam berasizlarmi?",
    answer:
      "Albatta! Biz barcha bitiruvchilarga CV tayyorlash, intervyuga tayyorgarlik va ish qidirish bo'yicha yordam beramiz. Bizning HR jamoamiz kompaniyalar bilan doimiy aloqada va bitiruvchilarimizni tavsiya qiladi.",
  },
  {
    question: "Agar darsni o'tkazib yuborsam nima bo'ladi?",
    answer:
      "Hech qanday muammo yo'q! Barcha darslar yozib olinadi va siz istalgan vaqtda qayta ko'rishingiz mumkin. Bundan tashqari, mentorlar bilan individual mashg'ulotlar tashkil qilish mumkin.",
  },
  {
    question: "Online formatda o'qish mumkinmi?",
    answer:
      "Ha, biz online va offline formatlarni taklif qilamiz. Online o'qish ham xuddi offline kabi samarali, chunki barcha amaliy mashqlar, loyihalar va mentor yordami mavjud.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Ko'p beriladigan savollar
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Eng ko'p so'raladigan savollar va javoblar. 
            Agar savolingiz javobini topmasangiz, biz bilan bog'laning.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-14 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
