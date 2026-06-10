# Handoff: Pragma Controllers — Landing Page (v1)

## Overview
Landing page de una sola página (one-pager) para **Pragma Controllers**, consultora de
auditoría y control de contratistas, gestión documental y asesoría legal-estratégica para
empresas de **minería, petróleo y gas**. Objetivo: transmitir seriedad, autoridad técnica y
modernidad para captar empresas mineras y proveedores del sector, generando confianza
(es una empresa nueva).

Estética: corporativo-moderno, editorial, “tech serio”. Mucho espacio en blanco, tipografía
grotesque fuerte, paleta fría con bordó de marca usado con disciplina. Sin fotos, sin tonos tierra.

## About the Design Files
El archivo **`Pragma Controllers.html`** de este bundle es una **referencia de diseño** creada en
HTML/CSS/JS plano — un prototipo de alta fidelidad que muestra el look final y el comportamiento
deseado. **No es código de producción para copiar tal cual.**

La tarea es **recrear este diseño en el proyecto Next.js** usando sus patrones y librerías
(componentes React, `next/font`, `next/image`, CSS Modules / Tailwind / styled — lo que ya use el
repo). Todos los valores (colores, tipografía, espaciados, animaciones) están documentados abajo
para reproducirlo con fidelidad.

> Abrí `Pragma Controllers.html` en el navegador para ver el comportamiento real (sticky nav,
> reveals on-scroll, marquees de logos, hovers). Las animaciones de entrada del hero usan una clase
> `preload` en `<html>` que se quita por JS tras el primer paint — ver “Interactions”.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciados e interacciones son finales. Reproducir
pixel-perfect con los componentes/estilos del codebase.

---

## Recommended Next.js structure
Sugerencia (App Router). Cada sección → un componente.

```
app/
  page.tsx                 // arma las secciones en orden
  layout.tsx               // fuentes (next/font), <html lang="es">
  globals.css              // design tokens como CSS variables (ver abajo)
components/
  Header.tsx               // nav sticky + menú mobile
  Hero.tsx
  SectorsBand.tsx          // banda grafito full-width
  Clients.tsx              // 2 filas de logos (marquee)
  Problem.tsx              // texto + diagrama de nodos
  Services.tsx             // grilla de 6 tarjetas
  Methodology.tsx          // timeline 4 pasos
  Platform.tsx             // sección oscura + mockup dashboard
  WhyPragma.tsx            // 4 pilares
  Contact.tsx              // CTA + formulario (demo)
  Footer.tsx
public/
  logos/                   // copiar aquí los PNG de assets/logos/fit/
```

- **Fuentes:** cargar con `next/font/google`: `Archivo` (display, pesos 400–900) y
  `Hanken_Grotesk` (body, 400–700). Exponerlas como CSS variables `--display` / `--body`.
- **Logos:** mover los PNG de `assets/logos/fit/` a `public/logos/` y usar `next/image`
  (o `<img>`); en el HTML se referencian como `assets/logos/fit/<nombre>.png`.
- **Iconos:** todos son SVG inline (stroke, `stroke-width:1.5`, `currentColor`). Se pueden
  extraer a un componente `<Icon name=… />` o usar lucide-react (los trazos son equivalentes a
  Lucide: shield-check, file-text, trending-up, users, building, scale, etc.).
- **Animaciones on-scroll:** usar `IntersectionObserver` dentro de un hook
  `useReveal()` o una librería (framer-motion `whileInView`). Respetar `prefers-reduced-motion`.

---

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| `--borgona` | `#6E1423` | Primario de marca: CTAs, acentos, líneas, números, 1 palabra del titular |
| `--borgona-hover` | `#8A2233` | Hover del bordó |
| `--grafito` | `#16181D` | Texto principal; bloques de alto contraste (banda sectores, plataforma, footer) |
| `--blanco` | `#FFFFFF` | Fondo principal |
| `--gris-frio` | `#F4F5F7` | Fondos de secciones alternas |
| `--gris-medio` | `#6B7280` | Texto secundario |
| `--linea` | `#E6E8EC` | Bordes y separadores sutiles |
| `--tinte` | `#F6EEF0` | Wash bordó muy sutil (cards/acentos) |
| acento on-dark | `#E68A98` | Texto/íconos bordó sobre fondos grafito (banda sectores) |
| eyebrow on-dark | `#D98A98` | Eyebrows sobre la sección oscura “Plataforma” |

