import MoviesAPI from "../api/index.js";
import "../components/CardSkeleton";
import "../components/BannerSkeleton";

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
      this.cardSkeleton(movieList);
      API.getNowPlaying(response => {
         movieList.moviesData = response;
         return response;
      }, error => {
         console.log('from error', error);
         this.cardSkeleton(movieList);
      });
   }

   loadTopRated() {
      const movieList = document.querySelector("#top-rated");
      this.cardSkeleton(movieList);
      API.getTopRated(response => {
         movieList.moviesData = response;
         return response;
      }, error => {
         console.log('from error', error);
         this.cardSkeleton(movieList);
      });
   }

   loadUpcoming() {
      const movieList = document.querySelector("#upcoming-movie");
      this.cardSkeleton(movieList);
      API.getUpcoming(response => {
         movieList.moviesData = response;
         return response;
      }, error => {
         console.log('from error', error);
         this.cardSkeleton(movieList);
      });
   }

   loadPopular() {
      const slider = document.querySelector("slider-list");
      this.bannerSkeleton(slider);
      API.getPopular(response => {
         slider.movies = response;
         return response;
      }, error => {
         console.log('from error', error);
         this.bannerSkeleton(slider);
      });
   }

   cardSkeleton(parentEl) {
      [1, 2, 3, 4].forEach(data => {
         const item = document.createElement('card-skeleton');
         parentEl.appendChild(item);
      });
   }

   bannerSkeleton(parentEl) {
      const item = document.createElement('banner-skeleton');
      parentEl.appendChild(item);
   }
}

export default SectionList;