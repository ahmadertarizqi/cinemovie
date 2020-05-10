class Appbar extends HTMLElement {
   connectedCallback() {
      this.renderElement();
   }

   renderElement() {
      this.innerHTML = `
         <div class="max-w-xl m-auto my-0">
            <h3 class="text-center p-4 text-xl font-bold uppercase text-white"><i class="inline-block" data-feather="film"></i> Cinemovie</h3>
         </div>
      `;
   }
}

customElements.define("app-bar", Appbar);