$(function() {
  $('a').click(function() {
    $('.nav-links.open,hamburger').fadeOut();
  });   
  $('.hamburger').click(function() {
    $('.nav-links.open').fadeIn();
  });
  $('a').click(function() {
    $('.hamburger').trigger('click');
  });
});

    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
      navlinks.classList.toggle('open');

      hamburger.classList.toggle('toggle');
    });


