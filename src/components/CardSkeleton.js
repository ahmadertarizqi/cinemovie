class CardSkeleton extends HTMLElement {
   constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });    
   }

   connectedCallback() {
      this.renderElement();
   }

   renderElement() {
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

            .card-movie-skeleton {
               position: relative;
            }
            
            .card-movie-skeleton .image {
               height: 275px;
               background-color: #7a818a;
               border-radius: 4px;
               margin-bottom: 0.75rem;
            }
            .card-movie-skeleton .title {
               height: 23px;
               width: 100%;
               background-color: #7a818a;
               border-radius: 4px;
            }
            .card-movie-skeleton .rating {
               position: absolute;
               top: 0;
               left: 0;
               width: 40px;
               height: 20px;
               background-color: #a3a9b0;
               margin-top: 10px;
               margin-left: 10px;
               border-radius: 4px;
            }
         </style>
         <div class="card-movie-skeleton">
            <div class="rating"></div>
            <div class="image"></div>
            <div class="title"></div>
         </div>     
      `;
   }
}

customElements.define('card-skeleton', CardSkeleton);