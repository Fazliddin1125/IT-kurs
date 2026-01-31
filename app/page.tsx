import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Courses } from "@/components/courses"
import { Curriculum } from "@/components/curriculum"
import { Testimonials } from "@/components/testimonials"
import { Promo } from "@/components/promo"
import { EnrollmentForm } from "@/components/enrollment-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Curriculum />
      <Testimonials />
      <Promo />
      <EnrollmentForm />
      <FAQ />
      <Footer />
    </main>
  )
}
