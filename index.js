const imgAboutRef = document.querySelector(".about-img");
const imgWorkRef = document.querySelector(".work-img");

imgAboutRef.addEventListener("load", toPushAboutImg, { once: true });
imgWorkRef.addEventListener("load", toPushWorkImg, { once: true });

function toPushAboutImg(evt) {
  evt.target.classList.add("about-img-fix");
}

function toPushWorkImg(evt) {
  evt.target.classList.add("work-img-fix");
}
