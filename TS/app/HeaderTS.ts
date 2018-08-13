export class HeaderTS {
	private menuTitles: string[];

	constructor() {
		this.menuTitles = [
			"HOME",
			"GREAT ESCAPE",
			"CULTURE",
			"TECH",
			"ENTREPRENEURSHIP",
			"SELF",
			"POLITICS",
			"DESIGN",
			"SCIENCE",
			"POPULAR",
		];
	}

	public getMenuTitles() {
		return this.menuTitles;
	}

	public getMenuElements() {
		return this.menuTitles.map((title) => {
			const li = document.createElement("li"); // Create a <li> element
			const text = document.createTextNode(title); // Create a text node
			li.appendChild(text);
			return li;
		});
	}
}


