# AGENTS.md - Rebrand 01

## Descripción del Proyecto

Proyecto web estático construido con **HTML** y **TailwindCSS 4.x**. Utiliza **Node.js** para el proceso de compilación y watch de TailwindCSS.

---

## Reglas del Proyecto

1. **Siempre leer este archivo antes de realizar cualquier cambio** en el proyecto.
2. **Mantener este archivo actualizado** con cualquier cambio en la estructura, dependencias o reglas.
3. Usar **TailwindCSS 4.x** como framework CSS (importado via `@import "tailwindcss"`).
4. No usar CSS personalizado fuera de lo que TailwindCSS provea, salvo que sea estrictamente necesario.
5. Todo el código fuente del sitio vive dentro de la carpeta `src/`.
6. **Al solicitar confirmación al usuario**, siempre explicar de forma clara qué se está agregando, modificando o eliminando antes de proceder.

---

## Estructura del Proyecto

```
rebrand-01/
├── input/
│   └── input.css              # Archivo de entrada para TailwindCSS
├── src/
│   ├── index.html             # Página principal
│   ├── collections.html       # Colecciones por serie + cronología del universo
│   ├── biography.html         # Página dedicada a la biografía del autor
│   ├── map.html               # Atlas interactivo de Panem (página completa)
│   ├── viewing-guide.html     # Guía de películas para fans que prefieren ver que leer
│   └── assets/
│       ├── css/
│       │   └── style.css      # CSS compilado por TailwindCSS (output, no editar)
│       ├── image/             # Imágenes del proyecto
│       └── js/
│           ├── panem-map.js   # Lógica interactiva del Atlas de Panem (map.html)
│           └── panem-geo.js   # Geometría generada: proyección real de EE. UU. en distritos
├── node_modules/              # Dependencias de Node.js (ignorar en git)
├── package.json               # Configuración de Node.js y scripts
├── package-lock.json          # Lockfile de dependencias
├── opencode.json              # Configuración de OpenCode (servidor MCP remoto "21st" → https://21st.dev/api/mcp, OAuth)
├── .opencode/
│   └── skills/                # Skills de OpenCode: ui-ux-pro-max (+ banner-design, brand, design, design-system, slides, ui-styling) y los 8 de 21st.dev (21st-ai, 21st-cli-use, 21st-design-sync, 21st-registry, 21st-ui-build, 21st-ui-explore, 21st-ui-review, 21st-video)
└── AGENTS.md                  # Este archivo - documentación y reglas del proyecto
```

---

## Scripts Disponibles

| Comando         | Descripción                                                        |
|-----------------|--------------------------------------------------------------------|
| `npm run dev`   | Inicia TailwindCSS en modo **watch** (compila en tiempo real)      |
| `npm run build` | Compila TailwindCSS con **minificación** para producción           |

---

## Flujo de TailwindCSS

- **Entrada:** `input/input.css` — contiene `@import "tailwindcss"`
- **Salida:** `src/assets/css/style.css` — CSS compilado (no editar manualmente)
- **Watch:** `npm run dev` observa cambios y recompila automáticamente

---

## Dependencias

- `tailwindcss` ^4.3.3
- `@tailwindcss/cli` ^4.3.3

---

## Modo Oscuro (Dark Mode)

El tema oscuro está inspirado en el universo de *The Hunger Games* y se activa con la clase `dark` en `<html>` (patrón `dark:` de Tailwind).

- **Preferencia:** se guarda en `localStorage` bajo la clave `sc-theme` y respeta `prefers-color-scheme` si no hay valor guardado.
- **Sin parpadeo:** un script inline en `<head>` aplica el tema antes del primer render.
- **Sincronización:** se actualiza entre pestañas mediante el evento `storage`.

### Paleta oscura

| Uso | Color |
|-----|-------|
| Fondo base (carbón) | `#12100e` |
| Secciones alternas (hollín) | `#191613` |
| Tarjetas / superficies | `#211d19` |
| Bordes (óxido) | `#3b342c` |
| Texto principal (marfil) | `#f1e7d4` |
| Texto secundario (humo) | `#b0a48f` |
| Acento Mockingjay (oro) | `#e7b04a` |
| Acento rebelión (carmesí) | `#b02a2a` |

### Reglas para nuevos componentes

1. Todo color de fondo, texto o borde definido para el tema claro debe tener su equivalente `dark:` usando la paleta anterior.
2. Mantener un contraste mínimo de **4.5:1** para texto normal y **3:1** para texto grande.

---

## Notas

