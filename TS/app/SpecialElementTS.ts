import ElementTS from "./ElementTS";

export default class SpecialElementTS extends ElementTS {

	constructor(text: string) {
		super(text);
	}

	public draw() {
		const textNode = document.createTextNode(" Special Element");
		const element = super.draw();
		element.appendChild(textNode);
		return element;
	}
}
