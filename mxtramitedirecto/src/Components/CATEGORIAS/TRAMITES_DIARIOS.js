import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from '../Card.js';
import '../CSS/All.css';

function TRAMITES_DIARIOS() {
    return (
<div class="TRAMITES_DIARIOS" id='TRAMITES_DIARIOS'>
        <div class="categoria">
        <h3 class="title">TRAMITES DIARIOS</h3>
        <p class="subtitle">Estos tramites son lo que los mexicanos mas hacen diariamente.</p>
        <hr class="divider"></hr>
        </div>
    <div class="columns is-multiline is-5">
        <div class="column">
          <Card
            titulo="ACTA DE NACIMIENTO"
            requisitos="RFC, CURP, CORREO ELECTRONICO"
            dificultad="20%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://www.gob.mx/ActaNacimiento/"
          />
        </div>
        <div class="column">
          <Card
            titulo="CURP"
            requisitos="CURP o DATOS PERSONALES"
            dificultad="20%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://www.gob.mx/curp/"
          />
        </div>
        <div class="column">
          <Card
            titulo="RFC"
            requisitos="CURP, AÑO DE INSCRIPCION EN EL SAT, CODIGO POSTAL, TELEFONO"
            dificultad="10%"
            duracion="2-5min"
            costo="GRATIS"
            sitio="https://www.sat.gob.mx/aplicacion/operacion/31274/consulta-tu-clave-de-rfc-mediante-curp"        
          />
        </div>
        <div class="column">
          <Card
            titulo="CIF"
            requisitos="SU CONTRASEÑA o E.FIRMA PORTABLE con CLAVE PRIVADA"
            dificultad="30%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://www.sat.gob.mx/aplicacion/login/28889/obten-tu-cedula-de-identificacion-fiscal"
          />
        </div>
        <div class="column">
          <Card
            titulo="CIF POR MEDIO DE SAT ID"
            requisitos="SU RFC, CORREO ELECTRONICO, INE"
            dificultad="40%"
            duracion="15-30min"
            costo="GRATIS"
            sitio="https://satid.sat.gob.mx/"
          />
        </div>
    </div>
</div>
    );
}

export default TRAMITES_DIARIOS;
