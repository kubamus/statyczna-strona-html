const folderName = document.currentScript.getAttribute("folderName");

const images = Array.from({ length: 9 }, (_, i) => i + 1).map(
  (i) => `powiaty/${folderName}/${i}.jpg`
);

const imageSection = document.querySelector(".imageGaleryGrid");

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
