function playingCards(face, inputSuit) {
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

let game = playingCards("Q", "S");

game.toString();


