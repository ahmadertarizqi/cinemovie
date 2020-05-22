import { icons } from 'feather-icons';
import { imageURL, monthNames, imdbIcon, fbURL, igURL, twitterURL, imdbURL } from '../constant';

class MovieDetail extends HTMLElement {
   constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
   }

   static get observedAttributes() {
      return ['show']
   }

   attributeChangedCallback(name, oldValue, newValue) {
      if(newValue != oldValue) {
         this[name] = this.hasAttribute(name);
      }
   }

   set detail(isDetail) {
      this._detail = isDetail;
      this.renderElement();
   }
   
   renderElement() {

      const { 
         backdrop_path, title, vote_average, runtime, overview, production_companies, genres, release_date, revenue, budget, external_ids 
      } = this._detail;

      const releaseDate = new Date(release_date);

      const element = document.createElement('div');
      element.classList.add('detail-inner');
      element.innerHTML = `
         <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
            :host {
               position: fixed;
               width: 100%;
               height: 100%;
               top: 0;
               left: 0;
               background-color: #2c3e50;
               z-index: 15;
               overflow-y: auto;
            }
            .detail-inner {
               max-width: 50rem;
               margin: 0 auto;
            }
            .detail-inner .main {
               position: relative;
            }
            .detail-inner .main .head {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
            }
            .btn-close {
               display: inline-block;
               padding: 10px;
               background-color: #00000045;
               border-radius: 1px;
               cursor: pointer;
            }
            .btn-close svg {
               display: flex;
               justify-content: center;
               color: #fff;
               width: 30px;
               height: 30px;
               stroke-width: 3;
            }
            .media {
               width: 100%;
            }
            .media .is-img {
               width: 100%;
               height: 100%;
               object-fit: cover;
               border-radius: 5px;
            }
            .main .content {
               padding: 5px 15px 20px 15px;
            }
            .main .content .title {
               color: #fff;
               font-size: 1.5rem;
               font-weight: 700;
            }
            .main .content .description {
               color: #fff;
               text-align: justify;
               margin-bottom: 15px;
            }
            .movie-genre {
               display: flex;
               align-items: center;
               flex-wrap: wrap;
            }
            .movie-genre .genre {
               padding: 5px 14px;
               border: 1px solid #fff;
               border-radius: 50px;
               margin-right: 8px;
               color: #fff;
               line-height: 20px;
               margin-bottom: 12px;
               font-size: 14px;
            }
            .movie-genre .genre:last-child { margin-right: 0; }
            .mb-13 { margin-bottom: 13px; }
            .time-rating {
               display: flex;
               align-items: center;
            }
            .time-rating .rating,
            .time-rating .runtime,
            .time-rating .release-date {
               display: flex;
               align-items: center;
            }
            .time-rating .rating span.value,
            .time-rating .runtime span.value,
            .time-rating .release-date span.value {
               margin-left: 6px;
               color: #fff;
               font-weight: 500;
               font-size: 14px;
            }
            .time-rating .rating span.value {
               font-size: 16px;
               font-weight: 600;
            }

            .time-rating .rating,
            .time-rating .runtime { margin-right: 15px; }
            .time-rating .rating svg { color: #f1c40f; fill: #f1c40f;}
            .time-rating .runtime svg,
            .time-rating .release-date { color: #ffffffb3; }

            .line-separate {
               border-top: 1px solid #ffffff4f;
               margin-bottom: 13px;
            }

            .more-detail { list-style: none; }
            .more-detail li { margin-bottom: 8px; }
            .more-detail li .value {
               color: #fff;
               display: block;
            }
            .more-detail li .key {
               display: block; 
               color: #aaa;
               font-weight: 600;
               font-size: 14px;
            }

            .social-media {
               list-style: none;
               display: flex;
               justify-content: center;
               align-items: center;
               margin-top: 20px;
            }
            .social-media li { margin-right: 15px; }
            .social-media li:last-child { margin-right: 0; }
            .social-media li a { display: inline-block; }
            .social-media li a svg {
               color: #fff;
            }
         </style>

         <div class="main">
            <div class="head">
               <span class="p-3 bg-indigo-900 btn-close">${icons['arrow-left'].toSvg()}</span>
            </div>
            <div class="media">
               <img src="${imageURL}/w780${backdrop_path}" alt="" class="is-img" />
               <div class="media-effect"></div>
            </div>
            <div class="content">
               <h3 class="title mb-13">${title}</h3>
               <div class="movie-genre">
                  ${this.getGenre(genres)}
               </div>
               <div class="time-rating mb-13">
                  <div class="rating">
                     ${icons['star'].toSvg()}
                     <span class="value">${vote_average}</span>
                  </div>
                  <div class="runtime">
                     ${icons['clock'].toSvg()}
                     <span class="value">${this.timeConvert(runtime)}</span>
                  </div>
                  <div class="release-date">
                     ${icons['calendar'].toSvg()}
                     <span class="value">${releaseDate.getDate()} ${monthNames[releaseDate.getMonth()]} ${releaseDate.getFullYear()}</span>
                  </div>
               </div>
               <div class="line-separate"></div>
               <p class="description">${overview}</p>
               <div class="line-separate"></div>
               <ul class="more-detail">
                  <li>
                     <span class="key">Director</span>
                     <span class="value">${(this.getDirector()) ? this.getDirector().name : '--'}</span>
                  </li>
                  <li>
                     <span class="key">Writer</span>
                     <span class="value">${(this.getWriter()) ? this.getWriter().name : '--'}</span>
                  </li>
                  <li>
                     <span class="key">Productions</span>
                     <span class="value">${(production_companies.length > 0) ? production_companies.map(company => company.name).join(', ') : '--'}</span>
                  </li>
                  <li>
                     <span class="key">Budget</span>
                     <span class="value">${this.currencyFormatter().format(budget)}</span>
                  </li>
                  <li>
                     <span class="key">Revenue</span>
                     <span class="value">${this.currencyFormatter().format(revenue)}</span>
                  </li>
               </ul>
               <ul class="social-media">
                  <li>
                     <a href="${fbURL}/${external_ids.facebook_id}" target="_blank">${icons['facebook'].toSvg()}</a>
                  </li>
                  <li>
                     <a href="${igURL}/${external_ids.instagram_id}" target="_blank">${icons['instagram'].toSvg()}</a>
                  </li>
                  <li>
                     <a href="${twitterURL}/${external_ids.twitter_id}" target="_blank">${icons['twitter'].toSvg()}</a>
                  </li>
                  <li>
                     <a href="${imdbURL}/${external_ids.imdb_id}" target="_blank">${imdbIcon}</a>
                  </li>
               </ul>
            </div>
         </div>
      `;

      this.shadowDOM.innerHTML = "";
      document.body.style.overflow = 'hidden';
      this.shadowDOM.appendChild(element);

      // CLOSE DETAIL
      this.shadowDOM.querySelector('.btn-close').addEventListener('click', this.onClose);
   }

   onClose(ev) {
      ev.preventDefault();
      document.body.style.overflow = 'initial';
      const target = document.querySelector('movie-detail');
      target.shadowRoot.removeChild(target.shadowRoot.lastElementChild);
   }

   getGenre(genres) {
      let temp = '';
      genres.forEach(genre => {
         temp += `<span class="genre">${genre.name}</span>`
      });
      return temp;
   }

   findValueByJob(nameKey, myArray) {
      for (var i=0; i < myArray.length; i++) {
         if (myArray[i].job === nameKey) {
            return myArray[i];
         }
      }
   }
   
   getDirector() {
      return this.findValueByJob('Director', this._detail.credits.crew);
   }

   getWriter() {
      return this.findValueByJob('Story', this._detail.credits.crew);
   }

   timeConvert(time) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      return `${hours} hr ${minutes} mins`;
   }

   currencyFormatter() {
      return new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD',
         minimumFractionDigits: 2
      });
   }

}

customElements.define('movie-detail', MovieDetail);