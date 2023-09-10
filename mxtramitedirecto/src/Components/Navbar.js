import React from 'react';
import 'bulma/css/bulma.min.css';
import './CSS/Navbar.css';
import './JQUERY/Mobile_Navbar';
import Logo from '../Assets/Img/Logo.webp';

function Navbar() {
    return (
        <header id="header">
  <nav class="navbar is-fixed-top has-shadow">
    <div class="navbar-brand">
      <div>
      <figure>
      <img src={Logo} class="Logo" alt='MXTramiteDirecto'></img>
      </figure>
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
          Contactanos
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Categorias
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-droplet fa-beat"></i>
              </span>
              <span>TRAMITES DIARIOS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-droplet fa-beat"></i>
              </span>
              <span>SAT</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-bullseye"></i>
              </span>
              <span>CITAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>UDG</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-regular fa-heart"></i>
              </span>
              <span>BECAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-bell-concierge"></i>
              </span>
              <span>CONSTANCIAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-question"></i>
              </span>
              <span>CERTIFICADOS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-question"></i>
              </span>
              <span>LICENCIAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-question"></i>
              </span>
              <span>CONVOCATORIAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-question"></i>
              </span>
              <span>INSCRIPCIONES</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>CEDULAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>ESCUELAS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>CFE</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>SIAPA</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>RECIBOS DE PAGO</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-solid fa-file"></i>
              </span>
              <span>IMSS</span>
            </a>
            <a class="navbar-item" href="#">
              <span class="icon">
                <i class="fa-regular fa-image"></i>
              </span>
              <span>ISSTE</span>
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