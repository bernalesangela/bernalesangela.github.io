var typed=new Typed(".text",{
    strings:["Frontend Developer", "UI/UX Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));

        if (index >= 0 && index < navLinks.length) {
            navLinks[index].classList.add("active");
        }
    }

    setActiveLink(); 

    window.addEventListener("scroll", setActiveLink);
});
