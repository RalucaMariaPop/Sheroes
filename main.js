//create navigation
//<li> <a href="#letter_a"> A </a> </li>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterArray = letters.split("");
console.log(letterArray);

letterArray.forEach(handleLetter);

function handleLetter(letter) {
  createNavLink(letter);

  //create section
  createAuthorSection(letter);
}
function createNavLink(letter) {
  //create nav link
  const temp = document.querySelector(".authorName").content;
  const copy = temp.cloneNode(true);
  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".letterLinks ol").appendChild(copy);
}
function createAuthorSection(letter) {
  const template = document.querySelector(".sectionTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = letter;
  copy.querySelector("section").id = `letter_${letter}`;
  document.querySelector(".authorlist").appendChild(copy);
}

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
  copy.querySelector("a").textContent = author.lastname;

  const firstLetter = author.lastname[0];
  console.log(firstLetter);

  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
