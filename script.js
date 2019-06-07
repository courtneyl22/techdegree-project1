/******************************************
Project 1 - BGM Quote Generator
******************************************/

//here are the chosen quotes... Black girl magic.
var quotes = [
  {
    quote: 'You are your best thing.',
    source: 'Toni Morrison',
    tags: '#empowerment #blackgirlmagic'
  },
  { 
    quote: "I was built this way for a reason, so I'm going to use it.",
    source: 'Simone Biles',
    citation: 'TeenVogue',
    year: '2016',
    tags:'#gifted #blackgirlmagic'
  },
  {
    quote: 'Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.',
    source: 'Audre Lourde',
    tags: '#self-care #blackgirlmagic'
  },
  {
    quote: 'Even if it makes others uncomfortable, I will love who I am.',
    source: 'Janelle Monáe',
    citation: "Q.U.E.E.N. lyrics",
    year: '2013',
    tags: '#self-love #blackgirlmagic'
  },
  {
    quote: 'What I know for sure is that speaking your truth is the most powerful tool we all have.',
    source: 'Oprah Winfrey',
    citation: 'Golden Globes Acceptance Speech',
    year: '2018',
    tags: '#metoo #blackgirlmagic'
  },
  {
    quote: "It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else's job to take care of me but me.",
    source: 'Beyoncé',
    tags: '#carefree #blackgirlmagic'
  },
  {
    quote: "I thrive on obstacles. If I'm told that it can't be told, then I push harder.",
    source: 'Issa Rae',
    tags: '#perserverant #blackgirlmagic'
  },
];

//colors I would like for the background.
let colors = ['#805500', '#332100', '#663300', '#4d1b00', '#996633', '#4d3319'];

//creating randomQuote function.
function getRandomQuote() {
  var insQuotes = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes [insQuotes];
  return randomQuote;
}

//creating randomColor function
function getRandomColor() {
  var bgmColor = Math.floor(Math.random() * colors.length);
  var randomColor = colors[bgmColor];
  return randomColor;
}

//Creating the printQuote function. 
function printQuote() {
  let BGM = getRandomQuote();
  htmlTemplate = ' ';

  //using the HTML template to build the HTML string. 
  htmlTemplate = "<p class = 'quote'>" + BGM.quote + "</p>";
  htmlTemplate += "<p class = 'source'>" + BGM.source;

  //if statements to check the citation, year and tags properties.
  if (typeof BGM.citation != 'undefined') {
    htmlTemplate += "<span class = 'citation'>" + BGM.citation + "</span>"
  };
  if (typeof BGM.year != 'undefined') {
    htmlTemplate += "<span class = 'year'>" + BGM.year + "</span>"
  };
  if (typeof BGM.tags != 'undefined') {
    htmlTemplate += "<span class = 'tags'>" + BGM.tags + "</span></p>"
  };

  //attaching the random color to CSS.
  const resultColor = getRandomColor();
  document.body.style.backgroundColor = resultColor;
  
  //setting innerHTML to the HTML string.
  document.getElementById('quote-box').innerHTML = htmlTemplate;
}

//creating the setInterval function.
function refresh() {
  autoRefresh = setInterval(printQuote, 5000);
}

refresh();

//DO NOT CHANGE LINE OF CODE BELOW.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
