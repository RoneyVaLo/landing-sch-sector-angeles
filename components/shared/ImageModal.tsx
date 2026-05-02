"use client";

import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useCallback } from "react";
import type { Activity, FacilityImage } from "./types";

interface ActivityModalProps {
  mode?: "activity";
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}

interface FacilityModalProps {
  mode: "facility";
  image: FacilityImage | null;
  isOpen: boolean;
  onClose: () => void;
}

type ImageModalProps = ActivityModalProps | FacilityModalProps;

export function ImageModal(props: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    if (props.mode === "facility") return;
    const activity = props.activity;
    if (!activity) return;
    setCurrentIndex((prev) => (prev + 1) % activity.images.length);
  }, [props]);

  const goToPrev = useCallback(() => {
    if (props.mode === "facility") return;
    const activity = props.activity;
    if (!activity) return;
    setCurrentIndex(
      (prev) => (prev - 1 + activity.images.length) % activity.images.length,
    );
  }, [props]);

  // Facility mode — single image lightbox
  if (props.mode === "facility") {
    const { image, isOpen, onClose } = props;
    if (!image) return null;

    return (
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm" />
          <AnimatePresence>
            {isOpen && (
              <Dialog.Content
                asChild
                className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card p-0 shadow-2xl focus:outline-none"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <Dialog.Title className="sr-only">{image.label}</Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Vista ampliada de {image.label}
                  </Dialog.Description>

                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />

                    <Dialog.Close asChild>
                      <button
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                        aria-label="Cerrar"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      {image.label}
                    </h2>
                    {image.description && (
                      <p className="mt-2 text-muted-foreground">
                        {image.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </Dialog.Content>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  // Activity mode — carousel (default, backward-compatible)
  const { activity, isOpen, onClose } = props;
  if (!activity) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm" />
        <AnimatePresence>
          {isOpen && (
            <Dialog.Content
              asChild
              className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card p-0 shadow-2xl focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <Dialog.Title className="sr-only">{activity.title}</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Galería de imágenes de {activity.title}
                </Dialog.Description>

                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-muted">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={activity.images[currentIndex]}
                      alt={`${activity.title} - Imagen ${currentIndex + 1}`}
                      className="h-full w-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {activity.images.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}

                  <Dialog.Close asChild>
                    <button
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                      aria-label="Cerrar"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="p-6">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">
                    {activity.category}
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {activity.title}
                  </h2>

                  {activity.images.length > 1 && (
                    <div className="mt-4 flex items-center justify-center gap-2">
                      {activity.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2 w-2 rounded-full transition-all ${
                            idx === currentIndex
                              ? "w-6 bg-primary"
                              : "bg-border hover:bg-muted-foreground"
                          }`}
                          aria-label={`Ir a imagen ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
