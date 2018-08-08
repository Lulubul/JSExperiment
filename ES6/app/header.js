//export default 
class HeaderES6 {

	constructor() {
		this.menuTitles = [
			'HOME',
			'GREAT ESCAPE',
			'CULTURE',
			'TECH',
			'ENTREPRENEURSHIP',
			'SELF',
			'POLITICS',
			'DESIGN',
			'SCIENCE',
			'POPULAR'
		];
	}

	getMenuTitles() {
		return this.menuTitles;
	} 

	getMenuElements() {
		return this.menuTitles.map(function (title) {
			var li = document.createElement('li'); // Create a <li> element
			var text = document.createTextNode(title); // Create a text node
			li.appendChild(text);
			return li;
		});
	}
}