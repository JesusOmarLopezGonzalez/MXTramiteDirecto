import $ from 'jquery';

$(document).ready(function() {
  
    // FUNCION PARA EL BURGUER MENU
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
  
});