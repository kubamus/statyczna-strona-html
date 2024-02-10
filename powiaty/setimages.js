const folderName = document.currentScript.getAttribute("folderName");
const maxFiles = document.currentScript.getAttribute("maxFiles");

const images = Array.from({ length: maxFiles }, (_, i) => i + 1).map(
  (i) => `powiaty/${folderName}/${i}.jpg`
);

const imageSection = document.querySelector(".imageGalery");

images.forEach((image) => {
  const a = document.createElement("a");
  a.href = image;
  a.target = "_blank";
  const img = document.createElement("img");
  img.src = image;
  img.alt = "zd";
  img.classList.add("img");
  a.appendChild(img);
  imageSection.appendChild(a);
});
