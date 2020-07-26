let price;
let symbol = '$';
async function getPrice() {
	let request = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	let data = await request.json();
	price = await data.bpi.USD.rate;

	console.log(symbol + price);
	document.querySelector('#bcPrice').textContent = symbol + (await price);
}

document.querySelector('#refreshBtn').addEventListener('click', () => {
	getPrice();
});

getPrice();
