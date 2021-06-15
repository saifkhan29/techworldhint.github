const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')






hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    links.forEach(link  => {
      if(navLinks.classList.contains('open')) {
        link.classList.add('fade');
      } else {
        link.classList.remove('fade');
      }
    });
})