import { imageURL, iconSettings } from "../constant.js";
import { icons } from 'feather-icons';
// import { getGenresMovie } from '../api/index.js';
import MovieAPI from '../api/index.js';

const movieAPI = new MovieAPI();

class MovieItem extends HTMLElement {
   set movie(movie) {
      this._movie = movie;
      this.renderElement();
   }

   findObjectByKey(array, key, value) {
      for(let i = 0; i < array.length; i++) {
         if(array[i][key] === value) {
            return array[i];
         }
      }
      return null;
   }

   // setGenresMovies() {
   //    movieAPI.getGenres()
   //       .then(res => {
   //          const genresById = res.reduce((acc, item) => {
   //             return { ...acc, [item.id]: item }
   //          }, {})
   //          this.renderElement(genresById);
   //       })
   //       .catch(error => console.log(error));
   // }

   renderElement() {
      this.innerHTML = `
         <style>
            .is-star {
               padding: 4px 7px;
               background-color: #00000094;
               margin-top: 7px;
               margin-left: 7px;
               border-radius: 4px;
            }
            .is-star svg.feather {
               fill: #f1c40f;
               color: #f1c40f;
            }
            .is-star .value {
               color: #fff;
               margin-left: 7px;
            }
         </style>

         <div class="w-full mr-4 relative">
            <div class="absolute top-0 left-0 is-star flex items-center">
               ${icons.star.toSvg(iconSettings)} 
               <span class="value font-bold">${this._movie.vote_average}</span>
            </div>
            <div class="media h-full mb-3">
               <img src="${imageURL}${this._movie.poster_path}" class="w-full h-full rounded object-cover" alt="${this._movie.title}" />
            </div>
            <p class="text-white text-lg font-semibold truncate">${this._movie.title}</p>
         </div>
      `;
   //    <div class="w-4/6 rounded-r px-3 py-1">
   //    <div class="text-white font-bold text-base mb-2">${this._movie.title}</div>
   //    <p class="text-white text-base">${icons.calendar.toSvg(iconSettings)} ${this._movie.release_date}</p>
   //    <p class="text-white text-base">${icons.clock.toSvg(iconSettings)} ${this._movie.release_date}</p>
   // </div>
   }
}

customElements.define("movie-item", MovieItem);