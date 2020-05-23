import { icons } from 'feather-icons';
import { iconSettings } from '../constant';

class Appbar extends HTMLElement {

   constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
   }

   connectedCallback() {
      this.renderElement();
   }

   renderElement() {
      this.shadowDOM.innerHTML = `
         <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
            :host {
               max-width: 50rem;
               display: block;
               margin: 0 auto !important;
            }
            .header-name {
               padding: 1rem;
               font-size: 1.25rem;
               font-weight: 700;
               text-transform: uppercase;
               color: #fff;
               display: flex;
               justify-content: center;
               align-items: center;
            }
            .header-name svg.feather { margin-right: 7px; }
 
         </style>
         <h3 class="header-name">${icons.film.toSvg(iconSettings)} Cinemovie</h3>
      `;
   }
}

customElements.define("app-bar", Appbar);