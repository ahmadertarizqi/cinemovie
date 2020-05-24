import MoviesAPI from "../api/index.js";

const API = new MoviesAPI();

class SectionList {
   constructor() {
      this.loadNowPlaying();
      this.loadTopRated();
      this.loadUpcoming();
      this.loadPopular();
   }

   loadNowPlaying() {
      const movieList = document.querySelector("#now-playing");
      API.getNowPlaying(response => {
         movieList.moviesData = response;
         return response;
      }, error => {
         console.log('from error', error);
      });
   }

   loadTopRated() {
      const movieList = document.querySelector("#top-rated");
      API.getTopRated(response => {
         movieList.moviesData = response;
         return response;
      }, error => {
         console.log('from error', error);
      });
   }

   loadUpcoming() {
      const movieList = document.querySelector("#upcoming-movie");
      API.getUpcoming(response => {
         movieList.moviesData = response;
         return response;
      }, error => {
         console.log('from error', error);
      });
   }

   loadPopular() {
      const slider = document.querySelector("slider-list");
      API.getPopular(response => {
         slider.movies = response;
         return response;
      }, error => {
         console.log('from error', error)
      });
   }
}

export default SectionList;