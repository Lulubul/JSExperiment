// import Articles from './articles.js';
// import Header from './header.js';
class PageES6 {

	constructor() {
		this.menu = new HeaderES6();
		this.articles = new ArticlesES6();
	}

	createMenu(parentElement) {
		this.menu
			.getMenuElements()
			.forEach(element => parentElement.appendChild(element));
	}

	createArticles(parentElement) {
		this.articles
			.getArticleElements()
			.forEach(element => parentElement.appendChild(element));
	}
}

let page = new PageES6();
page.createMenu(document.getElementsByClassName('menu')[0]);
page.createArticles(document.getElementsByClassName('container')[0]);


