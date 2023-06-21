/*== toggle icon navbar ==*/
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*== scroll sections active link ==*/
// let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLink.forEach(navlink => {
//                 navlink.classList.remove('active');
//                 document.querySelector('header').classList.add('active');
//             })
//         }
//     }
//     )
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && prevScrollpos < currentScrollPos) {
    // navlink.classList.remove('active');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  } else {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
  prevScrollpos = currentScrollPos;

/*== sticky navbar ==*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*== remove navbar when click navbar link ==*/
   
};

/*== scroll reveal==*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .pendidikan h2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .project-box, .contact form, .edu-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .readmore h2', { origin: 'right' });

/*== typed js ==*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Desainer', 'Editor', 'Seniman'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

