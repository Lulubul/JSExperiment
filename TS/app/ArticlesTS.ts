import ElementTS from "./ElementTS";
import SpecialElementTS from "./SpecialElementTS";

export class ArticlesTS {
	public articles: string[];

	constructor() {
		this.articles = [
			"To Reach an Audience of Million",
			"One road to being a cartoonist",
			"The Purpose of Travelling",
			"The Writer I Used to Be",
		];
	}

	public getArticles() {
		return this.articles;
	}

	public getArticleElements() {
		const elements = this.articles.slice(0, this.articles.length - 1).map((articleTitle) => {
			const element = new ElementTS(articleTitle);
			return element.draw();
		});
		const specialElement = this.createSpecialElement();
		return [...elements, specialElement];
	}

	private createSpecialElement() {
		const lastElementIndex = this.articles.length - 1;
		const specialElementDrawer = new SpecialElementTS(this.articles[lastElementIndex]);
		return specialElementDrawer.draw();
	}
}
