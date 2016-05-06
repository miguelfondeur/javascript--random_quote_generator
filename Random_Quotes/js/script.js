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
    source: 'Apostle Paul',
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

};
