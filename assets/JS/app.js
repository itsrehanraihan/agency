// =======
// Page Smooth Scroll
// =======
document.querySelectorAll('.menu li a[href^="#"]').forEach(trigger => {
    trigger.onclick = function (e) {
        e.preventDefault();
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 60;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };
});

// =======
// Preloader
// =======
/*window.onload = function () { if you need live preloader,then uncomments*/

const loader = document.querySelector(".loaded");
setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
        loader.style.display = "none";
    }, 500);
}, 2000);
/*}*/
// =======
// Responsive Navbar for Mobile Devices
// =======

const ToggleBtn = document.querySelector(".mobile-nav"),
    Menu = document.querySelector(".menu"),
    link = document.querySelectorAll("a.link");

ToggleBtn.addEventListener("click", () => {
    Menu.classList.toggle("open");
});

// =======
// Close Nav OnClick Navlink
// =======
link.forEach(link => {
    link.addEventListener("click", () => {
        Menu.classList.remove("open");
    })
});

// =======
// Submenu
// =======
const Pop = document.querySelector(".pop"),
    Rotate = document.querySelector(".ion-plus-round"),
    SubMenu = document.querySelector(".submenu");

Pop.addEventListener("click", () => {
    SubMenu.classList.toggle("open")
    Rotate.classList.toggle("rotate")
})

// =======
// Nav Active Status On Scroll
// =======

const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 90 < sections[index].offsetTop) { }

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// =======
// LightBox 
// =======
var tobii = new Tobii()

// =======
// Scroll Top Button
// =======
const upBtn = document.querySelector(".upbtn");
const showBtn = document.querySelector(".show");
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 700) {
        upBtn.classList.add('show');
    } else {
        upBtn.classList.remove('show');
    }

    upBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

// =======
// Swiper JS
// =======
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: "true",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: false,
    keyboard: true,
});
/*    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
 */

