import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from '../Card.js';
import '../CSS/All.css';

function BECAS() {
    return (
  <div class="BECAS" id='BECAS'>
        <div class="categoria">
        <h3 class="title">BECAS</h3>
        <p class="subtitle">Las mas relevantes del 2023 en Mexico actualmente</p>
        <hr class="divider"></hr>
        </div>
      <div class="columns is-multiline is-5">
        <div class="column">
          <Card
            titulo="SIIAU"
            requisitos="CODIGO DE ALUMNO"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://siiauescolar.siiau.udg.mx/wus/gupprincipal.inicio"
          />
        </div>
        <div class="column">
          <Card
            titulo="SEGUIMIENTO DE TRAMITES UDG"
            requisitos="NUMERO DE REGISTRO, CONTRASEÑA, INE"
            dificultad="20%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://tramitepi.escolar.udg.mx/SeguimientoPI/"        
          />
        </div>
        <div class="column">
          <Card
            titulo="E-CURSOS CUCEA"
            requisitos="CORREO INSTITUCIONAL"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://ecursos.cucea.udg.mx/login/index.php"
          />
        </div>
        <div class="column">
          <Card
            titulo="OFERTA ACADEMICA CUCEA"
            requisitos="CODIGO DE ALUMNO"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://cucea.udg.mx/es/oferta-academica"
          />
        </div>
        <div class="column">
          <Card
            titulo="MODDLE CUCEI"
            requisitos="CORREO INSTITUCIONAL"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://moodle2.cucei.udg.mx/"
          />
        </div>
        <div class="column">
          <Card
            titulo="OFERTA ACADEMICA CUCEI"
            requisitos="CODIGO DE ALUMNO"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="http://www.cucei.udg.mx/es/oferta-academica/licenciaturas"       
          />
        </div>
        <div class="column">
          <Card
            titulo="SIGI CUCEI"
            requisitos="CODIGO DE ALUMNO o CODIGO SIGI, CONTRASEÑA"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://finanzas.cucei.udg.mx/login"       
          />
        </div>
        <div class="column">
          <Card
            titulo="SIIGED CUCEA"
            requisitos="CODIGO DE ALUMNO, CONTRASEÑA"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://siiged.cucea.udg.mx/acceso/login"       
          />
        </div>
        <div class="column">
          <Card
            titulo="BIBLIOTECA VIRTUAL UDG"
            requisitos="CODIGO DE ALUMNO, CONTRASEÑA"
            dificultad="-"
            duracion="-"
            costo="-"
            sitio="https://wdg.biblio.udg.mx/index.php/paginaacceso"       
          />
        </div>
      </div>    
</div>
    );
}

export default BECAS;
