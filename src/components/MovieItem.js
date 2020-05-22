import { imageURL, iconSettings } from "../constant.js";
import { icons } from 'feather-icons';

class MovieItem extends HTMLElement {

   constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
   }

   set movie(movie) {
      this._movie = movie;
      this.renderElement();
   }

   findObjectByKey(array, key, value) {
      for(let i = 0; i < array.length; i++) {
         if(array[i][key] === value) {
            return array[i];
         }
      }
      return null;
   }

   // setGenresMovies() {
   //    movieAPI.getGenres()
   //       .then(res => {
   //          const genresById = res.reduce((acc, item) => {
   //             return { ...acc, [item.id]: item }
   //          }, {})
   //          this.renderElement(genresById);
   //       })
   //       .catch(error => console.log(error));
   // }

   renderElement() {
      this._id = this.getAttribute("id") || null;
      this.shadowDOM.innerHTML = `
         <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
            
            :host {
               flex: 0 0 auto;
               width: 33.333333%;
               margin-right: 1rem;
            }

            @media screen and (min-width: 768px) {
               :host { width: 25%; }
            }
            
            .card-movie {
               width: 100%;
               position: relative;
            }

            .card-movie .label {
               position: absolute;
               top: 0;
               left: 0;
               display: flex;
               align-items: center;
            }

            .card-movie .img-media {
               height: 100%;
               margin-bottom: 0.75rem;
            }

            .card-movie .img-media img {
               width: 100%;
               height: 100%;
               border-radius: 0.25rem;
               object-fit: cover;
               -o-object-fit: cover;
               max-width: 100%;
               display: block;
            }

            .card-movie .title {
               color: #fff;
               font-size: 1.125rem;
               font-weight: 600;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
            }

            @media screen and (max-width: 768px) {
               .card-movie .title {
                  font-size: 0.85rem;
               }
            }

            .is-star {
               padding: 4px 7px;
               background-color: #00000094;
               margin-top: 7px;
               margin-left: 7px;
               border-radius: 4px;
            }
            .is-star svg.feather {
               fill: #f1c40f;
               color: #f1c40f;
            }
            .is-star .value {
               color: #fff;
               margin-left: 7px;
            }
            .is-trigger {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               cursor: pointer;
            }
         </style>

         <div class="card-movie">
            <a href="#" class="block is-trigger"></a>
            <div class="label is-star">
               ${icons.star.toSvg(iconSettings)} 
               <span class="value font-bold">${this._movie.vote_average}</span>
            </div>
            <div class="img-media">
               <img src="${imageURL}/w500${this._movie.poster_path}" alt="${this._movie.title}" />
            </div>
            <p class="title">${this._movie.title}</p>
         </div>
      `;
   }
}

customElements.define("movie-item", MovieItem);