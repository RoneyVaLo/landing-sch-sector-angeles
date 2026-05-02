"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, stagger } from "@/components/shared/animations";

const stats = [
  { value: "40+", label: "Años de Trayectoria" },
  { value: "1,000+", label: "Estudiantes Formados" },
  { value: "20+", label: "Docentes y Personal" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-card pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23585c27' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="text-balance">
                Donde la{" "}
                <span className="text-primary">Educación Pública</span> y el{" "}
                <span className="text-secondary">Desarrollo Comunitario</span> se Encuentran
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0"
            >
              Ubicada en el Sector Ángeles de San Ramón, nuestra institución educativa
              se ha consolidado como un pilar en la formación de estudiantes mediante
              un modelo que integra arquitectura, comunidad y aprendizaje. Más que una
              escuela, somos un espacio que impulsa el desarrollo integral en armonía
              con su entorno.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="#contacto"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl sm:w-auto"
              >
                Contáctanos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre-nosotros"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary hover:bg-muted sm:w-auto"
              >
                Conoce Nuestra Historia
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-4/5 overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-primary/30">
                  <div className="flex h-full items-center justify-center">
                    <BookOpen className="h-20 w-20 text-primary/60" />
                  </div>
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl bg-linear-to-br from-muted to-border">
                  <div className="flex h-full items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl bg-linear-to-br from-secondary/20 to-secondary/30">
                  <div className="flex h-full items-center justify-center">
                    <Trophy className="h-16 w-16 text-secondary/70" />
                  </div>
                </div>
                <div className="aspect-4/5 overflow-hidden rounded-2xl bg-linear-to-br from-accent/40 to-accent/60">
                  <div className="flex h-full items-center justify-center">
                    <GraduationCap className="h-20 w-20 text-accent-foreground/60" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
