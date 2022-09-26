const navSlide = () => {
  const menu_btn = document.querySelector('.menu-btn');
  const mobile_menu = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('open');
    mobile_menu.classList.toggle('is-active');

    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = '';
    //   }

    //   else {
    //     link.style.animation = `navLinkFade 0.5s ease-in forwards ${index / 7 + 0.3}s`;
    //   }
    // });

  });
}
navSlide();