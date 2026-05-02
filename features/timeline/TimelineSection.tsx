"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp, stagger } from "@/components/shared/animations";

const milestones = [
  {
    year: "2010",
    title: "Gestión del Proyecto",
    description:
      "Se inicia la planificación de una nueva infraestructura educativa para la comunidad de Sector Ángeles.",
  },
  {
    year: "2014",
    title: "Diseño Arquitectónico",
    description:
      "Se desarrolla un diseño innovador enfocado en integración con el entorno natural y sostenibilidad.",
  },
  {
    year: "2016",
    title: "Construcción",
    description:
      "Se construyen las nuevas instalaciones con materiales como madera y sistemas adaptados al clima local.",
  },
  {
    year: "2017",
    title: "Inauguración",
    description:
      "La escuela abre sus puertas con una propuesta educativa moderna en un entorno arquitectónico único.",
  },
  {
    year: "2026",
    title: "Consolidación",
    description:
      "Referente en educación pública y diseño escolar en Costa Rica.",
  },
];

function scrollContainer(direction: "left" | "right") {
  const container = document.getElementById("timeline-scroll");
  if (container) {
    const scrollAmount = 250;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
}

export function TimelineSection() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Nuestra Trayectoria
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            <span className="text-balance">
              Una Historia de Compromiso con la Educación
            </span>
          </motion.h2>
        </motion.div>

        {/* Timeline - Vertical on mobile, Horizontal on desktop */}
        <div className="relative mt-16">
          {/* Scroll Arrows - Desktop only */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all hover:bg-accent hover:text-accent-foreground lg:flex"
            aria-label="Desplazar izquierda"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scrollContainer("right")}
            className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all hover:bg-accent hover:text-accent-foreground lg:flex"
            aria-label="Desplazar derecha"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Mobile Vertical Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="md:hidden"
          >
            <div className="relative ml-4 border-l-2 border-border pl-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group relative pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-card bg-primary shadow-lg">
                    <span className="text-xs font-bold text-primary-foreground">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">
                      {milestone.year}
                    </div>
                    <div className="mt-1 font-semibold text-primary">
                      {milestone.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktop Horizontal Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            id="timeline-scroll"
            className="hidden overflow-x-auto pb-4 scrollbar-hide md:block"
          >
            <div className="flex min-w-max items-start gap-4 px-4 lg:justify-center lg:px-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex w-48 flex-col items-center"
                >
                  {/* Connector Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-1/2 top-6 h-0.5 w-full bg-border" />
                  )}
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-card bg-primary shadow-lg transition-transform group-hover:scale-110">
                    <span className="text-xs font-bold text-primary-foreground">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-lg font-bold text-foreground">
                      {milestone.year}
                    </div>
                    <div className="mt-1 font-semibold text-primary">
                      {milestone.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
