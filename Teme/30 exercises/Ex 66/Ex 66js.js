//Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const city = (string) => {
  if (string.length >= 3 && ((string.substring(0, 3) == 'Los') || (string.substring(0, 3) == 'New'))){
  	return string;
  }
		return '';
}

console.log(city("New Orleons"));
console.log(city("Los Santos"));
console.log(city("Cluj-Napoca"));