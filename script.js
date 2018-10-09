function balikKata(kata){
	var balik = kata.split('').reverse('').join('');
	return balik;
}

console.log(balikKata('Hello World and Coders'));