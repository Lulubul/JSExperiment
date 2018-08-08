//export default 
class ArticlesES6 {
	constructor() {
		this.articles = [
			'To Reach an Audience of Million, Create for an Audience of One',
			'One road to being a cartoonist',
			'The Purpose of Travelling',
			'Mourning the Writer I Used to Be'
		];
	} 

	getArticles() {
		return this.articles;
	}

	getArticleElements() {
		return this.articles.map((articleTitle) => {
			let article = document.createElement('article'); // Create a <article> element
			let text = document.createTextNode(articleTitle); // Create a text node
			article.appendChild(text);
			return article;
		});
	}
}