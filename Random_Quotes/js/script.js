'use strict';

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create an array of JavaScript objects to hold the data for your quotes.
var quotes = [
  {
    quote: 'Stay Hungry. Stay Foolish.',
    source: 'Steve Jobs',
    citation: 'Stanford Commencement Speech',
    year: '2005'
  },
  {
    quote: 'The thing about perfection is that it\'s unknowable. It\'s impossible, but it\'s also right in front of us all the time.',
    source: 'Kevin Flynn',
    citation: 'Tron Legacy',
    year: '2010'
  },
  {
    quote: 'We accept the reality of the world with which we are presented, it\'s as simple as that.',
    source: 'Christof',
    citation: 'The Truman Show',
    year: '1998'
  },
  {
    quote: 'We are the music makers, And we are the dreamers of dreams...',
    source: 'Arthur O\'Shaughnessy',
    citation: 'Ode',
    year: '1874'
  },
  {
    quote: 'For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.',
    source: 'Saul of Tarsus',
    citation: 'Romans 15:4',
    year: '58'
  },
  {
    quote: 'The light that burns twice as bright burns half as long and you have burned so very, very brightly',
    source: 'ROY',
    citation: 'Blade Runner',
    year: '1982'
  }
];

// Create a function named getRandomQuote which:
function getRandomQuote() {
  //select a random quote object from the quotes array
  var i = Math.floor(Math.random() * quotes.length );
  //return the randomly selected quote object
  return quotes[i];
};

// Create a function named printQuote
function printQuote() {
  //calls the getRandomQuote function and stores the returned quote object in a variable
  var quote = getRandomQuote();

  // construct a string using the different properties of the quote object using the following HTML template
  var string = '';
  //Quote
  string += '<p class="quote">' + quote.quote + '</p>';
  //Source
  string += '<p class="source">' + quote.source ;
  //Citation
  string += '<span class="citation">' + quote.citation + '</span>';
  //Year
  string += '<span class="year">' + quote.year + '</span>';
  //Close Source
  string += '</p>';

  //display the final HTML string to the page
  document.getElementById('quote-box').innerHTML = string;
};
