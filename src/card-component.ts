import { LitElement,css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('card-component')

export class CardComponent extends LitElement {

  static styles = css`

  * {
  box-sizing: border-box;
  font-family: 'Encode Sans',sans-serif;
  }

  .card {
    display: flex;
    width: 300px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-end;
    background: #F2F0F0;
  }
  .img{
    width:100%;
    height:74px;
    border-bottom: 1px solid #D2D2D2;
  }
  img {
    height: 74px;
  }

  .description {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: "Encode Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin: 9px 0 21px 0;    
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
    border: 1px solid #D2D2D2;
    background: #FFF;
    padding:0px;
  }

  .input::placeholder {
    color: #4A4A4A;
    leading-trim: both;
    text-edge: cap;
    color:#4A4A4A;
    font-family: "Encode Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
    opacity: 0.2;
    width: 60.548px;
    padding-left:15px
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
    margin-left: 0px;
    margin-right: 7px;
    border: 1px solid #D4D2D3;
  }

  @media(min-width: 1040px) {
    .card {
      position: relative;
      align-items: baseline;
      width: 640px;
    }
    .down{
      width: 100%;
      display:flex;
      justify-content:space-between;
    }
    .description{
      position:absolute;
      top:11px;
      right: 16px;
      text-align:right;
      width: 230px;
      font-size:15px;
      margin: 0;
    }
    .button-apuntate{
      width: 209px;
    } .input{
      width: 385.5px;
    }
    .conditions{
      margin: 7px 0 3px 0;
    }
    .insert{
      font-size:12px;
      margin: 11px 0 8px 0;
    }
  }
  
  `

  
  @property()
  email: string = '';

  updateName(e : Event) {
    const input = e.target as HTMLInputElement;
    this.email = input.value;
  }
  // <p class="descriptionDesktop">Recibe en tu buzón cada mañana el boletín de <b>Juanlu Sánchez,</b> con todas las claves de la actualidad</p>

    render() {
      return html`
      <div class="card">
      <div class="img">
      <img src="aldia.png" alt="Al Dia">
      </div>
      <div>
        <p class="description">Recibe cada mañana en tu buzón el boletín de <b>Juanlu Sánchez,</b> con las claves de la actualidad</p>
        <p class="insert">Inserta tu correo para recibirlo</p>
      </div>
      <div class="down">
        <div>
          <input class="input" @change=${this.updateName} placeholder="Tu email"></input>
          <div class="conditions">
            <input class="check" type="checkbox">
              <label>
              Acepto las condiciones de uso y privacidad
              </label>
            </input>
          </div>
        </div>
        <button class="button-apuntate">
        Apúntate gratis
        </button>
      </div>
    </div>
      `
    }
}


declare global {
    interface HTMLElementTagNameMap {
      'card-component': CardComponent
    }
  }