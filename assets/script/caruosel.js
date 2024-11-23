
// THIS IS FOR HERO JS CODE

let swiper = new Swiper('.carousel-content', {
  loop: true,
  grabCursor:true,
  
  autoplay:{
    delay: 6000,
    disableOnInteraction: false,
  },

  speed:1000,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // breakpoints:{
  //   600: {
  //     slidesPerView: 2,
  //   },
  //   968:{
  //     slidesPerView: 3,
  //   }
  // },

});


// THIS IS FOR TESTIMONIAL JS CODE



let tesSwiper = new Swiper('.testimonial-grid-container', {
  loop: true,
  grabCursor:true,
  spaceBetween: 100,

  autoplay:{
    delay: 6000,
    disableOnInteraction: false
  },

  breakpoints:{
    600:{
      slidesPerView: 1
    },
    968:{
      slidesPerView: 2
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  }
});


const tabs = document.querySelectorAll('.js-tab-btn');
const allContent = document.querySelectorAll('.js-ser-column-contaiber');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    // Reset active states for tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Set active tab
    tab.classList.add('active');

    // Reset active states for content
    allContent.forEach(content => content.classList.remove('active'));
    // Show corresponding content
    allContent[i].classList.add('active');
  });
});



// THIS JS CODE IS FOR IMAGE FILTER

const projectContainer = $('.project-gallery').isotope({
    itemSelector: '.project-item',
    layoutMode: 'fitRows'
});

const buttons = document.querySelectorAll('.button-group .project-button');

buttons.forEach(button =>{
  button.addEventListener('click', function(){

    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const value = this.getAttribute('data-filter');

    projectContainer.isotope({
      filter: value
    })
  });
});

