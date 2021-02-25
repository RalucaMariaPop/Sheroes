const url = "https://kea2sem-1270.restdb.io/rest/horrorbooks";
const mediaurl = "https://kea2sem-1270.restdb.io/media/";

const options = {
  headers: {
    "x-apikey": "602f53d35ad3610fb5bb638d",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  console.log(data);
  data.forEach(showBook);
}

function showBook(book) {
  const template = document.querySelector(".bookTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(
    "img"
  ).src = `https://kea2sem-1270.restdb.io/media/${book.img}?s=w`;
  copy.querySelector(".an").textContent = book.firstname + " " + book.lastname;
  copy.querySelector(".bn").textContent = book.booktitles;
  copy.querySelector(".nat").textContent = book.nationality;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
