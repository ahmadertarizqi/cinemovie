import "../styles/main.css";
import "../components/Appbar.js";
import "../components/MovieList.js";
import "../components/MovieDetail.js";
import SectionList from "./sectionList.js";
import Swiper from 'swiper';
import "../../node_modules/swiper/css/swiper.min.css";

function Main() {
   new SectionList();

   new Swiper('.banner-slider', {
      pagination: {
         el: '.banner-pagination'
      }
   });
}

export default Main;