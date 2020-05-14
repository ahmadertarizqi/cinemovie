import { apiURL, apiKEY } from "../constant";

export function getGenresMovie() {
   return fetch(`${apiURL}/genre/movie/list?api_key=${apiKEY}&language=en-US`)
      .then(res => res.json())
      .then(res => {
         // console.log(res.genres);
         return res.genres;
         // const genresById = res.genres.reduce((acc, item) => ({
         //    ...acc,
         //    [item.id] : item
         // }), {});;

         // const genres_ids = [18, 878];
         // genres_ids.forEach(val => {
         //    // console.log('is val', val);
         //    // console.log(genresById[val].name);
         // });
      })
      .catch(error => {
         console.log('this from error', error);
      });
}