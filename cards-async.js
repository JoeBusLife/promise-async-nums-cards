const cardsURL = "http://deckofcardsapi.com/api/deck/";
const $btn = $('button');
const $cardArea = $('#card-area');

async function drawCard(){
	let res = await axios.get(cardsURL + 'new/draw');
	let {value, suit} = res.data.cards[0];
	console.log(value + ' of ' + suit);
}

async function draw2Cards(){
	let res1 = await axios.get(cardsURL + 'new/draw');
	card1 = res1.data.cards[0];
	let deckId = res1.data.deck_id;
	let res2 = await axios.get(cardsURL + deckId + '/draw');
	card2 = res2.data.cards[0];
	console.log(card1.value + ' of ' + card1.suit);
	console.log(card2.value + ' of ' + card2.suit);
}

async function createNewShuffledDeck(){
	let res = await axios.get(cardsURL + 'new/shuffle/');
	deckId = res.data.deck_id;
	$btn.show();
}

async function getRandomCardFromDeck(){
	let res = await axios.get(cardsURL + deckId + '/draw');
	let cardSrc = res.data.cards[0].image;
	$cardArea.append(
		$('<img>', {
			src: cardSrc
		})
	);
	if (res.data.remaining === 0) $btn.remove();
}

$btn.on('click', getRandomCardFromDeck);

createNewShuffledDeck();