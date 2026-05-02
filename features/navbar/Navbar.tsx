"use client";

import { motion } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#infraestructura", label: "Infraestructura" },
  { href: "#actividades", label: "Actividades" },
  { href: "#eventos", label: "Eventos" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2"
    >
      <nav className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 px-6 py-4 shadow-lg shadow-primary/10 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/escudo.webp"
            alt="Escudo de la Escuela Sector Angeles"
            className="h-10 w-10"
          />
          <span className="font-serif text-xl font-semibold text-foreground">
            Escuela Sector Angeles
          </span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavigationMenu.Item key={link.href}>
                <NavigationMenu.Link
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#contacto"
                className="ml-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
              >
                Contáctanos
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile Menu Trigger */}
        <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm" />
            <Dialog.Content className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-card p-6 shadow-2xl">
              <Dialog.Title className="sr-only">
                Menú de navegación
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                Enlaces de navegación del sitio
              </Dialog.Description>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-lg font-semibold text-foreground">
                  Menu
                </span>
                <Dialog.Close asChild>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  Contáctanos
                </a>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </motion.header>
  );
}
