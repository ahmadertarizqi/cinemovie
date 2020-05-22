import { imageURL } from "../constant";
import { icons } from 'feather-icons';

class SliderItem extends HTMLElement {

   constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
   }

   set movie(movie) {
      this._movie = movie;
      this.renderElement();
   }

   renderElement() {
      const { backdrop_path, title, vote_average } = this._movie;
      this.shadowDOM.innerHTML = `
         <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
            .wrapper {
               position: relative;
            }
           .w-full-img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
              object-fit: cover;
           }
           .wrapper .info-title {
               position: absolute;
               bottom: 6px;
               left: 0;
               width: 100%;
               padding: 6px 15px;
               background-color: #0000008a;
               border-bottom-left-radius: 5px;
               border-bottom-right-radius: 5px;
               color: #fff;
               font-weight: 600;
               font-size: 1.125rem;
           }
            @media screen and (max-width: 768px) {
               .wrapper .info-title {
                  font-size: 0.85rem;
               }
            }
           .wrapper .info-rating {
               position: absolute;
               padding: 10px;
               padding: 4px 7px;
               background-color: #00000094;
               margin-top: 7px;
               margin-left: 7px;
               border-radius: 4px;
               top: 0;
               left: 0;
               display: flex;
               align-items: center;
               color: #fff;
           }
           .wrapper .info-rating svg.feather {
               fill: #f1c40f;
               color: #f1c40f;
               margin-right: 7px;
           }
          
         </style>
         <div class="wrapper">
            <div class="info-rating">
               ${icons['star'].toSvg()}
               <span class="value">${vote_average}</span>
            </div>
            <img src="${imageURL}/w780${backdrop_path}" class="w-full-img" alt="${title}" />
            <div class="info-title">${title}</div>
         </div>
      `;
   }
}

customElements.define('slider-item', SliderItem);