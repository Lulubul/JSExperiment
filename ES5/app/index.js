// require('./modules/header.js');
// require('./modules/articles.js');
var Page = (function(headerModule, articlesModule) {

	var createMenu = function createMenu(parentElement) {
		var menuElements = headerModule.getMenuElements();
		menuElements.forEach(function(element) {
			parentElement.appendChild(element);
		});
	};

	var createArticles = function createArticles(parentElement) {
		var articlesElements = articlesModule.getArticleElements();
		articlesElements.forEach(function(element) {
			parentElement.appendChild(element);
		});
	};

	return {
		createMenu: createMenu,
		createArticles: createArticles
	};
})(Header, Articles);

Page.createMenu(document.getElementsByClassName('menu')[0]);
Page.createArticles(document.getElementsByClassName('container')[0]);