**Colores de estado (mockup dashboard de la sección Plataforma):**
`apto #7CD9A0` · `por vencer #E8B964` · `no apto #E07A87` (cada uno con su fondo a ~12% de opacidad).

### Tipografía
- **Display:** `Archivo` — titulares, eyebrows, números, botones. Pesos 600/700/800.
  Titulares grandes con `letter-spacing` negativo (-0.02em a -0.035em), `line-height` ~1.0–1.05.
- **Body/UI:** `Hanken Grotesk` — párrafos y UI. Pesos 400/500. `line-height` ~1.5–1.55.
- **Eyebrows:** Archivo 600, `font-size:12px`, `text-transform:uppercase`,
  `letter-spacing:.22em`, color bordó, con una línea corta de 26×1.5px a la izquierda.
- **Escala titulares:** H1 hero `clamp(40px,6.6vw,82px)`; H2 de sección `clamp(30px,4.2vw,52px)`;
  H3 de tarjeta `~20px`.

### Espaciado / layout
- Contenedor: `max-width:1200px`, padding lateral `clamp(20px,5vw,64px)`.
- Padding vertical de sección: `clamp(72px,9vw,128px)`.
- Radios: `--r-sm:8px`, `--r-md:14px`, `--r-lg:20px`; chips de logo `16px`.
- Easing global: `cubic-bezier(.22,.61,.36,1)`.

### Sombras
- Tarjetas (hover): `0 30px 50px -30px rgba(22,24,29,.28)`.
- Diagrama / formulario: `0 30px 60px -40px rgba(22,24,29,.3)` / `0 40px 70px -30px rgba(0,0,0,.45)`.
- Chips de logo: base `0 10px 24px -20px rgba(22,24,29,.35)`; hover `0 16px 34px -20px rgba(22,24,29,.32)`.

---

## Screens / Views
Es una sola página con 11 bloques en este orden. Anchos/medidas clave abajo (desktop).

### 1. Header / Navegación
- **Layout:** barra fija (`position:fixed`), alto 76px, `z-index:100`. Logo a la izquierda
  (cuadro bordó “PC” 38×38, radio 9px + nombre “Pragma Controllers” / subtítulo “Control de
  contratistas”). Links centro-derecha: Servicios · Metodología · Sectores · Contacto.
  Botón CTA bordó “Solicitar diagnóstico” a la derecha.
- **Scroll:** al hacer scroll (>16px) agrega fondo `rgba(255,255,255,.78)` + `backdrop-filter:blur(14px)`
  + borde inferior 1px `--linea`. (Clase `.scrolled`.)
- **Links:** color `--gris-medio` → bordó en hover, con subrayado animado (línea que crece de 0 a 100%).
- **Mobile (<760px):** se ocultan links y CTA; aparece botón hamburguesa (42×42) que despliega
  un panel `.mobile-menu` con los links + CTA.

### 2. Hero
- **Layout:** alineado a la izquierda (asimétrico), `padding-top:150px`. Contenido máx ~920px.
- **Fondo:** blanco con textura — grilla fina (líneas grises a ~4% sobre 64px) enmascarada con
  `radial-gradient` que desvanece, + un wash radial bordó muy leve arriba a la derecha
  (680×680, `rgba(110,20,35,.10)`). Sin imágenes.
- **Contenido:**
  - Eyebrow: `CONTROL DE CONTRATISTAS · MINERÍA, PETRÓLEO & GAS`
  - H1: **“Blindaje legal y operativo para tu cadena de contratistas.”** con “legal y operativo” en bordó. `max-width:16ch`.
  - Subtítulo (lead, `--gris-medio`, `max-width:54ch`).
  - Botones: primario “Solicitar diagnóstico →” (bordó) + secundario ghost “Ver servicios”.
  - Stats (3, separados por borde superior 1px): **360°** / **Tiempo real** / **Cuyo**, cada uno
    con su número en bordó (Archivo 700, 22px) y descripción debajo.
- **Animación de entrada:** reveals escalonados (eyebrow→H1→lead→botones→stats) — ver Interactions.

