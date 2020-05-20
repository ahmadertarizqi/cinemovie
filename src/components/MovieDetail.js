class MovieDetail extends HTMLElement {

   connectedCallback() {
      this.renderElement();
   }

   renderElement() {
      this.innerHTML = `
         <div class="fixed bg-opacity-25 top-0 left-0">
            <h1>Hello World</h1>
         </div>
      `;
   }

}

customElements.define('movie-detail', MovieDetail);