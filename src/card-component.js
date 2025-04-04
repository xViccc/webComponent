import {LitElement, html, css} from 'lit';

import '@material/web/checkbox/checkbox.js';

const imgAlDia = new URL('./assets/aldia.png', import.meta.url).href
const imgAspa = new URL('./assets/Aspa.png', import.meta.url).href
const imgExternal = new URL('./assets/external-link.png', import.meta.url).href

class CardComponent extends LitElement {
  static styles = css`
    
md-checkbox {
  background-color: #FFF;
  --md-checkbox-outline-width: 1px;
  --md-checkbox-outline-color: #D4D2D3;
  --md-checkbox-selected-container-color: #31862ee4;
  --md-checkbox-selected-icon-color: #D4D2D3;
  --md-checkbox-container-shape: 2px;
  --md-checkbox-focus-outline-color:#D4D2D3;
  --md-checkbox--hover-outline-color:#D4D2D3;
  --md-checkbox-selected-focus-container-color: #31862ee4;
  --md-checkbox-selected-focus-icon-color: #fff;
  --md-checkbox-selected-hover-container-color: #266b24e3;
  --md-checkbox-selected-hover-icon-color: ##D4D2D3;
  --md-checkbox-selected-icon-color: #FFF;
  --md-checkbox-hover-outline-color: #D4D2D3;
  --md-checkbox-pressed-outline-color: #D4D2D3;
  --md-checkbox-hover-outline-width: 1px;
  --md-checkbox-focus-outline-width: 1px;
  --md-checkbox-pressed-outline-width: 1px;
  --md-checkbox-hover-state-layer-opacity:0;
  --md-checkbox-focus-state-layer-opacity:0;
  --md-checkbox-selected-hover-state-layer-opacity:0;
  --md-checkbox-selected-focus-state-layer-opacity:0;
  --md-checkbox-selected-pressed-state-layer-opacity:0;
  --md-checkbox-pressed-state-layer-opacity:0;
  --md-checkbox-selected-pressed-container-color:#266b24e3;
  --md-checkbox-selected-hover-icon-color: #FFF;
}

* {
box-sizing: border-box;
font-family: 'Encode Sans',sans-serif;
}

.card {
  position: relative;
  display: flex;
  width: 300px;
  height: 374px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-end;
  background: #F2F0F0;
  text-align: start;
}
.img{
  width:100%;
  height:74px;
  border-bottom: 1px solid #D2D2D2;
}
img {
  height: 74px;
}
button{
  cursor:pointer;
}
.description {
  color: #000;
  font-family: "Encode Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 9px 0 44px 0;    
}

.insert {
  color: var(--DS-black, #0E0E20);
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Encode Sans";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0 0 8px 0;
}

.input {
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  outline: 1px solid #D2D2D2;
  background: #FFF;
  padding-left:15px;
  border: none;
}

.input:focus {
  outline: 1px solid #5596e2;
}

.input::placeholder {
  color: #4A4A4A;
  color:#4A4A4A;
  font-family: "Encode Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  opacity: 0.2;
  width: 60.548px;
  
}

.conditions {
  display: flex;
  font-size: 12px;
  width:100%;
  margin: 17px 0;
}

.button-apuntate {
  width: 100%;
  display: flex;
  height: 48px;
  padding: 15px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 54px;
  background: #F3A742;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.07);
  border: none;
  font-weight: 600;
}
.down{
  width: 100%;
}
.check{
  margin-right: 7px;
}

/* ------------------ */
.correo-enviado {
  font-size:15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  position:absolute;
  height:255px;
  bottom:18px;
  border:1px solid #FFF;
  border-radius:5px;
  width:90%;
  background: #F2F0F0;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.08);
  padding:17px 31px 32px 31px;
  text-align:center;
}
.mensaje-revisa{
  font-weight:700;
  margin:0 0 10px 0;
}
.mensaje-correo{
  margin:0;
  line-height: 20px;
}
.abrir-correo{
  width: 100%;
  border-radius: 24px;
  border: 1px solid #4A90E2;
  padding:14px 0;

  color: #4A90E2;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
}
.img-link{
  height:14px;
  margin-left:5px;
}
.aspa{
  height:24px;
  position:absolute;
  top:4px;
  right:4px;
  cursor:pointer;
}
.mensaje-gracias{
  font-weight:700;
  margin:0 0 10px 0;
}
.mensaje-explora{
  margin:0 0 13px 0;
  line-height: 20px;
}
.mensaje-explora a{
  color: #4A90E2;
  text-decoration: none;
  font-weight: 600;
}

@media(min-width: 1040px) {
  .card {
    position: relative;
    align-items: baseline;
    width: 100%;
    height:249px;
    max-width: 640px;
  }
  .img{
    height:86px;
  }
  .img img{
    height:86px;
  }
  .down{
    width: 100%;
    display:flex;
    gap: 12px;
  }

  .left-group {
    width: 100%;
  }

  .description{
    position:absolute;
    top:11px;
    right: 16px;
    text-align:right;
    width: 280px;
    font-size:15px;
    margin: 0;
  }
  .button-apuntate{
    min-width: 209px;
    width: 209px;
  } 
  .input {
    width: 100%;
  }
  .conditions{
    margin: 13px 0 3px 0;
  }
  .insert{
    font-size:12px;
    margin: 15px 0 12px 0;
  }
  .correo-enviado{
    height:112px;
    width :608px;
    display:flex;
    flex-direction:row;
    align-items:end;
    text-align:left;
    padding: 15px 24px 15px 20px;
  }
  .mensaje-correo{
    width:347px;
  }
  .abrir-correo{
    width: 182px;
    margin-right:15px;
  }
  .mensaje-revisa{
    margin: 0 0 5px 0;
  }
}
  `;

