# 📚 Landing Sector Angeles

Un sitio web moderno y responsivo para una institución educativa, desarrollado con tecnologías de última generación para proporcionar una experiencia de usuario excepcional.

## 🎯 Problema que Resuelve

Los centros educativos necesitan una presencia digital profesional que les permita:

- **Presentar información institucional** de forma clara y atractiva
- **Comunicar valores y misión** a estudiantes, padres y comunidad
- **Mostrar infraestructura y recursos** disponibles
- **Promover actividades y eventos** de la institución
- **Proporcionar experiencia responsiva** en todos los dispositivos
- **Optimizar el rendimiento** sin comprometer la estética

Este proyecto resuelve estos desafíos mediante una landing page moderna, animada y completamente funcional que destaca los valores educativos y la propuesta de valor de la institución.

## 🚀 Características Principales

✨ **Diseño Moderno y Responsivo**

- Interfaz adaptable a todos los dispositivos
- Animaciones suaves con Framer Motion
- Sistema de diseño consistente con Tailwind CSS

📱 **Secciones Completas**

- **Hero Section**: Presentación impactante con estadísticas clave
- **Timeline**: Línea de tiempo de la historia institucional
- **About Section**: Misión, visión y valores
- **Infrastructure**: Exhibición de instalaciones
- **Activities**: Actividades y programas ofrecidos
- **Events**: Calendario y próximos eventos
- **Navigation**: Barra de navegación intuitiva

🎨 **Componentes Interactivos**

- Carruseles de imágenes con Embla Carousel
- Modales para eventos
- Galería de imágenes interactiva
- Componentes accesibles con Radix UI

## 🛠️ Tecnologías Utilizadas

### Framework y Librería Base

- **Next.js 16.2.0** - Framework React moderno con SSR
- **React 19** - Librería de UI con nuevas características
- **TypeScript 5.7.3** - Lenguaje tipado para JavaScript

### Estilos y Animaciones

- **Tailwind CSS 4.2.0** - Framework CSS utility-first
- **PostCSS 8.5** - Procesador de CSS
- **Framer Motion 11.15.0** - Librería de animaciones React
- **Autoprefixer 10.4.20** - Prefijos CSS automáticos

### Componentes y UI

- **Radix UI** - Sistema de componentes sin estilos accesibles
  - Diálogos, tabs, accordions, selects, y más
- **Lucide React 0.564.0** - Iconos SVG de calidad
- **Class Variance Authority 0.7.1** - Gestión de variantes CSS

### Funcionalidad

- **Embla Carousel 8.6.0** - Carruseles de contenido
- **Framer Motion 11.15.0** - Animaciones suaves
- **React Hook Form 7.54.1** - Gestión de formularios
- **Zod 3.24.1** - Validación de datos
- **Sonner 1.7.1** - Notificaciones tipo toast
- **Date-fns 4.1.0** - Utilidades de fecha

### Análisis y Rendimiento

- **Vercel Analytics 1.6.1** - Análisis del sitio

### Herramientas de Desarrollo

- **ESLint** - Linting de código
- **Jest 30.3.0** - Framework de testing
- **Testing Library** - Pruebas de componentes React
- **Babel** - Transpilación de JavaScript

## 📋 Estructura del Proyecto

```
landing-sector-angeles/
├── app/                          # Aplicación Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globales
├── components/
│   └── shared/                  # Componentes compartidos
│       ├── animations.ts        # Definiciones de animaciones
│       ├── ImageCarousel.tsx    # Carrusel de imágenes
│       ├── ImageModal.tsx       # Modal de imágenes
│       └── types.ts             # Tipos compartidos
├── features/                     # Características principales
│   ├── about/                   # Sección Acerca de
│   ├── activities/              # Sección Actividades
│   ├── events/                  # Sección Eventos
│   ├── footer/                  # Pie de página
│   ├── hero/                    # Sección Hero
│   ├── navbar/                  # Barra de navegación
│   └── timeline/                # Línea de tiempo
├── public/                       # Recursos estáticos
│   └── instalaciones/           # Imágenes de infraestructura
├── components.json              # Configuración de componentes
├── next.config.mjs              # Configuración Next.js
├── tsconfig.json                # Configuración TypeScript
├── tailwind.config.ts           # Configuración Tailwind
├── postcss.config.mjs           # Configuración PostCSS
└── package.json                 # Dependencias y scripts
```

## 🚀 Primeros Pasos

### Requisitos Previos

- Node.js 18.17 o superior
- pnpm 8.0 o superior (o npm/yarn)

## 🎨 Customización

### Temas y Colores

El proyecto utiliza Tailwind CSS con un sistema de diseño personalizable. Modifica `tailwind.config.ts` para cambiar colores, tipografía y componentes.

### Contenido

- Actualiza el contenido en los archivos TypeScript/TSX dentro de `features/`
- Cambia imágenes en la carpeta `public/instalaciones/`

### Animaciones

Las animaciones se definen en `components/shared/animations.ts` y puedes:

- Crear nuevas variantes
- Ajustar duraciones y delays
- Modificar efectos de Framer Motion

## 🔧 Estructura de Componentes

Cada sección (feature) tiene su propia estructura:

```
features/
├── [section]/
│   ├── [SectionComponent].tsx    # Componente principal
│   ├── [SubComponent].tsx        # Subcomponentes
│   └── types.ts                  # Tipos específicos
```

## 📱 Responsividad

El proyecto es completamente responsivo:

- **Mobile-first**: Diseño base para móviles
- **Breakpoints Tailwind**: sm, md, lg, xl, 2xl
- **Pruebas en dispositivos reales** recomendadas

## ♿ Accesibilidad

- Componentes construidos con Radix UI (WCAG compliant)
- Semántica HTML correcta
- Navegación por teclado funcional
- Contraste de colores adecuado

## 📧 Contacto

Para preguntas o sugerencias, contáctate a través de:

- Email: [rvaldelomarlopez@gmail.com]

---
