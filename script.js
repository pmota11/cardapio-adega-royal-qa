document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        target.scrollIntoView({ behavior: "smooth" });
    });
});
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        const target = btn.getAttribute('data-target'); // ex: "feijoada"
        const collapseId = `#collapse${target.charAt(0).toUpperCase() + target.slice(1)}`;

        // Fecha todos os outros
        document.querySelectorAll('.accordion-collapse').forEach(col => {
            let instance = bootstrap.Collapse.getInstance(col);
            if (instance) instance.hide();
        });

        // Abre o escolhido
        const collapseElement = document.querySelector(collapseId);
        const collapse = new bootstrap.Collapse(collapseElement, {
            toggle: true
        });

        // Scroll suave até o acordeão aberto
        setTimeout(() => {
            const section = document.getElementById(target);
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
    });
});
