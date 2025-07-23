
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const kerdesSzoveg = document.getElementById("kerdesSzoveg");
  const valaszGombok = document.querySelectorAll(".valasz-gomb");
  const kerdesBlokk = document.getElementById("kerdes-blokk");
const pipak2 = document.getElementById("pipak2");
  const pipakElem = document.getElementById("pipak");
  const pontokElem = document.getElementById("pontokSzama");
  const eletekElem = document.getElementById("eletek");
  const ujrainditGomb = document.getElementById("ujrainditGomb");
const vegeSzoveg = document.getElementById("vegeSzoveg");
const eredmenyPont = document.getElementById("eredmenyPont");
const vegsoPontszam = document.getElementById("vegsoPontszam");
const kerdessz = document.getElementById("kerdessz");

const kerdessz2 = document.getElementById("kerdessz2");
const kerdessz3 = document.getElementById("kerdessz3");
const kerdessz4 = document.getElementById("kerdessz4");
const kerdekep = document.getElementById("kerdekep");
const szabalyCim = document.getElementById("szabalyCim");
const szabalyLista = document.getElementById("szabalyLista");
const szabaly1 = document.getElementById("szabaly1");
const szabaly2 = document.getElementById("szabaly2");

const gombos1 = document.getElementById("gombos1");
const gombos2 = document.getElementById("gombos2");
const gombos3 = document.getElementById("gombos3");
const gombos4 = document.getElementById("gombos4");
const pipahozzaadas = document.getElementById("pipahozzaadas");
const pipahozzaadasertek = document.getElementById("pipahozzaadasertek");
const pipalevonas = document.getElementById("pipalevonas");
const ponthozzaadas = document.getElementById("ponthozzaadas");
const eletlevonas = document.getElementById("eletlevonas");
const elethozzaadas = document.getElementById("elethozzaadas");
    const backgroundAudio = new Audio('./audio/background.mp3');
    const goodSound = new Audio('./audio/good.mp3');
