import $ from 'jquery';
import 'popper.js/dist/popper.min';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min';
import './sass/styles.scss';
import './index.css';

$(document).ready(() => {
  const pathname = window.location.pathname;
  if (pathname === '/') {
    $('.navbar-nav > li > a[href="./index.html"]')
      .addClass('disabled')
      .parent()
      .addClass('active');
  } else {
    $('.navbar-nav > li > a[href=".' + pathname + '"]')
      .addClass('disabled')
      .parent()
      .addClass('active');
  }
});
