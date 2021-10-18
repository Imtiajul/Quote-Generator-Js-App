/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
const quotes = [
   {
      quote: 'Few are those who see with their own eyes and feel with their own hearts.',
      source: 'Albert Einstein',
      citation: 'Goalcast',
      year: 1915,
      tag: 'Philosophy'
   },
   {
      quote: 'Although I cannot move and I have to speak through a computer, in my mind I am free.',
      source: 'Stephen Hawking',
      citation: 'Quotabulary',
      year: 2007,
      tag: 'Thought'
   },
   {
      quote: 'All religion, arts and sciences are branches of the same tree',
      source: 'Albert Einstein',
      citation: 'Goalcast',
      year: 1918,
      tag: 'Great Talk'
   },
   {
      quote: 'The individual is ephemeral, races and nations come and pass away, but man remains.',
      source: 'Nikola Tesla',
      citation: 'Quotabulary',
      year: 1995,
      tag: 'Great Talk'
   },
   {
      quote: 'A good gulp of hot whiskey at bedtime―it’s not very scientific, but it helps.',
      source: 'Sir Alexander Fleming',
      citation: 'Quotabulary',
      year: '',
      tag: 'Thought'
   },
   {
      quote: 'Life is like riding a bicycle. To keep balance you must keep moving',
      source: 'Albert Einstein',
      citation: 'Goalcast',
      year: 1919,
      tag: 'Philosophy'
   },
   {
      quote: 'If I have seen further it is by standing on the shoulders of Giants.',
      source: 'Issac Newton',
      citation: '',
      year: 1880,
      tag: 'Thought'
   },
   {
      quote: 'Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.',
      source: 'Nikola Tesla',
      citation: 'Hellobio',
      year: 1950,
      tag: 'Philosophy'
   },
   {
      quote: 'I love to travel, but I hate to arrive',
      source: 'Albert Einstein',
      citation: 'Goalcast',
      year: '',
      tag: 'Philosophy'
   },
   {
      quote: 'I speak to everyone in the same way, whether he is the garbage man or the president of the university',
      source: 'Albert Einstein',
      citation: 'Goalcast',
      year: '',
      tag: 'Thought'
   },
   {
      quote: 'Impossible only means that you haven’t found the solution yet.',
      source: 'Anonymous',
      citation: '',
      year: 'Goalcast',
      tag: 'Thought'
   },
   {
      quote: 'Every brilliant experiment, like every great work of art, starts with an act of imagination.',
      source: 'Jonah Lehrer',
      citation: 'Hellobio',
      year: 2021,
      tag: 'Philosophy'
   },
   {
      quote: 'It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.',
      source: 'Georg C. Lichtenberg',
      citation: 'Famousscientists',
      year: '1742 to 1799',
      tag: 'Philosophy'
   },
];
const bgContainer = ['indigo', 'darkblue', 'cadatblue', 'cornflowerblue', 'darkcyan', 'darkmagenta', 'darkgoldenrod', 'darkorchid', 'darkslateblue', 'firebrick', 'darkslategrey', 'hotpink', 'indianred', 'midnightblue', 'orchid', 'navy', 'transparent'];
const containerTag = document.querySelector('.container');

// catching the element
const btnShowAnotherQ = document.querySelector('#load-quote');
const quoteTag = document.querySelector('.quote');
const quoteSource = document.querySelector('.source');
const quoteCitation = document.querySelector('.citation');
const quoteYear = document.querySelector('.year');

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(qLength) {
   return Math.floor(Math.random() * (qLength));
}
/***
 * `printQuote` function
 ***/
function printQuote(pQuotes) {
   const randomNumber = getRandomQuote(pQuotes.length);
   return pQuotes[randomNumber];
}

// firing element to HTML
function printToHTML(getQuote) {
const bgRandomIndex = getRandomQuote(bgContainer.length);

containerTag.style.backgroundColor = bgContainer[bgRandomIndex];

   // get the quote element
   //  const getQuote = printQuote();
   // console.log(getQuote);
   const quoteProperty = getQuote.quote;
   quoteTag.innerText = quoteProperty;

   quoteSource.childNodes[0].data = getQuote.source;

   if (getQuote.year) {
      quoteYear.textContent = getQuote.year;
   } else {
      quoteYear.textContent = 'unknown';
   }

   if (getQuote.citation) {
      quoteCitation.innerText = getQuote.citation;
   } else {
      quoteCitation.innerText = 'unknown';
   }
}
// tag action
const tags = document.querySelector('#tags');
// sorting tags from quote 
const philosophyTags = quotes.filter(function (quote) {
   return quote.tag.includes('Philosophy');
});
const thougthTags = quotes.filter(function (quote) {
   return quote.tag.includes('Thought');
})
const greatTalkTags = quotes.filter(function (quote) {
   return quote.tag.includes('Great Talk');
})

/***
 * click event listener for the print quote button
 ***/
btnShowAnotherQ.addEventListener('click', function (event) {
   console.log(tags.value);
   const tagValue = tags.value;
   if (tagValue == 'default') {
      const allQuotes = printQuote(quotes);
      printToHTML(allQuotes);
   } else if (tagValue == 'philosophy') {
      const philosophyQuotes = printQuote(philosophyTags);
      printToHTML(philosophyQuotes);
   } else if (tagValue == 'thought') {
      const thougthQuotes = printQuote(thougthTags);
      printToHTML(thougthQuotes);
   } else if (tagValue == 'great-talk') {
      const greatTalkQuotes = printQuote(greatTalkTags);
      printToHTML(greatTalkQuotes);
   }
});

setInterval(action, 3000); // 60000 = 1 minute