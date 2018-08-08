var Header = (function() {

    var menuTitles = [
        "HOME",
        "GREAT ESCAPE",
        "CULTURE",
        "TECH",
        "ENTREPRENEURSHIP",
        "SELF",
        "POLITICS",
        "DESIGN",
        "SCIENCE",
        "POPULAR"
    ];

    function getMenuTitles() {
        return menuTitles;
    }

    function getMenuElements() {
        return menuTitles.map(function(title) {
            var li = document.createElement("li");        // Create a <li> element
            var text = document.createTextNode(title);       // Create a text node
            li.appendChild(text);
            return li;
        });
    }

    return {
        getMenuTitles: getMenuTitles,
        getMenuElements: getMenuElements
    }
})();