goodSound.volume = 0.6;
const wrongSound = new Audio('./audio/wrong.mp3');
wrongSound.volume = 0.6;

  // Kérdések tömbje
  const kerdesek = [
   {
    kerdes: "Which is the longest river in the world?",
    valaszok: ["Amazon", "Yangtze", "Nile", "Yellow River"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which planet is closest to the Sun?",
    valaszok: ["Mercury", "Venus", "Earth", "Mars"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the capital of France?",
    valaszok: ["Paris", "Rome", "Berlin", "Madrid"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who painted the Mona Lisa?",
    valaszok: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which gas do plants absorb from the atmosphere?",
    valaszok: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the largest ocean on Earth?",
    valaszok: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
    helyesIndex: 3,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who discovered gravity?",
    valaszok: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the hardest natural substance?",
    valaszok: ["Diamond", "Gold", "Iron", "Quartz"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which language has the most native speakers?",
    valaszok: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which animal is known as the king of the jungle?",
    valaszok: ["Tiger", "Elephant", "Lion", "Giraffe"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many continents are there?",
    valaszok: ["5", "6", "7", "8"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the boiling point of water in Celsius?",
    valaszok: ["90°C", "100°C", "110°C", "120°C"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the tallest mountain in the world?",
    valaszok: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mont Blanc"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which organ is responsible for pumping blood?",
    valaszok: ["Brain", "Liver", "Heart", "Lungs"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who wrote 'Romeo and Juliet'?",
    valaszok: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is H2O commonly known as?",
    valaszok: ["Salt", "Water", "Hydrogen", "Oxygen"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which country is famous for the Great Wall?",
    valaszok: ["India", "Japan", "China", "Mongolia"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many legs does a spider have?",
    valaszok: ["6", "8", "10", "12"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the smallest planet in our solar system?",
    valaszok: ["Mars", "Mercury", "Venus", "Pluto"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which instrument has 88 keys?",
    valaszok: ["Guitar", "Violin", "Piano", "Saxophone"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which country is known for the Eiffel Tower?",
    valaszok: ["Italy", "France", "Germany", "Spain"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which is the largest desert in the world?",
    valaszok: ["Gobi", "Sahara", "Antarctic", "Kalahari"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which element has the chemical symbol O?",
    valaszok: ["Osmium", "Oxygen", "Ozone", "Oxide"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What color do you get when you mix red and white?",
    valaszok: ["Pink", "Orange", "Purple", "Gray"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which famous scientist developed the theory of relativity?",
    valaszok: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Marie Curie"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
   {
    kerdes: "What is the main language spoken in Brazil?",
    valaszok: ["Spanish", "Portuguese", "English", "French"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which continent is the Sahara Desert located on?",
    valaszok: ["Asia", "Australia", "Africa", "South America"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which part of the plant conducts photosynthesis?",
    valaszok: ["Root", "Stem", "Leaf", "Flower"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which ocean lies between Africa and Australia?",
    valaszok: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many bones are in the human body?",
    valaszok: ["206", "201", "210", "199"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the freezing point of water in Celsius?",
    valaszok: ["-10°C", "0°C", "5°C", "10°C"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which is the largest mammal?",
    valaszok: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who was the first person to walk on the Moon?",
    valaszok: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the chemical formula for table salt?",
    valaszok: ["NaCl", "H2O", "CO2", "KCl"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the currency of Japan?",
    valaszok: ["Yen", "Won", "Dollar", "Euro"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which famous ship sank in 1912?",
    valaszok: ["Britannic", "Lusitania", "Titanic", "Queen Mary"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many colors are in a rainbow?",
    valaszok: ["5", "6", "7", "8"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the capital of Australia?",
    valaszok: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    helyesIndex: 3,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which blood type is known as the universal donor?",
    valaszok: ["O+", "O-", "AB+", "A+"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What do bees collect from flowers?",
    valaszok: ["Water", "Pollen", "Nectar", "Leaves"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many days are there in a leap year?",
    valaszok: ["365", "366", "364", "367"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the main ingredient in sushi?",
    valaszok: ["Fish", "Seaweed", "Rice", "Soy sauce"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the capital of Canada?",
    valaszok: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which natural disaster is measured with the Richter scale?",
    valaszok: ["Hurricane", "Tornado", "Earthquake", "Flood"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which vitamin do we get from sunlight?",
    valaszok: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    helyesIndex: 3,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the largest internal organ in the human body?",
    valaszok: ["Liver", "Lungs", "Heart", "Kidneys"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who invented the light bulb?",
    valaszok: ["Thomas Edison", "Nikola Tesla", "Alexander Bell", "James Watt"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the main gas found in the air we breathe?",
    valaszok: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What planet is known as the Red Planet?",
    valaszok: ["Mars", "Venus", "Jupiter", "Saturn"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which instrument is used to look at stars and planets?",
    valaszok: ["Microscope", "Periscope", "Telescope", "Binoculars"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
   {
    kerdes: "Which metal is liquid at room temperature?",
    valaszok: ["Gold", "Iron", "Mercury", "Aluminum"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which continent has the most countries?",
    valaszok: ["Asia", "Africa", "Europe", "South America"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the main ingredient in guacamole?",
    valaszok: ["Tomato", "Avocado", "Cucumber", "Pepper"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the square root of 64?",
    valaszok: ["6", "7", "8", "9"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the capital city of Germany?",
    valaszok: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which planet has a ring system?",
    valaszok: ["Mars", "Earth", "Saturn", "Mercury"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many sides does a hexagon have?",
    valaszok: ["5", "6", "7", "8"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who was the first president of the United States?",
    valaszok: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which month has 28 days in a common year?",
    valaszok: ["February", "April", "June", "All of them"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which element has the atomic number 1?",
    valaszok: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the largest island in the world?",
    valaszok: ["Greenland", "Australia", "Borneo", "New Guinea"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is a group of lions called?",
    valaszok: ["Flock", "Pack", "Pride", "Herd"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many players are on a soccer team on the field?",
    valaszok: ["9", "10", "11", "12"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which planet is known for its large red spot?",
    valaszok: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which city is known as 'The Big Apple'?",
    valaszok: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What does 'www' stand for in a website address?",
    valaszok: ["World Wide Web", "Web World Wide", "Wide World Web", "Web Web Wide"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many hours are in a week?",
    valaszok: ["168", "144", "156", "160"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the name of the fairy in Peter Pan?",
    valaszok: ["Silvermist", "Tinker Bell", "Fawn", "Rosetta"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which sea creature has three hearts?",
    valaszok: ["Shark", "Octopus", "Dolphin", "Whale"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the most spoken language in the world?",
    valaszok: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the main function of red blood cells?",
    valaszok: ["Fight infection", "Clot blood", "Carry oxygen", "Digest fat"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which bird is known for mimicking sounds?",
    valaszok: ["Parrot", "Eagle", "Pigeon", "Swan"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the smallest country in the world?",
    valaszok: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many strings does a standard violin have?",
    valaszok: ["4", "5", "6", "7"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which organ helps filter blood in the human body?",
    valaszok: ["Heart", "Lungs", "Liver", "Kidneys"],
    helyesIndex: 3,
    kep: "basic.jpg"
  },
   {
    kerdes: "What color is chlorophyll?",
    valaszok: ["Green", "Blue", "Red", "Yellow"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which instrument has strings and is played with a bow?",
    valaszok: ["Flute", "Drum", "Violin", "Trumpet"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the capital of Italy?",
    valaszok: ["Venice", "Rome", "Naples", "Florence"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many planets are in the solar system?",
    valaszok: ["7", "8", "9", "10"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is a baby frog called?",
    valaszok: ["Tadpole", "Froglet", "Spawn", "Chick"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which country is known for the pyramids?",
    valaszok: ["Mexico", "India", "Greece", "Egypt"],
    helyesIndex: 3,
    kep: "basic.jpg"
  },
  {
    kerdes: "What shape has four equal sides and four right angles?",
    valaszok: ["Rectangle", "Trapezoid", "Rhombus", "Square"],
    helyesIndex: 3,
    kep: "basic.jpg"
  },
  {
    kerdes: "Who wrote 'Harry Potter'?",
    valaszok: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "C.S. Lewis"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the symbol for gold on the periodic table?",
    valaszok: ["Au", "Ag", "Go", "Gd"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which is the fastest land animal?",
    valaszok: ["Lion", "Horse", "Cheetah", "Leopard"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which country has the most people?",
    valaszok: ["India", "USA", "China", "Indonesia"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "What do you call a word that is the same forwards and backwards?",
    valaszok: ["Rhyme", "Palindrome", "Synonym", "Anagram"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many teeth does an adult human usually have?",
    valaszok: ["28", "30", "32", "34"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which planet is known for having the most moons?",
    valaszok: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "In what city is the Statue of Liberty located?",
    valaszok: ["Washington D.C.", "New York City", "Boston", "Philadelphia"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the name of our galaxy?",
    valaszok: ["Andromeda", "The Solar System", "Milky Way", "Nebula"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which gas do humans exhale?",
    valaszok: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the name of the longest bone in the human body?",
    valaszok: ["Humerus", "Femur", "Tibia", "Spine"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the process of water turning into vapor called?",
    valaszok: ["Condensation", "Freezing", "Evaporation", "Melting"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which famous scientist was born in Pisa, Italy?",
    valaszok: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Archimedes"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "How many hearts does an octopus have?",
    valaszok: ["1", "2", "3", "4"],
    helyesIndex: 2,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which is the largest land carnivore?",
    valaszok: ["Tiger", "Polar Bear", "Grizzly Bear", "Lion"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What is the capital city of Spain?",
    valaszok: ["Madrid", "Barcelona", "Seville", "Valencia"],
    helyesIndex: 0,
    kep: "basic.jpg"
  },
  {
    kerdes: "Which U.S. state is known as the Sunshine State?",
    valaszok: ["California", "Florida", "Arizona", "Texas"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
  {
    kerdes: "What kind of animal is a Komodo dragon?",
    valaszok: ["Mammal", "Reptile", "Bird", "Fish"],
    helyesIndex: 1,
    kep: "basic.jpg"
  },
   {
    kerdes: "Which is the longest river in the world?",
    valaszok: ["Amazon", "Yangtze", "Nile", "Yellow River"],
    helyesIndex: 2,
    kep: "quiz1.jpg"
  },
  {
    kerdes: "Which planet is closest to the Sun?",
    valaszok: ["Mercury", "Venus", "Earth", "Mars"],
    helyesIndex: 0,
    kep: "quiz2.jpg"
  },
  {
    kerdes: "Which is the largest ocean?",
    valaszok: ["Atlantic", "Pacific", "Indian", "Arctic"],
    helyesIndex: 1,
    kep: "quiz3.jpg"
  },
  {
    kerdes: "What is the actual color of the Sun?",
    valaszok: ["Yellow", "White", "Red", "Orange"],
    helyesIndex: 1,
    kep: "quiz4.jpg"
  },
  {
    kerdes: "In what year was the Moon landing?",
    valaszok: ["1965", "1969", "1972", "1959"],
    helyesIndex: 1,
    kep: "quiz5.jpg"
  },
  {
    kerdes: "What is the largest continent on Earth?",
    valaszok: ["Africa", "Europe", "Asia", "South America"],
    helyesIndex: 2,
    kep: "quiz6.jpg"
  },
  {
    kerdes: "What is the chemical formula for water?",
    valaszok: ["H2O", "CO2", "O2", "NaCl"],
    helyesIndex: 0,
    kep: "quiz7.jpg"
  },
  {
    kerdes: "Who wrote 'Romeo and Juliet'?",
    valaszok: ["Molière", "Shakespeare", "Goethe", "Dante"],
    helyesIndex: 1,
    kep: "quiz8.jpg"
  },
  {
    kerdes: "What is the largest organ in the human body?",
    valaszok: ["Lungs", "Liver", "Skin", "Heart"],
    helyesIndex: 2,
    kep: "quiz9.jpg"
  },
  {
    kerdes: "Which country's capital is Tokyo?",
    valaszok: ["China", "South Korea", "Japan", "Thailand"],
    helyesIndex: 2,
    kep: "quiz10.jpg"
  },
  {
    kerdes: "Which is the fastest land animal?",
    valaszok: ["Rhinoceros", "Cheetah", "Leopard", "Lion"],
    helyesIndex: 1,
    kep: "quiz11.jpg"
  },
  {
    kerdes: "Which city is famous for the Statue of Liberty?",
    valaszok: ["London", "New York", "Paris", "Rome"],
    helyesIndex: 1,
    kep: "quiz12.jpg"
  },
  {
    kerdes: "Which country is famous for its kangaroos?",
    valaszok: ["New Zealand", "Australia", "Canada", "South Africa"],
    helyesIndex: 1,
    kep: "quiz13.jpg"
  },
  {
    kerdes: "Which subatomic particle has a negative charge?",
    valaszok: ["Proton", "Neutron", "Electron", "Photon"],
    helyesIndex: 2,
    kep: "quiz14.jpg"
  },
  {
    kerdes: "What genre is 'Theatre in the Night'?",
    valaszok: ["Drama", "Comedy", "Thriller", "Sci-fi"],
    helyesIndex: 0,
    kep: "quiz15.jpg"
  },
  {
    kerdes: "Who invented the light bulb?",
    valaszok: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Galileo Galilei"],
    helyesIndex: 1,
    kep: "quiz16.jpg"
  },
  {
    kerdes: "What is the largest planet in the solar system?",
    valaszok: ["Saturn", "Jupiter", "Neptune", "Earth"],
    helyesIndex: 1,
    kep: "quiz17.jpg"
  },
  {
    kerdes: "What is the official currency of the European Union?",
    valaszok: ["Pound", "Euro", "Dollar", "Forint"],
    helyesIndex: 1,
    kep: "quiz18.jpg"
  },
  {
    kerdes: "Which is the tallest mountain on Earth?",
    valaszok: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
    helyesIndex: 1,
    kep: "quiz19.jpg"
  },
  {
    kerdes: "In what year did the Berlin Wall fall?",
    valaszok: ["1989", "1991", "1985", "1995"],
    helyesIndex: 0,
    kep: "quiz20.jpg"
  },
  {
    kerdes: "What is the chemical symbol for hydrogen?",
    valaszok: ["H", "He", "Hg", "Ho"],
    helyesIndex: 0,
    kep: "quiz21.jpg"
  },
  {
    kerdes: "On which continent is the Sahara Desert located?",
    valaszok: ["Asia", "Africa", "South America", "Australia"],
    helyesIndex: 1,
    kep: "quiz22.jpg"
  },
  {
    kerdes: "In what year was the first modern Olympic Games?",
    valaszok: ["1896", "1900", "1888", "1912"],
    helyesIndex: 0,
    kep: "quiz23.jpg"
  },
  {
    kerdes: "What color is an emerald?",
    valaszok: ["Red", "Blue", "Green", "Yellow"],
    helyesIndex: 2,
    kep: "quiz24.jpg"
  },
  {
    kerdes: "Who painted the Mona Lisa?",
    valaszok: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    helyesIndex: 1,
    kep: "quiz25.jpg"
  },
  {
    kerdes: "In which country is Machu Picchu located?",
    valaszok: ["Peru", "Chile", "Brazil", "Argentina"],
    helyesIndex: 0,
    kep: "quiz26.jpg"
  },
  {
    kerdes: "What is the strongest acid?",
    valaszok: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Hydrofluoric acid"],
    helyesIndex: 3,
    kep: "quiz27.jpg"
  },
  {
    kerdes: "What is the smallest bone in the human body?",
    valaszok: ["Femur", "Anvil", "Stirrup", "Sesamoid"],
    helyesIndex: 2,
    kep: "quiz28.jpg"
  },
  {
    kerdes: "Which direction does the Earth rotate when viewed from the Northern Hemisphere?",
    valaszok: ["Clockwise", "Counterclockwise", "It doesn't rotate", "Random"],
    helyesIndex: 1,
    kep: "quiz29.jpg"
  },
  {
    kerdes: "What year was the first human spaceflight?",
    valaszok: ["1961", "1957", "1969", "1971"],
    helyesIndex: 0,
    kep: "quiz30.jpg"
  },
  {
  question: "Which season comes after spring?",
  answers: ["Autumn", "Summer", "Winter", "Monsoon"],
  correctIndex: 1,
  image: "quiz31.jpg"
},
{
  question: "What type of plant is a cactus?",
  answers: ["Woody", "Succulent", "Herbaceous", "Moss"],
  correctIndex: 1,
  image: "quiz32.jpg"
},
{
  question: "Who was the first president of Hungary?",
  answers: ["János Áder", "Ferenc Mádl", "Imre Nagy", "Mihály Károlyi"],
  correctIndex: 3,
  image: "quiz33.jpg"
},
{
  question: "What is the main component of an ant colony?",
  answers: ["Queen", "Worker", "Drone", "King"],
  correctIndex: 0,
  image: "quiz34.jpg"
},
{
  question: "Which artist is associated with Cubism?",
  answers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
  correctIndex: 0,
  image: "quiz35.jpg"
},
{
  question: "Which element has the highest atomic number in the periodic table?",
  answers: ["Uranium", "Oganesson", "Plutonium", "Radon"],
  correctIndex: 1,
  image: "quiz36.jpg"
},
{
  question: "What is the largest muscle in the human body?",
  answers: ["Quadriceps", "Gluteus", "Calf muscle", "Abdominal muscle"],
  correctIndex: 1,
  image: "quiz37.jpg"
},
{
  question: "In which country is the Taj Mahal located?",
  answers: ["Pakistan", "India", "Bangladesh", "Nepal"],
  correctIndex: 1,
  image: "quiz38.jpg"
},
{
  question: "In which year was the United Nations founded?",
  answers: ["1945", "1918", "1939", "1950"],
  correctIndex: 0,
  image: "quiz39.jpg"
},
{
  question: "What is the unit of frequency for sound?",
  answers: ["Hertz", "Decibel", "Newton", "Pascal"],
  correctIndex: 0,
  image: "quiz40.jpg"
},
{
  question: "In which year did Hungary free itself from the Austro-Hungarian Monarchy?",
  answers: ["1918", "1920", "1914", "1939"],
  correctIndex: 0,
  image: "quiz41.jpg"
},
{
  question: "Which is the largest planet in the Solar System?",
  answers: ["Earth", "Saturn", "Jupiter", "Neptune"],
  correctIndex: 2,
  image: "quiz42.jpg"
},
{
  question: "Who wrote 'The Paul Street Boys'?",
  answers: ["Mór Jókai", "Ferenc Molnár", "Zsigmond Móricz", "Dezső Kosztolányi"],
  correctIndex: 1,
  image: "quiz43.jpg"
},
{
  question: "What kind of animal is a cockatoo?",
  answers: ["Bird", "Fish", "Mammal", "Amphibian"],
  correctIndex: 0,
  image: "quiz44.jpg"
},
{
  question: "In which city is the famous Colosseum located?",
  answers: ["Rome", "Athens", "Paris", "Berlin"],
  correctIndex: 0,
  image: "quiz45.jpg"
},
{
  question: "What is the freezing point of water in Celsius?",
  answers: ["0", "32", "-1", "100"],
  correctIndex: 0,
  image: "quiz46.jpg"
},
{
  question: "Who was the first president of the USA?",
  answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
  correctIndex: 1,
  image: "quiz47.jpg"
},
{
  question: "What material is a diamond made of?",
  answers: ["Carbon", "Iron", "Gold", "Silver"],
  correctIndex: 0,
  image: "quiz48.jpg"
},
{
  question: "Which plant produces coffee beans?",
  answers: ["Coffea", "Camellia", "Cactus", "Citrus"],
  correctIndex: 0,
  image: "quiz49.jpg"
},
{
  question: "In which country is the Grand Canyon located?",
  answers: ["Canada", "USA", "Mexico", "Brazil"],
  correctIndex: 1,
  image: "quiz50.jpg"
},
{
  question: "What is Shakespeare’s most famous drama?",
  answers: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
  correctIndex: 0,
  image: "quiz51.jpg"
},
{
  question: "What field of science is genetics?",
  answers: ["Biology", "Chemistry", "Physics", "Mathematics"],
  correctIndex: 0,
  image: "quiz52.jpg"
},
{
  question: "Which country’s flag is red-white-green horizontally?",
  answers: ["Hungary", "Italy", "Mexico", "Bulgaria"],
  correctIndex: 3,
  image: "quiz53.jpg"
},
{
  question: "What is the fastest land animal?",
  answers: ["Lion", "Leopard", "Cheetah", "Zebra"],
  correctIndex: 2,
  image: "quiz54.jpg"
},
{
  question: "What material is paper made from?",
  answers: ["Wood", "Stone", "Metals", "Plastic"],
  correctIndex: 0,
  image: "quiz55.jpg"
},
{
  question: "What is the approximate height of the Eiffel Tower?",
  answers: ["324 meters", "280 meters", "150 meters", "400 meters"],
  correctIndex: 0,
  image: "quiz56.jpg"
},
{
  question: "Which continent has the smallest area?",
  answers: ["Europe", "Australia", "Antarctica", "Africa"],
  correctIndex: 1,
  image: "quiz57.jpg"
},
{
  question: "What is the true shape of the Earth?",
  answers: ["Sphere", "Ellipse", "Geoid", "Cube"],
  correctIndex: 2,
  image: "quiz58.jpg"
},
{
  question: "Who invented the light bulb?",
  answers: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
  correctIndex: 1,
  image: "quiz59.jpg"
},
{
  question: "Which animal is not a mammal?",
  answers: ["Crocodile", "Dolphin", "Elephant", "Lion"],
  correctIndex: 0,
  image: "quiz60.jpg"
},
{
  kerdes: "Which country's capital is Canberra?",
  valaszok: ["Australia", "New Zealand", "Canada", "South Africa"],
  helyesIndex: 0,
  kep: "quiz61.jpg"
},
{
  kerdes: "Which is the longest bone in the human body?",
  valaszok: ["Humerus", "Femur", "Tibia", "Clavicle"],
  helyesIndex: 1,
  kep: "quiz62.jpg"
},
{
  kerdes: "Which gas makes up the largest part of Earth's atmosphere?",
  valaszok: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
  helyesIndex: 0,
  kep: "quiz63.jpg"
},
{
  kerdes: "When was YouTube officially launched?",
  valaszok: ["2003", "2005", "2007", "2009"],
  helyesIndex: 1,
  kep: "quiz64.jpg"
},
{
  kerdes: "What is the nickname of the US state known for the Statue of Liberty?",
  valaszok: ["California", "Florida", "New York", "Illinois"],
  helyesIndex: 2,
  kep: "quiz65.jpg"
},
{
  kerdes: "Which is the largest land predator?",
  valaszok: ["Polar bear", "Lion", "Tiger", "Bear"],
  helyesIndex: 0,
  kep: "quiz66.jpg"
},
{
  kerdes: "Which planet is famous for its rings?",
  valaszok: ["Jupiter", "Saturn", "Mars", "Uranus"],
  helyesIndex: 1,
  kep: "quiz67.jpg"
},
{
  kerdes: "Who wrote the novel 'War and Peace'?",
  valaszok: ["Leo Tolstoy", "Dostoevsky", "Chekhov", "Gogol"],
  helyesIndex: 0,
  kep: "quiz68.jpg"
},
{
  kerdes: "Who founded YouTube?",
  valaszok: [
    "Mark Zuckerberg, Larry Page, Steve Chen",
    "Steve Chen, Chad Hurley, Jawed Karim",
    "Elon Musk, Steve Jobs, Bill Gates",
    "Sergey Brin, Jeff Bezos, Steve Wozniak"
  ],
  helyesIndex: 1,
  kep: "quiz69.jpg"
},
{
  kerdes: "What is the main component of solar panels?",
  valaszok: ["Silicon", "Gold", "Copper", "Iron"],
  helyesIndex: 0,
  kep: "quiz70.jpg"
},
{
  kerdes: "What is the chemical symbol for gold?",
  valaszok: ["Au", "Ag", "Fe", "Pb"],
  helyesIndex: 0,
  kep: "quiz71.jpg"
},
{
  kerdes: "What was the first video uploaded to YouTube?",
  valaszok: ["Me at the zoo", "Hello World", "Funny Cat", "My First Vlog"],
  helyesIndex: 0,
  kep: "quiz72.jpg"
},
{
  kerdes: "What is the smallest unit of inheritance?",
  valaszok: ["DNA", "Cell", "Chromosome", "Genetic code"],
  helyesIndex: 3,
  kep: "quiz73.jpg"
},
{
  kerdes: "What does 'subscribing' to a channel mean?",
  valaszok: [
    "We get notified about videos",
    "We support financially",
    "We can send private messages",
    "We can download videos"
  ],
  helyesIndex: 0,
  kep: "quiz72.jpg"
},
{
  kerdes: "In which year was the first moon landing?",
  valaszok: ["1971", "1965", "1969", "1959"],
  helyesIndex: 2,
  kep: "quiz75.jpg"
},
{
  kerdes: "What is the highest mountain in the world?",
  valaszok: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
  helyesIndex: 3,
  kep: "quiz76.jpg"
},
{
  kerdes: "Which plant is paprika made from?",
  valaszok: ["Tomato", "Capsicum", "Cucumber", "Chili"],
  helyesIndex: 1,
  kep: "quiz77.jpg"
},
{
  kerdes: "Who was the first person in space?",
  valaszok: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
  helyesIndex: 2,
  kep: "quiz78.jpg"
},
{
  kerdes: "Who is the individual YouTuber with the most subscribers in 2025?",
  valaszok: ["PewDiePie", "MrBeast", "T-Series", "Like Nastya"],
  helyesIndex: 1,
  kep: "quiz72.jpg"
},
{
  kerdes: "What is the most common element in Earth's crust?",
  valaszok: ["Oxygen", "Silicon", "Iron", "Aluminum"],
  helyesIndex: 0,
  kep: "quiz80.jpg"
},
{
  kerdes: "What is YouTube Shorts?",
  valaszok: [
    "Food recipe series",
    "Short videos feature",
    "Music channel",
    "Private video collection"
  ],
  helyesIndex: 1,
  kep: "quiz72.jpg"
},
{
  kerdes: "What material is traditionally used to write on a school blackboard?",
  valaszok: ["Chalk", "Marker", "Pen", "Pencil"],
  helyesIndex: 0,
  kep: "quiz82.jpg"
},
{
  kerdes: "What is the most common form of hydrogen on Earth?",
  valaszok: ["Water", "Gas", "Metal", "Oil"],
  helyesIndex: 0,
  kep: "quiz83.jpg"
},
{
  kerdes: "Who invented the telephone?",
  valaszok: [
    "Alexander Graham Bell",
    "Thomas Edison",
    "Nikola Tesla",
    "Guglielmo Marconi"
  ],
  helyesIndex: 0,
  kep: "quiz84.jpg"
},
{
  kerdes: "In which country are the most YouTube videos made?",
  valaszok: ["USA", "India", "Brazil", "Germany"],
  helyesIndex: 0,
  kep: "quiz72.jpg"
},
{
  kerdes: "What kind of animal is a starfish?",
  valaszok: ["Crustacean", "Mollusk", "Fish", "Echinoderm"],
  helyesIndex: 3,
  kep: "quiz86.jpg"
},
{
  kerdes: "What nationality was Albert Einstein?",
  valaszok: ["German", "Swiss", "American", "Russian"],
  helyesIndex: 0,
  kep: "quiz87.jpg"
},
{
  kerdes: "Which sport is the Tour de France?",
  valaszok: ["Running", "Cycling", "Swimming", "Football"],
  helyesIndex: 1,
  kep: "quiz88.jpg"
},
{
  kerdes: "What material is traditional porcelain made from?",
  valaszok: ["Clay", "Marble", "Kaolin", "Stone"],
  helyesIndex: 2,
  kep: "quiz89.jpg"
},
{
  kerdes: "Which function allows you to earn money directly in a live stream?",
  valaszok: ["Like", "Comment", "Super Chat", "Share"],
  helyesIndex: 2,
  kep: "quiz72.jpg"
},
{
  kerdes: "What element are proteins made of?",
  valaszok: ["Amino acids", "Fatty acids", "Carbohydrates", "Vitamins"],
  helyesIndex: 0,
  kep: "quiz91.jpg"
},
{
  kerdes: "What is photosynthesis?",
  valaszok: ["Animal movement", "Water cycle", "Plant process", "Breathing"],
  helyesIndex: 2,
  kep: "quiz92.jpg"
},
{
  kerdes: "In which year did World War II break out?",
  valaszok: ["1939", "1945", "1914", "1929"],
  helyesIndex: 0,
  kep: "quiz93.jpg"
},
{
  kerdes: "Which river flows through the city of Budapest?",
  valaszok: ["Danube", "Tisza", "Drava", "Raba"],
  helyesIndex: 0,
  kep: "quiz94.jpg"
},
{
  kerdes: "What is the smallest star among the following?",
  valaszok: ["White dwarf", "Solar system", "Pulsar", "Black hole"],
  helyesIndex: 0,
  kep: "quiz95.jpg"
},
{
  kerdes: "Which bird cannot fly?",
  valaszok: ["Ostrich", "Pigeon", "Hawk", "Peregrine falcon"],
  helyesIndex: 0,
  kep: "quiz96.jpg"
},
{
  kerdes: "What is the chemical symbol for iron?",
  valaszok: ["Fe", "Va", "Ir", "V"],
  helyesIndex: 0,
  kep: "quiz97.jpg"
},
{
  kerdes: "Which country is traditionally known for sushi?",
  valaszok: ["Japan", "China", "Thailand", "South Korea"],
  helyesIndex: 0,
  kep: "quiz98.jpg"
},
{
  kerdes: "What is the capital of France?",
  valaszok: ["Paris", "Lyon", "Marseille", "Nice"],
  helyesIndex: 0,
  kep: "quiz99.jpg"
},
{
  kerdes: "Who wrote 'Romeo and Juliet'?",
  valaszok: ["Charles Dickens", "Jules Verne", "Victor Hugo", "William Shakespeare"],
  helyesIndex: 3,
  kep: "quiz100.jpg"
},
{
  kerdes: "Which planet is the largest in the Solar System?",
  valaszok: ["Saturn", "Jupiter", "Neptune", "Earth"],
  helyesIndex: 1,
  kep: "quiz101.jpg"
},
{
  kerdes: "In which year was Albert Einstein born?",
  valaszok: ["1869", "1889", "1879", "1899"],
  helyesIndex: 2,
  kep: "quiz102.jpg"
},
{
  kerdes: "What color is a ruby?",
  valaszok: ["Blue", "Red", "Green", "Yellow"],
  helyesIndex: 1,
  kep: "quiz103.jpg"
},
{
  kerdes: "What is the largest continent on Earth?",
  valaszok: ["Asia", "Africa", "Europe", "South America"],
  helyesIndex: 0,
  kep: "quiz104.jpg"
},
{
  kerdes: "What is the most common element in the Sun?",
  valaszok: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
  helyesIndex: 0,
  kep: "quiz105.jpg"
},
{
  kerdes: "With which instrument do we measure temperature?",
  valaszok: ["Barometer", "Thermometer", "Counter", "Hygrometer"],
  helyesIndex: 1,
  kep: "quiz106.jpg"
},
{
  kerdes: "Who was the first woman in space?",
  valaszok: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"],
  helyesIndex: 0,
  kep: "quiz107.jpg"
},
{
  kerdes: "Which country is famous for tulips?",
  valaszok: ["France", "Germany", "Netherlands", "Italy"],
  helyesIndex: 2,
  kep: "quiz108.jpg"
},
{
  kerdes: "Which animal is the fastest on land?",
  valaszok: ["Cheetah", "Lion", "Deer", "Tiger"],
  helyesIndex: 0,
  kep: "quiz109.jpg"
},
{
  kerdes: "What is the chemical formula for water?",
  valaszok: ["H2O", "O2", "CO2", "HO"],
  helyesIndex: 0,
  kep: "quiz110.jpg"
},
{
  kerdes: "In which direction does the Earth rotate in the northern hemisphere?",
  valaszok: ["East-West", "North-South", "West-East", "South-North"],
  helyesIndex: 2,
  kep: "quiz111.jpg"
},
{
  kerdes: "Who was the first American president?",
  valaszok: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
  helyesIndex: 1,
  kep: "quiz112.jpg"
},
{
  kerdes: "What is the largest animal on Earth?",
  valaszok: ["Blue whale", "Elephant", "Great white shark", "Galápagos tortoise"],
  helyesIndex: 0,
  kep: "quiz113.jpg"
},
{
  kerdes: "What material is paper made from?",
  valaszok: ["Plastic", "Metal", "Wood", "Glass"],
  helyesIndex: 2,
  kep: "quiz114.jpg"
},
{
  kerdes: "Which color combination creates purple?",
  valaszok: ["Blue and red", "Blue and yellow", "Yellow and red", "Green and red"],
  helyesIndex: 0,
  kep: "quiz115.jpg"
},
{
  kerdes: "What is the most common color of lightning?",
  valaszok: ["Blue", "Yellow", "Red", "White"],
  helyesIndex: 3,
  kep: "quiz116.jpg"
},
{
  kerdes: "In which year was the Berlin Wall demolished?",
  valaszok: ["1989", "1991", "1987", "1995"],
  helyesIndex: 0,
  kep: "quiz117.jpg"
},
{
  kerdes: "What material is diamond made of?",
  valaszok: ["Iron", "Gold", "Copper", "Carbon"],
  helyesIndex: 3,
  kep: "quiz118.jpg"
},
{
  kerdes: "In which country is the Colosseum located?",
  valaszok: ["Greece", "Italy", "Spain", "France"],
  helyesIndex: 1,
  kep: "quiz119.jpg"
},
{
  kerdes: "What is the most common noble gas in the atmosphere?",
  valaszok: ["Helium", "Neon", "Argon", "Krypton"],
  helyesIndex: 2,
  kep: "quiz120.jpg"
},
{
  kerdes: "What is the unit of time in physics?",
  valaszok: ["Size", "Second", "Weight", "Temperature"],
  helyesIndex: 1,
  kep: "quiz121.jpg"
},
{
  kerdes: "According to legend, how many lives do cats have?",
  valaszok: ["Seven", "Ten", "Five", "Nine"],
  helyesIndex: 3,
  kep: "quiz122.jpg"
},
{
  kerdes: "What is the most populous country in the world?",
  valaszok: ["India", "USA", "China", "Indonesia"],
  helyesIndex: 0,
  kep: "quiz123.jpg"
},
{
  kerdes: "What is the geographical center of Hungary?",
  valaszok: ["Budapest", "Debrecen", "Pusztavacs", "Szeged"],
  helyesIndex: 2,
  kep: "quiz124.jpg"
},
{
  kerdes: "Who discovered America?",
  valaszok: ["Christopher Columbus", "Vasco da Gama", "Magellan", "Amerigo Vespucci"],
  helyesIndex: 0,
  kep: "quiz125.jpg"
},
{
  kerdes: "What kind of animal is a panda?",
  valaszok: ["Bear", "Cat", "Dog", "Monkey"],
  helyesIndex: 0,
  kep: "quiz126.jpg"
},
{
  kerdes: "Which famous building is a symbol of Paris?",
  valaszok: ["Louvre", "Notre-Dame", "Sacré-Cœur", "Eiffel Tower"],
  helyesIndex: 3,
  kep: "quiz127.jpg"
},
{
  kerdes: "What is the fastest fish in the ocean?",
  valaszok: ["Shark", "Dolphin", "Sailfish", "Tuna"],
  helyesIndex: 2,
  kep: "quiz128.jpg"
},
{
  kerdes: "What kind of planet is Mars?",
  valaszok: ["Blue Planet", "Red Planet", "Green Planet", "Yellow Planet"],
  helyesIndex: 1,
  kep: "quiz129.jpg"
},
{
  kerdes: "Which continent has the smallest area?",
  valaszok: ["Europe", "Antarctica", "Australia", "South America"],
  helyesIndex: 2,
  kep: "quiz130.jpg"
},
{
  kerdes: "What is one astronomical unit (AU) approximately equal to?",
  valaszok: ["Distance between Earth and Moon", "Sun’s diameter", "Moon’s diameter", "Distance between Earth and Sun"],
  helyesIndex: 3,
  kep: "quiz131.jpg"
},
{
  kerdes: "Who wrote the 'Harry Potter' books?",
  valaszok: ["Stephen King", "Tolkien", "J.K. Rowling", "Agatha Christie"],
  helyesIndex: 2,
  kep: "quiz132.jpg"
},
{
  kerdes: "What sound does a cow make?",
  valaszok: ["Meow", "Woof", "Croak", "Moo"],
  helyesIndex: 3,
  kep: "quiz133.jpg"
},
{
  kerdes: "Which element is the lightest in the periodic table?",
  valaszok: ["Helium", "Nitrogen", "Hydrogen", "Oxygen"],
  helyesIndex: 2,
  kep: "quiz134.jpg"
},
{
  kerdes: "What does 'biodiversity' mean?",
  valaszok: ["Climate change", "Variety of living organisms", "Water supply", "Soil quality"],
  helyesIndex: 1,
  kep: "quiz135.jpg"
},
{
  kerdes: "In which city is the Statue of Liberty located?",
  valaszok: ["Washington D.C.", "New York", "Chicago", "Los Angeles"],
  helyesIndex: 1,
  kep: "quiz136.jpg"
},
{
  kerdes: "What is the Eiffel Tower made of?",
  valaszok: ["Iron", "Steel", "Aluminum", "Copper"],
  helyesIndex: 0,
  kep: "quiz137.jpg"
},
{
  kerdes: "What is the most important part of the human eye for vision?",
  valaszok: ["Lens", "Retina", "Iris", "Cornea"],
  helyesIndex: 1,
  kep: "quiz138.jpg"
},
{
  kerdes: "What is the largest planet in the Solar System?",
  valaszok: ["Jupiter", "Saturn", "Neptune", "Uranus"],
  helyesIndex: 0,
  kep: "quiz139.jpg"
},
{
  kerdes: "What is the most important gas for human respiration?",
  valaszok: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
  helyesIndex: 1,
  kep: "quiz140.jpg"
},
{
  kerdes: "What is the largest organ in the human body?",
  valaszok: ["Liver", "Heart", "Skin", "Lungs"],
  helyesIndex: 2,
  kep: "quiz141.jpg"
},
{
  kerdes: "Which country is home to Machu Picchu?",
  valaszok: ["Mexico", "Chile", "Brazil", "Peru"],
  helyesIndex: 3,
  kep: "quiz142.jpg"
},
{
  kerdes: "What is the largest land mammal?",
  valaszok: ["Giraffe", "Lion", "Tiger", "Elephant"],
  helyesIndex: 3,
  kep: "quiz143.jpg"
},
{
  kerdes: "What is the capital city of the USA?",
  valaszok: ["New York", "Los Angeles", "Chicago", "Washington D.C."],
  helyesIndex: 3,
  kep: "quiz144.jpg"
},
{
  kerdes: "Which gas causes acid rain?",
  valaszok: ["Oxygen", "Nitrogen", "Carbon dioxide", "Sulfur dioxide"],
  helyesIndex: 3,
  kep: "quiz145.jpg"
},
{
  kerdes: "Who wrote 'The Little Prince'?",
  valaszok: ["Jules Verne", "Antoine de Saint-Exupéry", "Victor Hugo", "Charles Dickens"],
  helyesIndex: 1,
  kep: "quiz146.jpg"
},
{
  kerdes: "What is the unit of electric current?",
  valaszok: ["Ampere", "Volt", "Ohm", "Watt"],
  helyesIndex: 0,
  kep: "quiz147.jpg"
},
{
  kerdes: "What is the longest bone in the human body?",
  valaszok: ["Femur", "Humerus", "Tibia", "Scapula"],
  helyesIndex: 0,
  kep: "quiz148.jpg"
},
{
  kerdes: "What is the largest planet in the Solar System?",
  valaszok: ["Jupiter", "Saturn", "Neptune", "Uranus"],
  helyesIndex: 0,
  kep: "quiz149.jpg"
},
{
  kerdes: "In which year did World War I begin?",
  valaszok: ["1918", "1939", "1914", "1945"],
  helyesIndex: 2,
  kep: "quiz150.jpg"
},
{
  kerdes: "What is the freezing point of water in Celsius?",
  valaszok: ["100", "0", "-10", "32"],
  helyesIndex: 1,
  kep: "quiz151.jpg"
},
{
  kerdes: "What is the smallest unit of a living organism?",
  valaszok: ["Atom", "Molecule", "Cell", "Organ"],
  helyesIndex: 2,
  kep: "quiz152.jpg"
},
{
  kerdes: "What kind of animal is a dolphin?",
  valaszok: ["Fish", "Bird", "Mammal", "Reptile"],
  helyesIndex: 2,
  kep: "quiz153.jpg"
},
{
  kerdes: "What is the largest ocean in the world?",
  valaszok: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  helyesIndex: 2,
  kep: "quiz154.jpg"
},
{
  kerdes: "Which planet is known as the Red Planet?",
  valaszok: ["Venus", "Jupiter", "Mars", "Mercury"],
  helyesIndex: 2,
  kep: "quiz155.jpg"
},
{
  kerdes: "What is the capital of Australia?",
  valaszok: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
  helyesIndex: 3,
  kep: "quiz156.jpg"
},
{
  kerdes: "What is 'photosynthesis'?",
  valaszok: [
    "The production of organic matter by plants using light energy",
    "Animals eating food",
    "Water cycle",
    "Earth movements"
  ],
  helyesIndex: 0,
  kep: "quiz157.jpg"
},
{
  kerdes: "What color is an emerald?",
  valaszok: ["Blue", "Red", "Yellow", "Green"],
  helyesIndex: 3,
  kep: "quiz158.jpg"
},
{
  kerdes: "In which country is the Sahara Desert located?",
  valaszok: ["Niger", "South Africa", "Egypt", "Algeria"],
  helyesIndex: 3,
  kep: "quiz159.jpg"
},
{
  kerdes: "Which continent is Brazil located on?",
  valaszok: ["North America", "Europe", "Asia", "South America"],
  helyesIndex: 3,
  kep: "quiz160.jpg"
},
{
  kerdes: "Who painted the Mona Lisa?",
  valaszok: ["Michelangelo", "Raphael", "Donatello", "Leonardo da Vinci"],
  helyesIndex: 3,
  kep: "quiz161.jpg"
},
{
  kerdes: "What is the largest island in the world?",
  valaszok: ["Australia", "Greenland", "Madagascar", "New Guinea"],
  helyesIndex: 1,
  kep: "quiz162.jpg"
},
{
  kerdes: "What is the main energy source for the Sun?",
  valaszok: ["Burning coal", "Lime dissolution", "Hydrogen fusion", "Nuclear fission"],
  helyesIndex: 2,
  kep: "quiz163.jpg"
},
{
  kerdes: "Which country is famous for its pyramids?",
  valaszok: ["Mexico", "Peru", "Iraq", "Egypt"],
  helyesIndex: 3,
  kep: "quiz164.jpg"
},
{
  kerdes: "What kind of animal is a chameleon?",
  valaszok: ["Bird", "Mammal", "Reptile", "Fish"],
  helyesIndex: 2,
  kep: "quiz165.jpg"
},
{
  kerdes: "What is the longest river in Asia?",
  valaszok: ["Yangtze", "Indus", "Ganges", "Mekong"],
  helyesIndex: 0,
  kep: "quiz166.jpg"
},
{
  kerdes: "What compound is salt?",
  valaszok: ["Sodium chloride", "Potassium nitrate", "Calcium carbonate", "Magnesium oxide"],
  helyesIndex: 0,
  kep: "quiz167.jpg"
},
{
  kerdes: "What is the most important immune cell in the human body?",
  valaszok: ["White blood cell", "Red blood cell", "Platelet", "Neuron"],
  helyesIndex: 0,
  kep: "quiz168.jpg"
},
{
  kerdes: "On which continent is the Amazon rainforest located?",
  valaszok: ["Africa", "Asia", "South America", "Australia"],
  helyesIndex: 2,
  kep: "quiz169.jpg"
},
{
  kerdes: "What is the most important nutrient for plants?",
  valaszok: ["Nitrogen", "Calcium", "Iron", "Magnesium"],
  helyesIndex: 0,
  kep: "quiz170.jpg"
},
{
  kerdes: "What is the fastest land animal?",
  valaszok: ["Cheetah", "Lion", "Giraffe", "Elephant"],
  helyesIndex: 0,
  kep: "quiz171.jpg"
},
{
  kerdes: "Which planet has the tallest mountain in the solar system?",
  valaszok: ["Mars", "Jupiter", "Saturn", "Venus"],
  helyesIndex: 0,
  kep: "quiz172.jpg"
},
{
  kerdes: "Who was the first president of the USA?",
  valaszok: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
  helyesIndex: 1,
  kep: "quiz173.jpg"
},
{
  kerdes: "In which country was Ludwig van Beethoven born?",
  valaszok: ["Austria", "France", "Germany", "Italy"],
  helyesIndex: 2,
  kep: "quiz174.jpg"
},
{
  kerdes: "What is the chemical formula for H2O?",
  valaszok: ["Carbon dioxide", "Oxygen", "Water", "Nitrogen"],
  helyesIndex: 2,
  kep: "quiz175.jpg"
},
{
  kerdes: "What is the largest continent?",
  valaszok: ["Africa", "North America", "Europe", "Asia"],
  helyesIndex: 3,
  kep: "quiz176.jpg"
},
{
  kerdes: "Which city is famous for the 'Louvre' museum?",
  valaszok: ["Rome", "London", "Paris", "Berlin"],
  helyesIndex: 2,
  kep: "quiz177.jpg"
},
{
  kerdes: "Which is the smallest animal group among the following?",
  valaszok: ["Elephant", "Amoeba", "Dolphin", "Birds"],
  helyesIndex: 1,
  kep: "quiz178.jpg"
},
{
  kerdes: "What is the main element in a diamond?",
  valaszok: ["Iron", "Silver", "Carbon", "Gold"],
  helyesIndex: 2,
  kep: "quiz179.jpg"
},
{
  kerdes: "In which year did World War II end?",
  valaszok: ["1941", "1939", "1950", "1945"],
  helyesIndex: 3,
  kep: "quiz180.jpg"
},
{
  kerdes: "Which organ produces insulin in the human body?",
  valaszok: [ "Kidney", "Liver", "Heart", "Pancreas"],
  helyesIndex: 3,
  kep: "quiz181.jpg"
},
{
  kerdes: "Which is the coldest planet in the Solar System?",
  valaszok: [ "Mercury", "Mars", "Jupiter", "Neptune"],
  helyesIndex: 3,
  kep: "quiz182.jpg"
},
{
  kerdes: "Which is the largest city in Japan?",
  valaszok: [ "Osaka", "Kyoto", "Hiroshima", "Tokyo"],
  helyesIndex: 3,
  kep: "quiz183.jpg"
},
{
  kerdes: "What is the largest desert on Earth?",
  valaszok: ["Antarctica", "Sahara", "Gobi", "Kalahari"],
  helyesIndex: 0,
  kep: "quiz184.jpg"
},
{
  kerdes: "From which plant does cocoa come?",
  valaszok: [ "Cherry tree", "Cocoa tree", "Apple tree", "Fig tree"],
  helyesIndex: 1,
  kep: "quiz185.jpg"
},
{
  kerdes: "In which year was the moon landing?",
  valaszok: [ "1959", "1979", "1969", "1989"],
  helyesIndex: 2,
  kep: "quiz186.jpg"
},
{
  kerdes: "What is the smallest bone in the human skeleton?",
  valaszok: [ "Anvil bone", "Hammer bone", "Collarbone", "Stirrup bone"],
  helyesIndex: 3,
  kep: "quiz187.jpg"
},
{
  kerdes: "In which country is the Taj Mahal located?",
  valaszok: [ "Pakistan", "Nepal", "India", "Bangladesh"],
  helyesIndex: 2,
  kep: "quiz188.jpg"
},
{
  kerdes: "Which season comes after winter?",
  valaszok: [ "Summer", "Autumn", "Spring", "Winter"],
  helyesIndex: 2,
  kep: "quiz189.jpg"
},
{
  kerdes: "What is the chemical symbol for sodium?",
  valaszok: [ "N", "Ni", "Ne", "Na"],
  helyesIndex: 3,
  kep: "quiz190.jpg"
},
{
  kerdes: "Which is the most populous country in the world?",
  valaszok: [ "India", "China", "USA", "Russia"],
  helyesIndex: 0,
  kep: "quiz191.jpg"
},
{
  kerdes: "What color is a diamond?",
  valaszok: ["Usually transparent", "Black", "Green", "Red"],
  helyesIndex: 0,
  kep: "quiz192.jpg"
},
{
  kerdes: "What is the longest river in South America?",
  valaszok: ["Amazon", "Mississippi", "Orinoco", "Paraná"],
  helyesIndex: 0,
  kep: "quiz193.jpg"
},
{
  kerdes: "What color is human blood when oxygenated?",
  valaszok: ["Red", "Blue", "Green", "Yellow"],
  helyesIndex: 0,
  kep: "quiz194.jpg"
},
{
  kerdes: "Who was the chief god of the ancient Greek gods?",
  valaszok: [ "Hera", "Poseidon", "Zeus", "Hades"],
  helyesIndex: 2,
  kep: "quiz195.jpg"
},
{
  kerdes: "On which country's flag is a red dragon featured?",
  valaszok: [ "China", "Japan", "Scotland", "Wales"],
  helyesIndex: 3,
  kep: "quiz196.jpg"
},
{
  kerdes: "What is the most common element in the Earth's crust?",
  valaszok: [ "Iron", "Oxygen", "Carbon", "Aluminum"],
  helyesIndex: 1,
  kep: "quiz197.jpg"
},
{
  kerdes: "Which liquid circulates in the human body?",
  valaszok: [ "Milk", "Water", "Tar", "Blood"],
  helyesIndex: 3,
  kep: "quiz198.jpg"
},
{
  kerdes: "Which is the smallest planet in the Solar System?",
  valaszok: [ "Pluto", "Mars", "Venus", "Mercury"],
  helyesIndex: 3,
  kep: "quiz199.jpg"
},
{
  kerdes: "What is the capital of Italy?",
  valaszok: [ "Milan", "Rome", "Venice", "Florence"],
  helyesIndex: 1,
  kep: "quiz200.jpg"
},
{
  kerdes: "Who wrote the story of Pinocchio?",
  valaszok: ["Carlo Collodi", "Hans Christian Andersen", "The Brothers Grimm", "Lewis Carroll"],
  helyesIndex: 0,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What happens to Pinocchio's nose when he lies?",
  valaszok: ["It disappears", "It falls off", "It grows", "It turns red"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What is Pinocchio's body made of?",
  valaszok: ["Stone", "Wood", "Paper", "Iron"],
  helyesIndex: 1,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What is the name of Pinocchio's 'father'?",
  valaszok: ["Giuseppe", "Carlo", "Geppetto", "Antonio"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What is Pinocchio's greatest wish?",
  valaszok: ["To become rich", "To become a real boy", "To become famous", "To become a dancer"],
  helyesIndex: 1,
  kep: "pinokkio.jpg"
},
{
  kerdes: "Who gives Pinocchio advice in the story?",
  valaszok: ["A fairy", "A wizard", "A rabbit", "A dragon"],
  helyesIndex: 0,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What happens when Pinocchio misbehaves?",
  valaszok: ["He grows wings", "He catches a cold", "His nose grows", "He gets punished"],
  helyesIndex: 3,
  kep: "pinokkio.jpg"
},
{
  kerdes: "Into what animal do children who misbehave in the Land of Stories transform?",
  valaszok: ["Cat", "Donkey", "Frog", "Snail"],
  helyesIndex: 1,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What is the name of the place where children go to have fun but end up in trouble?",
  valaszok: ["Happyland", "Land of Stories", "Lazyland", "Playland"],
  helyesIndex: 3,
  kep: "pinokkio.jpg"
},
{
  kerdes: "Which animal speaks as Pinocchio's conscience?",
  valaszok: ["Mouse", "Grasshopper", "Cricket", "Rat"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "How does Pinocchio's story end?",
  valaszok: ["He goes to prison", "He becomes a fairy", "He turns into a real boy", "He gets lost in the forest"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What is Pinocchio's biggest flaw in the story?",
  valaszok: ["Laziness", "Lying and disobedience", "Talking too much", "Jealousy"],
  helyesIndex: 1,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What kind of animal is Bluebeard in the Pinocchio story?",
  valaszok: ["Fish", "Cat", "Goat", "No such character"],
  helyesIndex: 3,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What does the Blue Fairy give Pinocchio as a reward?",
  valaszok: ["A hat", "A sword", "A real body", "A book"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "How does Pinocchio learn to become a good boy?",
  valaszok: ["By magic", "By reading books", "By going to school", "By meditating"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "Which studio made the famous 1940 Pinocchio animated film?",
  valaszok: ["DreamWorks", "Pixar", "Disney", "Warner Bros"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What happens to Geppetto when he goes looking for Pinocchio?",
  valaszok: ["He grows old", "He is swallowed by a whale", "He loses his memory", "He goes to jail"],
  helyesIndex: 1,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What is one important moral of the story?",
  valaszok: ["Don't travel alone", "Money brings happiness", "Lying doesn't lead to good", "Friendship is the most important"],
  helyesIndex: 2,
  kep: "pinokkio.jpg"
},
{
  kerdes: "In which country was the Pinocchio story born?",
  valaszok: ["France", "Italy", "Germany", "Spain"],
  helyesIndex: 1,
  kep: "pinokkio.jpg"
},
{
  kerdes: "What does the growth of Pinocchio's nose symbolize?",
  valaszok: ["Joy", "Fear", "Wisdom", "Lies"],
  helyesIndex: 3,
  kep: "pinokkio.jpg"
},
{
  kerdes: "How much is 7 × 8?",
  valaszok: ["54", "56", "58", "64"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the square root of 144?",
  valaszok: ["11", "12", "13", "14"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is 15% of 200?",
  valaszok: ["25", "30", "35", "40"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the value of 2³?",
  valaszok: ["6", "8", "9", "12"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the result of division by zero?",
  valaszok: ["0", "1", "Infinity", "Undefined"],
  helyesIndex: 3,
  kep: "matek.jpg"
},
{
  kerdes: "Which number is a prime number?",
  valaszok: ["9", "15", "17", "21"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What is the sum of the first 3 natural numbers?",
  valaszok: ["3", "5", "6", "7"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "How much is 5²?",
  valaszok: ["10", "20", "25", "15"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What is 10% of 250?",
  valaszok: ["20", "25", "30", "35"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is 1/2 + 1/4?",
  valaszok: ["3/4", "2/4", "5/4", "1/8"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What is the approximate value of π (pi)?",
  valaszok: ["2.14", "3.14", "3.41", "4.13"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the length of the diagonal of a 3x4 rectangle?",
  valaszok: ["5", "6", "7", "4.5"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What is the sum of the interior angles of a triangle?",
  valaszok: ["90°", "180°", "270°", "360°"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "How much is 1000 ÷ 25?",
  valaszok: ["25", "40", "50", "75"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What is the formula for calculating the average?",
  valaszok: ["sum × number of items", "sum ÷ number of items", "sum + number of items", "number of items ÷ sum"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is 9²?",
  valaszok: ["81", "72", "91", "99"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What is the basic symbol for algebra?",
  valaszok: ["∑", "√", "x", "π"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What is 20% of 500?",
  valaszok: ["50", "75", "100", "125"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "Which is NOT a prime number?",
  valaszok: ["2", "3", "4", "5"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What is 1/3 + 1/6?",
  valaszok: ["1/2", "2/3", "3/6", "1/4"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "How much is 6 × 12?",
  valaszok: ["72", "66", "70", "62"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What is the value of 3⁴?",
  valaszok: ["81", "64", "27", "243"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What is the 9th term of the 5 times table?",
  valaszok: ["40", "45", "50", "55"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the reciprocal of 1/5?",
  valaszok: ["5", "0.2", "1/5", "1/25"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What kind of number is -3?",
  valaszok: ["Positive", "Negative", "Prime", "Zero"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the value of any number raised to the power of 0?",
  valaszok: ["0", "1", "The number itself", "Undefined"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "How many centimeters are in one meter?",
  valaszok: ["10", "100", "1000", "1"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the main step to solve a proportion?",
  valaszok: ["Divide the numbers", "Add them", "Cross multiply", "Subtract"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What is the sum of 1+2+3+...+10?",
  valaszok: ["50", "55", "60", "65"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is the probability value between 0 and 1?",
  valaszok: ["Negative", "Any number", "0 ≤ p ≤ 1", "1 ≤ p ≤ 10"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "How much is 2.5 × 4?",
  valaszok: ["10", "12", "14", "15"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What is the square root of 20?",
  valaszok: ["4", "4.5", "No whole number", "5"],
  helyesIndex: 2,
  kep: "matek.jpg"
},
{
  kerdes: "What angle do two perpendicular lines form?",
  valaszok: ["45°", "90°", "180°", "360°"],
  helyesIndex: 1,
  kep: "matek.jpg"
},
{
  kerdes: "What is 5% of 60?",
  valaszok: ["3", "6", "9", "12"],
  helyesIndex: 0,
  kep: "matek.jpg"
},
{
  kerdes: "What does the abbreviation 'CPU' stand for?",
  valaszok: ["Central Processing Unit", "Computer Primary Unit", "Core Power Unit", "Central Performance Unit"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the main task of the operating system?",
  valaszok: ["Browsing the internet", "Controlling hardware and managing software", "Drawing graphics", "Playing sound"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which company developed the Windows operating system?",
  valaszok: ["Apple", "IBM", "Microsoft", "Google"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the function of RAM in a computer?",
  valaszok: ["Long-term storage", "Temporary data storage", "Cooling the processor", "Managing internet connections"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does the keyboard shortcut 'Ctrl + C' do?",
  valaszok: ["Paste", "Copy", "Cut", "Save"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does SSD stand for?",
  valaszok: ["System Software Disk", "Super Speed Drive", "Solid State Drive", "Secure Storage Device"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which is NOT a programming language?",
  valaszok: ["Python", "HTML", "C++", "Photoshop"],
  helyesIndex: 3,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does the 'Ctrl + Z' shortcut do?",
  valaszok: ["Restart", "Close", "Undo", "Save"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which device is used for input?",
  valaszok: ["Monitor", "Keyboard", "Printer", "Speaker"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does URL stand for?",
  valaszok: ["Unified Resource Locator", "Universal Random Link", "Uniform Resource Locator", "Unique Route Language"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the main task of the CPU?",
  valaszok: ["Storing images", "Running programs", "Playing sound", "Managing the network"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does RAM stand for?",
  valaszok: ["Random Access Memory", "Read All Memory", "Rapid Access Machine", "Run After Mode"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which device is NOT an input peripheral?",
  valaszok: ["Keyboard", "Mouse", "Monitor", "Webcam"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the role of HTML in web development?",
  valaszok: ["Adding style", "Providing interactivity", "Storing data", "Defining the structure of a webpage"],
  helyesIndex: 3,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does the operating system do?",
  valaszok: ["Edit videos", "Develop games", "Control hardware and software", "Store websites"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which file extension indicates images?",
  valaszok: [".mp3", ".txt", ".jpg", ".exe"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is Google Chrome?",
  valaszok: ["Text editor", "Web browser", "Game", "Operating system"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which device saves data long-term?",
  valaszok: ["RAM", "Processor", "Video card", "Hard drive"],
  helyesIndex: 3,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is an IP address?",
  valaszok: ["Internet connector", "Computer identifier on a network", "Error code", "Graphics driver"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does URL mean?",
  valaszok: ["Universal Resource Locator", "Unique RAM Loader", "User Ready Line", "Ultra Rapid Logic"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the function of the motherboard?",
  valaszok: ["Data storage", "Writing programs", "Connecting hardware components", "Operating the sound card"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which program is part of the Microsoft Office suite?",
  valaszok: ["Excel", "Photoshop", "Chrome", "Visual Studio"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is BIOS?",
  valaszok: ["Music player", "Basic system startup program", "File editor", "Network device"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the advantage of SSD over HDD?",
  valaszok: ["Stores more data", "Cheaper", "Faster data access", "Heavier weight"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the function of the Ctrl + C keyboard shortcut?",
  valaszok: ["Paste", "Copy", "Cut", "Close"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does the abbreviation AI mean?",
  valaszok: ["Auto Input", "Artificial Intelligence", "Advanced Interface", "Applied Index"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is programming?",
  valaszok: ["Computer game", "Turning on the computer", "Writing instructions for the computer", "Editing images"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is a firewall good for?",
  valaszok: ["Video editing", "Internet service", "Network protection", "Printing"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which language is not a programming language?",
  valaszok: ["Python", "JavaScript", "C++", "HTML"],
  helyesIndex: 3,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is Photoshop?",
  valaszok: ["Game", "Image editing program", "Spreadsheet", "Video player"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the role of the mouse on a computer?",
  valaszok: ["Data storage", "Creating graphics", "Moving the pointer", "Listening to music"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does antivirus software do?",
  valaszok: ["Provides music playback", "Protects the computer from harmful programs", "Downloads videos", "Expands memory"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the purpose of the operating system?",
  valaszok: ["Designing websites", "Managing hardware and software", "Watching movies", "Printing images"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the internet?",
  valaszok: ["Printing device", "Global computer network", "Programming language", "Internal memory"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which one is NOT an operating system?",
  valaszok: ["Windows", "macOS", "Linux", "Google"],
  helyesIndex: 3,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is a data carrier?",
  valaszok: ["Music program", "Device for storing data", "Display", "Keyboard"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does PDF file mean?",
  valaszok: ["Portable Document Format", "Program Design File", "Picture Drawing File", "Power Data File"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does 'formatting' a drive do?",
  valaszok: ["Protects files", "Removes all data", "Updates the system file", "Compresses documents"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which is the most widespread graphical operating system?",
  valaszok: ["DOS", "Unix", "Windows", "BIOS"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is screen refresh rate?",
  valaszok: ["Number of frames per second", "Browsing speed", "Download time", "Network connection quality"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is another name for a pendrive?",
  valaszok: ["SSD", "USB drive", "CD-ROM", "Modem"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does the abbreviation LAN mean?",
  valaszok: ["Local Area Network", "Large Active Node", "Logical Access Name", "Linked Application Network"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is 'booting'?",
  valaszok: ["Data backup", "System startup", "Update", "Switching keyboard"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is the purpose of file compression?",
  valaszok: ["Speed up reading", "Reduce file size", "Increase graphics", "Improve print quality"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What does the Ctrl + V keyboard shortcut do?",
  valaszok: ["Copy", "Paste", "Cut", "Undo"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is an email?",
  valaszok: ["Type of computer", "Electronic mail", "Programming language", "Data carrier"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which is the most common word processor?",
  valaszok: ["Excel", "Word", "Paint", "Access"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is a printer used for?",
  valaszok: ["Editing pictures", "Saving files", "Printing on paper", "Editing videos"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which device provides internet connection?",
  valaszok: ["Processor", "Modem", "Motherboard", "Printer"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "What is a hacker?",
  valaszok: ["Computer part", "Game program", "Someone who accesses other systems", "Email service"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Which country has Vienna as its capital?",
  valaszok: ["Austria", "Germany", "Switzerland", "Czech Republic"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Madrid as its capital?",
  valaszok: ["Portugal", "Spain", "Italy", "France"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Cairo as its capital?",
  valaszok: ["Egypt", "Morocco", "Tunisia", "Libya"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Paris as its capital?",
  valaszok: ["Belgium", "Italy", "France", "Spain"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Rome as its capital?",
  valaszok: ["Italy", "France", "Greece", "Slovenia"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Athens as its capital?",
  valaszok: ["Greece", "Turkey", "Bulgaria", "Cyprus"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Berlin as its capital?",
  valaszok: ["Austria", "Germany", "Netherlands", "Czech Republic"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Prague as its capital?",
  valaszok: ["Slovakia", "Czech Republic", "Poland", "Austria"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Warsaw as its capital?",
  valaszok: ["Lithuania", "Poland", "Czech Republic", "Ukraine"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Budapest as its capital?",
  valaszok: ["Hungary", "Romania", "Serbia", "Slovakia"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Bucharest as its capital?",
  valaszok: ["Bulgaria", "Romania", "Moldova", "Serbia"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Ljubljana as its capital?",
  valaszok: ["Slovenia", "Croatia", "Austria", "Czech Republic"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Zagreb as its capital?",
  valaszok: ["Bosnia", "Serbia", "Croatia", "Montenegro"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Oslo as its capital?",
  valaszok: ["Sweden", "Norway", "Finland", "Denmark"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Stockholm as its capital?",
  valaszok: ["Norway", "Sweden", "Denmark", "Finland"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Copenhagen as its capital?",
  valaszok: ["Finland", "Denmark", "Sweden", "Norway"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Helsinki as its capital?",
  valaszok: ["Denmark", "Finland", "Sweden", "Norway"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Dublin as its capital?",
  valaszok: ["Scotland", "Ireland", "Wales", "Northern Ireland"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has London as its capital?",
  valaszok: ["Ireland", "United Kingdom", "France", "Scotland"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Lisbon as its capital?",
  valaszok: ["Spain", "Italy", "Portugal", "France"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Brussels as its capital?",
  valaszok: ["Netherlands", "Belgium", "Luxembourg", "France"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Amsterdam as its capital?",
  valaszok: ["Netherlands", "Belgium", "Denmark", "Germany"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Bern as its capital?",
  valaszok: ["Switzerland", "Austria", "Germany", "Liechtenstein"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Reykjavik as its capital?",
  valaszok: ["Norway", "Greenland", "Iceland", "Finland"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Moscow as its capital?",
  valaszok: ["Belarus", "Russia", "Ukraine", "Kazakhstan"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Kiev as its capital?",
  valaszok: ["Ukraine", "Russia", "Belarus", "Moldova"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Minsk as its capital?",
  valaszok: ["Lithuania", "Belarus", "Ukraine", "Russia"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Vilnius as its capital?",
  valaszok: ["Latvia", "Estonia", "Lithuania", "Belarus"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Riga as its capital?",
  valaszok: ["Lithuania", "Estonia", "Latvia", "Finland"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Tallinn as its capital?",
  valaszok: ["Estonia", "Latvia", "Lithuania", "Finland"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Ankara as its capital?",
  valaszok: ["Iran", "Turkey", "Syria", "Greece"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Tehran as its capital?",
  valaszok: ["Iraq", "Pakistan", "Iran", "Turkey"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Baghdad as its capital?",
  valaszok: ["Iran", "Syria", "Iraq", "Jordan"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Kabul as its capital?",
  valaszok: ["Iran", "Pakistan", "Afghanistan", "India"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Islamabad as its capital?",
  valaszok: ["Pakistan", "Afghanistan", "Iran", "India"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has New Delhi as its capital?",
  valaszok: ["India", "Nepal", "Bangladesh", "Sri Lanka"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Kathmandu as its capital?",
  valaszok: ["India", "Nepal", "Bhutan", "Bangladesh"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "Which country has Dhaka as its capital?",
  valaszok: ["Bangladesh", "India", "Pakistan", "Sri Lanka"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Sri Lanka?",
  valaszok: ["Malaysia", "Indonesia", "Sri Lanka", "India"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Thailand?",
  valaszok: ["Thailand", "Malaysia", "Cambodia", "Vietnam"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Vietnam?",
  valaszok: ["Laos", "Vietnam", "Cambodia", "Thailand"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Cambodia?",
  valaszok: ["Cambodia", "Laos", "Vietnam", "Thailand"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Malaysia?",
  valaszok: ["Malaysia", "Indonesia", "Brunei", "Philippines"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Indonesia?",
  valaszok: ["Indonesia", "Malaysia", "Brunei", "Singapore"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of the Philippines?",
  valaszok: ["Philippines", "Thailand", "Indonesia", "Malaysia"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Singapore?",
  valaszok: ["Singapore", "Malaysia", "Brunei", "Indonesia"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of China?",
  valaszok: ["Japan", "China", "Taiwan", "South Korea"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Japan?",
  valaszok: ["China", "South Korea", "Japan", "Thailand"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of South Korea?",
  valaszok: ["North Korea", "Japan", "China", "South Korea"],
  helyesIndex: 3,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of North Korea?",
  valaszok: ["South Korea", "North Korea", "China", "Japan"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Taiwan?",
  valaszok: ["China", "Taiwan", "Japan", "South Korea"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Australia?",
  valaszok: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of New Zealand?",
  valaszok: ["Australia", "Fiji", "New Zealand", "Tonga"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Mexico?",
  valaszok: ["Mexico", "Spain", "Colombia", "Peru"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Peru?",
  valaszok: ["Ecuador", "Chile", "Peru", "Bolivia"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Colombia?",
  valaszok: ["Colombia", "Venezuela", "Ecuador", "Peru"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Chile?",
  valaszok: ["Chile", "Peru", "Brazil", "Argentina"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Argentina?",
  valaszok: ["Argentina", "Brazil", "Chile", "Uruguay"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Uruguay?",
  valaszok: ["Paraguay", "Uruguay", "Argentina", "Chile"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Paraguay?",
  valaszok: ["Paraguay", "Uruguay", "Chile", "Ecuador"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Bolivia?",
  valaszok: ["Bolivia", "Peru", "Chile", "Paraguay"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Brazil?",
  valaszok: ["Argentina", "Brazil", "Chile", "Peru"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Venezuela?",
  valaszok: ["Venezuela", "Colombia", "Peru", "Ecuador"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Ecuador?",
  valaszok: ["Colombia", "Peru", "Ecuador", "Chile"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Cuba?",
  valaszok: ["Dominican Republic", "Cuba", "Mexico", "Puerto Rico"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of the Bahamas?",
  valaszok: ["Jamaica", "Barbados", "Bahamas", "Cuba"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Jamaica?",
  valaszok: ["Haiti", "Jamaica", "Bahamas", "Trinidad and Tobago"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Haiti?",
  valaszok: ["Dominican Republic", "Haiti", "Cuba", "Jamaica"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of the Dominican Republic?",
  valaszok: ["Puerto Rico", "Haiti", "Cuba", "Dominican Republic"],
  helyesIndex: 3,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Canada?",
  valaszok: ["Canada", "United States", "Mexico", "Greenland"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of the United States?",
  valaszok: ["United States", "Canada", "Mexico", "Brazil"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Iceland?",
  valaszok: ["Norway", "Iceland", "Finland", "Greenland"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Norway?",
  valaszok: ["Norway", "Sweden", "Finland", "Denmark"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Sweden?",
  valaszok: ["Finland", "Norway", "Sweden", "Estonia"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Finland?",
  valaszok: ["Sweden", "Finland", "Estonia", "Norway"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Denmark?",
  valaszok: ["Denmark", "Sweden", "Norway", "Finland"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Estonia?",
  valaszok: ["Estonia", "Latvia", "Lithuania", "Finland"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Latvia?",
  valaszok: ["Lithuania", "Estonia", "Latvia", "Finland"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Lithuania?",
  valaszok: ["Latvia", "Lithuania", "Estonia", "Belarus"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Poland?",
  valaszok: ["Poland", "Ukraine", "Czech Republic", "Lithuania"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of the Czech Republic?",
  valaszok: ["Czech Republic", "Slovakia", "Poland", "Austria"],
  helyesIndex: 0,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Slovakia?",
  valaszok: ["Czech Republic", "Hungary", "Slovakia", "Austria"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Austria?",
  valaszok: ["Switzerland", "Austria", "Hungary", "Germany"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Hungary?",
  valaszok: ["Austria", "Romania", "Hungary", "Croatia"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Slovenia?",
  valaszok: ["Slovakia", "Slovenia", "Croatia", "Serbia"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Croatia?",
  valaszok: ["Serbia", "Slovenia", "Croatia", "Bosnia-Herzegovina"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Bosnia-Herzegovina?",
  valaszok: ["Montenegro", "Bosnia-Herzegovina", "Croatia", "Albania"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Serbia?",
  valaszok: ["Kosovo", "Serbia", "Macedonia", "Montenegro"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Montenegro?",
  valaszok: ["Serbia", "Kosovo", "Montenegro", "Bosnia-Herzegovina"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Albania?",
  valaszok: ["Kosovo", "Albania", "Macedonia", "Montenegro"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Macedonia?",
  valaszok: ["Albania", "Macedonia", "Kosovo", "Serbia"],
  helyesIndex: 1,
  kep: "foldrajz.jpg"
},
{
  kerdes: "What is the capital of Kosovo?",
  valaszok: ["Montenegro", "Serbia", "Kosovo", "Albania"],
  helyesIndex: 2,
  kep: "foldrajz.jpg"
},


  
  

];

  let aktualisKerdesIndex = 0;
 
  let kevertKerdesek = [];

  // Játék állapot változók
  let pipak = 0;
  let pontok = 0;
  let eletek = 3;
  let kerdessz1 = 1;

  startButton.addEventListener("click", startGame);

  function startGame() {
    // Szabályok és start gomb elrejtése
    document.getElementById("szabalyCim").classList.add("hiddened");
    document.getElementById("szabaly1").classList.add("hiddened");
    document.getElementById("szabalyLista").classList.add("hiddened");
    document.getElementById("szabaly2").classList.add("hiddened");
    document.getElementById("startButton").classList.add("hiddened");
 backgroundAudio.play()
backgroundAudio.loop = true;
backgroundAudio.volume = 0.5;
 
  

    // Rejtekből előhozunk mindent
    document.querySelectorAll(".hidden, .hidden3").forEach(el => {
      el.classList.remove("hidden", "hidden3");
    });

    // Kérdések összekeverése
    kevertKerdesek = kerdesek.sort(() => 0.5 - Math.random());
    aktualisKerdesIndex = 0;

    // Állapot visszaállítása
    pipak = 0;
    pontok = 0;
    eletek = 3;
    pipakElem.textContent = pipak;
    pontokElem.textContent = pontok;
    eletekElem.textContent = eletek;

    mutatKerdes();
  }

  function mutatKerdes() {
    if (aktualisKerdesIndex >= kevertKerdesek.length || eletek <= 0) {
    
      vegeSzoveg.classList.remove("hidden2");
  eredmenyPont.classList.remove("hidden2");
  vegsoPontszam.textContent = document.getElementById("pontokSzama").textContent;
  ujrainditGomb.classList.remove("hidden2");
document.getElementById("kerdesSzoveg")?.classList.add("hidden3");
document.querySelector("#kerdekep")?.classList.add("hidden3");
document.querySelector(".kerdesek")?.classList.add("hidden3");
document.querySelector(".kerdesszam")?.classList.add("hidden3");
document.querySelector(".elet")?.classList.add("hidden3");
document.getElementById("pipak")?.classList.add("hidden3");
document.getElementById("pipak2")?.classList.add("hidden3");

document.querySelector("#gombos1")?.classList.add("hidden3");
document.querySelector("#gombos2")?.classList.add("hidden3");
document.querySelector("#gombos3")?.classList.add("hidden");
document.querySelector("#gombos4")?.classList.add("hidden");
document.querySelector("#kupa")?.classList.add("hidden3");
document.querySelector("#pontokSzama")?.classList.add("hidden"); 

  return;
 
    }

    const aktKerdes = kevertKerdesek[aktualisKerdesIndex];
    kerdesSzoveg.textContent = aktKerdes.kerdes;

    // Kép frissítése
    const image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", "./image/" + aktKerdes.kep);

    valaszGombok.forEach((gomb, index) => {
      gomb.textContent = aktKerdes.valaszok[index];
      gomb.disabled = false;
      gomb.classList.remove("helyes", "rossz");

      gomb.onclick = function () {
        // Gombok letiltása kattintás után
        valaszGombok.forEach(btn => btn.disabled = true);

        if (index === aktKerdes.helyesIndex) {
          gomb.classList.add("helyes");
 goodSound.play();
          // Pipák növelése
          pipak++;
          pipakElem.textContent = pipak;
         pipahozzaadas.classList.remove("hidden5");
setTimeout(() => {
  pipahozzaadas.classList.add("hidden5");
}, 1000);
          // Pontok növelése
          pontok++;
          pontokElem.textContent = pontok;
          ponthozzaadas.classList.remove("hidden5");
setTimeout(() => {
  ponthozzaadas.classList.add("hidden5");
}, 1000);
   
          // Ha pipák elérik az 5-öt, pipák nullázása és élet +1
          if (pipak === 5) {
            pipak = 0;
            eletek++;
            pipakElem.textContent = pipak;
            eletekElem.textContent = eletek;
            elethozzaadas.classList.remove("hidden5");
setTimeout(() => {
  elethozzaadas.classList.add("hidden5");
}, 1000);

          }

        } else {
          gomb.classList.add("rossz");
          wrongSound.currentTime = 0;
  wrongSound.play();

          valaszGombok[aktKerdes.helyesIndex].classList.add("helyes");

          // Pipák nullázása
      
          pipak = 0;
          pipakElem.textContent = pipak;

          // Élet csökkentése
          eletek--;
          eletekElem.textContent = eletek;
          eletlevonas.classList.remove("hidden5");
setTimeout(() => {
  eletlevonas.classList.add("hidden5");
}, 1000);
        }

        setTimeout(() => {
          aktualisKerdesIndex++;
          kerdessz1++,
          document.getElementById("kerdessz1").textContent = kerdessz1;
          mutatKerdes();
        }, 1500);
      };
    });
  }
});
ujrainditGomb.addEventListener("click", function () {
  location.reload();
});