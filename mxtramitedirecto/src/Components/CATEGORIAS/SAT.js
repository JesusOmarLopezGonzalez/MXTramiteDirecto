import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from '../Card.js';
import '../CSS/All.css';

function SAT() {
    return (
<div class="SAT" id='SAT'>
        <div class="categoria">
        <h3 class="title">SAT</h3>
        <p class="subtitle">Tramites Mas Utilizados de El Servicio de Administración Tributaria (SAT)</p>
        <hr class="divider"></hr>
        </div>
    <div class="columns is-multiline is-5">
        <div class="column">
          <Card
            titulo="CITAS SAT"
            requisitos="RFC, CURP, CORREO ELECTRONICO"
            dificultad="20%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://citas.sat.gob.mx/"
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
        <div class="column">
          <Card
            titulo="INSCRIPCION RFC PERSONA FISICA"
            requisitos="CURP"
            dificultad="20%"
            duracion="5-15min"
            costo="GRATIS"
            sitio="https://www.sat.gob.mx/tramites/operacion/82714/realiza-tu-inscripcion-en-el-rfc-persona-fisica"
          />
        </div>
        <div class="column">
          <Card
            titulo="INSCRIPCION COMO CONTADOR PUBLICO"
            requisitos="CEDULA PROFESIONAL"
            dificultad="35%"
            duracion="15-30min"
            costo="GRATIS"
            sitio="https://www.sat.gob.mx/tramites/operacion/82714/realiza-tu-inscripcion-en-el-rfc-persona-fisica"       
          />
        </div>
    </div>
</div>
    );
}

export default SAT;
