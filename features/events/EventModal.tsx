"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Clock, MapPin, X } from "lucide-react";
import type { Event } from "@/components/shared/types";

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-2xl bg-card shadow-2xl focus:outline-none sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[85vh] sm:w-[95vw] sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2">
          <Dialog.Title className="sr-only">{event.title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Detalles del evento {event.title}
          </Dialog.Description>

          {/* Header with date */}
          <div className="flex shrink-0 items-start gap-4 border-b border-border p-4 sm:p-6">
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground sm:h-16 sm:w-16">
              <span className="text-xl font-bold sm:text-2xl">
                {event.date.day}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wide opacity-90 sm:text-xs">
                {event.date.month}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-serif text-lg font-bold text-foreground sm:text-xl">
                {event.title}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:gap-3 sm:text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {event.location}
                </span>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {event.fullDescription}
            </p>

            <div className="mt-6 rounded-xl bg-muted p-4">
              <h4 className="text-sm font-semibold text-foreground">
                Dirigido a:
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {event.audience}
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
