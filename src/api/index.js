import { apiURL, apiKEY } from "../constant";
import "../components/MovieDetail.js";

class MoviesAPI {

   getNowPlaying(onSuccess, onFailed) {
      fetch(`${apiURL}/movie/now_playing?api_key=${apiKEY}`)
         .then(response => response.json())
         .then(response => { 
            onSuccess(response.results);
         })
         .catch(error => {
            if(onFailed) {
               onFailed(error);
            }
         });
   }
   
   getTopRated(onSuccess, onFailed) {
      fetch(`${apiURL}/movie/top_rated?api_key=${apiKEY}`)
         .then(res => res.json())
         .then(res => {
            onSuccess(res.results);
         })
         .catch(error => {
            if(onFailed) {
               onFailed(error);
            }
         });
   }

   getUpcoming(onSuccess, onFailed) {
      fetch(`${apiURL}/movie/upcoming?api_key=${apiKEY}`)
         .then(res => res.json())
         .then(res => {
            onSuccess(res.results);
         })
         .catch(error => {
            if(onFailed) {
               onFailed(error);
            }
         });
   }

   getPopular(onSuccess, onFailed) {
      fetch(`${apiURL}/movie/popular?api_key=${apiKEY}`)
         .then(res => res.json())
         .then(res => {
            onSuccess(res.results);
         })
         .catch(error => {
            if(onFailed) {
               onFailed(error);
            }
         });
   }

   getMovieDetail(id) {
      const isID = parseInt(id);
      // console.log('hello id', isID);
      fetch(`${apiURL}/movie/${isID}?api_key=${apiKEY}&append_to_response=external_ids,credits`)
         .then(res => res.json())
         .then(res => this.renderElement(res))
         .catch(error => console.log('this from error', error));
   }

   renderElement(movie) {
      const parentDetail = document.querySelector('movie-detail');
      parentDetail.detail = movie;
   }
}

export default MoviesAPI;