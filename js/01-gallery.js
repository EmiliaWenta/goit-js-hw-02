import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (galleryItem of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li><img src= ${galleryItem.preview} alt= "${galleryItem.description}" ></img></li>`
  );
}
