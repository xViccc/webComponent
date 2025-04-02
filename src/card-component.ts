import { LitElement,css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('card-component')

export class CardComponent extends LitElement {

  static styles = css`

  * {
  box-sizing: border-box;
  }

  .card {
    display: flex;
    width: 300px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-end;
    background: #F2F0F0;
  }
  img {
    width: 100%;
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
    margin: 0;    
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
  }

  .input {
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #D2D2D2;
    background: #FFF;
  }

  .input::placeholder {
    color: #4A4A4A;
    leading-trim: both;
    text-edge: cap;
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
  }

  .button-apuntate {
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
  }

  @media(max-width: 500px) {
    .card {
      background: blue;
    }
  }
  
  `

  
  @property()
  email: string = '';

  updateName(e : Event) {
    const input = e.target as HTMLInputElement;
    this.email = input.value;
  }

    render() {
      return html`
      <div class="card">
      <div class="img">
      <img src="aldia.png" alt="Al Dia">
      </div>
        <div>
        <p class="description">Recibe cada mañana en tu buzón el boletín de <b>Juanlu Sánchez,</b> con las claves de la actualidad</p>
        <p class="insert">Inserta tu correo para recibirlo</p>
        <input class="input" @change=${this.updateName} placeholder="Tu email"></input>
        </div>
      <div class="conditions">
        <input type="checkbox">
          <label>
          Acepto las condiciones de uso y privacidad
          </label>
        </input>
      </div>
      <button class="button-apuntate">
      Apúntate gratis
      </button>
      </div>
      `
    }
}


declare global {
    interface HTMLElementTagNameMap {
      'card-component': CardComponent
    }
  }