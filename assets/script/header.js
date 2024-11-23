window.addEventListener('scroll', () =>{
  const header = document.querySelector('.header');
  
  if(window.scrollY > 0){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled')
  }
});

const menu = document.querySelector('.js-menu');
const openMenuBtn = document.querySelector('.js-open-menu-btn');
const closeMenuBtn = document.querySelector('.js-close-menu-btn');

[openMenuBtn, closeMenuBtn].forEach((arrow) =>{
  arrow.addEventListener('click', function (e) {
    menu.classList.toggle('open');
    if(menu.classList.contains('open')){
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'block';
      e.defaultPrevented();
    } else{
      openMenuBtn.style.display = 'block';
      closeMenuBtn.style.display = 'none';
    }
  });
});

menu.querySelectorAll('.dropdown > a').forEach((arrow) =>{
  arrow.addEventListener('click', function(e){
    e.preventDefault();
    this.closest('.dropdown').classList.toggle('active');
  });
});

// Get all links
const links = document.querySelectorAll('nav.menu ul li a');

// Get the current URL
const currentUrl = window.location.href;

// Loop through the links and add 'active' class to the matching link
links.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});