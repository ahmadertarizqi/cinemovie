import "./MovieItem.js";
import MoviesAPI from "../api/index.js";

const movieAPI = new MoviesAPI();

class MovieList extends HTMLElement {

   set moviesData(movies) {
      this._moviesData = movies;
      this.renderElement();
   }

   renderElement() {
      this.innerHTML = "";
      this._moviesData.forEach((movie, index) => {
         // console.log(movie);
         // console.log(index);
         const newElement = document.createElement("movie-item");
         newElement.classList.add("md:w-1/4", "w-1/3" ,"mr-4", "last:mr-0");
         newElement.style.flex = '0 0 auto';
         newElement.movie = movie;
         this.appendChild(newElement);
      });
      
      const targets = document.querySelectorAll('.is-trigger');
      targets.forEach((movie, index) => {
         movie.addEventListener("click", (ev) => {
            ev.preventDefault();
            movieAPI.getMovieDetail(ev.target.id);
         });
      });
   }
}

customElements.define('movie-list', MovieList)