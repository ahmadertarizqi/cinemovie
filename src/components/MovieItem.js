import { imageURL } from "../constant.js";

class MovieItem extends HTMLElement {
   
   set movie(movie) {
      this._movie = movie;
      this.renderElement();
   }

   renderElement() {
      this.innerHTML = `
         <div class="media h-40 w-2/6">
            <img src="${imageURL}${this._movie.poster_path}" class="w-full h-full rounded object-cover" alt="" />
         </div>
         <div class="w-4/6 rounded-r px-3 py-1">
            <div class="text-white font-bold text-base mb-2">${this._movie.title}</div>
            <p class="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
      `;
   }
}

customElements.define("movie-item", MovieItem);