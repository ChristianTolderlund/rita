const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "http://tolloman.com/mmd21ex/wp-json/wp/v2/painting/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showpaint(data));

function showpaint(painting) {
  //grap the template
  const template = document.querySelector("#painting-temp").content;
  //clont it
  const copy = template.cloneNode(true);
  //???
  copy.querySelector(".img-display-page").src = painting.photo.guid;
  copy.querySelector(".img-display-page1").src = painting.photo.guid;
  copy.querySelector(".img-display-page2").src = painting.photo1.guid;
  copy.querySelector(".img-display-page3").src = painting.photo1.guid;
  //copy.querySelector(".img-display-page").src = painting.photo[0].guid;
  //bags._links["wp:featuredmedia"][0].href;
  copy.querySelector(".name").textContent = `${painting.title.rendered}`;
  copy.querySelector(".price").textContent = `${painting.price}` + " DDK";
  copy.querySelector(".descripition").textContent = `${painting.description}`;
  //grab parent
  const parent = document.querySelector(".product-page");
  console.log(parent);
  //append
  parent.appendChild(copy);
}

function clickme(smallImg) {
  var fullImg = document.getElementById("fullImg");
  fullImg.src = smallImg.src;
}
