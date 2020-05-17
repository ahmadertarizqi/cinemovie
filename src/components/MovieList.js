import "./MovieItem.js";

class MovieList extends HTMLElement {

   set moviesData(movies) {
      this._moviesData = movies;
      this.renderElement();
   }

   renderElement() {
      this.innerHTML = "";
      this._moviesData.forEach(movie => {
         const newElement = document.createElement("movie-item");
         newElement.classList.add("md:w-1/4", "w-1/3" ,"mr-4", "last:mr-0");
         newElement.style.flex = '0 0 auto';
         newElement.movie = movie;
         this.appendChild(newElement);
      });
   }
}

customElements.define('movie-list', MovieList)