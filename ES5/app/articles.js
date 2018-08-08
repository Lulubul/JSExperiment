
var Element = function(text) {
	this.text = text;
};

Element.prototype.draw = function() {
	var article = document.createElement('article'); // Create a <article> element
	var textNode = document.createTextNode(this.text); // Create a text node
	article.appendChild(textNode);
	return article;
};

var SpecialElement = function(text) {
	Element.call(this, text);
};

SpecialElement.prototype = Object.create(Element.prototype);
SpecialElement.prototype.constructor = Element;

SpecialElement.prototype.draw = function() {
	var element = Element.prototype.draw.apply(this);
	var specialTextNode = document.createTextNode(' Special Element');
	element.appendChild(specialTextNode);
	return element;
};

var Articles = (function () {

	var articles = [
		'To Reach an Audience of Million',
		'Create for an Audience of One',
		'One road to being a cartoonist',
		'The Purpose of Travelling',
		'The Writer I Used to Be'
	];

	function getArticles() {
		return articles;
	}

	function createSpecialElement() {
		var lastElementIndex = articles.length - 1;
		var specialElementDrawer = new SpecialElement(articles[lastElementIndex]);
		return specialElementDrawer.draw();
	}

	function getArticleElements() {
		// remove last element
		var elements = articles.slice(0, articles.length - 1).map(function (articleTitle) {
			var element = new Element(articleTitle);
			return element.draw();
		});
		var specialElement = createSpecialElement();
		elements.push(specialElement);
		return elements;
	}

	return {
		getArticles: getArticles,
		getArticleElements: getArticleElements
	};
})();

