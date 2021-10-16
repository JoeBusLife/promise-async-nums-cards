let favNumber = 5;
let baseURL = "http://numbersapi.com/";
const $numFacts = $('#num-facts');

async function getFactForFav(){
	let res = await axios.get(baseURL + favNumber + '?json')
	console.log(res);
}

async function getFactForFavs(){
	let moreFavs = [0, 3, 4];
	let res = await axios.get(baseURL + moreFavs + '?json')
	console.log(res);
}

async function getNumFactsForFav(num){
	facts = [];
	for (i=0; i<num; i++){
		facts.push(await axios.get(baseURL + favNumber + '?json'))
	}
	$numFacts.empty();
	facts.forEach(res => $numFacts.append(`<p>${res.data.text}</p>`));
}
