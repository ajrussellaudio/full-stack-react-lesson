use quotesDB;

db.quotes.remove({});

db.quotes.insert([
  { quote: "Beings of light are we. Not this crude matter.", author: "Yoda" },
  { quote: "A ship in harbour is safe — but that is not what ships are built for.", author: "John A. Shedd" },
  { quote: "Nothing is particularly hard if you divide it into small jobs.", author: "Henry Ford" },
  { quote: "If people aren't laughing at your dreams, your dreams aren't big enough.", author: "Grayson Marshall" },
  { quote: "I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do.", author: "Robert Heinlein" },
  { quote: "I look at the many colors before me. I look at my blank canvas. Then, I try to apply colors like words that shape poems, like notes that shape music.", author: "Joan Miró" },
  { quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", author: "Patrick McKenzie" },
  { quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.", author: "Andy Hunt" },
  { quote: "Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.", author: "Unknown" },
  { quote: "We will encourage you to develop the three great virtues of a programmer: laziness, impatience, and hubris.", author: "Larry Wall" },
  { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { quote: "Weeks of programming can save you hours of planning.", author: "Unknown" },
  { quote: "JavaScript had to \"look like Java\" only less so, be Java's dumb kid brother or boy-hostage sidekick. Plus, I had to be done in ten days or something worse than JavaScript would have happened.", author: "Brendan Eich, creator of JavaScript" },
  { quote: "Give someone a program, and you’ll frustrate them for a day. Teach someone to program, and you’ll frustrate them for a lifetime.", author: "Unknown" },
  { quote: "The most damaging phrase in the language is \"We've always done it this way!\"", author: "Rear Admiral Grace Hopper"},
  { quote: "It's easier to ask forgiveness than it is to get permission.", author: "Rear Admiral Grace Hopper" }
]);
