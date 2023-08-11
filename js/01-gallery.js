import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(function (galleryItem) {
  const galleryItemDiv = document.createElement("div");
  galleryItemDiv.classList.add("gallery__item");
  gallery.append(galleryItemDiv);
  const galleryItemLink = document.createElement("a");
  galleryItemLink.classList.add("gallery__link");
  galleryItemLink.href = `${galleryItem.original}`;
  galleryItemDiv.append(galleryItemLink);
  const galleryItemImage = document.createElement("img");
  galleryItemImage.classList.add("gallery__image");
  galleryItemImage.src = `${galleryItem.preview}`;
  galleryItemImage.alt = `${galleryItem.description}`;
  galleryItemImage.setAttribute("data-source", `${galleryItem.original}`);
  galleryItemLink.append(galleryItemImage);
});

const galleryItemLinkAll = document.querySelectorAll(".gallery__link");

for (const galleryItemLink of galleryItemLinkAll) {
  galleryItemLink.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

const galleryItemDivAll = document.querySelectorAll(".gallery__item");

const imageOriginal = galleryItems.map((galleryItem) => galleryItem.original);

for (let i = 0; i < galleryItemDivAll.length; i++) {
  galleryItemDivAll[i].onclick = () => {
    basicLightbox
      .create(
        `
        <img width="1400" height="900" src="${imageOriginal[i]}">
      `
      )
      .show();
  };
}
