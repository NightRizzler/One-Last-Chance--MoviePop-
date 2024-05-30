const menu = document.querySelector('#mobile-menu'); // Väljer mobilmenyn från DOM
const menuLinks = document.querySelector('.navbar__menu'); // Väljer länkarna i menyn från DOM
const navLogo = document.querySelector('#navbar__logo'); // Väljer logotypen från DOM

// Visar mobilmenyn
const mobileMenu = () => {
  menu.classList.toggle('is-active'); // Växlar CSS-klassen för att visa/dölja mobilmenyn
  menuLinks.classList.toggle('active'); // Växlar CSS-klassen för att visa/dölja länkarna i mobilmenyn
};

menu.addEventListener('click', mobileMenu); // Lägger till en händelselyssnare för att visa mobilmenyn när menyknappen klickas

// Visar aktivt menyval vid scrollning
const highlightMenu = () => {
  const elem = document.querySelector('.highlight'); // Väljer det aktuella markerade menyvalet från DOM
  const homeMenu = document.querySelector('#home-page'); // Väljer hemmenyn från DOM
  const newsMenu = document.querySelector('#news-page'); // Väljer nyhetsmenyn från DOM
  const filmMenu = document.querySelector('#film-page'); // Väljer filmpaginas menyn från DOM
  let scrollPos = window.scrollY; // Hämtar den aktuella scrollpositionen på sidan

  // Lägger till klassen 'highlight' på rätt menyobjekt baserat på scrollposition och fönsterstorlek
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    newsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    newsMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    filmMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    filmMenu.classList.add('highlight');
    newsMenu.classList.remove('highlight');
    return;
  }

  // Tar bort 'highlight'-klassen om användaren scrollar utanför det markerade avsnittet eller om fönsterstorleken ändras
  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

// Lägger till händelselyssnare för att uppdatera det markerade menyvalet vid scrollning och klick
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Stänger mobilmenyn när man klickar på ett menyobjekt
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active'); // Väljer den aktiva mobilmenyn från DOM
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active'); // Döljer mobilmenyn
    menuLinks.classList.remove('active'); // Döljer länkarna i mobilmenyn
  }
};
