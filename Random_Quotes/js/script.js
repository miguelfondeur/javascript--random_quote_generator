//Miguel Fondeur, Lover of all things teamtreehouse.


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
var elem = document.getElementById('loadQuote');
elem.addEventListener("click", function(){
  printQuote();
}, false);

// PrintQuote every 25 seconds
setInterval(printQuote, 25000);


//Global counter variable
var i = 0;


//----------Array of Quote objects
var quotes = [
  {
    quote: '<b>Stay Hungry <br> Stay Foolish</b>',
    source: 'Steve Jobs',
    citation: 'Stanford Commencement Speech',
    year: '2005',
    tag: 'speech',
    type: 'inspirational'
  },
  {
    quote: 'The thing about perfection is that it\'s <b>unknowable</b> It\'s <b>impossible</b> but it\'s also <b>right in front of us</b> all the time.',
    source: 'Kevin Flynn',
    citation: 'Tron Legacy',
    year: '2010',
    tag: 'film',
    type: 'other'
  },
  {
    quote: '<b>We accept</b> the reality of <b>the world</b> with which <b>we are presented</b> it\'s as simple as that.',
    source: 'Christof',
    citation: 'The Truman Show',
    year: '1998',
    tag: 'film',
    type: 'other'
  },
  {
    quote: 'We are the <b>music makers,</b> And we are the <b>dreamers of dreams</b>',
    source: 'Arthur O\'Shaughnessy',
    citation: 'Ode',
    year: '1874',
    tag: 'print',
    type: 'inspirational'
  },
  {
    quote: 'For <b>whatever was written</b> in former days <b>was written for</b> our instruction, that through endurance and through the encouragement of the Scriptures we might have <b>hope</b>',
    source: 'Paul',
    citation: 'Romans 15:4',
    year: '58',
    tag: 'print',
    type: 'spiritual'
  },
  {
    quote: 'The light that burns <b>twice as bright</b> burns <b>half as long</b> and you have burned<br> so very, very brightly',
    source: 'ROY',
    citation: 'Blade Runner',
    year: '1982',
    tag: 'film',
    type: 'other'
  },
  {
    quote: '<b> The true mind</b> can weather all the lies and illustions <br> without being lost. <b> The true heart</b> can touch the poison of hatred<br> without being harmed',
    source: 'Great Lion Turtle',
    citation: 'Avatar - The Last Airbender',
    tag: 'television',
    type: 'inspirational'
  }
];


//----------Get Random Quote
function getRandomQuote() {
  //select a random quote object from the quotes array
  var i = Math.floor(Math.random() * quotes.length );
  //return the randomly selected quote object
  return quotes[i];
}

//----------Create RGB Color
function rgbColor() {
  //Randomly creates rgb color values
  var red   = Math.floor(Math.random() *  100),
      green = Math.floor(Math.random() *  100),
      blue  = Math.floor(Math.random() *  100);
  //Creates Color from rgb values
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  //Returns Color
  return color;
}

//----------Print Quote
function printQuote() {

  //Store current quote object in quote variable
  var quote = quotes[i];
  //Increase counter to cycle through quotes
  i ++;

  //Get Random Quote if counter > quotes.length
  if (i > quotes.length ) {
    //call the getRandomQuote function and store the returned quote object in a variable
    quote = getRandomQuote();
  }

  // construct a string using the different properties of the quote object using the following HTML template
  var string = '';
  //Quote
  string += '<p class="quote">' + quote.quote + '</p>';
  //Source
  string += '<p class="source">' + quote.source ;
  //Citation
  if ( quote.citation ) {
    string += '<span class="citation">' + quote.citation + '</span>';
  }
  //Year
  if ( quote.year ) {
    string += '<span class="year">' + quote.year + '</span>';
  }
  //Close Source
  string += '</p>';

  //display the final HTML string to the page and print Random Color
  document.body.style.backgroundColor = rgbColor();
  document.getElementById('quote-box').innerHTML = string;
}
