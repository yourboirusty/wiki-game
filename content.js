console.log('Wololo');
var head = document.getElementById("mw-navigation");
var body = document.getElementById("content");
var pagebase = document.getElementById("mw-page-base");
pagebase.parentNode.removeChild(pagebase);
head.parentNode.removeChild(head);
body.style.marginLeft = "0px";
