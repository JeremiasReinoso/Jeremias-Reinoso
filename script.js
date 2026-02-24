const intro = document.getElementById("intro");
const site = document.getElementById("site");
const cursorDot = document.getElementById("cursorDot");
const hero = document.getElementById("hero");
const heroShapeWrap = document.getElementById("heroShapeWrap");

window.addEventListener("load", () => {
    setTimeout(() => {
        site.classList.remove("hidden");
    }, 1400);

    setTimeout(() => {
        if (intro) {
            intro.style.display = "none";
        }
    }, 3800);
});

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
    }
);

revealItems.forEach((item) => revealObserver.observe(item));

if (cursorDot) {
    window.addEventListener("mousemove", (event) => {
        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;
    });

    const interactive = document.querySelectorAll("a, button, .glass-card, .project-card");
    interactive.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursorDot.style.width = "18px";
            cursorDot.style.height = "18px";
            cursorDot.style.background = "#c084fc";
        });

        item.addEventListener("mouseleave", () => {
            cursorDot.style.width = "11px";
            cursorDot.style.height = "11px";
            cursorDot.style.background = "#a855f7";
        });
    });
}

if (hero && heroShapeWrap) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        heroShapeWrap.style.transform = `translate(calc(-50% + ${x * 12}px), calc(-50% + ${y * 12}px))`; 
    });

    hero.addEventListener("mouseleave", () => {
        heroShapeWrap.style.transform = "translate(-50%, -50%)";
    });
}
