import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const newElements = [];

galleryItems.forEach(function (galleryItem) {
  const galleryItemLi = document.createElement("li");
  gallery.append(galleryItemLi);
  const galleryItemLink = document.createElement("a");
  galleryItemLink.classList.add("gallery__item");
  galleryItemLink.href = `${galleryItem.preview}`;
  galleryItemLi.append(galleryItemLink);
  const galleryItemImage = document.createElement("img");
  galleryItemImage.classList.add("gallery__image");
  galleryItemImage.src = `${galleryItem.preview}`;
  galleryItemImage.alt = `${galleryItem.description}`;
  galleryItemImage.style.display = "block";
  galleryItemImage.style.height = "100%";
  galleryItemLink.append(galleryItemImage);
  newElements.push(galleryItemLi);
});

gallery.append(...newElements);

gallery.addEventListener("click", selectedImage);

function selectedImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
