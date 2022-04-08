document.getElementById("year-span").innerText =
    new Date().getFullYear();

let navBtn =
    document.querySelector(".btn-mobile-nav");

let header = document.querySelector(".header");

navBtn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});


const ancorElements = document.querySelectorAll('a:link')

ancorElements.forEach(element =>
    element.addEventListener('click', (e) => {

        e.preventDefault();
        const href = element.getAttribute('href')


        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        } else {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: 'smooth' })

            if (header.classList.contains('nav-open')) {
                header.classList.remove('nav-open')
            }
        }
    }));

