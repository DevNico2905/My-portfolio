# Nicolás Bernal — Jr. Web Developer Portfolio

[![Portfolio Status](https://img.shields.io/badge/Status-Active-success.svg)]()
[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

Un portafolio web estático, personal y profesional, diseñado para mostrar mis habilidades, experiencia y proyectos como Desarrollador Web Jr. y Full Stack. Este proyecto destaca por un diseño moderno, animaciones fluidas y soporte bilingüe (Inglés/Español), demostrando buenas prácticas en desarrollo UI/UX utilizando tecnologías web estándar (Vanilla).

## 🚀 Características Principales

- **Diseño Moderno y Responsivo:** Interfaz construida con un enfoque pensado para la adaptabilidad, asegurando compatibilidad en cualquier dispositivo (Mobile, Tablet, Desktop) mediante CSS media queries y un menú hamburguesa interactivo.
- **Internacionalización (i18n):** Soporte bilingüe integrado (Inglés y Español) implementado íntegramente con JavaScript puro, que además guarda las preferencias del usuario en el navegador mediante `localStorage`.
- **Experiencia de Usuario (UX) Mejorada:**
  - **Cursor Personalizado:** Animación de cursor con un elemento seguidor (follower) que interactúa de manera dinámica (aumentando su tamaño) al hacer hover sobre enlaces, botones y tarjetas.
  - **Scroll Reveal:** Animaciones de entrada fluidas al hacer scroll hacia abajo mediante la API `IntersectionObserver`, entregando dinamismo al revelar el contenido en el momento exacto.
- **Secciones Detalladas:**
  - **Hero:** Presentación profesional con acceso directo a descarga de CV (en PDF) y redes (LinkedIn/GitHub).
  - **About:** Resumen de perfil personal, educación (Ingeniería de Software) y filosofía como desarrollador.
  - **Experience:** Desglose de habilidades técnicas (Stack) categorizadas detalladamente en Frontend y Backend.
  - **Projects:** Exhibición de proyectos destacados (como el *Sistema de Boleras*, *Sistema de Pagos Unisalle* y *BibloSystem*) incluyendo enlaces directos a demos funcionales y código fuente en repositorios.

## 🛠️ Tecnologías y Herramientas

Este portafolio ha sido construido desde cero, sin el uso de pesados frameworks de JavaScript o librerías de componentes CSS, apoyándose en la semántica, el alto rendimiento y la flexibilidad:

- **Frontend:** HTML5 semántico
- **Estilos:** CSS3 puro (Flexbox, Grid y Variables CSS)
- **Interactividad:** Vanilla JavaScript (ES6+) para manejo del DOM, Observer API y almacenamiento local.
- **Tipografía:** Google Fonts (Syne y DM Sans) para un contraste visual y lectura limpia.
- **Iconografía/Recursos Visuales:** Uso de formatos optimizados (`.webp`) y entidades HTML para iconografía ligera.

## 📂 Estructura del Proyecto

```text
My-portfolio/
│
├── index.html              # Estructura principal de la aplicación, marcado semántico y etiquetas de idiomas (data-i18n)
├── style.css               # Estilo base global, variables de diseño, layout (Hero, About, Proyectos) e UI
├── mediaqueries.css        # Reglas específicas de CSS para la adaptabilidad en dispositivos móviles y tabletas
├── script.js               # Toda la interactividad: lógica i18n, cursor personalizado, menú móvil y animaciones de scroll
└── assets/                 # Imágenes optimizadas (.webp, .png) del perfil, miniaturas de los proyectos y CV
```

## ⚙️ Cómo Ejecutar Localmente

Puesto que se trata de un sitio web estático tradicional "Client-Side", no se necesitan dependencias complejas (como NPM, Webpack o Vite) ni procesos de compilación o build para ponerlo a funcionar:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/DevNico2905/My-portfolio.git
   ```
2. **Navegar al directorio:**
   ```bash
   cd My-portfolio
   ```
3. **Ejecutar en el Navegador:**
   Simplemente haz doble clic y abre el archivo `index.html` en tu navegador web preferido.
   - *Tip Adicional:* Si usas el editor Visual Studio Code o Cursores, puedes utilizar la extensión **Live Server** para tener recarga en vivo al modificar los archivos.

## 📱 Contacto y Redes

- **Email:** [bernalnico2905@gmail.com](mailto:bernalnico2905@gmail.com)
- **LinkedIn:** [itsnicobernal](https://www.linkedin.com/in/itsnicobernal/)
- **GitHub:** [DevNico2905](https://github.com/DevNico2905)

---
*Diseñado y desarrollado por **Nicolás Bernal**.*
