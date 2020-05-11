import "./MovieItem.js";

class MovieList extends HTMLElement {

   set moviesData(movies) {
      this._moviesData = movies;
      // console.log("from component" ,this._moviesData);
      this.renderElement();
   }

   renderElement() {
      // this.innerHTML = "";
      this._moviesData.forEach(movie => {
         const newElement = document.createElement("movie-item");
         newElement.classList.add("max-w-sm", "w-full", "max-w-full", "flex", "mb-4");
         newElement.movie = movie;
         this.appendChild(newElement);
      });
   }
}

customElements.define('movie-list', MovieList)