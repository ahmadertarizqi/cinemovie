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
      this._moviesData.forEach(movie => {
         const newElement = document.createElement("movie-item");
         newElement.movie = movie;
         newElement.setAttribute("id", movie.id);
         this.appendChild(newElement);
      });

      const movies = this.getAllMovie();
      movies.forEach(movie => this.getMovieDetail(movie));
   }

   getAllMovie() {
      return Array.from(this.querySelectorAll('movie-item'));
   }

   getMovieDetail(movie) {
      movie.addEventListener("click", (ev) => {
         ev.preventDefault();
         // console.log(ev.target.id);
         movieAPI.getMovieDetail(ev.target.id);
      });
   }
}

customElements.define('movie-list', MovieList)