import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from '../Card.js';
import '../CSS/All.css';

function CITAS() {
    return (
<div class="CITAS" id='CITAS'>
        <div class="categoria">
        <h3 class="title">CITAS</h3>
        <p class="subtitle">¿Estas buscando algun tramite en especial con cita?</p>
        <hr class="divider"></hr>
        </div>
      <div class="columns is-multiline is-5">
        <div class="column">
          <Card
            titulo="VACUNA"
            requisitos="CURP"
            dificultad="15%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://mivacuna.salud.gob.mx/index.php"
          />
        </div>
        <div class="column">
          <Card
            titulo="INE"
            requisitos="CORREO ELECTRONICO, TELEFONO"
            dificultad="35%"
            duracion="5-10min"
            costo="GRATIS"
            sitio="https://app-inter.ife.org.mx/siac2011/citas_initCapturaCitas.siac"        
          />
        </div>
        <div class="column">
          <Card
            titulo="VERIFICACION VEHICULAR"
            requisitos="NUMERO DE PLACA, NUMERO VIN/NIV"
            dificultad="30%"
            duracion="5-10min"
            costo="$500"
            sitio="https://citas-verificacionresponsable.jalisco.gob.mx/cita-rapida"
          />
        </div>
        <div class="column">
          <Card
            titulo="MI PASAJE BIENEVALES"
            requisitos="CURP, DATOS DEL DOMICILIO DONDE VIVE, DATOS ESCOLARES"
            dificultad="20%"
            duracion="30-50min"
            costo="GRATIS"
            sitio="https://mipasaje-ssas.jalisco.gob.mx/"
          />
        </div>
        <div class="column">
          <Card
            titulo="CITA MEDICA IMSS"
            requisitos="CURP, CORREO ELECTRONICO"
            dificultad="25%"
            duracion="10-15min"
            costo="GRATIS"
            sitio="https://citamedicadigital.imss.gob.mx/CMW/cmw;jsessionid=1UE4n8RGXVdCYYKSS9mPJI9JN7KVvbPVvTY-2z6ew6SDvyVV8Q1E!-858547487!449171745?v=login"
          />
        </div>
        <div class="column">
          <Card
            titulo="CITA MEDICA ISSSTE"
            requisitos="CURP, RFC"
            dificultad="25%"
            duracion="10-15min"
            costo="GRATIS"
            sitio="https://web.citamedicaissste.mx/issste/(S(mpqt4ef03jgunc12xhx5ybov))/comun/WPU/NuevaCita.aspx"       
          />
        </div>
      </div>      
</div>
    );
}

export default CITAS;
