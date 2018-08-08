var Articles = (function() {

    var articles = [
        "To Reach an Audience of Million, Create for an Audience of One",
        "One road to being a cartoonist",
        "The Purpose of Travelling",
        "Mourning the Writer I Used to Be"
    ];

    function getArticles() {
        return articles;
    }

    function getArticleElements() {
        return articles.map(function(articleTitle) {
            var article = document.createElement("article");        // Create a <button> element
            var text = document.createTextNode(articleTitle);       // Create a text node
            article.appendChild(text);
            return article;
        });
    }

    return {
        getArticles: getArticles,
        getArticleElements: getArticleElements
    }
})();
