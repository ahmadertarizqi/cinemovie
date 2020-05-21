class MovieDetail extends HTMLElement {

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
      const element = document.createElement('div');
      element.classList.add("fixed", "bg-blue-700", "top-0", "left-0", "w-full", "h-screen", "z-10");
      element.innerHTML = `
         <div class="p-10">
            <button type="button" class="p-3 bg-indigo-900 onClose">this.close</button>
            <h1>${this._detail.overview}</h1>
         </div>
      `;

      this.appendChild(element);

      this.querySelector('.onClose').addEventListener('click', this.onClose);
   }

   onClose(ev) {
      ev.preventDefault();
      const target = document.querySelector('movie-detail');
      target.removeChild(target.lastElementChild);
   }
}

customElements.define('movie-detail', MovieDetail);