import MoviesAPI from "../api/index.js";

const API = new MoviesAPI();

class SectionList {
   constructor() {
      this.loadNowPlaying();
      this.loadTopRated();
      this.loadUpcoming();
   }

   loadNowPlaying() {
      const movieList = document.querySelector("#now-playing");
      API.getNowPlaying()
         .then(response => movieList.moviesData = response)
         .catch(error => error());
   }

   loadTopRated() {
      const movieList = document.querySelector("#top-rated");
      API.getTopRated()
         .then(response => movieList.moviesData = response)
         .catch(error => error());
   }

   loadUpcoming() {
      const movieList = document.querySelector("#upcoming-movie");
      API.getUpcoming()
         .then(response => movieList.moviesData = response)
         .catch(error => error());
   }
}

export default SectionList;