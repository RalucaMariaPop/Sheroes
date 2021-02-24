//API key
const options = {
  headers: {
    "x-apikey": "602f53d35ad3610fb5bb638d",
  },
};

//fetch data
fetch("https://kea2sem-1270.restdb.io/rest/horrorbooks")
  .then((res) => res.json())
  .then(gotData);

//loop through the data
function gotData(data) {
  console.log(data);
}
// grab template, create copy, change content, append
