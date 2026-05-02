"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Heart } from "lucide-react";
import { useState } from "react";
import { fadeInUp, stagger } from "@/components/shared/animations";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { ImageModal } from "@/components/shared/ImageModal";
import type { Activity } from "@/components/shared/types";

const activities: Activity[] = [
  {
    title: "Olimpiadas de Matemáticas",
    category: "Académico",
    span: "col-span-2 row-span-2",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
    icon: Trophy,
    images: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
    ],
  },
  {
    title: "Club de Robótica",
    category: "STEM",
    span: "col-span-1 row-span-1",
    bgColor: "bg-muted",
    textColor: "text-foreground",
    icon: BookOpen,
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    ],
  },
  {
    title: "Festival de Arte",
    category: "Cultural",
    span: "col-span-1 row-span-1",
    bgColor: "bg-secondary",
    textColor: "text-secondary-foreground",
    icon: Heart,
    images: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    ],
  },
  {
    title: "Deportes",
    category: "Atletismo",
    span: "col-span-1 row-span-2",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
    icon: Trophy,
    images: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    ],
  },
  {
    title: "Programa de Liderazgo",
    category: "Desarrollo Personal",
    span: "col-span-2 row-span-1",
    bgColor: "bg-foreground",
    textColor: "text-primary-foreground",
    icon: Users,
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    ],
  },
];

export function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );

  return (
    <section id="actividades" className="bg-card py-24">
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
            Vida Escolar
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            <span className="text-balance">Actividades que Inspiran</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Descubre las experiencias que hacen de nuestra comunidad un espacio
            único para crecer y aprender.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4"
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const hasImages = activity.images.length > 0;

            return (
              <motion.div
                key={activity.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedActivity(activity)}
                className={`group relative overflow-hidden rounded-2xl ${activity.span} ${!hasImages ? activity.bgColor : ""} cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl`}
              >
                {hasImages ? (
                  <>
                    <div className="absolute inset-0">
                      <ImageCarousel
                        images={activity.images}
                        title={activity.title}
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                )}
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${hasImages ? "bg-white/20 text-white" : `bg-white/20 ${activity.textColor}`}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-medium uppercase tracking-wide ${hasImages ? "text-white" : activity.textColor} opacity-80`}
                    >
                      {activity.category}
                    </span>
                    <h3
                      className={`mt-1 font-serif text-xl font-bold ${hasImages ? "text-white" : activity.textColor}`}
                    >
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ImageModal
        activity={selectedActivity}
        isOpen={selectedActivity !== null}
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  );
}