### 3. Banda de sectores (grafito, full-width)
- **Layout:** banda de **ancho completo edge-to-edge** (no es una tarjeta), fondo
  `linear-gradient(150deg,#1C2027,#16181D 62%)`, bordes superior/inferior 1px `rgba(255,255,255,.08)`,
  padding vertical `clamp(26px,3.2vw,38px)`. Resplandor bordó sutil arriba a la derecha
  (`radial-gradient rgba(110,20,35,.5)`).
- **Contenido (flex, dentro del contenedor 1200px):**
  - Texto: “Especialistas en el marco **legal y operativo** de las industrias más exigentes de
    Argentina.” — blanco a 80%, “legal y operativo” en `#E68A98`.
  - 3 sectores con ícono lineal + label en versalitas: **Minería · Petróleo · Gas**.
    Íconos en `#E68A98` (27px), labels en blanco, separados por líneas verticales 1px
    `rgba(255,255,255,.16)`. Hover: el sector sube 3px y el ícono toma glow bordó.
- **Mobile (<760px):** el contenedor pasa a columna (texto arriba, sectores abajo).

### 4. Empresas que confían (logos, 2 filas)
- **Header centrado:** eyebrow “CONFIANZA” + H2 “Empresas que confían en nosotros.” + lead.
- **2 filas de logos** en marquee infinito (CSS): fila 1 se desplaza a la izquierda, fila 2 a la
  derecha (`animation-direction:reverse`). Cada fila duplica su set para loop continuo (`translateX 0 → -50%`),
  con máscara de desvanecido en ambos bordes. **Pausa al hover** sobre la fila.
- **Chips de logo:** 212×110px, fondo blanco, borde 1px `--linea`, radio 16px, `overflow:hidden`,
  `margin-right:18px`. Imagen `height:44px; width:auto; object-fit:contain`.
- **Estados:** en reposo `filter:grayscale(1); opacity:.72`. **Hover del chip:** borde bordó,
  sombra sutil, y la imagen pasa a color original (`grayscale(0); opacity:1`) con zoom `scale(1.14)`.
- **9 logos** (ver Assets). Distribución actual: fila 1 = cuyosur, capac, giorlando, acert, gec;
  fila 2 = mannor, geotub, exppel, siddhi.
- **Mobile:** chips se achican (≈176×98 a <760px; ≈152×88 a <560px) y la imagen baja a 38/33px.

### 5. El problema (riesgo)
- **Layout:** 2 columnas (`1.05fr / .95fr`), gap `clamp(40px,6vw,80px)`, fondo blanco.
- **Izquierda:** eyebrow “EL RIESGO INVISIBLE”, H2 “Una empresa puede ser demandada por los
  incumplimientos de sus contratistas.”, párrafo, y un destacado en tarjeta con borde izquierdo
  bordó 3px sobre fondo `--tinte`: “Cada contratista no controlado es una contingencia abierta.”
- **Derecha:** tarjeta-diagrama (fondo blanco, borde, radio 20px, sombra) con un **diagrama de
  nodos** “empresa → contratistas → subcontratista”: nodo empresa en grafito (oscuro), un
  contratista marcado como **riesgo en bordó** (con dot pulsante), conectores verticales finos, y
  un número grande “+1 / punto ciego = riesgo” en bordó.

### 6. Servicios (6 tarjetas)
- **Layout:** grilla 3 columnas (desktop), 2 (≤1000px), 1 (≤560px), gap 22px.
- **Tarjeta:** fondo blanco, borde 1px `--linea`, radio 14px, padding ~30px. Ícono en cuadro
  `--tinte` (50×50, radio 12px, bordó). Título (Archivo, 20px), bajada de una línea
  (`--gris-medio`), y lista de puntos clave con bullet bordó (separada por borde superior). Número
  de tarjeta (01–06) arriba a la derecha en color `--linea`.
- **Hover:** la tarjeta sube 6px, sombra suave, y una **línea bordó superior se dibuja** de
  izquierda a derecha (`transform:scaleX(0)→1`).
- **Contenido (títulos):** 1) Auditoría y Control de Contratistas · 2) Gestión Documental
  Corporativa · 3) Asesoría Estratégica y Mitigación de Riesgos · 4) Capacitaciones y Talleres
  de Integración · 5) Nacionalización y Desembarco de Empresas · 6) Marco Legal en Minería,
  Petróleo & Gas. (Bajadas y bullets completos están en el HTML.)

