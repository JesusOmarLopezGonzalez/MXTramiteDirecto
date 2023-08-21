import React from 'react';
import 'bulma/css/bulma.min.css';

function Navbar() {
    return (
        <header id="header">
  <nav class="navbar is-fixed-top has-shadow">
    <div class="navbar-brand">
      <div class="animate__animated animate__rubberBand logo" >
        Logo
      </div>
      <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#">
          Inicio
        </a>
        <a class="navbar-item" href="#">
          ¿Quienes Somos?
        </a>
        <a class="navbar-item" href="#">
          ¿Donde nos ubicamos?
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Mas...
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-droplet fa-beat"></i>
              </span>
              <span>Reto Videla</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-bullseye"></i>
              </span>
              <span>Mision y Vision</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-regular fa-heart"></i>
              </span>
              <span>Nuestros Valores</span>
            </a>
            <hr class="navbar-divider"/>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-bell-concierge"></i>
              </span>
              <span>Nuestros Servicios</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-question"></i>
              </span>
              <span>Preguntas Frecuentes</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-file"></i>
              </span>
              <span>Terminos y Condiciones</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-regular fa-image"></i>
              </span>
              <span>Nuestra Galeria</span>
            </a>
            <hr class="navbar-divider"/>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>Contactanos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
    );
}

export default Navbar;