export default class ElementTS {
	private text: any;

	constructor(text) {
		this.text = text;
	}

	public draw() {
		const article = document.createElement("article"); // Create a <article> element
		const textNode = document.createTextNode(this.text); // Create a text node
		article.appendChild(textNode);
		return article;
	}
}