### 7. Metodología (timeline 4 pasos)
- **Layout:** fondo `--gris-frio`, bordes 1px. Header (eyebrow “CÓMO TRABAJAMOS” + H2 + lead).
  Grilla de 4 pasos con una **línea conectora horizontal** detrás (gradiente
  línea→bordó→línea) a la altura de los badges.
- **Paso:** badge circular 68px (fondo blanco, borde 1.5px, número bordó Archivo 24px) + H3 + texto.
  01 Diagnóstico · 02 Implementación · 03 Control continuo · 04 Reporte y mejora.
- **Mobile (≤1000px):** grilla 2 col y la línea conectora se oculta; ≤560px una columna.

### 8. La plataforma (sección oscura + dashboard)
- **Layout:** fondo **grafito `#16181D`**, texto claro. 2 columnas (`1fr / 1.1fr`). Resplandor
  bordó arriba-izquierda.
- **Izquierda:** eyebrow on-dark “TECNOLOGÍA PROPIA”, H2 blanco, lead a 72%, y lista de
  capacidades con check bordó-claro: trazabilidad · semáforo (apto/por vencer/no apto) · reportes
  exportables · accesos por perfil.
- **Derecha:** **mockup de dashboard** (no foto), construido con HTML/CSS: barra de ventana con
  dots + título + indicador “En vivo”, 3 tarjetas de stats (142 Aptos / 18 Por vencer / 7 No
  aptos con sus colores de estado), y una tabla de 4 contratistas con pills de estado
  (Apto/Por vencer/No apto). Sombra fuerte, bordes finos.

### 9. Por qué Pragma (4 pilares)
- **Layout:** grilla 4 columnas (2 a ≤1000px, 1 a ≤560px), fondo blanco. Header (eyebrow “POR QUÉ
  PRAGMA” + H2).
- **Pilar:** borde superior grafito 2px, ícono lineal bordó (42px), H3 grafito, texto
  `--gris-medio`. Criterio jurídico real · Tecnología con IA · Verificación en campo · Foco regional.

### 10. CTA + Contacto
- **Layout:** sección sobre **bloque bordó sólido `#6E1423`** con grilla fina blanca enmascarada.
  2 columnas (texto/datos a la izquierda, formulario en tarjeta blanca a la derecha).
- **Izquierda:** eyebrow on-dark “HABLEMOS”, H2 blanco “Controlemos juntos tu cadena de
  contratistas.”, lead, y 3 datos de contacto con ícono: teléfono **+54 9 261 422 4820**,
  email **contacto@pragmacontrollers.com** (placeholder — confirmar real), oficinas **San Juan ·
  Mendoza**.
- **Formulario (tarjeta blanca):** campos Nombre + Email (fila de 2), Empresa, Mensaje (textarea),
  botón bordó “Solicitar diagnóstico →”. Inputs sobre `--gris-frio`, foco con borde bordó +
  ring `rgba(110,20,35,.12)`.
- **Comportamiento:** **es un formulario demo** — hoy hace `preventDefault`, valida nombre+email y
  muestra un mensaje de éxito. **Falta conectarlo** a un endpoint/email real (ver Interactions).

### 11. Footer
- **Layout:** fondo grafito `#16181D`, texto claro. Fila superior 3 columnas (marca + descripción /
  Navegación / Contacto), borde inferior, y fila inferior con copyright.
- **Copyright:** “© 2026 Pragma Controllers — Consultoría para minería, petróleo y gas · San Juan
  — Mendoza”. Links pasan a bordó-claro en hover.

---

## Interactions & Behavior
- **Sticky header blur:** al `scrollY > 16` se agrega clase `.scrolled` (fondo translúcido + blur + borde).
- **Menú mobile:** botón hamburguesa togglea `.mobile-menu.open` (slide-down); se cierra al clickear un link. `aria-expanded` sincronizado.
- **Reveals on-scroll:** elementos `.reveal` parten en `opacity:0; translateY(22–26px)` y pasan a
  visible vía `IntersectionObserver` (threshold .12). Delays escalonados con clases `.d1`–`.d4`.
  En Next: hook `useReveal()` o framer-motion `whileInView` con `viewport={{ once:true }}`.
