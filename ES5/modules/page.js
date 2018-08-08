var Page = (function() {

    function dragAndDrop() {
        console.log("drag");
    }

    return {
        dragAndDrop: dragAndDrop
    }
})();

Page.dragAndDrop();