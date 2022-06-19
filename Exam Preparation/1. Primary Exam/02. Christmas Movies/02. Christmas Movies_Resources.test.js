const expect = require("chai").expect;
const ChristmasMovies = require("./02. Christmas Movies_Resources");

describe("ChrismasMovies functionality tests", () => {
  // Checking instantion with no parameters
  describe("Parameters functionality", () => {
    it("should return empty array, when 'movieCollection' and 'actors' are called with no parameters", () => {
      let testInstance = new ChristmasMovies();

      expect(testInstance.movieCollection).to.be.empty;
      expect(testInstance.actors).to.be.empty;
    });

    it("should return empty object, when property 'watched' is called with no parameters", () => {
      let testInstance = new ChristmasMovies();

      expect(testInstance.watched).to.be.empty;
    });

    it("properties can change their value", () => {
      let instance = new ChristmasMovies();

      instance.actors = null;
      instance.movieCollection = "hello";
      instance.watched = "movie";

      expect(instance.actors).to.be.null;
      expect(instance.movieCollection).to.be.equal("hello");
      expect(instance.watched).to.be.equal("movie");
    });
  });

  // Describing buyMovie method
  describe("buyMovie method functionality", () => {
    it("should recieve two parameters (string, array), and return object with name and actors to movieColection if the movie is not in the colection", () => {
      let instance = new ChristmasMovies();

      expect(
        instance.buyMovie("Home Alone", [
          "Macaulay Culkin",
          "Joe Pesci",
          "Daniel Stern",
        ])
      ).to.be.equal(
        "You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!"
      );

      expect(instance.movieCollection[0])
        .to.be.an("object")
        .with.property("name", "Home Alone");
      expect(instance.movieCollection[0])
        .to.be.an("object")
        .with.property("actors");
    });

    it("should throw error when first param is existing in the movieColection", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);

      expect(
        instance.buyMovie.bind(instance, "Home Alone", [
          "Macaulay Culkin",
          "Joe Pesci",
          "Daniel Stern",
        ])
      ).to.throw("You already own Home Alone in your collection!");
    });

    it("should have only unique actors", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
        "Macaulay Culkin",
      ]);

      expect(instance.movieCollection[0].actors)
        .to.be.an("array")
        .with.lengthOf(3);
    });
  });

  // Describing discardMovie method
  describe("discardMovie method functionality", () => {
    it("should recieve one parameter (string), if param exsist in the movie and wathed collections it should be deleted", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);

      instance.watchMovie("Home Alone");
      instance.discardMovie("Home Alone");

      expect(instance.movieCollection).to.be.empty;
      expect(instance.watched).to.be.empty;

      let anotherInstance = new ChristmasMovies();

      anotherInstance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);

      anotherInstance.watchMovie("Home Alone");

      expect(anotherInstance.discardMovie("Home Alone")).to.equal(
        "You just threw away Home Alone!"
      );
    });

    it("should throw erorr if the parameter do not exist in the movie or wathed collections", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);

      expect(instance.discardMovie.bind(instance, "Home Alone")).to.throw(
        "Home Alone is not watched!"
      );

      let anotherInstance = new ChristmasMovies();

      expect(
        anotherInstance.discardMovie.bind(anotherInstance, "Home Alone")
      ).to.throw("Home Alone is not at your collection!");
    });
  });

  // watchMovie Functionality
  describe("'watchMovie' method functionality", () => {
    it("should recieve one parameter (string), if param exsist in the movie colection and it is not in the watched list should put it in watched object as a key and value: 1", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);

      instance.watchMovie("Home Alone");

      expect(instance.watched)
        .to.be.an("object")
        .with.property("Home Alone", 1);

      instance.watchMovie("Home Alone");

      expect(instance.watched)
        .to.be.an("object")
        .with.property("Home Alone", 2);
    });

    it("should throw error if there are no movies in movieCollection", () => {
      let instance = new ChristmasMovies();

      expect(instance.watchMovie.bind(instance, "Rambo")).to.throw(
        "No such movie in your collection!"
      );
    });
  });

  describe("favouriteMovie functionality", () => {
    it("should throw error if there are no movies in watched list", () => {
      let instance = new ChristmasMovies();

      expect(instance.favouriteMovie.bind(instance)).to.throw(
        "You have not watched a movie yet this year!"
      );
    });

    it("otherwilse should return message with most watched movie", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);
      instance.buyMovie("Home Alone 2", ["Macaulay Culkin"]);

      instance.buyMovie("The Grinch", [
        "Benedict Cumberbatch",
        "Pharrell Williams",
      ]);

      instance.watchMovie("Home Alone 2");
      instance.watchMovie("Home Alone");
      instance.watchMovie("The Grinch");
      instance.watchMovie("Home Alone 2");

      expect(instance.favouriteMovie()).to.be.equal(
        `Your favourite movie is Home Alone 2 and you have watched it 2 times!`
      );
    });
  });

  describe("mostStarredActors functionality", () => {
    it("should throw an error if there are no movies in the collection", () => {
      let instance = new ChristmasMovies();

      expect(instance.mostStarredActor.bind(instance)).to.throw(
        "You have not watched a movie yet this year!"
      );
    });

    it("should return the most starred actor in the collection", () => {
      let instance = new ChristmasMovies();

      instance.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);

      instance.buyMovie("Home Alone 2", ["Macaulay Culkin"]);

      instance.buyMovie("Last Christmas", ["Emilia Clarke", "Henry Golding"]);

      expect(instance.mostStarredActor()).to.be.equal(
        `The most starred actor is Macaulay Culkin and starred in 2 movies!`
      );
    });
  });
});
