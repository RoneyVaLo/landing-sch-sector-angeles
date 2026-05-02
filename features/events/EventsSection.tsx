"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { fadeInUp, stagger } from "@/components/shared/animations";
import { EventModal } from "./EventModal";
import type { Event } from "@/components/shared/types";

const events: Event[] = [
  {
    date: { day: "04", month: "MAY" },
    title: "Celebración del Día del Trabajador",
    description:
      "Invitamos a los estudiantes a asistir disfrazados representando una profesión.",
    fullDescription:
      "En conmemoración del Día del Trabajador, se invita a los estudiantes a participar en una actividad especial donde podrán asistir disfrazados de la profesión que sueñan ejercer en el futuro. Esta dinámica busca fomentar la creatividad, la expresión personal y el reconocimiento del valor de las distintas profesiones en nuestra sociedad.",
    location: "Instalaciones de la escuela",
    time: "7:00 AM - 3:00 PM",
    audience: "Estudiantes y padres de familia de la institución.",
  },
  {
    date: { day: "08", month: "MAY" },
    title: "Asueto Nacional por Traspaso de Poderes",
    description:
      "Suspensión de lecciones debido al asueto nacional por el traspaso de poderes.",
    fullDescription:
      "Con motivo del traspaso de poderes presidenciales, se declara asueto nacional. Por esta razón, no se impartirán lecciones en la institución. Este acontecimiento representa un momento importante en la vida democrática del país, permitiendo a la ciudadanía ser partícipe de este proceso cívico.",
    location: "No aplica",
    time: "Todo el día",
    audience: "Toda la comunidad educativa.",
  },
  {
    date: { day: "25", month: "JUL" },
    title: "Celebración de la Anexión del Partido de Nicoya",
    description:
      "Acto cívico y actividades culturales en conmemoración de la Anexión del Partido de Nicoya.",
    fullDescription:
      "Se realizará un acto cívico especial para conmemorar la Anexión del Partido de Nicoya a Costa Rica, una fecha histórica de gran relevancia nacional. La actividad incluirá presentaciones culturales, bailes típicos, música folclórica y participación estudiantil, promoviendo el orgullo y la identidad nacional.",
    location: "Instalaciones de la escuela",
    time: "8:00 AM - 12:00 MD",
    audience:
      "Padres de familia, estudiantes y toda la comunidad. Se requiere invitación previa.",
  },
  {
    date: { day: "14", month: "SEP" },
    title: "Desfile de Faroles",
    description:
      "Participación en el tradicional desfile de faroles en celebración de la Independencia.",
    fullDescription:
      "En el marco de las celebraciones patrias, se llevará a cabo el tradicional desfile de faroles, donde los estudiantes participarán portando faroles elaborados por ellos mismos. Esta actividad simboliza la libertad y el espíritu patriótico, fortaleciendo los valores cívicos y la identidad nacional.",
    location: "Calles aledañas a la institución",
    time: "6:00 PM",
    audience:
      "Estudiantes participantes, padres de familia y toda la comunidad educativa como público de apoyo.",
  },
];

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section id="eventos" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            Calendario
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            <span className="text-balance">Próximos Eventos</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedEvent(event)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Mobile Layout - Date on top */}
              <div className="flex flex-col sm:flex-row">
                {/* Ticket Stub */}
                <div className="flex flex-row items-center justify-center gap-2 border-b border-dashed border-border bg-primary px-4 py-3 text-primary-foreground sm:w-24 sm:shrink-0 sm:flex-col sm:gap-0 sm:border-b-0 sm:border-r sm:py-4">
                  <span className="text-2xl font-bold sm:text-3xl">
                    {event.date.day}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wide opacity-90">
                    {event.date.month}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-1 items-center">
                  <div className="flex flex-1 flex-col justify-center p-4 sm:p-6">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:mt-4 sm:gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center pr-4 sm:pr-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all group-hover:bg-primary/15 group-hover:text-primary sm:h-10 sm:w-10">
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}
