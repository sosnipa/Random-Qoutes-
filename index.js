const quotes = [
  "The only true wisdom is in knowing you know nothing.",

  "The journey of a thousand miles begins with a single step.",

  "The difference between ordinary and extraordinary is that little extra.",

  "A friend is someone who knows you and loves you anyway.",
  "The mind is everything. What you think you become.",

  "Don't judge a book by its cover.",

  "Be the change that you wish to see in the world.",

  "Curiosity is the one and only essential quality of a valuable employee.",

  "The only person you are destined to become is the person you decide to be.",

  "You can't buy happiness, but you can buy ice cream, and that's kind of the same thing.",

  "Without music, life would be a mistake.",

  "There is nothing permanent except change.",

  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",

  "You only live once, but if you live it right, once is enough.",

  "Insanity is doing the same thing over and over again and expecting different results.",

  "The only way to do great work is to love what you do.",

  "If you can dream it, you can do it.",

  "A life is not important except in the impact it has on other lives.",

  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",

  "You miss 100% of the shots you don't take.",

  "The only thing we have to fear is fear itself.",

  "Whether you think you can or you think you can't, you're right.",

  "The unexamined life is not worth living.",

  "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.",

  "Kindness is the language that the deaf can hear and the blind can see.",

  "The only person you are destined to become is the person you decide to be.",

  "There are many ways of going forward, but only one way of standing still.",
  "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",

  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",

  "You don't have to be great to start, but you have to start to be great.",

  "If you want to be happy, be.",

  "The only way to do great work is to love what you do.",

  "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.",

  "The only person you are destined to become is the person you decide to be.",
  "The mind is everything. What you think you become.",

  "The important thing is not to stop questioning. Curiosity has its own reason for existing.",

  "We are all in the gutter, but some of us are looking at the stars.",

  "The only way to do great work is to love what you do.",

  "The unexamined life is not worth living.",

  "The revolution will not be televised.",

  "A house is not a home unless it contains food and love.",

  "The only person you are destined to become is the person you decide to be.",

  "Don't let yesterday take up too much of today.",
];
const usedIndexes = new Set();
const quoteElement = document.getElementById(`quote`);

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear;
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}

//set tells us the uniqueness of something to know if it exists or not
//Math.random randomly generates a value between zero and one usually a decimal number between 0 and 1 ...
//quotes.length tells me how many elements I have in my array
// Math.floor always rounds down the amount
//innerhtml sets whats in between the open and close tag
