// // initialize the WOW JS
// new WOW().init();

//Get the current year and add it into the HTML
document.querySelector(".year").innerHTML = new Date().getFullYear();

// Navbar
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

// PX offset when the navbar activates
const offset = 50;

menBtn.addEventListener('click', () => {
    // Toggle Menu opne/close
    menu.classList.toggle('menu-open'); 
});

// Add scroll event listner to the page
window.addEventListener('scroll', () => {
    // if the page is scrolled by 50px
    if (pageYOffset > offset) {
        // Activate navbar
        navbar.classList.add('navbar-active');
    } else {
        // Deactivate navbar
        navbar.classList.remove('navbar-active');
    }
});

// Slider
const title = document.querySelector('.title');
const cap = document.querySelectorAll('.captions > div');
const pag = document.querySelectorAll('.pag');
const slideNum = document.querySelector('.slide-count');
const header = document.querySelector('header');

let id = 0;

// Array with image paths for the slider
const images = [
    './images/slider1.jfif',
    './images/slider2.jpg',
    './images/slider3.jpg',
];

function slider(i) {
    // Set BG image dynamically
    header.style.background = `url(${images[i]}) no-repeat center`;

    // Toggle active class
    // Remove active classs from all
    for(let i = 0; i < pag.length; i++) {
        // Remove active from pagination
        pag[i].classList.remove('pag-active');
        // Remove active from captions
        cap[i].classList.remove('cap-active');   
    };
    // Reset active class to clicked pagination
    pag[i].classList.add('pag-active');
    // Reset active class to caption
    cap[i].classList.add('cap-active');

    // Change Title
    title.innerText = cap[i].lastElementChild.innerText;
    //Animate Title
    title.classList.add('animate__fadeInUp');
    // Remove animation once finished
    setTimeout(()=>{
        // Remove animation
        title.classList.remove('animate__fadeInUp');
    }, 300);

    // Change slide Number
    slideNum.innerHTML = `0${i + 1}/<sup>0${pag.length}</sup>`;
}
// Paginatiation Controls
for(let i = 0; i < pag.length; i++) {
    // Add click event for all pagination
    pag[i].addEventListener('click',() => {
        // Run the slider function
        slider(i);
        // Set id to clicked pagination index
        id = i;
        // Stop Auto slide
        stopAutoSlide()
    });
}

function nextSlide() {
    // Increment img id
    id++;
    // Check if id is greater than the number of available slides
    if (id > pag.length - 1) {
        id = 0;
    }
    // Run the slider function
    slider(id);
}
// Automate slider
let autoSlide = setInterval(nextSlide, 10000);
// Stop Automatic Slide
function stopAutoSlide () {
    clearInterval(autoSlide);

    // Restart Auto Slider
    autoSlide= setInterval(nextSlide, 10000);
}

