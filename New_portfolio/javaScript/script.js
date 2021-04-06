const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const exit = document.querySelector('nav h1');
const content = document.querySelector('.content');

const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: '0%' }, { height: '90%', ease: Power2.easeInOut, delay: 0.1 })
    .fromTo(hero, 1.2, { width: '100%' }, { width: '90%', ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3");

/*GALLERY*/
let services = document.querySelectorAll('.show-service');
const imagesGroup = document.querySelectorAll('.images_group img');
imagesGroup.forEach((image, index) => {
    image.addEventListener('click', function (e) {
        //pigImage.attributes.src.value = image.attributes.src.value;
        services.forEach((service) => {
            service.style.display = "none";
            if (service.dataset.type == image.dataset.type) {
                service.style.display = "block";
            }
        })
    })
});


/*menu toggle*/

hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    exit.style.display = "block";
    content.style.display = "block";

})

exit.addEventListener("click", () => {
    exit.style.display = "none";
    hamburger.style.display = "block";
    content.style.display = "none";
})