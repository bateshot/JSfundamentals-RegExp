console.log('============');
console.log('===Task1====');
console.log('============');




String.prototype.customFormat = function (options) {
	var str = this.toString(),
		regex;
	for(var prop in options){
		regex = new RegExp('\#\{' + prop + '\}' , 'g');
		str = str.replace(regex, options[prop]);
	}

	return str;
}

var options = {name: 'John', age: 13, location: 'New York'};
console.log('My name is #{name} and I am #{age}-years-old. I live in #{location}'.customFormat(options));


console.log('============');
console.log('===Task2====');
console.log('============');

String.prototype.bindAttrib = function (str, options) {

	var regex = new RegExp('data-bind-(.+?)="(.+?)"', 'g'),
		str = this,
		cont = '';

	str = str.replace(regex, function(all, type, value){
		if(type == 'href') {
			return 'href="' + options[value] + '"';
		} else if(type == 'content'){
			cont = options[value];
			return '';
		} 
		//Should work for every standard or custom attribute you supply!
		else {
			return type + '="' + options[value] + '"';
		}
	});
	if (cont != '') {
		str = str.replace('</', cont + '</');
	}
	return str;
}

var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name" data-bind-id="name" data-bind-custom="custom"></а>';
;

console.log(str.bindAttrib(str, {name: 'Elena', link: 'http://telerikacademy.com', custom: 'custom attribute'}));