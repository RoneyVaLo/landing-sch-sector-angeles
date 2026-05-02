"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { fadeInUp, stagger } from "@/components/shared/animations";

const quickLinks = [
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Infraestructura", href: "#infraestructura" },
  { label: "Actividades", href: "#actividades" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contáctanos", href: "#contacto" },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
        >
          {/* Brand - Left */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <img
                src="/escudo.webp"
                alt="Escudo de la Escuela Sector Angeles"
                className="h-10 w-10"
              />
              <span className="font-serif text-xl font-semibold text-background">
                Escuela Sector Angeles
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Más de 45 años formando líderes con valores, conocimiento y
              compromiso con la sociedad.
            </p>
          </motion.div>

          {/* Quick Links - Center */}
          <motion.div variants={fadeInUp} className="md:text-center">
            <h4 className="font-semibold text-background">Enlaces Rápidos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Right */}
          <motion.div variants={fadeInUp} className="md:text-right">
            <h4 className="font-semibold text-background">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/60 md:justify-end">
                <MapPin className="h-4 w-4 shrink-0 text-background/40" />
                <span>Sector Ángeles, San Ramón de Alajuela, Costa Rica</span>
              </li>
              <li>
                <p className="flex items-center gap-2 text-background/60 transition-colors hover:text-background md:justify-end">
                  <Phone className="h-4 w-4 shrink-0 text-background/40" />
                  <span>+506 2469-2638</span>
                </p>
              </li>
              <li>
                <a
                  href="mailto:esc.sectorangeles@mep.go.cr"
                  className="flex items-center gap-2 text-background/60 transition-colors hover:text-background md:justify-end"
                >
                  <Mail className="h-4 w-4 shrink-0 text-background/40" />
                  <span>esc.sectorangeles@mep.go.cr</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/40"
        >
          © {new Date().getFullYear()} Escuela Sector Ángeles. Todos los
          derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
