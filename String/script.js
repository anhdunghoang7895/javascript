isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
function isFirstLetterUpperCase(str){
	var regexp = /^[A-Z]/;
	if (regexp.test(str)) {
		console.log("String's first character is uppercase");
	} else {
		console.log("String's first character is not uppercase");
	}
}