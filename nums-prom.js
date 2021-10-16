let favNumber = 5;
let baseURL = "http://numbersapi.com/";

axios.get(baseURL + favNumber + '?json').then(data => {
	console.log(data);
});

let moreFavs = [0, 3, 4];
axios.get(baseURL + moreFavs + '?json').then(data => {
	console.log(data);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(baseURL + favNumber + '?json');
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});