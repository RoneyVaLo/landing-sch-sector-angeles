"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { fadeInUp, stagger } from "@/components/shared/animations";
import { ImageModal } from "@/components/shared/ImageModal";
import type { FacilityImage } from "@/components/shared/types";

const defaultFacilities: FacilityImage[] = [
  {
    src: "/instalaciones/1.webp",
    alt: "Entrada Este de la Escuela Sector Ángeles",
    label: "Entrada Este",
    description:
      "Una estructura bioclimática con un ambiente lúdico para fomentar un sentido de comunidad y orgullo",
    span: "large",
  },
  {
    src: "/instalaciones/2.webp",
    alt: "Entrada Principal de la Escuela Sector Ángeles",
    label: "Entrada Principal",
    span: "small",
  },
  {
    src: "/instalaciones/3.webp",
    alt: "Oficinas Administrativas de la Escuela Sector Ángeles",
    label: "Oficinas Administrativas",
    span: "small",
  },
  {
    src: "/instalaciones/4.webp",
    alt: "Escaleras Interiores de la Escuela Sector Ángeles",
    label: "Escaleras Interiores",
    span: "small",
  },
  {
    src: "/instalaciones/5.webp",
    alt: "Vista Aérea de la Escuela Sector Ángeles",
    label: "Vista Aérea",
    span: "small",
  },
];

interface InfrastructureSectionProps {
  facilities?: FacilityImage[];
}

export function InfrastructureSection({
  facilities = defaultFacilities,
}: InfrastructureSectionProps) {
  const [selectedFacility, setSelectedFacility] =
    useState<FacilityImage | null>(null);

  return (
    <section id="infraestructura" className="bg-muted py-24">
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
            Nuestras Instalaciones
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            <span className="text-balance">Infraestructura de Calidad</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            Conoce los espacios diseñados para brindar un entorno de aprendizaje
            seguro, moderno y en armonía con el entorno natural de nuestra
            comunidad.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid auto-rows-[200px] grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 sm:gap-4"
        >
          {facilities.map((facility, index) => {
            const isLarge = facility.span === "large";

            return (
              <motion.div
                key={`${facility.src}-${index}`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFacility(facility)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                {/* Image */}
                <Image
                  src={facility.src}
                  alt={facility.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    isLarge
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white font-semibold text-sm sm:text-base leading-tight">
                    {facility.label}
                  </p>
                  {isLarge && facility.description && (
                    <p className="mt-1 text-white/80 text-xs sm:text-sm leading-snug line-clamp-2">
                      {facility.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ImageModal
        mode="facility"
        image={selectedFacility}
        isOpen={!!selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
    </section>
  );
}
