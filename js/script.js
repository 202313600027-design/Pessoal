document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // MENU MOBILE
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // REVEAL
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(item => observer.observe(item));

    // CONTADOR
    const counters = document.querySelectorAll(".stat-number");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;
            const increment = target / 100;

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }

            }, 20);

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => counterObserver.observe(counter));

    // ÁREAS
    const areas = [
        {
            icon:"🤖",
            title:"Robótica",
            desc:"Projetos de automação, sensores e sistemas inteligentes."
        },
        {
            icon:"🖨️",
            title:"Impressão 3D",
            desc:"Prototipagem rápida e fabricação digital."
        },
        {
            icon:"💻",
            title:"Programação",
            desc:"Desenvolvimento de software e aplicações."
        },
        {
            icon:"⚡",
            title:"Eletrônica",
            desc:"Circuitos, sensores e embarcados."
        },
        {
            icon:"🎨",
            title:"Design",
            desc:"Modelagem e design de produtos."
        },
        {
            icon:"🚀",
            title:"Inovação",
            desc:"Criação de soluções tecnológicas."
        }
    ];

    const areasGrid = document.getElementById("areasGrid");

    if (areasGrid) {

        areas.forEach((area, index) => {

            areasGrid.innerHTML += `
                <div class="area-card">
                    <div class="area-number">${String(index + 1).padStart(2,'0')}</div>
                    <span class="area-icon">${area.icon}</span>
                    <h3 class="area-name">${area.title}</h3>
                    <p class="area-desc">${area.desc}</p>
                    <div class="area-tag">EDUMAKER</div>
                    <div class="area-line"></div>
                </div>
            `;

        });

    }

    // HISTÓRIA
    const timelineNav = document.getElementById("timelineNav");
    const timelineSlides = document.getElementById("timelineSlides");

    const historia = [
        {
            ano:"2020",
            titulo:"Fundação",
            texto:"Criação do laboratório maker no IFBA."
        },
        {
            ano:"2021",
            titulo:"Primeiros Projetos",
            texto:"Início dos projetos de robótica e programação."
        },
        {
            ano:"2022",
            titulo:"Expansão",
            texto:"Aquisição de novos equipamentos."
        },
        {
            ano:"2023",
            titulo:"Feiras Científicas",
            texto:"Participação em eventos regionais."
        },
        {
            ano:"2024",
            titulo:"Consolidação",
            texto:"Ampliação das atividades maker."
        }
    ];

    historia.forEach((item, index) => {

        timelineNav.innerHTML += `
            <div class="timeline-dot ${index === 0 ? 'active' : ''}">
                <div class="timeline-dot-label">${item.ano}</div>
            </div>
        `;

        timelineSlides.innerHTML += `
            <div class="timeline-slide ${index === 0 ? 'active' : ''}">
                <div class="timeline-img">🚀</div>
                <div>
                    <div class="timeline-year">${item.ano}</div>
                    <h3 class="timeline-event-title">${item.titulo}</h3>
                    <p class="timeline-event-desc">${item.texto}</p>
                </div>
            </div>
        `;
    });

});