- **Entrada del hero (importante para SSR/print):** el estado VISIBLE es la base; una clase
  `preload` en `<html>` (agregada por un script inline) oculta los elementos del hero, y se quita
  tras el primer paint para disparar la transición escalonada. Así, **sin JS / en SSR / en
  impresión, el hero se ve igual** (no queda en blanco). En React: render visible por defecto y
  animar la entrada en `useEffect` (montaje), no al revés.
- **Marquees de logos:** animación CSS `translateX(0 → -50%)` con el set duplicado; fila 2 con
  `animation-direction:reverse`. `animation-play-state:paused` en `:hover`. Desactivar con
  `prefers-reduced-motion`.
- **Hover de tarjetas (Servicios):** `translateY(-6px)` + sombra + línea bordó superior que se dibuja (`scaleX`).
- **Hover de chips de logo:** borde bordó + sombra sutil + imagen a color (`grayscale 1→0`) con `scale(1.14)`. `overflow:hidden` recorta el zoom.
- **Formulario (demo):** `submit` → `preventDefault`, valida nombre+email, muestra
  `.form-ok` y cambia el botón a “Enviado ✓”. **TODO en Next:** reemplazar por un Server Action /
  API route (`app/api/contact/route.ts`) o servicio (Resend, Formspree, etc.) que envíe el mail.
- **Scroll suave:** los links del nav apuntan a anclas (`#servicios`, `#metodologia`, `#sectores`,
  `#contacto`) con `scroll-behavior:smooth`.

## Responsive behavior
- **≤1000px:** Servicios y Pilares a 2 columnas; Metodología 2 col (línea conectora oculta);
  Plataforma a 1 columna; footer 2 col.
- **≤760px:** nav → hamburguesa; Problema y Contacto a 1 columna; banda de sectores apila su
  contenido; chips de logo ~176×98 (img 38px).
- **≤560px:** todo a 1 columna; dashboard stats a 2 col; formulario a 1 columna; chips de logo
  ~152×88 (img 33px); stats del hero apilados.
- `body { overflow-x: hidden }` y `<meta viewport>` ya contemplados; cuidar no introducir overflow horizontal.

## State Management
Mínimo. Estado local de UI únicamente:
- `headerScrolled` (boolean) — del listener de scroll.
- `mobileMenuOpen` (boolean) — toggle del menú.
- Estado del formulario: valores de campos + `submitted`/`error`. Al integrar el envío real,
  agregar estado de carga (`loading`) y de resultado (`success`/`error`).
No hay data fetching en el diseño actual.

## Assets
Logos de clientes en **`assets/logos/fit/`** (PNG con transparencia, ya recortados a su contenido
para que se vean del mismo tamaño). Mover a `public/logos/` en Next.

| Archivo | Empresa | Nota |
|---|---|---|
| `cuyosur.png` | Cuyosur S.A. | El original era **blanco** (invisible sobre fondo claro); se recoloreó a **monocromo grafito** para que se lea. |
| `capac.png` | CAPAC | |
| `giorlando.png` | Grupo Giorlando | |
| `acert.png` | Acert ARG (Seguridad Privada) | |
| `mannor.png` | Mannor Hause S.A. | |
| `geotub.png` | Geotub | Origen de baja resolución; escala bien igual. |
| `exppel.png` | Laboral Exppel SRL | |
| `siddhi.png` | Siddhi Medicina Laboral SRL | |
| `gec.png` | GEC | |

Iconografía: SVG inline (Lucide-equivalentes). No hay imágenes fotográficas (decisión de marca).
Fuentes: Google Fonts — Archivo + Hanken Grotesk.

## Files
- `Pragma Controllers.html` — el diseño completo (HTML + CSS + JS en un archivo). Es la fuente de
  verdad: abrilo para ver medidas exactas, copy completo de cada sección, y todas las
  interacciones funcionando.
- `assets/logos/fit/*.png` — los 9 logos de clientes.

## Notas finales / pendientes del cliente
- **Email de contacto** es placeholder (`contacto@pragmacontrollers.com`) — confirmar el real.
- **Formulario** debe conectarse a un envío real (Server Action / API route / servicio externo).
- El **logo/símbolo** definitivo (hoy es el recuadro “PC”) puede reemplazarse más adelante.
