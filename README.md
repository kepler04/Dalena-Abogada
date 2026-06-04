# Dalena Arévalo — Landing Page

Sitio web profesional de **Dalena Salvith Arévalo Ysminio**, abogada especialista en
**Contratación Pública, Arbitraje y Obras Públicas** (Lima, Perú · CAC N° 10519).

Landing page estática (HTML + CSS + JavaScript, sin dependencias ni build).

## ✨ Características
- Diseño premium tipo bufete (tipografía **Cormorant** + **Mulish**, paleta crema / café / oro).
- Secciones: **Hero · Servicios · Perfil · Beneficios · Contacto** + página **Sobre mí**.
- Animaciones: revelado al scroll, parallax con el mouse, contadores, hover y máscaras.
- 100% responsive (desktop / tablet / móvil) y accesible (`prefers-reduced-motion`, focus visible).
- SEO básico: Open Graph, favicon, `lazy-load` de imágenes.

## 📁 Estructura
```
.
├── index.html          # Página principal
├── sobre-mi.html       # Perfil profesional completo
├── css/
│   └── styles.css
├── js/
│   └── main.js         # nav, parallax, scroll-reveal, contadores, scrollspy
└── assets/
    └── images/         # estatua-justicia.png, maso.png, dalena.png
```

## ▶️ Ver en local
No requiere build. Abre `index.html` en el navegador, o sirve la carpeta:
```bash
# opción simple con Python
python -m http.server 8000
# luego abre http://localhost:8000
```

## 🚀 Despliegue
### GitHub
```bash
git init
git add .
git commit -m "Landing page Dalena Arévalo"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

### Vercel
1. Entra a [vercel.com](https://vercel.com) → **Add New → Project**.
2. Importa el repositorio de GitHub.
3. Framework Preset: **Other** · Output: raíz del proyecto (sitio estático).
4. **Deploy**. (Tras desplegar, actualiza `og:image` con la URL absoluta del dominio.)

## 📝 Notas
- Las imágenes de la estatua y el mazo provienen de descargas; para uso comercial
  conviene contar con la licencia correspondiente.
- `DALENA IMG.png` y `LEON DALENA.png` son fuentes originales (sin uso directo); la foto
  publicada es `dalena.png` (recorte). Pueden eliminarse si no se necesitan.
