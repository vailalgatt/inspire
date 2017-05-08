function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		//console.log('What is the quote', quote)
		draw(quote)
	})
	
	function draw(quote){
		console.log(quote)
		var elem = document.getElementById('quote')
		var template = ''
		template += `
			<h3>${quote.quote}</h3>
		`
		elem.innerHTML = template
	}
}
