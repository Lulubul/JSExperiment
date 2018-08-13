import { ArticlesTS } from "./ArticlesTS";
import { HeaderTS } from "./HeaderTS";

export default class PageTS {

	public articles: ArticlesTS;
	public menu: HeaderTS;

	constructor(menu: HeaderTS, articles: ArticlesTS) {
		this.menu = menu;
		this.articles = articles;
	}

	public createMenu(parentElement: Element) {
		this.menu
			.getMenuElements()
			.forEach((element) => parentElement.appendChild(element));
	}

	public createArticles(parentElement: Element) {
		this.articles
			.getArticleElements()
			.forEach((element) => parentElement.appendChild(element));
	}
}

const page = new PageTS(new HeaderTS(), new ArticlesTS());
page.createMenu(document.getElementsByClassName("menu")[0]);
page.createArticles(document.getElementsByClassName("container")[0]);
