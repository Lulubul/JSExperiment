//export default 
class Element {
	constructor(text) {
		this.text = text;
	}

	draw() {
		var article = document.createElement('article'); // Create a <article> element
		var textNode = document.createTextNode(this.text); // Create a text node
		article.appendChild(textNode);
		return article;
	}
}

class SpecialElement extends Element {
	constructor(text) {
		super(text);
	}

	draw() {
		let textNode = document.createTextNode(' Special Element'); 
		let element = super.draw();
		element.appendChild(textNode);
		return element;
	}
}

class ArticlesES6 {
	constructor() {
		this.articles = [
			'To Reach an Audience of Million',
			'One road to being a cartoonist',
			'The Purpose of Travelling',
			'The Writer I Used to Be'
		];
	} 

	getArticles() {
		return this.articles;
	}

	getArticleElements() {
		let elements = this.articles.slice(0, this.articles.length - 1).map((articleTitle) => {
			var element = new Element(articleTitle);
			return element.draw();
		});
		var specialElement = this.createSpecialElement();
		return [...elements, specialElement];
	}

	createSpecialElement() {
		var lastElementIndex = this.articles.length - 1;
		var specialElementDrawer = new SpecialElement(this.articles[lastElementIndex]);
		return specialElementDrawer.draw();
	}
}