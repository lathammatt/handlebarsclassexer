// *************partial stuff*******


var socialData = {
	site_url: "http://www.facepalm.com",
	sitename: "Facepalm"
}

var socialHTML = $("#social-sharing").html();

var socialTemplate = Handlebars.compile(socialHTML);

var socialOutput = socialTemplate(socialData);

// must register this as a partial

Handlebars.registerPartial('social-sharing', socialOutput);

// ***************main template


var articleData = {
	title: "You won't believe what happens next",
	text: "Fooled you. This article is clickbait",
	tags: [
		{
			category: "Spam",
			name: "Pikachus"
		},
		{
			category: "Author",
			name: "Ash Ketchum"
		}
	]
}

var articleHTML = $("#article-template").html();

var articleTemplate = Handlebars.compile(articleHTML);

var articleOutput = articleTemplate(articleData);

console.log("article", articleOutput);

$("#articleOutput").append(articleOutput);



