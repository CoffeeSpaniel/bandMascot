// JavaScript for Mascots & Band Names

// ******************* Mascot Arrays *******************

let beginning = [
  "An angry",
  "A so not funny",
  "A misinformed",
  "An inconsiderate",
  "A cursed",
  "A vegan",
  "A guitar-playing",
  "A belligerent",
  "A reluctant",
  "A Mischievous",
  "An obnoxious",
  "A guilty looking",
  "A dangerously overqualified",
  "An ignorant",
  "A rude",
  "A poorly mannered",
  "A psychopathic",
  "An untrustworthy",
  "A sociopathic",
];

let middle = [
  "pigeon",
  "sloth named Bianca",
  "gangster duck",
  "clown fish",
  "jasmine plant called Ernest",
  "goat called Gertrude",
  "grizzly bear",
  "guitar",
  "baby otter named Montgomery",
  "dolphin called Phillip",
  "electric eel",
  "quokka named Pablo",
  "T-rex",
  "giraffe",
  "hippopotomus",
  "narwhal called Bryan",
  "unicorn with low self-esteem",
  "leprechaun with trust issues",
  "rhinoceras called Steve",
  "kitten",
  "puppy named Kevin",
  "clown called Roger",
  "honey badger",
  "mole with buck teeth",
];

let end = [
  "playing guitar",
  "eating stale bread left for the ducks",
  "watching paint dry",
  "binging all 25 James Bond movies",
  "trying to run a government and failing",
  "eating chips on the couch and crying at Love Island",
  "totally bossing a poetry slam competition",
  "plotting destruction",
  "contemplating doom",
  "being all diabolical and stuff",
  "doing an accoustic cover of Skrillex",
  "filling in tax returns, badly",
  "just chillin",
  "planning a trip to Vegas",
  "being passive aggressive",
  "OF DOOM",
  "not enjoying the scenery",
  "guilty of witchcraft",
  "2 : the sequal",
  "with an unhealthy addiction to marmalade",
];

// ******************* Band Arrays *******************

let beginningBand = [
  "Furious,",
  "The incompetent,",
  "Super",
  "Crispy,",
  "Smokey,",
  "The filthy,",
  "Lazy,",
  "Politically incorrect,",
  "Cheesy",
  "The super keen,",
  "The malevolent",
  "The ugly,",
  "The good,",
  "The bad,",
  "The unusual,",
  "The royal",
  "The beautiful,",
  "The",
];

let middleBand = [
  "furry",
  "millionaire",
  "crispy",
  "sunshine",
  "naughty",
  "dastardly",
  "perpetual",
  "Orwelllian",
  "in your face",
  "strange",
  "saucy",
  "illusive",
  "underated",
  "custardy",
  "tasty",
  "tasteless",
  "deranged",
  "politically correct",
  "galactic",
  "inter-dimensional",
  "green",
  "lemon flavoured",
  "funky",
  "deeply remorseful",
  "villainous",
  "ugly",
  "beautiful",
  "majestic",
];

let endBand = [
  "ducks",
  "who, what, whens",
  "doctors",
  "winky emojis",
  "beefcake band",
  "aubergine lords",
  "otters",
  "camels",
  "cheesecakes",
  "1984s",
  "scorpions and the who remembers Y2K band",
  "animals",
  "crispies",
  "emo band",
  "milkshake band",
  "paupers",
  "paradox",
  "naughty naughties",
  "lizards and the what is going on band",
  "puffins and the Ian Pomello band",
];

// ******************* Length Variables *******************

let beginningLength = beginning.length;

let middleLength = middle.length;

let endLength = end.length;

let beginningBandLength = beginningBand.length;

let middleBandLength = middleBand.length;

let endBandLength = endBand.length;

// ******************* Randomise function *******************

function randomise(x) {
  const randomNumber = Math.random();

  const randomIndex = randomNumber * 100 * x;

  const rounding = Math.floor(randomIndex);

  const assignedIndex = rounding % x;

  return assignedIndex;
}

//  ******************* Summon function *******************

function summon(
  quoteArrayBeginning,
  quoteArrayMiddle,
  quoteArrayEnd,
  quoteArrayBeginningLength,
  quoteArrayMiddleLength,
  quoteArrayEndLength
) {
  let quantityOfQuotes = document.getElementById("quantity").value;
  let text = "";
  let i;
  for (i = 1; i <= quantityOfQuotes; i++) {
    if (i < quantityOfQuotes) {
      text +=
        '<p class="animated lightSpeedIn">' +
        quoteArrayBeginning[randomise(quoteArrayBeginningLength)] +
        " " +
        quoteArrayMiddle[randomise(quoteArrayMiddleLength)] +
        " " +
        quoteArrayEnd[randomise(quoteArrayEndLength)] +
        "</p>" +
        "<hr>";
    } else {
      text +=
        '<p class="animated lightSpeedIn">' +
        quoteArrayBeginning[randomise(quoteArrayBeginningLength)] +
        " " +
        quoteArrayMiddle[randomise(quoteArrayMiddleLength)] +
        " " +
        quoteArrayEnd[randomise(quoteArrayEndLength)] +
        "</p>";
    }
    document.getElementById("quote").innerHTML = text;
  }
}
