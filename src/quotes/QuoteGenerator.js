const quotes = [
  {
    author: "Genghis Khan",
    quote:
      "The greatest happiness is to vanquish your enemies, to chase them before you, to rob them of their wealth, to see those dear to them bathed in tears, to clasp to your bosom their wives and daughters."
  },
  {
    author: "Napoleon Bonaparte",
    quote: "Never interrupt your enemy when he is making a mistake."
  },
  {
    author: "Alexander the Great",
    quote: "There is nothing impossible to him who will try."
  },
  {
    author: "Julius Caesar",
    quote: "I came. I saw. I conquered."
  },
  {
    author: "Augustus Caesar",
    quote: "I found Rome a city of bricks and I left it a city of Marble"
  }
];

let indexOfLastSelection = -1;

export function generateRandomQuote() {
  let quoteCount = quotes.length;
  let indexRandom = randomInt(quoteCount);
  if (indexRandom === indexOfLastSelection) {
    indexRandom = (indexRandom + 1) % quoteCount;
  }
  let quoteSelected = quotes[indexRandom];
  indexOfLastSelection = indexRandom;
  return quoteSelected;
}

function randomInt(upperBound) {
  return Math.floor(Math.random() * upperBound);
}
