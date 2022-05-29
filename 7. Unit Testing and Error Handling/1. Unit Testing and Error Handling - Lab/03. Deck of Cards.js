function deckOfCards(cards) {
  let output = [];

  for (let card of cards) {
    let face = card.slice(0, -1);
    let suit = card.slice(-1);

    try {
      output.push(createCard(face, suit).toString());
    } catch (err) {
      console.log(`Invalid card: ${face + suit}`);
      return;
    }
  }

  console.log(output.join(", "));

  function createCard(face, inputSuit) {
    let validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    let validSuits = {
      S: "\u2660",
      H: "\u2665 ",
      D: "\u2666 ",
      C: "\u2663 ",
    };

    if (!validFaces.includes(face)) {
      throw new Error("Error: Invalid Face!");
    }

    if (!Object.keys(validSuits).includes(inputSuit)) {
      throw new Error("Error: Invalid Suit!");
    }

    return {
      face,
      suit: validSuits[inputSuit],
      toString() {
        return this.face + this.suit;
      },
    };
  }
}
deckOfCards(["AS", "10D", "KH", "2C"]);
console.log("-----------");
deckOfCards(["5S", "3D", "QD", "1C"]);
