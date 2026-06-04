/* =================================================================
   DALENA ARÉVALO — main.js
   Navbar (sombra + hamburguesa) + parallax del hero con el mouse
   ================================================================= */
(function () {
  "use strict";

  const nav      = document.getElementById("nav");
  const burger   = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  /* --- Sombra/realce del navbar al hacer scroll --- */
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --- Menú hamburguesa (mobile) --- */
  const closeMenu = () => {
    if (!navLinks || !burger) return;
    navLinks.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menú");
  };

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    /* Cerrar al pulsar un enlace */
    navLinks.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeMenu)
    );

    /* Cerrar con Escape */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    /* Cerrar al volver a desktop */
    window.addEventListener("resize", () => {
      if (window.innerWidth > 960) closeMenu();
    });
  }

  /* --- Parallax del hero con el mouse (profundidad sutil) --- */
  const hero = document.getElementById("inicio");
  const layers = hero ? hero.querySelectorAll("[data-depth]") : [];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (hero && layers.length && !reduce && finePointer) {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    const apply = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      layers.forEach((el) => {
        const d = parseFloat(el.getAttribute("data-depth")) || 0;
        el.style.transform =
          "translate3d(" + (-cx * d).toFixed(2) + "px," + (-cy * d).toFixed(2) + "px,0)";
      });
      if (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) {
        raf = requestAnimationFrame(apply);
      } else {
        raf = null;
      }
    };

    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    hero.addEventListener("mouseleave", () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  }

  /* --- Revelado de secciones al entrar en el viewport --- */
  const revealEls = document.querySelectorAll(".js-reveal");
  if (revealEls.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* --- Contadores animados (cuentan de 0 al número al entrar en vista) --- */
  const counters = document.querySelectorAll(".count");
  if (counters.length) {
    const runCount = (el) => {
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      if (reduce) { el.textContent = "+" + target; return; }
      const dur = 1500, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = "+" + Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCount);
    } else {
      const co = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach((el) => co.observe(el));
    }
  }

  /* --- Scrollspy: marca el enlace de la sección visible --- */
  const navAnchors = Array.from(document.querySelectorAll('.nav__links > a[href^="#"]'));
  const spy = navAnchors
    .map((a) => ({ a, sec: document.getElementById(a.getAttribute("href").slice(1)) }))
    .filter((x) => x.sec);
  if (spy.length && "IntersectionObserver" in window) {
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navAnchors.forEach((x) => x.classList.remove("is-active"));
            const m = spy.find((s) => s.sec === e.target);
            if (m) m.a.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    spy.forEach((s) => so.observe(s.sec));
  }

  /* --- Botón "volver arriba" --- */
  const toTop = document.getElementById("toTop");
  if (toTop) {
    const onTop = () => toTop.classList.toggle("is-visible", window.scrollY > 600);
    onTop();
    window.addEventListener("scroll", onTop, { passive: true });
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
    );
  }
})();
