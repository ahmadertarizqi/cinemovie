import "../styles/main.css";
import "../components/Appbar.js";
import "../components/MovieList.js";
import { apiURL, apiKEY, imageURL } from '../constant.js';

function Main() {

   // const listParent = document.querySelector(".movie-list");
   const movieList = document.querySelector("movie-list");

   fetch(`${apiURL}/discover/movie?api_key=${apiKEY}`)
      .then(response => response.json())
      .then(response => {
         console.log(response);
         videoListItem(response.results);
      });

   const videoListItem = (movies) => {
      movieList.moviesData = movies;
   } 

}

export default Main;