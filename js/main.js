const ancorElements = document.querySelectorAll('a:link'),
    header = document.querySelector(".header"),
    navBtn = document.querySelector(".btn-mobile-nav");


//toggle navbar
navBtn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});


//scrolling smoothy when click at page link
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


console.log(window.scroll());



//copy Right
document.getElementById("year-span").innerText =
    new Date().getFullYear();