- El archivo `src/assets/css/style.css` es generado automáticamente. **No editarlo manualmente.**
- Para agregar estilos personalizados, hacerlo en `input/input.css`.
- Los colores del modo oscuro se definen con clases `dark:` en el HTML; no agregar overrides de tema en `style.css`.
- `.21st/design.json` es la fuente de tokens (luz + oscuro) para revisiones con el CLI `21st` (`npx @21st-dev/cli review "<archivo>"`).
- Cohesión UI/UX (2026-11-05): botones primarios unificados en `rounded-full`, `transition-colors` (no `transition-all`), sin `hover:scale-*` en controles/posters/zoom del mapa, `focus-visible:ring-2` obligatorio, `prefers-reduced-motion` desactiva la animación de página, tooltips de social solo con `aria-label`, y jerarquía de encabezados `h1 > h2 > h3 > p`.

---

## Eliminaciones (2026-11-05)

- Eliminada la sección **New Release** de `index.html` (`#new-release` y su nav) y todo el CTA **Updates/newsletter** (`#newsletter` / `Get Updates` en header, mobile, footer y CTA de footer en `collections.html`, `map.html`, `viewing-guide.html`). Los footers ahora usan `id="site-footer"`. El banner de *Sunrise on the Reaping* se mantiene solo en `viewing-guide.html#sunrise`.
- Eliminados: badges flotantes de las tarjetas de categorías en `index.html`, tooltips tipo burbuja del footer, pill especial de "Map of Panem" en la nav de `index.html` (ahora enlace plano como los demás), y emojis en pills (reemplazados por texto/FA).
- Añadida la sección **Themes** (`#themes`) en `index.html` entre el hero y las categorías: tres tarjetas editoriales únicas (Power & Propaganda, War & Moral Consequence, Youth & Agency) para dar sustancia propia a la página sin duplicar `biography.html`, `collections.html`, `map.html` ni `viewing-guide.html`. El H1 ahora nombra a Suzanne Collins sobre el fold.

---

## Botones visibles e información corregida (2026-11-05)

- **Botones con affordance visible:** las 12 tarjetas de libros en `collections.html` (5 Hunger Games + 5 Underland + 2 Picture Books) tienen ahora un botón completo "Learn more ↗" (→ `suzannecollinsbooks.com`); el enlace "Scroll to explore" del hero de `collections.html` es una pill con borde; el dot-nav de `biography.html` muestra "Chapters / tap to jump" + el capítulo actual (`#dot-chapter`, actualizado en `updateDots`) y dots con área táctil ampliada (`p-1.5`); los chips del mapa (`panem-map.js`) muestran `D01`–`D13` (Capitol sigue `★`).
- **Información corregida con el material del sitio:** `index.html` "record-breaking trilogy" → "five-novel Panem saga" (coherente con "5 Novels" de `collections.html`); `biography.html` "50+ languages" → "54 languages" y "Sunrise on the Reaping forthcoming" → "(March 18, 2025)"; `collections.html` Sunrise "Published 2025" → "Published March 18, 2025" (fecha exacta ya presente en el material anterior).

---

## Header unificado y fondo de Viewing Guide (2026-11-05)

- **Header fijo en las 5 páginas:** todas usan `fixed top-0 … bg-[#fcfaf2]/90 dark:bg-[#12100e]/90 backdrop-blur-md border-b …`, altura `h-16 sm:h-20`, orden de nav Home → Map of Panem → Collections → Biography → Viewing Guide (con `aria-current` en la página activa), botones `.theme-toggle` (desktop + móvil) y menú móvil idéntico. `index.html` dejó de ser `absolute`/transparente y `biography.html` dejó de usar el header especial "Return Home" (flecha eliminada) y sin menú móvil. El toggle de tema en `index.html`/`biography.html` pasó de `getElementById('theme-toggle')` a `querySelectorAll('.theme-toggle')`.
- **Viewing Guide hero:** teatro oscuro `#141210` con el GIF del pin Mockingjay dorado en bucle (`assets/image/mockingjay-pin.gif`, 500×325, con `mix-blend-screen` para fundir el fondo negro y dejar solo el oro) centrado detrás del título, sobre brillos dorado/carmesí y viñeta. Sin foto, sin pantalla, sin póster, sin bosque, sin patrón de iconos. Texto ivory/dorado en ambos temas. Sufijo de marca corregido a "• Panem on Screen".

---

## Astro (instalado, páginas intactas)

