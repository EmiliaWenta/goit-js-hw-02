import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const newElements = [];

galleryItems.forEach(function (galleryItem) {
  const galleryItemDiv = document.createElement("div");
  galleryItemDiv.classList.add("gallery__item");
  gallery.append(galleryItemDiv);
  const galleryItemLink = document.createElement("a");
  galleryItemLink.classList.add("gallery__link");
  galleryItemLink.href = `${galleryItem.preview}`;
  galleryItemDiv.append(galleryItemLink);
  const galleryItemImage = document.createElement("img");
  galleryItemImage.classList.add("gallery__image");
  galleryItemImage.src = `${galleryItem.preview}`;
  galleryItemImage.alt = `${galleryItem.description}`;
  galleryItemImage.setAttribute("data-source", `${galleryItem.original}`);
  galleryItemLink.append(galleryItemImage);
  newElements.push(galleryItemDiv);
});

gallery.append(...newElements);

gallery.addEventListener("click", selectedImage);

function selectedImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const image = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${image}" width="800" height="600">
   `);

  instance.show();
}
