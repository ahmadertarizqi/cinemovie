const target = document.body;
let lastScroll = 0;

function onScrollBar() {
   const currentScroll = window.pageYOffset;

   if(currentScroll == 0) {
      target.classList.remove("scroll-up");
      return;
   }
   
   if(currentScroll > lastScroll && !target.classList.contains("scroll-down")) {
      target.classList.remove("scroll-up");
      target.classList.add("scroll-down");
   } else if (currentScroll < lastScroll && target.classList.contains("scroll-down")) {
      target.classList.remove("scroll-down");
      target.classList.add("scroll-up");
   }

   lastScroll = currentScroll;
}

function Appbar() {
   window.addEventListener('scroll', (ev) => {
      onScrollBar(target, lastScroll);
   });
}

export default Appbar;