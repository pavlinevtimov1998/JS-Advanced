class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
    this.idNumber = 1;
  }

  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`;
    }

    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this story!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }

    if (username == this.creator) {
      throw new Error("You can't like your own story!");
    }

    this._likes.push(username);

    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (this._likes.includes(username) == false) {
      throw new Error("You can't dislike this story!");
    }

    this._likes = this._likes.filter((u) => u !== username);

    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    if (
      id == undefined ||
      this._comments.find((u) => u.Id == id) == undefined
    ) {
      this._comments.push({
        Id: this.idNumber,
        Username: username,
        Content: content,
        Replies: [],
      });
      this.idNumber++;

      return `${username} commented on ${this.title}`;
    }

    let user = this._comments.find((u) => u.Id == id);

    if (user != undefined) {
      if (user.Replies.length == 0) {
        user.Replies.push({
          Id: Number(user.Id + "." + 1),
          Username: username,
          Content: content,
        });
        let index = this._comments.indexOf(
          this._comments.find((u) => u.Id == id)
        );

        this._comments.splice(index, 1, user);
      } else {
        let lastId = Number(user.Id + "." + (user.Replies.length + 1));

        user.Replies.push({
          Id: lastId,
          Username: username,
          Content: content,
        });
        let index = this._comments.indexOf(
          this._comments.find((u) => u.Id == id)
        );

        this._comments.splice(index, 1, user);
      }

      return "You replied successfully";
    }
  }

  toString(sortingType) {
    let result = [];

    result.push(`Title: ${this.title}`);
    result.push(`Creator: ${this.creator}`);
    result.push(`Likes: ${this._likes.length}`);
    result.push(`Comments:`);

    if (sortingType == "asc") {
      let sorted = this._comments.sort((a, b) => a.Id - b.Id);

      sorted.forEach((el) => {
        if (el.Replies.length == 0) {
          result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
        } else {
          result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
          el.Replies.sort((a, b) => a.Id - b.Id).forEach((e) => {
            result.push(`--- ${e.Id}. ${e.Username}: ${e.Content}`);
          });
        }
      });
    }

    if (sortingType == "desc") {
      let sorted = this._comments.sort((a, b) => b.Id - a.Id);

      sorted.forEach((el) => {
        if (el.Replies.length == 0) {
          result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
        } else {
          result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
          el.Replies.sort((a, b) => b.Id - a.Id).forEach((e) => {
            result.push(`--- ${e.Id}. ${e.Username}: ${e.Content}`);
          });
        }
      });
    }

    if (sortingType == "username") {
      let sorted = this._comments.sort((a, b) =>
        a.Username.localeCompare(b.Username)
      );

      sorted.forEach((el) => {
        if (el.Replies.length == 0) {
          result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
        } else {
          result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
          el.Replies.sort((a, b) =>
            a.Username.localeCompare(b.Username)
          ).forEach((e) => {
            result.push(`--- ${e.Id}. ${e.Username}: ${e.Content}`);
          });
        }
      });
    }

    return result.join("\n");
  }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
// console.log(art.like("John"));
console.log(art.dislike("John"));

console.log(art.likes);
// console.log(art.dislike("Sally"));
console.log(art.like("Ivan"));
console.log(art.like("Steven"));
console.log(art.likes);
console.log(art.comment("Anny", "Some Content"));
console.log(art.comment("Ammy", "New Content", 1));
console.log(art.comment("Zane", "Reply", 2));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 2));
console.log(art.comment("SAmzxcmy", "asd@", 2));
console.log(art.comment("asddd", "dsa@", 2));
console.log(art.comment("SAssmmy", "asdsss@", 2));
console.log(art.comment("SAddmmy", "Redsdsdply@", 2));
console.log(art.comment("SAaaammy", "Resdsdply@", 2));
console.log(art.comment("SzxccccAmmy", "Resdsdply@", 2));
console.log();
console.log(art.toString("username"));
console.log(art.toString("asc"));