- `astro` instalado (v7.4.1) con `astro.config.mjs` (`site: https://joaqu.github.io/suzanne-collins-fan-site`, `build.format: 'file'` para conservar `*.html` y que los enlaces relativos existentes sigan funcionando).
- Las páginas canónicas siguen en `src/*.html` (no fueron reescritas). `src/pages/*.html` y `public/assets/` se generan con `npm run sync-pages` (`astro-setup.py`, copia `src/*.html`→`src/pages/` y `src/assets/`→`public/assets/`) antes de cada build de Astro.
- Scripts: `npm run build` = Tailwind → sync-pages → `astro build` (salida en `dist/`); `npm run astro:dev` = servidor de Astro; `npm run astro:build` = solo Astro; `npm run dev` = watch de Tailwind (sin cambios). `dist/` es lo que se sube a GitHub Pages cuando se publique (no `src/`).
- `.gitignore`: `node_modules/`, `dist/`, `public/assets/` (generado), `src/pages/*.html` generados. No subir `dist/` a git.

---

## Atlas interactivo de Panem (`src/map.html`)

- Es una página dedicada (ya no un modal): `index.html`, `collections.html` y `biography.html` enlazan a `map.html` con el texto **Map of Panem**.
- El mapa usa geografía real: proyección Albers de los Estados Unidos contiguos, con ríos (Mississippi, Missouri, Ohio), cadenas montañosas, lagos y los estados antiguos dibujados en un trazo tenue. La geometría se genera en `src/assets/js/panem-geo.js` (`window.PANEM_GEO`).
- Las fronteras de los distritos son interpretativas (no hay mapa oficial en las novelas): Distrito 12 en Appalachia, Distrito 13 en el Noreste, el Capitol en las Rockies, etc. Cada distrito declara su territorio real en `region`/`territory` (`src/assets/js/panem-map.js`, array `DISTRICTS`).
- Al pasar el cursor sobre un territorio o marcador, ese distrito se **resalta** (más opaco, saturado y con borde) mientras los demás se atenúan, y aparece un tooltip con el nombre. Clic o `Enter`/`Espacio` fija el distrito en el panel de información; también hay fila de quick select (chips) e índice de tarjetas.
- Zoom con rueda, doble clic y botones `+`/`−`/`reset`; arrastre para desplazar. `map.html#district-{key}` abre el distrito directamente (p. ej. `#district-12`).
- Los estilos SVG están en el bloque `<style>` de `src/map.html` e incluyen variantes `dark:` con la paleta del proyecto.

---

## Página de Colecciones (`src/collections.html`)

- Agrupa las obras de Suzanne Collins en tres series: **The Hunger Games**, **The Underland Chronicles** y **Picture Books & Standalones**.
- La saga de Panem se presenta en **orden cronológico interno** del universo (10.º, 50.º, 74.º y 75.º Hunger Games, más la rebelión) e incluye un interruptor para alternar a **orden de publicación**.
- Los botones usan `data-order="chronology"` y `data-order="publication"`; el orden se define con los atributos `data-chronology` y `data-publication` de cada tarjeta.
- Los enlaces de navegación de `index.html` y `biography.html` apuntan a esta página en lugar del ancla `#books`.

---

## Guía de Películas (`src/viewing-guide.html`)

- Página para fans que prefieren ver que leer: las 5 películas de *The Hunger Games* con sinopsis sin spoilers, año, duración, novela de origen y tráiler oficial **incrustado en la propia página** (modal con iframe de YouTube, canales Lionsgate Movies / The Hunger Games; IDs en `data-video`). Las tarjetas usan los pósters teatrales oficiales en `src/assets/image/posters/` (clic en el póster o en "Official Trailer" abre el modal; cierra con ✕, Esc o clic fuera). El hero usa un fondo liso tono pergamino/hollín, sin la foto del bosque.
- Incluye un bloque "Start here" con el orden de visionado recomendado (orden de estreno, con la precuela al final) y un interruptor `data-order="release"` / `data-order="chronology"` que reordena las tarjetas (`data-release` / `data-chronology`, misma lógica que en `collections.html`).
- Banner destacado de *Sunrise on the Reaping* (sección `#sunrise`, antes de la lista de películas): usa el banner cinematográfico oficial (`src/assets/image/posters/sunrise-banner.jpg`, 16:9 a ancho completo y clicable para abrir el tráiler en el modal), película con estreno confirmado el 20 de noviembre de 2026. Notas de que *The Underland Chronicles* y los picture books aún no tienen adaptación. Sin información de streaming (cambia por región).
- Todas las páginas enlazan a ella como **Viewing Guide** en header (desktop + móvil) y footer.
