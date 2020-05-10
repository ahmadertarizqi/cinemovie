import "./styles/main.css";
import "./components/Appbar.js";
import feather from "feather-icons";
import { apiURL, apiKEY, imageURL } from './constant.js';

document.addEventListener('DOMContentLoaded', function() {
   // alert('DOMContentLoaded is running');
   feather.replace();

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

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", function() {
   AppbarOnScroll();
});

function AppbarOnScroll() {

   const currentScroll = window.pageYOffset;
   if(currentScroll == 0) {
      body.classList.remove("scroll-up");
      return;
   }
   
   if(currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      // alert("working down");
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
   } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      // alert("working up");
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
   }

   lastScroll = currentScroll;
}