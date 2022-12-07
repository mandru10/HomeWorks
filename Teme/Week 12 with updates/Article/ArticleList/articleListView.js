class ArticleListView extends View {
  constructor(ArticleItem) {
    super();
    this.blogListContainer = document.querySelector('#blog-list-container');
    this.model = null;
    this.init();
    this.ArticleItem = ArticleItem;
  }

  init = async function () {
 
    this.model = await new ArticleListModel().init();
 
    const templateElement = this.createTemplateElement(
      'article-list-template',
      this.model.templateContent
    );
    this.listElement =
      templateElement.content.cloneNode(true).firstElementChild;

    this._createListElements();
  };

  rerender() {
    
    this.blogListContainer.innerHTML = '';
    this._createListElements();
  }

  renderNewArticle(article) {
    
    const articleItemElement = this.ArticleItem.render(article);
    this.listElement.insertBefore(
      articleItemElement,
      this.listElement.firstChild
    );
  }

  _createListElements = function () {
    const { articleList } = this.model;

    articleList.forEach((article) => {
     
      const articleItemElement = this.ArticleItem.render(article);

      this.listElement.appendChild(articleItemElement);
    });
    
    this.blogListContainer.appendChild(this.listElement);
  };
}