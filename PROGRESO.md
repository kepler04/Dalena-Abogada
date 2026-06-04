# Proyecto — Landing Page Abogada Dalena Arévalo

Estado: **sitio completo, pulido y listo para desplegar.** (Actualizado: 2026-06-04)

## ✅ Secciones (todas hechas)
`index.html`: **Navbar → Hero → Servicios → Perfil → Beneficios → Contacto → Footer**
`sobre-mi.html`: perfil completo (page-hero + banda navy de stats + Sobre mí + Formación + Experiencia + CTA + footer).

## 🎬 Animaciones / interacción
- Carga: título por máscara, entrada + flotación de estatua, halo, reveals escalonados.
- Mouse: parallax en hero (estatua, mazo, badge).
- Scroll: revelado de secciones (IntersectionObserver), **scrollspy** (link activo), **botón "volver arriba"**.
- Contadores que cuentan de 0 al número (banda navy de `sobre-mi`).
- Hover: cards, botones (sweep), ícono de servicios, zoom en foto de perfil.
- Respeta `prefers-reduced-motion` y `scroll-padding-top` (anclas no quedan bajo el navbar).

## 🎨 Identidad
- Fuentes: **Cormorant** (display) + **Mulish** (cuerpo).
- Vars CSS: crema `#F5F0E8`, café `#3A2A15`, oro `#B08A55`, texto cálido `#2A2118`, navy `#1A2332` (contraste).

## 🖼️ Imágenes (en `assets/images/`)
- **Usadas:** `estatua-justicia.png`, `maso.png`, `dalena.png` (¡nombres en minúscula, OK para Vercel!).
- Sin uso (fuentes): `DALENA IMG.png`, `LEON DALENA.png` → se pueden borrar.

## 🚀 Deploy
- Listos: `README.md` (incluye pasos GitHub + Vercel) y `.gitignore` (ignora `.agents/`, `skills-lock.json`, artefactos `_*.png`).
- **Pendiente:** `git init` → push a GitHub → importar en Vercel. Tras deploy, poner `og:image` con URL absoluta del dominio.
- Verificar teléfono/WhatsApp: `wa.me/51978497788` y `legaldalena@gmail.com`.
- Nota: licencias de imágenes (estatua/mazo) para uso comercial.

## ▶️ Reanudar conversación
Terminal en esta carpeta: `claude --continue` (o `claude --resume`).
