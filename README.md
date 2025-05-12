# Landing Page Atomic Design

> Proyecto desplegado en: [david-camilo-garcia-echavarria.vercel.app](https://david-camilo-garcia-echavarria.vercel.app)

Este proyecto es una landing page construida siguiendo el modelo de **Atomic Design** con React y Next.js, utilizando Tailwind CSS para los estilos.

## Estructura del Proyecto

- **src/components/atoms/**: Componentes atómicos reutilizables (textos, íconos, botones, separadores, barras de progreso, etc.).
- **src/components/molecules/**: Combinaciones simples de átomos (SkillBar, LabelPair, etc.).
- **src/components/organisms/**: Secciones funcionales que agrupan moléculas y átomos (sidebars, categorías de habilidades, etc.).
- **public/**: Archivos estáticos (imágenes, SVGs, etc.).

## Tecnologías principales

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SVGR](https://react-svgr.com/) para importar SVGs como componentes

## Instalación y despliegue local

1. **Clona el repositorio:**

   ```bash
   git clone <URL-del-repositorio>
   cd landing-page-atomic
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Despliegue en producción

El proyecto está desplegado en Vercel:

- [https://david-camilo-garcia-echavarria.vercel.app](https://david-camilo-garcia-echavarria.vercel.app)

## Notas

- Puedes personalizar los colores y estilos en `tailwind.config.js`.
- Los SVGs deben importarse como componentes React desde la carpeta correspondiente, o usarse como imágenes desde `public/`.
- Sigue la estructura atómica para mantener el código organizado y escalable.

---

¡Listo para construir y escalar tu landing page con Atomic Design! 🚀
