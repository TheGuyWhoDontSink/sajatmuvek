
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
const hatterem = document.getElementById("hatterem");
const originalColor = hatterem.style.backgroundColor || window.getComputedStyle(hatterem).backgroundColor;
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
    kerdes: "Which video game features Mario as the main character?",
    valaszok: ["Sonic", "Zelda", "Mario Kart", "Final Fantasy"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Which company developed the PlayStation console?",
    valaszok: ["Microsoft", "Nintendo", "Sony", "Sega"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "What is the main goal in Minecraft?",
    valaszok: ["Racing", "Building and survival", "Space travel", "Card playing"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game can you find a creature called 'Creeper'?",
    valaszok: ["Fortnite", "Minecraft", "Call of Duty", "Apex Legends"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Which game series features Geralt the Witcher?",
    valaszok: ["The Elder Scrolls", "Witcher", "Dragon Age", "Dark Souls"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game do you fight zombies as part of a survivor team?",
    valaszok: ["Minecraft", "The Sims", "Left 4 Dead", "Among Us"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game can you play as a wizard at Hogwarts?",
    valaszok: ["Hogwarts Legacy", "Elder Scrolls", "Baldur's Gate", "Overwatch"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Which game involves building and shooting in a survival arena?",
    valaszok: ["League of Legends", "Fortnite", "PUBG", "Valorant"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "What is the main character's name in The Legend of Zelda games?",
    valaszok: ["Zelda", "Ganon", "Link", "Navi"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game do you work with (or against) colorful crewmates?",
    valaszok: ["Among Us", "Fall Guys", "Stardew Valley", "Doom"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Which game's main character is Kratos, the god of war?",
    valaszok: ["God of War", "Assassin's Creed", "Halo", "Gears of War"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "What is the goal in the game Tetris?",
    valaszok: ["Shooting", "Building", "Fitting shapes", "Trading"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which video game can you use a Pokéball?",
    valaszok: ["Yu-Gi-Oh!", "Pokemon", "Animal Crossing", "Fire Emblem"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game do you start on an island with a parachute?",
    valaszok: ["Fortnite", "Minecraft", "PUBG", "Halo"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game can you control the lives of Sims?",
    valaszok: ["The Sims", "Stardew Valley", "Skyrim", "Civilization"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game do you fight against the Death Star?",
    valaszok: ["Halo", "Mass Effect", "Star Wars Battlefront", "Destiny"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Which game is famous for the 'Hadouken!' move?",
    valaszok: ["Tekken", "Street Fighter", "Mortal Kombat", "Smash Bros"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game can you explore the world of Tamriel?",
    valaszok: ["The Witcher", "Elder Scrolls", "Dragon Age", "Dark Souls"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Which game's main character is Master Chief?",
    valaszok: ["Halo", "Destiny", "Gears of War", "Titanfall"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "In which game can you collect stars in space with Mario?",
    valaszok: ["Mario Galaxy", "Mario Kart", "Super Mario World", "Luigi's Mansion"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
  kerdes: "Which horror game features animatronic characters in a pizzeria?",
  valaszok: ["Resident Evil", "Five Nights at Freddy's", "Silent Hill", "Dead Space"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game is set in the post-apocalyptic world of Vaults and Wastelands?",
  valaszok: ["Metro", "Fallout", "Far Cry", "STALKER"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "In which game can you be a cowboy in the Wild West?",
  valaszok: ["Call of Juarez", "Red Dead Redemption", "GTA V", "Tomb Raider"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game popularized the 'battle royale' genre?",
  valaszok: ["Fortnite", "Warzone", "PUBG", "Apex Legends"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game lets you create and run your own island with cute animal villagers?",
  valaszok: ["Stardew Valley", "Minecraft", "Animal Crossing", "Terraria"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "Which company developed the game 'Overwatch'?",
  valaszok: ["Ubisoft", "Blizzard", "Valve", "Riot Games"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which classic arcade game involves eating dots and avoiding ghosts?",
  valaszok: ["Donkey Kong", "Pac-Man", "Frogger", "Tetris"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game is known for its fast-paced building mechanics?",
  valaszok: ["PUBG", "Minecraft", "Fortnite", "Valorant"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "In which series does Ezio Auditore appear?",
  valaszok: ["The Witcher", "Assassin's Creed", "God of War", "Far Cry"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which puzzle game uses falling blocks to complete rows?",
  valaszok: ["Bejeweled", "Candy Crush", "Tetris", "Portal"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game features a battle between plants and zombies?",
  valaszok: ["Minecraft", "Terraria", "Plants vs. Zombies", "Roblox"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game lets you simulate farming and relationships in a village?",
  valaszok: ["The Sims", "Animal Crossing", "Stardew Valley", "Harvest Moon"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game is based on building tracks and managing roller coasters?",
  valaszok: ["SimCity", "RollerCoaster Tycoon", "Zoo Tycoon", "Minecraft"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game is known for its brutal difficulty and cryptic storytelling?",
  valaszok: ["Skyrim", "Dark Souls", "God of War", "Elden Ring"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which hero in Overwatch uses a bow and arrow?",
  valaszok: ["Hanzo", "Reaper", "Genji", "Soldier: 76"],
  helyesIndex: 0,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game includes a character named Lara Croft?",
  valaszok: ["Uncharted", "Tomb Raider", "Far Cry", "Resident Evil"],
  helyesIndex: 1,
  kep: "gamer.jpg"
},
{
  kerdes: "Which FPS game series is set during different historical and modern wars?",
  valaszok: ["Battlefield", "Valorant", "Overwatch", "Portal"],
  helyesIndex: 0,
  kep: "gamer.jpg"
},
{
  kerdes: "What is the name of the evil organization in Resident Evil?",
  valaszok: ["Umbrella", "Red Ribbon", "Blackwatch", "HiveMind"],
  helyesIndex: 0,
  kep: "gamer.jpg"
},
{
  kerdes: "Which RPG series features turn-based combat and Chocobos?",
  valaszok: ["Final Fantasy", "Persona", "Dragon Quest", "Zelda"],
  helyesIndex: 0,
  kep: "gamer.jpg"
},
{
  kerdes: "Which game allows you to race with shells and bananas?",
  valaszok: ["Crash Team Racing", "Need for Speed", "Mario Kart", "Gran Turismo"],
  helyesIndex: 2,
  kep: "gamer.jpg"
},
{
  kerdes: "Which material is used to make the strongest armor in Minecraft?",
  valaszok: ["Iron", "Diamond", "Gold", "Leather"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob attacks you at night and explodes?",
  valaszok: ["Zombie", "Spider", "Creeper", "Skeleton"],
  helyesIndex: 2,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which tool mines stone the fastest?",
  valaszok: ["Axe", "Pickaxe", "Shovel", "Hoe"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which plant can be used to make sugar in Minecraft?",
  valaszok: ["Corn", "Sugar Cane", "Wheat", "Cabbage"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "What is the name of the dimension you reach by building a portal with obsidian blocks?",
  valaszok: ["End", "Nether", "Overworld", "Skylands"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob drops ink sacs when defeated?",
  valaszok: ["Spider", "Squid", "Fish", "Ghost"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "What happens if a Creeper explodes underwater?",
  valaszok: ["Big explosion", "No explosion", "Smaller explosion", "Fire starts"],
  helyesIndex: 2,
  kep: "minecraft.jpg"
},
{
  kerdes: "What items do you need to craft TNT in Minecraft?",
  valaszok: ["Gunpowder and paper", "Gunpowder and flint", "Paper and gunpowder", "Gunpowder and flint"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which tool do you use to make glass?",
  valaszok: ["Furnace", "Flint and steel", "Crafting table", "Anvil"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which Minecraft mob attacks the fastest?",
  valaszok: ["Skeleton", "Zombie", "Enderman", "Spider"],
  helyesIndex: 2,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which animal's meat is edible and restores health?",
  valaszok: ["Pig", "Donkey", "Chicken", "Horse"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What happens if an Enderman touches water?",
  valaszok: ["It catches fire", "It disappears", "It dies", "Nothing"],
  helyesIndex: 2,
  kep: "minecraft.jpg"
},
{
  kerdes: "What is bread made from in Minecraft?",
  valaszok: ["Wheat", "Sugar Cane", "Potato", "Carrot"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block cannot be mined by hand?",
  valaszok: ["Diamond", "Lava", "Obsidian", "Gold"],
  helyesIndex: 2,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block emits light in Minecraft?",
  valaszok: ["TNT", "Torch", "Water", "Stone"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which Minecraft mob can be tamed?",
  valaszok: ["Ghost", "Wolf", "Creeper", "Donkey"],
  helyesIndex: 1,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which item do you use to activate a Nether Portal?",
  valaszok: ["Flint and steel", "Water", "Stone", "Torch"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which material is used to craft glass?",
  valaszok: ["Sand", "Stone", "Diamond", "Dirt"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "From which plant can you get dye in Minecraft?",
  valaszok: ["Flower", "Sugar Cane", "Carrot", "Wheat"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What happens when water meets lava in Minecraft?",
  valaszok: ["Stone forms", "Fire starts", "Nothing", "Snow forms"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What is the name of the mob that teleports and steals blocks?",
  valaszok: ["Enderman", "Zombie", "Skeleton", "Witch"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What materials can be used to craft a sword?",
  valaszok: ["Wood, Iron, Diamond or Gold", "Only Wood", "Only Iron", "Only Diamond"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which tool is the fastest for mining wood?",
  valaszok: ["Axe", "Pickaxe", "Shovel", "Hoe"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block is used to grow mushrooms faster?",
  valaszok: ["Mycelium", "Grass", "Dirt", "Stone"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which animal drops wool when sheared?",
  valaszok: ["Sheep", "Cow", "Pig", "Chicken"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob is passive and found in villages?",
  valaszok: ["Villager", "Zombie", "Creeper", "Spider"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "How do you cure a zombie villager?",
  valaszok: ["Splash potion of weakness and golden apple", "Throw water on it", "Hit it with a sword", "Trap it"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which ore is the most valuable in Minecraft?",
  valaszok: ["Diamond", "Gold", "Iron", "Coal"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob drops feathers?",
  valaszok: ["Chicken", "Cow", "Pig", "Sheep"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob shoots arrows?",
  valaszok: ["Skeleton", "Zombie", "Spider", "Creeper"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block can be used to create a beacon base?",
  valaszok: ["Iron, Gold, Diamond, or Emerald blocks", "Only Stone", "Only Wood", "Only Dirt"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What do you use to tame a horse?",
  valaszok: ["Saddle", "Apple", "Carrot", "Stick"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block is used to smelt ores?",
  valaszok: ["Furnace", "Anvil", "Crafting table", "Chest"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which material is required to craft an enchanting table?",
  valaszok: ["Obsidian", "Diamond", "Gold", "Iron"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What is the function of a crafting table?",
  valaszok: ["To craft more complex items", "To cook food", "To store items", "To enchant weapons"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob is passive and drops leather?",
  valaszok: ["Cow", "Pig", "Sheep", "Chicken"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block can be used to respawn the Ender Dragon?",
  valaszok: ["End Crystals", "Obsidian", "Bedrock", "Diamond Block"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "How do you get experience points quickly?",
  valaszok: ["Killing mobs", "Mining dirt", "Eating food", "Fishing"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which food restores the most hunger points?",
  valaszok: ["Steak", "Bread", "Apple", "Carrot"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which block do you need to mine to get diamonds?",
  valaszok: ["Stone", "Obsidian", "Deepslate", "Diamond Ore"],
  helyesIndex: 3,
  kep: "minecraft.jpg"
},
{
  kerdes: "What mob explodes when near the player silently?",
  valaszok: ["Creeper", "Zombie", "Spider", "Skeleton"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which animal can you ride after taming in Minecraft?",
  valaszok: ["Horse", "Chicken", "Pig", "Sheep"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "What do you get when you smelt iron ore?",
  valaszok: ["Iron ingot", "Iron block", "Iron sword", "Iron pickaxe"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which plant can be farmed for bread production?",
  valaszok: ["Wheat", "Sugar Cane", "Carrot", "Potato"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
{
  kerdes: "Which mob can be found only in the Nether dimension?",
  valaszok: ["Ghast", "Zombie", "Creeper", "Enderman"],
  helyesIndex: 0,
  kep: "minecraft.jpg"
},
 {
    kerdes: "What is the name of the main character in The Legend of Zelda series?",
    valaszok: ["Zelda", "Link", "Ganondorf", "Navi"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo console was the first to use discs instead of cartridges?",
    valaszok: ["Nintendo 64", "GameCube", "Wii", "Switch"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Mario game introduced the character Yoshi?",
    valaszok: ["Super Mario Bros", "Super Mario World", "Mario Kart 64", "Super Mario 64"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the princess often rescued by Mario?",
    valaszok: ["Peach", "Daisy", "Zelda", "Rosalina"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "In which game did Nintendo first introduce motion controls?",
    valaszok: ["Wii Sports", "Super Mario Galaxy", "Nintendo 64", "GameCube"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo series features battles in a grid-based tactical format?",
    valaszok: ["Fire Emblem", "Pokémon", "Animal Crossing", "Kirby"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the dinosaur companion of Mario?",
    valaszok: ["Bowser", "Yoshi", "Toad", "Donkey Kong"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which handheld console is known for its dual screens?",
    valaszok: ["Game Boy", "Nintendo DS", "GameCube", "Wii U"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Who is the main antagonist in the Metroid series?",
    valaszok: ["Ridley", "Mother Brain", "Kraid", "Dark Samus"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which game features the character Kirby?",
    valaszok: ["Kirby's Dream Land", "Donkey Kong Country", "Super Mario Bros", "Zelda: Ocarina of Time"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What year was the original Nintendo Entertainment System (NES) released in North America?",
    valaszok: ["1983", "1985", "1987", "1989"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the primary weapon used by Samus Aran in Metroid?",
    valaszok: ["Power Sword", "Plasma Rifle", "Arm Cannon", "Blaster"],
    helyesIndex: 2,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game popularized the 'Z-targeting' mechanic?",
    valaszok: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time", "Metroid Prime", "Donkey Kong 64"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which character is known as Mario’s brother?",
    valaszok: ["Wario", "Luigi", "Toad", "Bowser"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the city in the game Animal Crossing?",
    valaszok: ["New Leaf", "Breezy Hollow", "Tom Nook Town", "Isabelle Village"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which game features the villain King Dedede?",
    valaszok: ["Kirby’s Dream Land", "Metroid", "Donkey Kong Country", "Fire Emblem"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo console was the first to feature HD graphics?",
    valaszok: ["Wii U", "Nintendo Switch", "GameCube", "Nintendo 64"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the plumber who is the main protagonist in the Donkey Kong arcade game?",
    valaszok: ["Mario", "Luigi", "Wario", "Bowser"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game series includes creatures like Pikachu and Charizard?",
    valaszok: ["Pokémon", "Digimon", "Yu-Gi-Oh", "Animal Crossing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game allows players to build and explore in a blocky world?",
    valaszok: ["Minecraft", "Terraria", "Splatoon", "Animal Crossing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo console introduced the Amiibo figures?",
    valaszok: ["Wii U", "Nintendo 3DS", "Nintendo Switch", "GameCube"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "In which game does Link wield the Master Sword?",
    valaszok: ["The Legend of Zelda", "Metroid", "Kirby", "Fire Emblem"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo series features battles with swords and magic?",
    valaszok: ["Fire Emblem", "Super Smash Bros", "Mario Kart", "Metroid"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of Mario’s dinosaur friend?",
    valaszok: ["Bowser", "Yoshi", "Donkey Kong", "Wario"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo handheld console came after the Game Boy Advance?",
    valaszok: ["Nintendo DS", "GameCube", "Wii", "Nintendo 3DS"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game series features races with Mario and friends on karts?",
    valaszok: ["Mario Kart", "F-Zero", "Diddy Kong Racing", "Crash Team Racing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which game introduced the character Samus Aran?",
    valaszok: ["Metroid", "Mega Man", "Kirby", "Castlevania"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo console was released in 2017 and is hybrid between handheld and home console?",
    valaszok: ["Nintendo Switch", "Wii U", "Nintendo 3DS", "GameCube"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo character is known for catching creatures in Poké Balls?",
    valaszok: ["Ash", "Red", "Blue", "Trainer"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the final boss in many Zelda games?",
    valaszok: ["Ganondorf", "Bowser", "King Dedede", "Ridley"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which game is famous for its underground mining and building mechanics?",
    valaszok: ["Minecraft", "Terraria", "Stardew Valley", "Animal Crossing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo character is a pink puffball?",
    valaszok: ["Kirby", "Jigglypuff", "Toad", "Pikachu"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo series features a character named Fox McCloud?",
    valaszok: ["Star Fox", "Metroid", "F-Zero", "Super Smash Bros"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which handheld Nintendo console had a 3D screen without glasses?",
    valaszok: ["Nintendo 3DS", "Game Boy Advance", "Nintendo DS", "GameCube"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game features squid-like characters called Inklings?",
    valaszok: ["Splatoon", "Pokémon", "Kirby", "Animal Crossing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the main goal in the game Animal Crossing?",
    valaszok: ["Build and decorate your village", "Fight enemies", "Race cars", "Catch Pokémon"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo series includes collectible cards called Spirits?",
    valaszok: ["Super Smash Bros Ultimate", "Pokémon TCG", "Fire Emblem", "Animal Crossing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo console was the successor to the Wii?",
    valaszok: ["Wii U", "Nintendo Switch", "GameCube", "Nintendo 3DS"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which character often says ‘It’s-a me!’?",
    valaszok: ["Mario", "Luigi", "Bowser", "Toad"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the main antagonist in the Donkey Kong series?",
    valaszok: ["King K. Rool", "Bowser", "Ganondorf", "Ridley"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo series features giant robots and futuristic racing?",
    valaszok: ["F-Zero", "Star Fox", "Metroid", "Kirby"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which game features battles between Nintendo characters in various arenas?",
    valaszok: ["Super Smash Bros", "Mario Kart", "Pokémon", "Fire Emblem"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game features a talking hat named Cappy?",
    valaszok: ["Super Mario Odyssey", "Mario Kart 8", "Splatoon", "Kirby"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game lets players farm, fish, and build relationships in a rural town?",
    valaszok: ["Animal Crossing", "Stardew Valley", "Harvest Moon", "Minecraft"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo handheld console had a touchscreen and stylus?",
    valaszok: ["Nintendo DS", "Game Boy Advance", "Nintendo 3DS", "GameCube"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What is the name of the sword often wielded by Link in Zelda games?",
    valaszok: ["Master Sword", "Power Sword", "Lightsaber", "Blade of Time"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo series features anthropomorphic animals in competitive sports?",
    valaszok: ["Mario Sports", "Pokémon", "Kirby", "Fire Emblem"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game has a character named Donkey Kong?",
    valaszok: ["Donkey Kong Country", "Super Mario Bros", "Metroid", "Kirby"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo character is known for throwing hammers?",
    valaszok: ["Donkey Kong", "Mario", "Luigi", "Bowser"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo console was the first to support online gaming?",
    valaszok: ["GameCube", "Wii", "Nintendo 64", "Switch"],
    helyesIndex: 1,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game features a sport called 'Splatfest'?",
    valaszok: ["Splatoon", "Mario Kart", "Wii Sports", "Animal Crossing"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "Which Nintendo game series is set on the planet Zebes?",
    valaszok: ["Metroid", "Star Fox", "Kirby", "Fire Emblem"],
    helyesIndex: 0,
    kep: "nintendo.jpg"
  },
  {
    kerdes: "What keyword is used to define a function in Python?",
    valaszok: ["func", "def", "function", "define"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which data type is used to store a sequence of characters in Python?",
    valaszok: ["int", "float", "str", "bool"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you start a comment in Python?",
    valaszok: ["//", "/*", "#", "<!--"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "Which Python keyword is used for conditional branching?",
    valaszok: ["switch", "if", "case", "choose"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(2 ** 3) in Python?",
    valaszok: ["6", "8", "9", "5"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which Python collection type is ordered, changeable, and allows duplicate members?",
    valaszok: ["list", "set", "dictionary", "tuple"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you create a list in Python?",
    valaszok: ["{}", "[]", "()", "<>"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the correct way to import a module in Python?",
    valaszok: ["include math", "using math", "import math", "require math"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you write a while loop in Python?",
    valaszok: ["while condition:", "loop while condition", "while (condition)", "do while condition"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What will be the result of len('Hello')?",
    valaszok: ["4", "5", "6", "Error"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is NOT a valid Python variable name?",
    valaszok: ["my_var", "2var", "var2", "_var"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What data type is returned by the input() function?",
    valaszok: ["int", "str", "float", "bool"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which operator is used for floor division in Python?",
    valaszok: ["/", "//", "%", "**"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What does the 'pass' statement do in Python?",
    valaszok: ["Stops execution", "Skips current iteration", "Does nothing", "Ends a function"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(type(3.14))?",
    valaszok: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which keyword is used to create a class in Python?",
    valaszok: ["class", "def", "object", "struct"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you add an element to the end of a list named 'my_list'?",
    valaszok: ["my_list.append(element)", "my_list.add(element)", "my_list.insert(element)", "my_list.push(element)"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the correct way to handle exceptions in Python?",
    valaszok: ["try-except", "catch-try", "try-catch", "handle-except"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which function converts a string to an integer in Python?",
    valaszok: ["int()", "str()", "float()", "toInt()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is a Python dictionary?",
    valaszok: ["A list of values", "A key-value store", "An ordered sequence", "A set of unique values"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which method removes the last item from a list?",
    valaszok: ["pop()", "remove()", "delete()", "clear()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you create a tuple in Python?",
    valaszok: ["[]", "{}", "()", "<>"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is mutable in Python?",
    valaszok: ["tuple", "string", "list", "int"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the keyword to exit a loop prematurely in Python?",
    valaszok: ["break", "stop", "exit", "return"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you check for equality in Python?",
    valaszok: ["=", "==", "===", "equals"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What does the 'len()' function do?",
    valaszok: ["Returns the length", "Returns the type", "Returns the value", "Returns the index"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is a Python boolean value?",
    valaszok: ["true", "True", "TRUE", "yes"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What symbol is used to denote a block of code in Python?",
    valaszok: ["Braces {}", "Indentation", "Parentheses ()", "Semicolon ;"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which keyword is used to create an anonymous function in Python?",
    valaszok: ["func", "lambda", "def", "anonymous"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you access the first element of a list named 'my_list'?",
    valaszok: ["my_list[0]", "my_list[1]", "my_list.first()", "my_list(0)"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which method would you use to convert all characters in a string to uppercase?",
    valaszok: ["upper()", "capitalize()", "toupper()", "uppercase()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How can you create a set in Python?",
    valaszok: ["{}", "[]", "()", "set()"],
    helyesIndex: 3,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(5 % 2)?",
    valaszok: ["1", "2", "0", "Error"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which Python statement is used to iterate over a sequence?",
    valaszok: ["for", "while", "loop", "iterate"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you create an empty dictionary in Python?",
    valaszok: ["[]", "{}", "()", "dict()"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which keyword is used to create a generator function?",
    valaszok: ["yield", "return", "generate", "func"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(bool(0))?",
    valaszok: ["True", "False", "0", "Error"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you open a file for reading in Python?",
    valaszok: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'rw')", "open('file.txt')"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which built-in function returns the absolute value of a number?",
    valaszok: ["abs()", "fabs()", "absolute()", "mod()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What does the 'strip()' method do on a string?",
    valaszok: ["Removes spaces from both ends", "Removes spaces from left", "Removes spaces from right", "Replaces spaces"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the correct way to concatenate two strings 'a' and 'b'?",
    valaszok: ["a + b", "a.concat(b)", "concat(a, b)", "a & b"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which Python keyword exits a function and returns a value?",
    valaszok: ["exit", "return", "break", "stop"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you check if a key 'k' exists in a dictionary 'd'?",
    valaszok: ["k in d", "d.has_key(k)", "k exists d", "d.contains(k)"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which function converts an iterable to a list?",
    valaszok: ["list()", "array()", "tuple()", "set()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(3 == 3.0)?",
    valaszok: ["True", "False", "Error", "None"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which keyword is used to define a class method?",
    valaszok: ["@staticmethod", "@classmethod", "def", "classmethod"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How can you generate a random number in Python?",
    valaszok: ["import random; random.randint()", "import rand; rand()", "random()", "randint()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(bool('False'))?",
    valaszok: ["True", "False", "Error", "None"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is a Python keyword?",
    valaszok: ["yield", "print", "input", "len"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the result of 3 < 5 and 2 > 4?",
    valaszok: ["True", "False", "Error", "None"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you create a virtual environment in Python?",
    valaszok: ["python -m venv env", "python create venv", "venv create", "pip venv create"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which operator is used for string repetition in Python?",
    valaszok: ["*", "+", "%", "^"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(list(range(3)))?",
    valaszok: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which built-in function returns the maximum of a list?",
    valaszok: ["max()", "maximum()", "max_value()", "largest()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you comment multiple lines in Python?",
    valaszok: ["''' ... '''", "// ... //", "/* ... */", "# ... #"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the default data type for integer division in Python 3?",
    valaszok: ["int", "float", "double", "decimal"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of the following can be used to iterate over two lists simultaneously?",
    valaszok: ["zip()", "map()", "filter()", "enumerate()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What does the 'enumerate()' function do?",
    valaszok: ["Adds index to elements", "Filters list", "Sorts list", "Reverses list"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you remove duplicates from a list 'my_list'?",
    valaszok: ["list(set(my_list))", "my_list.remove_duplicates()", "unique(my_list)", "my_list.unique()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(type(None))?",
    valaszok: ["<class 'NoneType'>", "<class 'null'>", "<class 'void'>", "<class 'None'>"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which method converts a string into a list of words?",
    valaszok: ["split()", "join()", "slice()", "cut()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you define a Python function with default argument values?",
    valaszok: ["def func(a=5):", "def func(a):=5", "def func(a default 5):", "def func(a <- 5):"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What does the 'is' operator test in Python?",
    valaszok: ["Value equality", "Identity equality", "Membership", "Type equality"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you reverse a list named 'my_list'?",
    valaszok: ["my_list.reverse()", "reverse(my_list)", "my_list.reversed()", "reversed(my_list)"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is an immutable data type?",
    valaszok: ["list", "set", "tuple", "dictionary"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print( 'Hello' + str(5) )?",
    valaszok: ["Hello5", "Hello 5", "Hello", "Error"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is a valid Python identifier?",
    valaszok: ["2var", "_var", "var-name", "var name"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(type([]))?",
    valaszok: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which module is used for working with regular expressions in Python?",
    valaszok: ["regex", "re", "pyregex", "expression"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you read all lines from a file object 'f'?",
    valaszok: ["f.read()", "f.readlines()", "f.readall()", "f.readline()"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which keyword is used to declare a global variable inside a function?",
    valaszok: ["global", "nonlocal", "extern", "public"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which of these is NOT a Python data structure?",
    valaszok: ["list", "set", "map", "tuple"],
    helyesIndex: 2,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print(2 ** 3 ** 2)?",
    valaszok: ["64", "512", "256", "Error"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "Which method converts all characters in a string to lowercase?",
    valaszok: ["lower()", "downcase()", "mincase()", "tolower()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What does the 'finally' clause in a try-except block do?",
    valaszok: ["Executes if no exception", "Executes always", "Executes only on exception", "Skips the block"],
    helyesIndex: 1,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you check the length of a dictionary 'd'?",
    valaszok: ["len(d)", "d.length()", "d.size()", "length(d)"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which built-in function sorts a list?",
    valaszok: ["sorted()", "sort()", "order()", "arrange()"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the correct syntax for a list comprehension that squares numbers 0-4?",
    valaszok: ["[x**2 for x in range(5)]", "[x^2 for x in range(5)]", "list(x**2 for x in range(5))", "[x*x in range(5)]"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "Which operator is used for bitwise AND in Python?",
    valaszok: ["&", "|", "^", "~"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "What is the output of print( type( lambda x: x ) )?",
    valaszok: ["<class 'function'>", "<class 'lambda'>", "<class 'method'>", "<class 'object'>"],
    helyesIndex: 0,
    kep: "python.jpg"
  },
  {
    kerdes: "How do you check if a list 'a' is empty?",
    valaszok: ["if not a:", "if a == []:", "if len(a) == 0:", "All of the above"],
    helyesIndex: 3,
    kep: "python.jpg"
  },
  {
kerdes: "What is REST API?",
valaszok: ["Really Easy Simple Thing", "Representational State Transfer", "Random Server Transfer", "None"],
helyesIndex: 1,
kep: "backend.jpg"
},

{
kerdes: "Which is NOT a backend language?",
valaszok: ["PHP", "Ruby", "CSS", "Python"],
helyesIndex: 2,
kep: "backend.jpg"
},

{
kerdes: "What does DBMS mean?",
valaszok: ["Data Bank Management System", "Database Management System", "DataBase Manual Setup", "None"],
helyesIndex: 1,
kep: "backend.jpg"
},

{
kerdes: "What is SQL Injection?",
valaszok: ["A type of attack", "SQL command", "Database backup", "A programming language"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is Middleware?",
valaszok: ["Software that connects apps", "Hardware device", "Database engine", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "In backend, what does MVC stand for?",
valaszok: ["Model View Controller", "Multiple Variable Code", "Main Visual Component", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which is NoSQL database?",
valaszok: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
helyesIndex: 2,
kep: "backend.jpg"
},

{
kerdes: "What is a server?",
valaszok: ["A computer that serves data", "A programming language", "Database type", "Web browser"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What port does HTTP use?",
valaszok: ["80", "21", "443", "8080"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is JSON?",
valaszok: ["JavaScript Object Notation", "JavaScript Online", "Java Simple Object Notation", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},
{
kerdes: "What is the purpose of an API?",
valaszok: ["Allows communication between software", "Is a programming language", "Database engine", "Web browser"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which HTTP method is used to update data?",
valaszok: ["GET", "POST", "PUT", "DELETE"],
helyesIndex: 2,
kep: "backend.jpg"
},

{
kerdes: "What is a 'hook' in backend programming?",
valaszok: ["A way to catch errors", "A method to extend functionality", "Database query", "API endpoint"],
helyesIndex: 1,
kep: "backend.jpg"
},

{
kerdes: "What language is used for backend scripting in Node.js?",
valaszok: ["JavaScript", "Python", "PHP", "Ruby"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is caching?",
valaszok: ["Storing data temporarily for faster access", "Database backup", "A programming technique", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which of these is a backend framework?",
valaszok: ["React", "Angular", "Django", "Vue"],
helyesIndex: 2,
kep: "backend.jpg"
},

{
kerdes: "What does CRUD stand for?",
valaszok: ["Create, Read, Update, Delete", "Create, Run, Use, Destroy", "Code, Run, Update, Debug", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is a 'session' in web backend?",
valaszok: ["Temporary data stored on server", "A database", "A programming language", "A file format"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What does ORM mean?",
valaszok: ["Object-Relational Mapping", "Online Resource Manager", "Open Runtime Model", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which protocol is secure for data transfer?",
valaszok: ["HTTP", "FTP", "HTTPS", "SMTP"],
helyesIndex: 2,
kep: "backend.jpg"
},
{
kerdes: "What is the purpose of an API?",
valaszok: ["Allows communication between software", "Is a programming language", "Database engine", "Web browser"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which HTTP method is used to update data?",
valaszok: ["GET", "POST", "PUT", "DELETE"],
helyesIndex: 2,
kep: "backend.jpg"
},

{
kerdes: "What is a 'hook' in backend programming?",
valaszok: ["A way to catch errors", "A method to extend functionality", "Database query", "API endpoint"],
helyesIndex: 1,
kep: "backend.jpg"
},

{
kerdes: "What language is used for backend scripting in Node.js?",
valaszok: ["JavaScript", "Python", "PHP", "Ruby"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is caching?",
valaszok: ["Storing data temporarily for faster access", "Database backup", "A programming technique", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which of these is a backend framework?",
valaszok: ["React", "Angular", "Django", "Vue"],
helyesIndex: 2,
kep: "backend.jpg"
},

{
kerdes: "What does CRUD stand for?",
valaszok: ["Create, Read, Update, Delete", "Create, Run, Use, Destroy", "Code, Run, Update, Debug", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is a 'session' in web backend?",
valaszok: ["Temporary data stored on server", "A database", "A programming language", "A file format"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What does ORM mean?",
valaszok: ["Object-Relational Mapping", "Online Resource Manager", "Open Runtime Model", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which protocol is secure for data transfer?",
valaszok: ["HTTP", "FTP", "HTTPS", "SMTP"],
helyesIndex: 2,
kep: "backend.jpg"
},
{
kerdes: "What is middleware in backend development?",
valaszok: ["Software that connects components", "Database", "Frontend code", "API endpoint"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which database is NoSQL?",
valaszok: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
helyesIndex: 1,
kep: "backend.jpg"
},

{
kerdes: "What does REST stand for?",
valaszok: ["Representational State Transfer", "Remote Execution Service Technology", "Rapid System Testing", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which language is commonly used for backend besides JavaScript?",
valaszok: ["Python", "HTML", "CSS", "Swift"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is a database index used for?",
valaszok: ["Speed up queries", "Store data", "Encrypt data", "Visualize data"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is SQL?",
valaszok: ["Structured Query Language", "Simple Query Language", "Server Query List", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is a token used for in backend?",
valaszok: ["Authentication", "Database", "Frontend", "Programming language"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What does 'scaling' a backend mean?",
valaszok: ["Handling more users/data", "Writing more code", "Fixing bugs", "None"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "Which tool is used for API testing?",
valaszok: ["Postman", "Photoshop", "GitHub", "Docker"],
helyesIndex: 0,
kep: "backend.jpg"
},

{
kerdes: "What is a 'microservice' architecture?",
valaszok: ["Small, independent services", "Monolithic app", "Database", "Programming language"],
helyesIndex: 0,
kep: "backend.jpg"
},
{
  kerdes: "What is the main function of a car's catalytic converter?",
  valaszok: ["Increase speed", "Reduce emissions", "Improve fuel economy", "Boost horsepower"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company manufactures the Mustang?",
  valaszok: ["Chevrolet", "Ford", "Dodge", "Toyota"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What type of engine is commonly found in hybrid cars?",
  valaszok: ["Gasoline and electric", "Diesel only", "Electric only", "Gasoline only"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does ABS stand for in car safety systems?",
  valaszok: ["Automatic Braking System", "Anti-lock Braking System", "Air Bag System", "Automatic Balance System"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand uses a blue oval as its logo?",
  valaszok: ["BMW", "Ford", "Volkswagen", "Toyota"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does the acronym 'SUV' stand for?",
  valaszok: ["Sport Utility Vehicle", "Small Urban Vehicle", "Super Utility Van", "Special User Vehicle"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is home to the car brand Ferrari?",
  valaszok: ["Germany", "Italy", "France", "USA"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does horsepower measure in a car?",
  valaszok: ["Engine temperature", "Engine power output", "Fuel efficiency", "Weight"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company makes the Civic model?",
  valaszok: ["Toyota", "Honda", "Nissan", "Mazda"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What type of drivetrain sends power to all four wheels?",
  valaszok: ["FWD", "RWD", "4WD", "AWD"],
  helyesIndex: 3,
  kep: "auto.jpg"
},
{
  kerdes: "Which brand is famous for the 'Beetle' car?",
  valaszok: ["Volkswagen", "Ford", "Chevrolet", "Fiat"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the name of the German car manufacturer known for the '3 Series'?",
  valaszok: ["Audi", "BMW", "Mercedes-Benz", "Volkswagen"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What fuel type does a diesel engine use?",
  valaszok: ["Gasoline", "Diesel", "Electric", "Hybrid"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does a turbocharger do?",
  valaszok: ["Improves engine power", "Reduces emissions", "Improves fuel economy", "Controls steering"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the Wrangler SUV?",
  valaszok: ["Jeep", "Toyota", "Ford", "Honda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the function of a car’s alternator?",
  valaszok: ["Charge the battery", "Control speed", "Regulate fuel", "Cool the engine"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer uses a three-pointed star as its logo?",
  valaszok: ["Audi", "Mercedes-Benz", "BMW", "Lexus"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the most common layout for sports cars?",
  valaszok: ["Front-engine, rear-wheel drive", "Front-engine, front-wheel drive", "Rear-engine, rear-wheel drive", "Mid-engine, all-wheel drive"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does 'MPG' stand for?",
  valaszok: ["Miles Per Gallon", "Motor Power Grade", "Maximum Performance Gear", "Miles Per Gear"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is a 'sedan'?",
  valaszok: ["A two-door car", "A four-door passenger car", "A pickup truck", "An SUV"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which Japanese company produces the Supra sports car?",
  valaszok: ["Nissan", "Honda", "Toyota", "Mazda"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "What is the purpose of the muffler in a car?",
  valaszok: ["Reduce noise", "Improve speed", "Increase power", "Cool engine"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company is known for the Camaro?",
  valaszok: ["Ford", "Chevrolet", "Dodge", "Toyota"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the benefit of all-wheel drive (AWD)?",
  valaszok: ["Better off-road traction", "Improved fuel efficiency", "Faster acceleration", "Reduced maintenance"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the typical seating capacity of a minivan?",
  valaszok: ["2-4", "4-6", "6-8", "8-10"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand has a logo with four interlinked rings?",
  valaszok: ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is the origin of Volvo?",
  valaszok: ["Sweden", "Germany", "Japan", "USA"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car part controls the direction of the vehicle?",
  valaszok: ["Accelerator", "Brake", "Steering wheel", "Clutch"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "What type of car is a 'convertible'?",
  valaszok: ["With a removable roof", "With four doors", "Electric car", "SUV"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which fuel type is generally cheaper but less efficient?",
  valaszok: ["Diesel", "Gasoline", "Electric", "Hydrogen"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the Focus model?",
  valaszok: ["Honda", "Ford", "Volkswagen", "Chevrolet"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car is known as the 'Beemer'?",
  valaszok: ["BMW", "Audi", "Mercedes-Benz", "Lexus"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is 'torque' in car terminology?",
  valaszok: ["Power output", "Rotational force", "Speed", "Fuel efficiency"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car company makes the WRX model?",
  valaszok: ["Subaru", "Mazda", "Nissan", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What system helps prevent skidding on slippery roads?",
  valaszok: ["ABS", "ESP", "GPS", "TPMS"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is the origin of Hyundai?",
  valaszok: ["China", "South Korea", "Japan", "India"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the main material used for car tires?",
  valaszok: ["Plastic", "Rubber", "Metal", "Glass"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which part of the car absorbs impact during a collision?",
  valaszok: ["Bumper", "Engine", "Windshield", "Exhaust"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does 'RWD' mean?",
  valaszok: ["Rear-Wheel Drive", "Right-Wheel Drive", "Rapid Wheel Drive", "Remote Wheel Drive"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the Corvette?",
  valaszok: ["Ford", "Chevrolet", "Dodge", "Tesla"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which fuel is used by electric cars?",
  valaszok: ["Gasoline", "Diesel", "Electricity", "Hydrogen"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "What is the term for the rotating parts connected to the wheels?",
  valaszok: ["Axles", "Brakes", "Steering", "Mirrors"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is home to the car brand Peugeot?",
  valaszok: ["France", "Germany", "Italy", "Japan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the name of the mechanism that changes gears in a manual car?",
  valaszok: ["Accelerator", "Clutch", "Brake", "Gear lever"],
  helyesIndex: 3,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand uses a prancing horse as its logo?",
  valaszok: ["Lamborghini", "Ferrari", "Maserati", "Porsche"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the Golf model?",
  valaszok: ["Volkswagen", "Ford", "Honda", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does 'EV' stand for in cars?",
  valaszok: ["Electric Vehicle", "Engine Valve", "Extra Voltage", "Energy Vehicle"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What safety feature inflates during a crash to protect passengers?",
  valaszok: ["Seatbelt", "Airbag", "ABS", "ESP"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car company is famous for the Prius?",
  valaszok: ["Honda", "Toyota", "Nissan", "Ford"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the purpose of engine oil?",
  valaszok: ["Cool engine", "Lubricate parts", "Clean air", "Store fuel"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand's logo features a bowtie?",
  valaszok: ["Chevrolet", "Ford", "Toyota", "Honda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What type of fuel is commonly used in Formula 1 racing cars?",
  valaszok: ["Diesel", "Petrol", "Electric", "Nitrous oxide"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the maximum number of doors on a coupe?",
  valaszok: ["2", "3", "4", "5"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the speedometer display?",
  valaszok: ["Engine RPM", "Speed", "Fuel level", "Temperature"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company manufactures the car model 'Impreza'?",
  valaszok: ["Subaru", "Toyota", "Honda", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does a car’s tachometer measure?",
  valaszok: ["Speed", "Fuel consumption", "Engine RPM", "Battery voltage"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer uses a blue and white roundel as its logo?",
  valaszok: ["Audi", "BMW", "Mercedes-Benz", "Volkswagen"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which component stores electrical energy in a car?",
  valaszok: ["Starter", "Battery", "Alternator", "Fuel tank"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the Accord?",
  valaszok: ["Toyota", "Honda", "Mazda", "Nissan"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the name of the car part that connects the steering wheel to the wheels?",
  valaszok: ["Axle", "Steering column", "Drive shaft", "Control arm"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company makes the F-150 pickup truck?",
  valaszok: ["Chevrolet", "Ford", "Dodge", "Toyota"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does the term 'horsepower' relate to?",
  valaszok: ["Fuel efficiency", "Engine power", "Weight", "Engine size"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which part of the car controls air flow into the engine?",
  valaszok: ["Radiator", "Throttle", "Alternator", "Catalytic converter"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is a ‘hatchback’?",
  valaszok: ["Car with a rear door that swings upwards", "Two-door coupe", "Convertible", "Pickup truck"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand produces the model ‘Camry’?",
  valaszok: ["Toyota", "Honda", "Ford", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company is famous for the '911' sports car?",
  valaszok: ["Porsche", "Ferrari", "Lamborghini", "Maserati"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the function of a car’s radiator?",
  valaszok: ["Cool the engine", "Heat the cabin", "Control fuel flow", "Charge the battery"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which part of a car prevents the wheels from locking up during braking?",
  valaszok: ["ABS", "Airbag", "Catalytic converter", "Differential"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the acronym 'TPMS' stand for?",
  valaszok: ["Tire Pressure Monitoring System", "Total Power Management System", "Transmission Performance Monitoring System", "Traction Power Measuring System"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car company produces the ‘Altima’?",
  valaszok: ["Toyota", "Honda", "Nissan", "Ford"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "What type of vehicle is a ‘pickup truck’?",
  valaszok: ["Passenger car", "Light truck with an open cargo bed", "SUV", "Convertible"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker is known for the luxury brand Lexus?",
  valaszok: ["Honda", "Toyota", "Nissan", "Mazda"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does the clutch do in a manual car?",
  valaszok: ["Stops the car", "Changes gears", "Disengages the engine from the transmission", "Controls acceleration"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is home to car manufacturer Fiat?",
  valaszok: ["Italy", "Germany", "France", "Spain"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the fuel injector do?",
  valaszok: ["Injects air into the engine", "Injects fuel into the engine", "Controls exhaust emissions", "Ignites fuel"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer produces the ‘Charger’?",
  valaszok: ["Dodge", "Ford", "Chevrolet", "Tesla"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is ‘crumple zone’ in car safety?",
  valaszok: ["Area designed to absorb impact in a crash", "The steering system", "Engine compartment", "Fuel tank"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which part of the car provides power to the wheels?",
  valaszok: ["Engine", "Transmission", "Differential", "Axles"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company makes the Tesla Model S?",
  valaszok: ["Tesla", "BMW", "Audi", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the term for the car’s electrical system voltage?",
  valaszok: ["6 volts", "12 volts", "24 volts", "48 volts"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which of these is a luxury British car brand?",
  valaszok: ["Jaguar", "Volkswagen", "Honda", "Hyundai"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of engine uses spark plugs?",
  valaszok: ["Diesel engine", "Gasoline engine", "Electric motor", "Hydrogen engine"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the name of the system that distributes power between wheels on an axle?",
  valaszok: ["Transmission", "Differential", "Drive shaft", "Clutch"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is home to the car brand Kia?",
  valaszok: ["South Korea", "Japan", "China", "USA"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of fuel do plug-in hybrid cars use?",
  valaszok: ["Electricity only", "Gasoline only", "Both electricity and gasoline", "Diesel only"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand uses the slogan ‘The Ultimate Driving Machine’?",
  valaszok: ["Audi", "BMW", "Mercedes-Benz", "Lexus"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What is the purpose of the car’s muffler?",
  valaszok: ["Reduce engine noise", "Increase speed", "Control emissions", "Cool the engine"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car company produces the Mustang?",
  valaszok: ["Ford", "Chevrolet", "Dodge", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does ‘RPM’ stand for?",
  valaszok: ["Rotations per minute", "Revolutions per mile", "Resistance per meter", "Rotations per meter"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Civic’?",
  valaszok: ["Honda", "Toyota", "Nissan", "Mazda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What type of drivetrain is typically found in front-wheel drive cars?",
  valaszok: ["Engine powers front wheels", "Engine powers rear wheels", "Engine powers all wheels", "Engine powers no wheels"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer produces the ‘Explorer’ SUV?",
  valaszok: ["Ford", "Chevrolet", "Jeep", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the function of a catalytic converter?",
  valaszok: ["Reduce exhaust emissions", "Increase engine power", "Cool the engine", "Store fuel"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand is famous for the ‘Boxster’ model?",
  valaszok: ["Porsche", "BMW", "Audi", "Mercedes-Benz"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the typical fuel type for diesel engines?",
  valaszok: ["Gasoline", "Diesel", "Electricity", "Hydrogen"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Corvette’?",
  valaszok: ["Chevrolet", "Ford", "Dodge", "Tesla"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What type of car has a body style with a fixed roof and two doors?",
  valaszok: ["Coupe", "Convertible", "Sedan", "Hatchback"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What device ignites the fuel-air mixture in a gasoline engine?",
  valaszok: ["Fuel injector", "Spark plug", "Battery", "Alternator"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which brand produces the ‘CX-5’ SUV?",
  valaszok: ["Mazda", "Honda", "Toyota", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is ‘horsepower’ a measure of?",
  valaszok: ["Engine power output", "Fuel efficiency", "Engine size", "Weight of the car"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Silverado’ pickup truck?",
  valaszok: ["Chevrolet", "Ford", "RAM", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does ‘ABS’ stand for in cars?",
  valaszok: ["Anti-lock Braking System", "Automatic Braking System", "Automatic Balance System", "Anti-slip Braking System"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer is based in Wolfsburg, Germany?",
  valaszok: ["Volkswagen", "BMW", "Mercedes-Benz", "Audi"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the purpose of airbags in cars?",
  valaszok: ["Provide comfort", "Assist with steering", "Protect occupants during collisions", "Improve fuel efficiency"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of engine does a Tesla use?",
  valaszok: ["Internal combustion engine", "Electric motor", "Hybrid engine", "Diesel engine"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand has a logo with four interlocking rings?",
  valaszok: ["Audi", "BMW", "Mercedes-Benz", "Volkswagen"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does ‘SUV’ stand for?",
  valaszok: ["Sport Utility Vehicle", "Super Urban Vehicle", "Standard Utility Van", "Special Use Vehicle"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘Accord’?",
  valaszok: ["Honda", "Toyota", "Nissan", "Mazda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is a ‘hybrid car’?",
  valaszok: ["Car that uses gasoline only", "Car that uses electric power only", "Car that combines gasoline and electric power", "Car powered by diesel"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which car model is known as a classic muscle car by Dodge?",
  valaszok: ["Charger", "Camaro", "Mustang", "Corvette"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of fluid is used in a car’s transmission?",
  valaszok: ["Engine oil", "Transmission fluid", "Brake fluid", "Coolant"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Golf’ model?",
  valaszok: ["Volkswagen", "Audi", "BMW", "Mercedes-Benz"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the main purpose of a car’s suspension system?",
  valaszok: ["Reduce fuel consumption", "Increase engine power", "Absorb shocks from road", "Control steering"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘CX-9’ SUV?",
  valaszok: ["Mazda", "Toyota", "Honda", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the odometer in a car measure?",
  valaszok: ["Engine temperature", "Fuel level", "Distance traveled", "Speed"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which of these is a Japanese car brand?",
  valaszok: ["Ford", "Toyota", "BMW", "Volvo"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car model is produced by Tesla?",
  valaszok: ["Model S", "Civic", "Camry", "Mustang"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What part of a car connects the engine to the wheels?",
  valaszok: ["Axle", "Transmission", "Clutch", "Drive shaft"],
  helyesIndex: 3,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Explorer’?",
  valaszok: ["Ford", "Chevrolet", "Jeep", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the alternator do?",
  valaszok: ["Charge the battery", "Start the engine", "Cool the engine", "Control the brakes"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer produces the ‘Wrangler’?",
  valaszok: ["Jeep", "Ford", "Chevrolet", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the color of the ‘check engine’ warning light?",
  valaszok: ["Green", "Yellow/Amber", "Red", "Blue"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of vehicle is a sedan?",
  valaszok: ["Two-door sports car", "Four-door passenger car", "Open-top vehicle", "Pickup truck"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does ‘MPG’ stand for?",
  valaszok: ["Miles per gallon", "Maximum power gain", "Motor performance grade", "Manual power gear"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand is known for the ‘Golf’ and ‘Passat’ models?",
  valaszok: ["Volkswagen", "Audi", "BMW", "Mercedes-Benz"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is the origin of Mercedes-Benz?",
  valaszok: ["Germany", "France", "Italy", "USA"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘RAV4’?",
  valaszok: ["Toyota", "Honda", "Nissan", "Mazda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the main purpose of a turbocharger?",
  valaszok: ["Increase fuel efficiency", "Boost engine power", "Reduce emissions", "Cool the engine"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car model is known as the best-selling electric vehicle?",
  valaszok: ["Tesla Model 3", "Nissan Leaf", "Chevrolet Bolt", "BMW i3"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the term ‘horsepower’ measure in a car?",
  valaszok: ["Speed", "Engine power", "Weight", "Fuel capacity"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand is famous for the ‘Impreza’ model?",
  valaszok: ["Subaru", "Toyota", "Honda", "Mazda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What type of engine uses both an electric motor and gasoline engine?",
  valaszok: ["Diesel engine", "Electric vehicle", "Hybrid engine", "Turbine engine"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which company manufactures the ‘Model X’ electric SUV?",
  valaszok: ["Tesla", "Nissan", "Ford", "BMW"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the main function of an engine’s radiator?",
  valaszok: ["Cool engine coolant", "Increase horsepower", "Store fuel", "Power the battery"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer uses a blue oval logo?",
  valaszok: ["Ford", "Volkswagen", "BMW", "Hyundai"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does ‘EV’ stand for in automotive terms?",
  valaszok: ["Electric Vehicle", "Engine Valve", "Emission Vehicle", "Energy Volume"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘F-150’ truck?",
  valaszok: ["Ford", "Chevrolet", "RAM", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car part is responsible for changing gears in a manual transmission?",
  valaszok: ["Clutch", "Brake", "Throttle", "Axle"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the term for the distance between the front and rear axles of a car?",
  valaszok: ["Wheelbase", "Track width", "Overhang", "Ground clearance"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer is known for the ‘911’ sports car?",
  valaszok: ["Porsche", "Ferrari", "Lamborghini", "Maserati"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the main purpose of a car’s muffler?",
  valaszok: ["Reduce engine noise", "Increase speed", "Cool the engine", "Charge the battery"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘Altima’?",
  valaszok: ["Nissan", "Toyota", "Honda", "Mazda"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does ‘RPM’ stand for?",
  valaszok: ["Revolutions Per Minute", "Road Performance Meter", "Rotations Per Motor", "Rated Power Measure"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand is known for the ‘Mustang’?",
  valaszok: ["Ford", "Chevrolet", "Dodge", "Tesla"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What system helps prevent skidding during sudden turns?",
  valaszok: ["ABS", "ESC", "TPS", "ECU"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘CR-V’ SUV?",
  valaszok: ["Honda", "Toyota", "Mazda", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of fuel does a diesel engine use?",
  valaszok: ["Diesel", "Gasoline", "Electricity", "Hydrogen"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What part controls the flow of air and fuel into the engine?",
  valaszok: ["Carburetor", "Fuel injector", "Throttle body", "Catalytic converter"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "Which car manufacturer uses the ‘Three-pointed star’ logo?",
  valaszok: ["Mercedes-Benz", "BMW", "Audi", "Volkswagen"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What kind of drivetrain powers all four wheels simultaneously?",
  valaszok: ["RWD", "FWD", "AWD", "2WD"],
  helyesIndex: 2,
  kep: "auto.jpg"
},
{
  kerdes: "What is the main purpose of anti-lock brakes (ABS)?",
  valaszok: ["Prevent wheel lockup", "Increase braking power", "Improve fuel economy", "Cool the brakes"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Civic’?",
  valaszok: ["Honda", "Toyota", "Ford", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car is known for the iconic ‘Prancing Horse’ logo?",
  valaszok: ["Ferrari", "Lamborghini", "Porsche", "Maserati"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the term ‘turbo’ refer to?",
  valaszok: ["A type of engine cooling", "A forced induction device", "A kind of fuel", "A transmission type"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand produces the ‘Model 3’?",
  valaszok: ["Tesla", "BMW", "Audi", "Mercedes-Benz"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which country is home to Ferrari?",
  valaszok: ["Italy", "Germany", "USA", "France"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What does the ‘check oil’ warning light mean?",
  valaszok: ["Low oil level or pressure", "Engine overheating", "Brake failure", "Low battery"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which car part measures vehicle speed?",
  valaszok: ["Odometer", "Speedometer", "Tachometer", "Fuel gauge"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "What does the ‘turbocharger’ do?",
  valaszok: ["Increases air pressure in the engine", "Reduces fuel consumption", "Cools the engine", "Filters exhaust gases"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "Which automaker produces the ‘CX-3’?",
  valaszok: ["Mazda", "Honda", "Toyota", "Nissan"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What is the purpose of the catalytic converter?",
  valaszok: ["Reduce harmful emissions", "Increase engine power", "Cool the engine", "Charge the battery"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What type of fuel do gasoline engines use?",
  valaszok: ["Diesel", "Petrol", "Electricity", "Hydrogen"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which car brand is known for the ‘Explorer’ SUV?",
  valaszok: ["Ford", "Chevrolet", "Jeep", "Toyota"],
  helyesIndex: 0,
  kep: "auto.jpg"
},
{
  kerdes: "What type of vehicle is a hatchback?",
  valaszok: ["Two-door coupe", "Car with a rear door that swings upward", "Pickup truck", "Convertible"],
  helyesIndex: 1,
  kep: "auto.jpg"
},
{
  kerdes: "Which company produces the ‘Camry’?",
  valaszok: ["Toyota", "Honda", "Ford", "Chevrolet"],
  helyesIndex: 0,
  kep: "auto.jpg"
},





  
  

];

  let aktualisKerdesIndex = 0;
 
  let kevertKerdesek = [];

  // Játék állapot változók
  let pipak = 0;
  let pontok = 0;
  let eletek = 3;
  let kerdessz1 = 1;
function flashColor(color) {
  hatterem.style.backgroundColor = color;
  setTimeout(() => {
    hatterem.style.backgroundColor = originalColor;
  }, 1000); // 1 second
}

function flashChartreuseOnCorrectAnswer() {
  flashColor("Chartreuse");
}

function flashRedOnWrongAnswer() {
  flashColor("red");
};
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
flashChartreuseOnCorrectAnswer();
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
flashRedOnWrongAnswer();
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