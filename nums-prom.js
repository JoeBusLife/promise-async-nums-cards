let favNumber = 5;
let baseURL = "http://numbersapi.com/";

axios.get(baseURL + favNumber + '?json').then(res => {
	console.log(res);
});

let moreFavs = [0, 3, 4];
axios.get(baseURL + moreFavs + '?json').then(res => {
	console.log(res);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return axios.get(baseURL + favNumber + '?json');
  })
).then(facts => {
  facts.forEach(res => $("body").append(`<p>${res.data.text}</p>`));
});