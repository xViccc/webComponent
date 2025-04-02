// import { LitElement,css, html } from 'lit'
// import { customElement, property } from 'lit/decorators.js'

// @customElement('card-component')

// export class CardComponent extends LitElement {

//   static styles = css`
//   .card {
//     border: 1px solid blue;
//     padding: 10px;
//     width: 255px;
//     height: 255px;
//   }
//   `
  
//   @property()
//   email: string = '';

//   @property()
//   name = "Default";

//   updateName(e : Event) {
//     const input = e.target as HTMLInputElement;
//     this.email = input.value;
//   }

//     render() {
//       return html`
//       <div class="card">

//       Hey ${this.email} y ${this.name}
//         <div>
//         <input @change=${this.updateName}></input>
//         </div>

//       </div>
//       `
//     }
// }


// declare global {
//     interface HTMLElementTagNameMap {
//       'card-component': CardComponent
//     }
//   }