  constructor() {
    super();
    this.email = '';
    this.correoEnviado = false;
    this.correoConfirmado = false;
  }

  updateName(e) {
    this.email = e.target.value;
  }

  render() {
    return html`
      <div class="card">
        <div class="img">
          <img src="${imgAlDia}" alt="Al Dia">
        </div>
        <div>
          <p class="description">Con <b>Juanlu Sánchez,</b> el boletín que te trae las claves de la actualidad sin ruido</p>
          <p class="insert">Inserta tu correo para recibirlo</p>
        </div>
        <div class="down">
          <div class="left-group">
            <input class="input" @input="${this.updateName}" placeholder="Tu email" />
            <div class="conditions">
            <md-checkbox class="check"></md-checkbox>
              <label>Acepto las condiciones de uso y privacidad</label>
            </div>
          </div>
          <button class="button-apuntate">Apúntate gratis</button>
        </div>
        ${this.correoEnviado
          ? html`<div class="correo-enviado">
              <div>
                <span>
                  <img class="aspa" src="${imgAspa}" alt="aspa" />
                </span>
                <p class="mensaje-revisa">Revisa tu correo</p>
                <p class="mensaje-correo">
                  Te hemos enviado un correo electrónico con un enlace para confirmar tu suscripción a este boletín.
                  Por si acaso, revisa también tu carpeta de Spam
                </p>
              </div>
              <button class="abrir-correo">Abrir correo <img class="img-link" src="${imgExternal}" alt="link" /></button>
            </div>`
          : ''}
        ${this.correoConfirmado
          ? html`<div class="correo-enviado">
              <div>
                <span>
                  <img class="aspa" src="${imgAspa}" alt="aspa" />
                </span>
                <p class="mensaje-gracias">¡Gracias por suscribirte!</p>
                <p class="mensaje-explora">
                Explora nuestra sección de <a href=''> boletines </a> y accede a las opiniones más relevantes sobre los temas de actualidad que te interesan
                </p>
              </div>
            </div>`
          : ''}
        ${this.correoConfirmado
          ? html`<div class="correo-enviado">
              <div>
                <span>
                  <img class="aspa" src="Aspa.png" alt="aspa" />
                </span>
                <p class="mensaje-gracias">¡Gracias por suscribirte!</p>
                <p class="mensaje-explora">
                Explora nuestra sección de <a href=''> boletines </a> y accede a las opiniones más relevantes sobre los temas de actualidad que te interesan
                </p>
              </div>
            </div>`
          : ''}
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
