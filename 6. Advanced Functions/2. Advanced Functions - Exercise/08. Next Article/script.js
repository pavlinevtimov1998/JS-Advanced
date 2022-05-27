function getArticleGenerator(articles) {
  return function init() {
    if (articles.length > 0) {
      let div = document.getElementById("content");
      let article = document.createElement("article");
      let text = articles.shift();
      article.textContent = text;
      div.appendChild(article);
    }
  };
}
