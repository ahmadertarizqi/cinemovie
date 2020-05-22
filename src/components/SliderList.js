import Swiper from 'swiper';
import "../../node_modules/swiper/css/swiper.min.css";
import "./SliderItem.js";
import MoviesAPI from "../api/index.js";

const movieAPI = new MoviesAPI();

class SliderList extends HTMLElement {

   set movies(movies) {
      this._movies = movies;
      this.renderElement();
   }

   renderElement() {
      this._movies.slice(0, 5).forEach(movie => {
         const newElem = document.createElement("slider-item");
         newElem.classList.add("swiper-slide", "banner-image");
         newElem.setAttribute("id", movie.id);
         newElem.movie = movie;
         this.appendChild(newElem);
      });

      // initial
      this.initialSlider();

      // detial
      const movies = this.getAllSlider();
      movies.forEach(movie => this.getMovieDetail(movie));
   }

   initialSlider() {
      new Swiper('.banner-slider', {
         pagination: {
            el: '.banner-pagination'
         }
      });
   }

   getAllSlider() {
      return Array.from(this.querySelectorAll('slider-item'));
   }

   getMovieDetail(movie) {
      movie.addEventListener("click", (ev) => {
         ev.preventDefault();
         // console.log(ev.target.id);
         movieAPI.getMovieDetail(ev.target.id);
      });
   }

}

customElements.define('slider-list', SliderList);