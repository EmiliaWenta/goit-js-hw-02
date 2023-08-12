import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach(function (galleryItem) {
  const galleryItemLi = document.createElement("li");
  gallery.append(galleryItemLi);
  const galleryItemLink = document.createElement("a");
  galleryItemLink.classList.add("gallery__item");
  galleryItemLink.href = `${galleryItem.original}`;
  galleryItemLi.append(galleryItemLink);
  const galleryItemImage = document.createElement("img");
  galleryItemImage.classList.add("gallery__image");
  galleryItemImage.src = `${galleryItem.preview}`;
  galleryItemImage.alt = `${galleryItem.description}`;
  galleryItemImage.style.display = "block";
  galleryItemImage.style.height = "100%";
  galleryItemLink.append(galleryItemImage);
});

const galleryItemLinkAll = document.querySelectorAll(".gallery__item");

for (const galleryItemLink of galleryItemLinkAll) {
  galleryItemLink.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
