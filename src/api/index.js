import { apiURL, apiKEY } from "../constant";

class MoviesAPI {

   getNowPlaying() {
      return fetch(`${apiURL}/movie/now_playing?api_key=${apiKEY}`)
         .then(response => response.json())
         .then(response => response.results)
         .catch(error => console.log('this from error', error));
   }
   
   getTopRated() {
      return fetch(`${apiURL}/movie/top_rated?api_key=${apiKEY}`)
         .then(res => res.json())
         .then(res => res.results)
         .catch(error => console.log('this from error', error));
   }

   getUpcoming() {
      return fetch(`${apiURL}/movie/upcoming?api_key=${apiKEY}`)
         .then(res => res.json())
         .then(res => res.results)
         .catch(error => console.log('this from error', error));
   }
   
   getGenres() {
      return fetch(`${apiURL}/genre/movie/list?api_key=${apiKEY}&language=en-US`)
         .then(res => res.json())
         .then(res => res.genres)
         .catch(error => console.log('this from error', error));
   }

   getMovieDetail(id) {
      const isID = parseInt(id);
      console.log('hello id', isID);
      fetch(`${apiURL}/movie/${id}?api_key=${apiKEY}&language=en-US`)
         .then(res => res.json())
         .then(res => { 
            this.renderElement(res); 
            console.log(res) 
         })
         .catch(error => console.log('this from error', error));
   }

   renderElement(movie) {
      // console.log(movie);
      const parentDetail = document.querySelector('#parent-detail');
      const element = document.createElement('div');
      element.classList.add("fixed", "bg-blue-700", "top-0", "left-0", "w-full", "h-screen", "z-10");
      element.innerHTML = `
         <h1>${movie.overview}</h1>
      `;

      parentDetail.appendChild(element);
   }
}

export default MoviesAPI;