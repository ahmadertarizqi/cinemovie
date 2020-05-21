import { apiURL, apiKEY } from "../constant";
import "../components/MovieDetail.js";

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
      const parentDetail = document.querySelector('movie-detail');
      parentDetail.detail = movie;
   }
}

export default MoviesAPI;