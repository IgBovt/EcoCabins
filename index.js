const imgAboutRef = document.querySelector(".about-img");
const imgWorkRef = document.querySelector(".work-img");

imgAboutRef.addEventListener("load", toPushAboutImg);
document.addEventListener("scroll", toPushWorkImg);

function toPushAboutImg(evt) {
  evt.target.classList.add("about-img-fix");
}

function toPushWorkImg() {
  imgWorkRef.classList.add("work-img-fix");
}
