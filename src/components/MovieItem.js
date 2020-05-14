import { imageURL, iconSettings, apiURL, apiKEY } from "../constant.js";
import { icons } from 'feather-icons';
import { getGenresMovie } from '../api/index.js';

class MovieItem extends HTMLElement {

   constructor() {
      super();
      this.setGenresMovies();
   }

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

   setGenresMovies() {
      getGenresMovie()
         .then(res => {
            const genresById = res.reduce((acc, item) => {
               return { ...acc, [item.id]: item }
            }, {})
            this.renderElement(genresById);
         })
         .catch(error => console.log(error));
   }

   renderElement(genresById) {
      console.log('tes', genresById);

      let resultGenre;
      this._movie.genre_ids.forEach(val => {
         if(typeof genresById == 'undefined') {
            return;            
         }
         console.log('result', genresById[val].name);
         resultGenre += `
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
               #${genresById[val].name}
            </span>
         `
      });

      this.innerHTML = `
         <div class="media h-40 w-2/6">
            <img src="${imageURL}${this._movie.poster_path}" class="w-full h-full rounded object-cover" alt="${this._movie.title}" />
         </div>
         <div class="w-4/6 rounded-r px-3 py-1">
            <div class="text-white font-bold text-base mb-2">${this._movie.title}</div>
            <p class="text-white text-base">${icons.calendar.toSvg(iconSettings)} ${this._movie.release_date}</p>
            <p class="text-white text-base">${icons.clock.toSvg(iconSettings)} ${this._movie.release_date}</p>
            <div class="px-6 py-4">
               ${resultGenre}
            </div>
         </div>
      `;
   }
}

customElements.define("movie-item", MovieItem);