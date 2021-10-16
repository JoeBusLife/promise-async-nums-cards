let cardsURL = "http://deckofcardsapi.com/api/deck/";

axios.get(cardsURL + 'new/draw').then(res => {
	let {value, suit} = res.data.cards[0];
	console.log(value + ' of ' + suit);
})

let card1;
axios.get(cardsURL + 'new/draw').then(res => {
	card1 = res.data.cards[0];
	let deckId = res.data.deck_id;
	return axios.get(cardsURL + deckId + '/draw')
}).then(res => {
	let card2 = res.data.cards[0];
	console.log(card1.value + ' of ' + card1.suit);
	console.log(card2.value + ' of ' + card2.suit);
})

let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

axios.get(cardsURL + 'new/shuffle/').then(res => {
	deckId = res.data.deck_id;
	$btn.show();
});

$btn.on('click', () => {
	axios.get(cardsURL + deckId + '/draw').then(res => {
		let cardSrc = res.data.cards[0].image;
		$cardArea.append(
			$('<img>', {
				src: cardSrc
			})
		);
		if (res.data.remaining === 0) $btn.remove();
	});
});