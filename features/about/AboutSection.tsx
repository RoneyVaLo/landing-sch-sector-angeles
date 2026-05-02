"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeInUp, stagger } from "@/components/shared/animations";

interface CardData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconClass: string;
  borderClass: string;
  accentClass: string;
  bulletClass: string;
}

const cards: CardData[] = [
  {
    icon: Target,
    title: "Nuestra Misión",
    subtitle: "El propósito que nos guía",
    description:
      "Brindar una educación pública integral de calidad, centrada en el desarrollo humano, académico y social de los estudiantes, en un entorno que promueve la inclusión, el respeto por el medio ambiente y el vínculo con la comunidad.",
    highlights: [
      "Formación integral centrada en el estudiante",
      "Vinculación activa con la comunidad local",
      "Educación en valores y convivencia",
      "Conciencia ambiental y sostenibilidad",
    ],
    iconClass: "bg-primary/15 text-primary",
    borderClass: "border-l-primary",
    accentClass: "bg-primary/10",
    bulletClass: "bg-primary",
  },
  {
    icon: Eye,
    title: "Nuestra Visión",
    subtitle: "El futuro que construimos",
    description:
      "Ser una institución educativa pública modelo en Costa Rica, reconocida por su innovación pedagógica, su infraestructura integrada con el entorno natural y su impacto positivo en el desarrollo social de la comunidad.",
    highlights: [
      "Referente en infraestructura educativa sostenible",
      "Innovación en metodologías de enseñanza",
      "Compromiso con el desarrollo comunitario",
      "Formación de ciudadanos responsables",
    ],
    iconClass: "bg-secondary/15 text-secondary",
    borderClass: "border-l-secondary",
    accentClass: "bg-secondary/10",
    bulletClass: "bg-secondary",
  },
  {
    icon: Heart,
    title: "Nuestros Valores",
    subtitle: "Los principios que nos definen",
    description:
      "Nuestra institución promueve valores que fortalecen la convivencia, el respeto por el entorno y el compromiso social, formando estudiantes conscientes de su rol en la sociedad.",
    highlights: [
      "Respeto por la diversidad y el entorno",
      "Responsabilidad social y ambiental",
      "Solidaridad dentro y fuera del aula",
      "Trabajo en equipo y cooperación",
    ],
    iconClass: "bg-accent/60 text-accent-foreground",
    borderClass: "border-l-accent",
    accentClass: "bg-accent/30",
    bulletClass: "bg-accent",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-card py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Sobre Nosotros
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-balance">
              Conoce Nuestra Esencia Educativa
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            Por más de cuatro décadas, hemos construido una comunidad educativa
            basada en principios sólidos, donde cada estudiante encuentra el
            espacio ideal para desarrollar todo su potencial.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid gap-8 lg:grid-cols-3"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.15 }}
                className={`group relative overflow-hidden rounded-2xl border border-border border-l-4 ${card.borderClass} bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 ${card.accentClass}`} />

                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="mb-6 flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${card.iconClass}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm font-medium text-muted-foreground">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-6 font-sans leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {card.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${card.bulletClass}`}
                        />
                        <span className="font-sans text-sm leading-relaxed text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="mx-auto max-w-3xl">
            <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
              {
                '"Educar no es llenar un recipiente, sino encender una llama que ilumine el camino de cada estudiante."'
              }
            </p>
            <footer className="mt-4 font-sans text-sm font-medium text-muted-foreground">
              — Filosofía Escuela Sector Ángeles
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
