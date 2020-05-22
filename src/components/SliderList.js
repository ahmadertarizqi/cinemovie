import Swiper from 'swiper';
import "../../node_modules/swiper/css/swiper.min.css";
import "./SliderItem.js";

class SliderList extends HTMLElement {

   set movies(movies) {
      this._movies = movies;
      this.renderElement();
   }

   renderElement() {
      this._movies.slice(0, 5).forEach(movie => {
         const newElem = document.createElement("slider-item");
         newElem.classList.add("swiper-slide", "banner-image");
         newElem.movie = movie;
         this.appendChild(newElem);
      });

      this.initialSlider();
   }

   initialSlider() {
      new Swiper('.banner-slider', {
         pagination: {
            el: '.banner-pagination'
         }
      });
   }

}

customElements.define('slider-list', SliderList);