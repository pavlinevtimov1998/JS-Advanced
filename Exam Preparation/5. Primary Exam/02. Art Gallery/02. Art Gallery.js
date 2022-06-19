class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLocaleLowerCase();

    let obj = {
      articleModel,
      articleName,
      quantity,
    };

    if (this.possibleArticles.hasOwnProperty(articleModel) == false) {
      throw new Error("This article model is not included in this gallery!");
    }

    let isExists = false;

    this.listOfArticles.forEach((e) => {
      if (e.articleName == articleName && e.articleModel == articleModel) {
        e.quantity += quantity;
        isExists = true;
      }
    });

    if (isExists == false) {
      this.listOfArticles.push(obj);
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    if (this.guests.find((g) => g.guestName === guestName) !== undefined) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points = 0;

    if (personality == "Vip") {
      points = 500;
    } else if (personality == "Middle") {
      points = 250;
    } else {
      points = 50;
    }

    let obj = {
      guestName,
      points,
      purchaseArticle: 0,
    };

    this.guests.push(obj);

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let art = this.listOfArticles.find(
      (n) => n.articleName === articleName && n.articleModel === articleModel
    );
    let guest = this.guests.find((g) => g.guestName === guestName);

    if (art == undefined) {
      throw new Error("This article is not found.");
    }

    if (art.quantity == 0) {
      return `The ${articleName} is not available.`;
    }

    if (guest == undefined) {
      return "This guest is not invited.";
    }

    if (guest.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    }

    if (guest.points >= this.possibleArticles[articleModel]) {
      this.guests.forEach((g) => {
        if (g.guestName === guestName) {
          g.points -= this.possibleArticles[articleModel];
          g.purchaseArticle++;
          this.listOfArticles.find(
            (n) =>
              n.articleName === articleName && n.articleModel === articleModel
          ).quantity--;
        }
      });
    }

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];

    if (criteria == "article") {
      result.push("Articles information:");
      for (let el of this.listOfArticles) {
        result.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`);
      }
    }

    if (criteria == "guest") {
      result.push("Guests information:");
      for (let el of this.guests) {
        result.push(`${el.guestName} - ${el.purchaseArticle}`);
      }
    }

    return result.join("\n");
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
