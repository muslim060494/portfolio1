const txtElement = ['Programmer', 'Web Developer', 'Electrical Engineering', 'Data Analyst'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let wrds = '';

(function ngetik(){

	if(count == txtElement.length) {
		count = 0;
	}

	currentTxt = txtElement[count];

	wrds = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent  = wrds;

	if(wrds.length == currentTxt.length) {
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();