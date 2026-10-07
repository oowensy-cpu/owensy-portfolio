
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVIGATION ACTIVE
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".skill-card, .project, .stat, .education-item, .tools-grid div"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =========================
       MOBILE MENU
    ========================= */

    const nav = document.querySelector(".navbar");

    if (window.innerWidth <= 700) {
        nav.classList.add("mobile");
    }


    /* =========================
       CONTACT LOG
    ========================= */

    const contactLinks = document.querySelectorAll(
        '.contact-links a, .hero-contact a'
    );

    contactLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                `Contact : ${link.textContent.trim()}`
            );

        });

    });


    /* =========================
       CONSOLE
    ========================= */

    console.log(
        "%cOwensy Occulus — Portfolio",
        "font-size:16px;font-weight:bold;"
    );

});



































