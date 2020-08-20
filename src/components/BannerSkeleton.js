class BannerSkeleton extends HTMLElement {
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
               position: relative;
               height: 190px;
               background-color: #7a818a;
               margin: 0 auto;
               border-radius: 4px;
               width: 100%;
               overflow: hidden;
            }

            @media screen and (min-width: 768px) {
               :host { height: 350px; }
            }

            .banner-skeleton .rating {
               position: absolute;
               top: 0;
               left: 0;
               height: 32px;
               margin-top: 10px;
               margin-left: 10px;
               width: 70px;
               background-color: #a3a9b0;
               border-radius: 4px;
            }
            .banner-skeleton .status {
               position: absolute;
               top: 0;
               right: 0;
               height: 32px;
               margin-top: 10px;
               margin-right: 10px;
               width: 70px;
               background-color: #a3a9b0;
               border-radius: 4px;
            }
            .banner-skeleton .title {
               position: absolute;
               bottom: 0;
               left: 0;
               height: 30px;
               width: 100%;
               background-color: #a3a9b0;
            }
         </style>
         <div class="banner-skeleton">
            <div class="rating"></div>
            <div class="status"></div>
            <div class="title"></div>
         </div>     
      `;
   }
}

customElements.define('banner-skeleton', BannerSkeleton);