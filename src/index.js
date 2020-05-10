import "./styles/main.css";
import { apiURL, apiKEY, imageURL } from './constant.js';

document.addEventListener('DOMContentLoaded', function() {
   // alert('DOMContentLoaded is running');
   fetch(`${apiURL}/discover/movie?api_key=${apiKEY}`)
      .then(response => response.json())
      .then(response => {
         console.log(response);
         videoListItem(response.results);
      });
});

const listParent = document.querySelector(".movie-list");
function videoListItem(videos) {
   videos.forEach(video => {
      const newElement = document.createElement("div");
      newElement.classList.add("max-w-sm", "w-full", "max-w-full", "flex", "mb-4");
      newElement.innerHTML = `
         <div class="media h-40 w-2/6">
            <img src="${imageURL}${video.poster_path}" class="w-full h-full rounded object-cover" alt="" />
         </div>
         <div class="w-4/6 rounded-r px-3 py-1">
            <div class="text-white font-bold text-base mb-2">${video.title}</div>
            <p class="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
      `;
      listParent.appendChild(newElement);
   });
}