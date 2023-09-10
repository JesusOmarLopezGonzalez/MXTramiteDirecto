import React from 'react';
import './CSS/Card.css';
import Aguila from '../Assets/Img/Aguila.webp';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{
  faHeart,
  faShareNodes,
  faCircleInfo
} 
from '@fortawesome/free-solid-svg-icons';

function Card(props) {

  const { 
    titulo, 
    requisitos, 
    dificultad, 
    duracion, 
    costo,
    sitio,
    } = props;

return (
<a href={sitio} target="_blank" rel="noreferrer noopener">
<div class="service-card">
  <div class="top-section">
      <div class="border"></div>
        <div class="icons">
          <div class="logo">
            <img src={Aguila} alt='Aguila' title='Mexico'></img> 
          </div>
  <div class="social-media">
    <button class="button is-light is-info is-oulined" disabled>
      <FontAwesomeIcon icon={faCircleInfo} />
    </button>
    <button class="button is-light is-warning is-oulined" disabled>
      <FontAwesomeIcon icon={faShareNodes} />
    </button>
    <button class="button is-light is-danger is-oulined" disabled>
      <FontAwesomeIcon icon={faHeart} />
    </button>
      </div>
    </div>
  </div>
  <div class="bottom-section">
    <span class="title">{titulo}</span>
    <span class="subtitle">Requisitos: Tener a la mano su {requisitos} y llenar campos con datos personales.</span>
    <div class="row row1">
      <div class="item">
        <span class="porcentaje">{dificultad}</span>
        <span class="text">Dificultad</span>
      </div>
      <div class="item">
        <span class="tiempo">{duracion}</span>
        <span class="text">Duracion</span>
      </div>
      <div class="item">
        <span class="pago">{costo}</span>
        <span class="text">Costo</span>
      </div>
    </div>
  </div>
</div>
</a>
);  
}

export default Card;