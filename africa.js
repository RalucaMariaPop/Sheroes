//fetching data

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
  //console.log(data);
  data.forEach(showAuthor);
}

function showAuthor(author) {
  //console.log(author.lastname);
  const template = document.querySelector(".authorName").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent =
    author.lastname + ", " + author.firstname;

  const firstLetter = author.lastname[0];
  //console.log(firstLetter);

  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
