
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
const lostSound = new Audio('./audio/lost.mp3');
lostSound.volume = 0.6;
  // Kérdések tömbje
  const kerdesek = [
    {
      kerdes: "Melyik a világ leghosszabb folyója?",
      valaszok: ["Amazonas", "Jangce", "Nílus", "Sárga-folyó"],
      helyesIndex: 2,
      kep: "quiz1.jpg"
    },
    {
      kerdes: "Melyik bolygó van a Naphoz legközelebb?",
      valaszok: ["Merkúr", "Vénusz", "Föld", "Mars"],
      helyesIndex: 0,
      kep: "quiz2.jpg"
    },
    {
      kerdes: "Melyik a legnagyobb óceán?",
      valaszok: ["Atlanti", "Csendes", "Indiai", "Jeges"],
      helyesIndex: 1,
      kep: "quiz3.jpg"
    },
    {
      kerdes: "Milyen színű a Nap valójában?",
      valaszok: ["Sárga", "Fehér", "Piros", "Narancs"],
      helyesIndex: 1,
      kep: "quiz4.jpg"
    },
     {
    kerdes: "Melyik évben volt a Holdra szállás?",
    valaszok: ["1965", "1969", "1972", "1959"],
    helyesIndex: 1,
    kep: "quiz5.jpg"
  },
  {
    kerdes: "Mi a Föld legnagyobb kontinense?",
    valaszok: ["Afrika", "Európa", "Ázsia", "Dél-Amerika"],
    helyesIndex: 2,
    kep: "quiz6.jpg"
  },
  {
    kerdes: "Mi a víz kémiai képlete?",
    valaszok: ["H2O", "CO2", "O2", "NaCl"],
    helyesIndex: 0,
    kep: "quiz7.jpg"
  },
  {
    kerdes: "Ki írta a 'Rómeó és Júlia' című művet?",
    valaszok: ["Molière", "Shakespeare", "Goethe", "Dante"],
    helyesIndex: 1,
    kep: "quiz8.jpg"
  },
  {
    kerdes: "Melyik az emberi test legnagyobb szerve?",
    valaszok: ["Tüdő", "Máj", "Bőr", "Szív"],
    helyesIndex: 2,
    kep: "quiz9.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Tokió?",
    valaszok: ["Kína", "Dél-Korea", "Japán", "Thaiföld"],
    helyesIndex: 2,
    kep: "quiz10.jpg"
  },
    {
    kerdes: "Melyik a leggyorsabb szárazföldi állat?",
    valaszok: ["Orrszarvú", "Gepárd", "Leopárd", "Oroszlán"],
    helyesIndex: 1,
    kep: "quiz11.jpg"
  },
  {
    kerdes: "Melyik város híres a Szabadság-szoborról?",
    valaszok: ["London", "New York", "Párizs", "Róma"],
    helyesIndex: 1,
    kep: "quiz12.jpg"
  },
  {
    kerdes: "Melyik ország híres a kengurujáról?",
    valaszok: ["Új-Zéland", "Ausztrália", "Kanada", "Dél-Afrika"],
    helyesIndex: 1,
    kep: "quiz13.jpg"
  },
  {
    kerdes: "Melyik elemi részecske töltése negatív?",
    valaszok: ["Proton", "Neutron", "Elektron", "Fotonn"],
    helyesIndex: 2,
    kep: "quiz14.jpg"
  },
  {
    kerdes: "Milyen műfajba tartozik a 'Színház az éjszakában'?",
    valaszok: ["Dráma", "Vígjáték", "Thriller", "Sci-fi"],
    helyesIndex: 0,
    kep: "quiz15.jpg"
  },
  {
    kerdes: "Ki találta fel a villanykörtét?",
    valaszok: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Galileo Galilei"],
    helyesIndex: 1,
    kep: "quiz16.jpg"
  },
  {
    kerdes: "Mi a legnagyobb bolygó a Naprendszerben?",
    valaszok: ["Szaturnusz", "Jupiter", "Neptunusz", "Föld"],
    helyesIndex: 1,
    kep: "quiz17.jpg"
  },
  {
    kerdes: "Melyik az Európai Unió hivatalos pénzneme?",
    valaszok: ["Font", "Euro", "Dollár", "Forint"],
    helyesIndex: 1,
    kep: "quiz18.jpg"
  },
  {
    kerdes: "Melyik a legmagasabb hegy a Földön?",
    valaszok: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
    helyesIndex: 1,
    kep: "quiz19.jpg"
  },
  {
    kerdes: "Melyik évben történt a berlini fal leomlása?",
    valaszok: ["1989", "1991", "1985", "1995"],
    helyesIndex: 0,
    kep: "quiz20.jpg"
  },
   {
    kerdes: "Mi a hidrogén vegyjele?",
    valaszok: ["H", "He", "Hg", "Ho"],
    helyesIndex: 0,
    kep: "quiz21.jpg"
  },
  {
    kerdes: "Melyik kontinensen található a Sahara-sivatag?",
    valaszok: ["Ázsia", "Afrika", "Dél-Amerika", "Ausztrália"],
    helyesIndex: 1,
    kep: "quiz22.jpg"
  },
  {
    kerdes: "Melyik évben volt az első modern olimpia?",
    valaszok: ["1896", "1900", "1888", "1912"],
    helyesIndex: 0,
    kep: "quiz23.jpg"
  },
  {
    kerdes: "Milyen színű a Smaragd?",
    valaszok: ["Piros", "Kék", "Zöld", "Sárga"],
    helyesIndex: 2,
    kep: "quiz24.jpg"
  },
  {
    kerdes: "Ki festette a Mona Lisát?",
    valaszok: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    helyesIndex: 1,
    kep: "quiz25.jpg"
  },
  {
    kerdes: "Melyik országban található a Machu Picchu?",
    valaszok: ["Peru", "Chile", "Brazília", "Argentína"],
    helyesIndex: 0,
    kep: "quiz26.jpg"
  },
  {
    kerdes: "Mi a legerősebb sav?",
    valaszok: ["Sósav", "Kénsav", "Salétromsav", "Fluorovodrogén"],
    helyesIndex: 3,
    kep: "quiz27.jpg"
  },
  {
    kerdes: "Melyik a legkisebb csont az emberi testben?",
    valaszok: ["Fémcsont", "Üllőcsont", "Kengyelcsont", "Sarlócsont"],
    helyesIndex: 2,
    kep: "quiz28.jpg"
  },
  {
    kerdes: "Milyen irányba forog a Föld az északi féltekén nézve?",
    valaszok: ["Óramutató járásával megegyező", "Óramutató járásával ellentétes", "Nem forog", "Véletlenszerű"],
    helyesIndex: 1,
    kep: "quiz29.jpg"
  },
  {
    kerdes: "Mi volt az első emberi űrrepülés évszáma?",
    valaszok: ["1961", "1957", "1969", "1971"],
    helyesIndex: 0,
    kep: "quiz30.jpg"
  },
  {
    kerdes: "Melyik évszak következik a tavasz után?",
    valaszok: ["Ősz", "Nyár", "Tél", "Monszun"],
    helyesIndex: 1,
    kep: "quiz31.jpg"
  },
  {
    kerdes: "Milyen fajta növény a kaktusz?",
    valaszok: ["Fás szárú", "Pozsgás", "Lágyszárú", "Mohás"],
    helyesIndex: 1,
    kep: "quiz32.jpg"
  },
  {
    kerdes: "Ki volt Magyarország első köztársasági elnöke?",
    valaszok: ["Áder János", "Mádl Ferenc", "Nagy Imre", "Károlyi Mihály"],
    helyesIndex: 3,
    kep: "quiz33.jpg"
  },
  {
    kerdes: "Mi a legfőbb alkotóeleme a hangyák társadalmának?",
    valaszok: ["Királynő", "Dolgozó", "Heré", "Királlyá"],
    helyesIndex: 0,
    kep: "quiz34.jpg"
  },
  {
    kerdes: "Melyik művészhez kötődik a kubizmus?",
    valaszok: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
    helyesIndex: 0,
    kep: "quiz35.jpg"
  },
  {
    kerdes: "Melyik elemnek van a legnagyobb atomszáma a periódusos rendszerben?",
    valaszok: ["Uranium", "Oganesson", "Plutonium", "Radon"],
    helyesIndex: 1,
    kep: "quiz36.jpg"
  },
  {
    kerdes: "Mi az emberi test legnagyobb izma?",
    valaszok: ["Négyfejű combizom", "Farizom", "Vádli izom", "Hasizom"],
    helyesIndex: 1,
    kep: "quiz37.jpg"
  },
  {
    kerdes: "Melyik országban található a Taj Mahal?",
    valaszok: ["Pakisztán", "India", "Banglades", "Nepál"],
    helyesIndex: 1,
    kep: "quiz38.jpg"
  },
  {
    kerdes: "Melyik évben jött létre az ENSZ?",
    valaszok: ["1945", "1918", "1939", "1950"],
    helyesIndex: 0,
    kep: "quiz39.jpg"
  },
  {
    kerdes: "Mi a hang frekvenciájának mértékegysége?",
    valaszok: ["Hertz", "Decibel", "Newton", "Pascal"],
    helyesIndex: 0,
    kep: "quiz40.jpg"
  },
   {
    kerdes: "Melyik évben szabadult fel Magyarország az Osztrák-Magyar Monarchia alól?",
    valaszok: ["1918", "1920", "1914", "1939"],
    helyesIndex: 0,
    kep: "quiz41.jpg"
  },
  {
    kerdes: "Melyik a legnagyobb bolygó a Naprendszerben?",
    valaszok: ["Föld", "Szaturnusz", "Jupiter", "Neptunusz"],
    helyesIndex: 2,
    kep: "quiz42.jpg"
  },
  {
    kerdes: "Ki írta a 'Pál utcai fiúk'-at?",
    valaszok: ["Jókai Mór", "Molnár Ferenc", "Móricz Zsigmond", "Kosztolányi Dezső"],
    helyesIndex: 1,
    kep: "quiz43.jpg"
  },
  {
    kerdes: "Milyen állat a kakadu?",
    valaszok: ["Madár", "Hal", "Emlős", "Kétéltű"],
    helyesIndex: 0,
    kep: "quiz44.jpg"
  },
  {
    kerdes: "Melyik városban van a híres Colosseum?",
    valaszok: ["Róma", "Athén", "Párizs", "Berlin"],
    helyesIndex: 0,
    kep: "quiz45.jpg"
  },
  {
    kerdes: "Mi a víz fagyáspontja Celsius fokban?",
    valaszok: ["0", "32", "-1", "100"],
    helyesIndex: 0,
    kep: "quiz46.jpg"
  },
  {
    kerdes: "Ki volt az USA első elnöke?",
    valaszok: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    helyesIndex: 1,
    kep: "quiz47.jpg"
  },
  {
    kerdes: "Milyen anyagból készül a gyémánt?",
    valaszok: ["Szén", "Vas", "Arany", "Ezüst"],
    helyesIndex: 0,
    kep: "quiz48.jpg"
  },
  {
    kerdes: "Melyik növény termeli a kávébabot?",
    valaszok: ["Coffea", "Camellia", "Cactus", "Citrus"],
    helyesIndex: 0,
    kep: "quiz49.jpg"
  },
  {
    kerdes: "Melyik országban található a Grand Canyon?",
    valaszok: ["Kanada", "USA", "Mexikó", "Brazília"],
    helyesIndex: 1,
    kep: "quiz50.jpg"
  },
  {
    kerdes: "Mi a legismertebb Shakespeare-dráma?",
    valaszok: ["Hamlet", "Macbeth", "Rómeó és Júlia", "Othello"],
    helyesIndex: 0,
    kep: "quiz51.jpg"
  },
  {
    kerdes: "Milyen tudományág a genetika?",
    valaszok: ["Biológia", "Kémia", "Fizika", "Matematika"],
    helyesIndex: 0,
    kep: "quiz52.jpg"
  },
  {
    kerdes: "Melyik ország zászlaja vörös-fehér-zöld színű vízszintesen?",
    valaszok: ["Magyarország", "Olaszország", "Mexikó", "Bulgária"],
    helyesIndex: 3,
    kep: "quiz53.jpg"
  },
  {
    kerdes: "Mi a leggyorsabb szárazföldi állat?",
    valaszok: ["Oroszlán", "Leopárd", "Gepárd", "Zebra"],
    helyesIndex: 2,
    kep: "quiz54.jpg"
  },
  {
    kerdes: "Milyen anyagból készül a papír?",
    valaszok: ["Fából", "Kőből", "Fémekből", "Műanyagból"],
    helyesIndex: 0,
    kep: "quiz55.jpg"
  },
  {
    kerdes: "Mi az Eiffel-torony magassága körülbelül?",
    valaszok: ["324 méter", "280 méter", "150 méter", "400 méter"],
    helyesIndex: 0,
    kep: "quiz56.jpg"
  },
  {
    kerdes: "Melyik földrész a legkisebb területű?",
    valaszok: ["Európa", "Ausztrália", "Antarktisz", "Afrika"],
    helyesIndex: 1,
    kep: "quiz57.jpg"
  },
  {
    kerdes: "Milyen formájú a földünk valójában?",
    valaszok: ["Gömb", "Ellipszis", "Geoid", "Kocka"],
    helyesIndex: 2,
    kep: "quiz58.jpg"
  },
  {
    kerdes: "Ki találta fel a villanykörtét?",
    valaszok: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
    helyesIndex: 1,
    kep: "quiz59.jpg"
  },
  {
    kerdes: "Melyik állat nem emlős?",
    valaszok: ["Krokodil", "Delfin", "Elefánt", "Oroszlán"],
    helyesIndex: 0,
    kep: "quiz60.jpg"
  },
    {
    kerdes: "Melyik ország fővárosa Canberra?",
    valaszok: ["Ausztrália", "Új-Zéland", "Kanada", "Dél-Afrika"],
    helyesIndex: 0,
    kep: "quiz61.jpg"
  },
  {
    kerdes: "Melyik a leghosszabb csont az emberi testben?",
    valaszok: ["Felkarcsont", "Combcsont", "Sípcsont", "Kulcscsont"],
    helyesIndex: 1,
    kep: "quiz62.jpg"
  },
  {
    kerdes: "Milyen gáz alkotja a Föld légkörének legnagyobb részét?",
    valaszok: ["Nitrogén", "Oxigén", "Szén-dioxid", "Hélium"],
    helyesIndex: 0,
    kep: "quiz63.jpg"
  },
  {
    kerdes: "Mikor indult el a YouTube hivatalosan?",
    valaszok: ["2003", "2005", "2007", "2009"],
    helyesIndex: 1,
    kep: "quiz64.jpg"
  },
  {
    kerdes: "Mi az USA államának a beceneve, amelyik a Szabadság-szoborral ismert?",
    valaszok: [ "California", "Florida","New York", "Illinois"],
    helyesIndex: 2,
    kep: "quiz65.jpg"
  },
  {
    kerdes: "Melyik a legnagyobb szárazföldi ragadozó?",
    valaszok: ["Jegesmedve", "Oroszlán", "Tigris", "Medve"],
    helyesIndex: 0,
    kep: "quiz66.jpg"
  },
  {
    kerdes: "Melyik bolygó híres a gyűrűiről?",
    valaszok: [ "Jupiter","Szaturnusz", "Mars", "Uránusz"],
    helyesIndex: 1,
    kep: "quiz67.jpg"
  },
  {
    kerdes: "Ki írta a 'Háború és béke' című regényt?",
    valaszok: ["Lev Tolsztoj", "Dosztojevszkij", "Csehov", "Gogol"],
    helyesIndex: 0,
    kep: "quiz68.jpg"
  },
   {
    kerdes: "Kik alapították a YouTube-ot?",
    valaszok: ["Mark Zuckerberg, Larry Page, Steve Chen", "Steve Chen, Chad Hurley, Jawed Karim", "Elon Musk, Steve Jobs, Bill Gates", "Sergey Brin, Jeff Bezos, Steve Wozniak"],
    helyesIndex: 1,
    kep: "quiz69.jpg"
  },
  {
    kerdes: "Mi a fő összetevője a napelemes paneleknek?",
    valaszok: ["Szilícium", "Arany", "Réz", "Vas"],
    helyesIndex: 0,
    kep: "quiz70.jpg"
  },
  {
    kerdes: "Mi a kémiai jele az aranynak?",
    valaszok: ["Au", "Ag", "Fe", "Pb"],
    helyesIndex: 0,
    kep: "quiz71.jpg"
  },
 {
    kerdes: "Mi volt az első feltöltött videó a YouTube-ra?",
    valaszok: ["Me at the zoo", "Hello World", "Funny Cat", "My First Vlog"],
    helyesIndex: 0,
    kep: "quiz72.jpg"
  },
  {
    kerdes: "Mi a legkisebb egység az öröklődésben?",
    valaszok: ["DNS", "Sejt", "Kromoszóma", "Genetikai kód"],
    helyesIndex: 3,
    kep: "quiz73.jpg"
  },
  {
    kerdes: "Mit jelent a 'feliratkozás' egy csatornára?",
    valaszok: ["Értesítést kapunk a videókról", "Támogatjuk pénzügyileg", "Privát üzeneteket küldhetünk", "Letölthetjük a videókat"],
    helyesIndex: 0,
    kep: "quiz72.jpg"
  },
  {
    kerdes: "Milyen évben volt az első holdraszállás?",
    valaszok: [ "1971", "1965","1969", "1959"],
    helyesIndex: 2,
    kep: "quiz75.jpg"
  },
  {
    kerdes: "Mi a világ legmagasabb hegye?",
    valaszok: [ "K2", "Kangchenjunga", "Lhotse","Mount Everest"],
    helyesIndex: 3,
    kep: "quiz76.jpg"
  },
  {
    kerdes: "Melyik növényből készül a paprika?",
    valaszok: [ "Tomato","Capsicum", "Cucumber", "Chili"],
    helyesIndex: 1,
    kep: "quiz77.jpg"
  },
  {
    kerdes: "Ki volt az első ember a világűrben?",
    valaszok: [ "Neil Armstrong", "Buzz Aldrin","Jurij Gagarin", "Alan Shepard"],
    helyesIndex: 2,
    kep: "quiz78.jpg"
  },
    {
    kerdes: "Ki a legtöbb feliratkozóval rendelkező egyéni YouTuber 2025-ben?",
    valaszok: ["PewDiePie", "MrBeast", "T-Series", "Like Nastya"],
    helyesIndex: 1,
    kep: "quiz72.jpg"
  },
  {
    kerdes: "Mi a leggyakoribb elem a Föld kéregében?",
    valaszok: ["Oxigén", "Szilícium", "Vas", "Alumínium"],
    helyesIndex: 0,
    kep: "quiz80.jpg"
  },
 {
    kerdes: "Mi a YouTube Shorts?",
    valaszok: ["Ételrecept sorozat", "Rövid videók funkció", "Zenei csatorna", "Privát videók gyűjtőhelye"],
    helyesIndex: 1,
    kep: "quiz72.jpg"
  },
  {
    kerdes: "Milyen anyaggal írnak a hagyományos iskolai táblára?",
    valaszok: ["Krétával", "Filccel", "Tollal", "Ceruzával"],
    helyesIndex: 0,
    kep: "quiz82.jpg"
  },
  {
    kerdes: "Mi az a hidrogén leggyakoribb formája a Földön?",
    valaszok: ["Víz", "Gáz", "Fém", "Olaj"],
    helyesIndex: 0,
    kep: "quiz83.jpg"
  },
  {
    kerdes: "Ki volt az, aki feltalálta a telefónt?",
    valaszok: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    helyesIndex: 0,
    kep: "quiz84.jpg"
  },
  {
    kerdes: "Melyik országban készült a legtöbb YouTube-videó?",
    valaszok: ["USA", "India", "Brazília", "Németország"],
    helyesIndex: 0,
    kep: "quiz72.jpg"
  },
  {
    kerdes: "Mi a tengeri csillag? (állatcsoport)",
    valaszok: [ "Rák", "Molluszka", "Hal","Tüskésbőrű"],
    helyesIndex: 3,
    kep: "quiz86.jpg"
  },
  {
    kerdes: "Milyen nemzetiségű Albert Einstein?",
    valaszok: ["Német", "Svájci", "Amerikai", "Orosz"],
    helyesIndex: 0,
    kep: "quiz87.jpg"
  },
  {
    kerdes: "Melyik sportág a Tour de France?",
    valaszok: [ "Futás","Kerékpár", "Úszás", "Labdarúgás"],
    helyesIndex: 1,
    kep: "quiz88.jpg"
  },
  {
    kerdes: "Milyen anyagból készül a hagyományos porcelán?",
    valaszok: [ "Agyag", "Márvány","Kaolin", "Kő"],
    helyesIndex: 2,
    kep: "quiz89.jpg"
  },
    {
    kerdes: "Melyik az a funkció, amivel közvetlenül pénzt lehet keresni élőadásban?",
    valaszok: ["Like", "Komment", "Super Chat", "Megosztás"],
    helyesIndex: 2,
    kep: "quiz72.jpg"
  },
  {
    kerdes: "Milyen elemből épülnek fel a fehérjék?",
    valaszok: ["Aminosavak", "Zsírsavak", "Szénhidrátok", "Vitaminok"],
    helyesIndex: 0,
    kep: "quiz91.jpg"
  },
  {
    kerdes: "Mi az a fotoszintézis?",
    valaszok: [ "Állati mozgás", "Víz körforgás","Növényi folyamat", "Légzés"],
    helyesIndex: 2,
    kep: "quiz92.jpg"
  },
  {
    kerdes: "Melyik évben tört ki a második világháború?",
    valaszok: ["1939", "1945", "1914", "1929"],
    helyesIndex: 0,
    kep: "quiz93.jpg"
  },
  {
    kerdes: "Melyik folyó folyik át Budapest városán?",
    valaszok: ["Duna", "Tisza", "Dráva", "Rába"],
    helyesIndex: 0,
    kep: "quiz94.jpg"
  },
{
  kerdes: "Mi a legkisebb csillag a következők közül?",
  valaszok: ["Fehér törpe", "Naprendszer", "Pulsar", "Fekete lyuk"],
  helyesIndex: 0,
  kep: "quiz95.jpg"
},
{
  kerdes: "Melyik madár nem tud repülni?",
  valaszok: ["Strucc", "Galamb", "Héja", "Vándorsólyom"],
  helyesIndex: 0,
  kep: "quiz96.jpg"
},
{
  kerdes: "Mi a kémiai jele a vasnak?",
  valaszok: ["Fe", "Va", "Ir", "V"],
  helyesIndex: 0,
  kep: "quiz97.jpg"
},
{
  kerdes: "Melyik az az ország, ahol a sushi hagyományosan készült?",
  valaszok: ["Japán", "Kína", "Thaiföld", "Dél-Korea"],
  helyesIndex: 0,
  kep: "quiz98.jpg"
},
{
  kerdes: "Mi a fővárosa Franciaországnak?",
  valaszok: ["Párizs", "Lyon", "Marseille", "Nizza"],
  helyesIndex: 0,
  kep: "quiz99.jpg"
},
{
  kerdes: "Ki írta a 'Rómeó és Júlia' című művet?",
  valaszok: [ "Charles Dickens", "Jules Verne", "Victor Hugo","William Shakespeare"],
  helyesIndex: 3,
  kep: "quiz100.jpg"
},
{
  kerdes: "Melyik bolygó a legnagyobb a Naprendszerben?",
  valaszok: [ "Szaturnusz","Jupiter", "Neptunusz", "Föld"],
  helyesIndex: 1,
  kep: "quiz101.jpg"
},
{
  kerdes: "Melyik évben született Albert Einstein?",
  valaszok: [ "1869", "1889","1879", "1899"],
  helyesIndex: 2,
  kep: "quiz102.jpg"
},
{
  kerdes: "Milyen színű a rubin?",
  valaszok:  ["Kék","Piros", "Zöld", "Sárga"],
  helyesIndex: 1,
  kep: "quiz103.jpg"
},
{
  kerdes: "Mi a legnagyobb kontinens a Földön?",
  valaszok: ["Ázsia", "Afrika", "Európa", "Dél-Amerika"],
  helyesIndex: 0,
  kep: "quiz104.jpg"
},
{
  kerdes: "Mi a leggyakoribb elem a Napban?",
  valaszok: ["Hidrogén", "Hélium", "Oxigén", "Szén"],
  helyesIndex: 0,
  kep: "quiz105.jpg"
},
{
  kerdes: "Milyen eszközzel mérjük a hőmérsékletet?",
  valaszok: [ "Barométer","Hőmérő", "Számláló", "Higrométer"],
  helyesIndex: 1,
  kep: "quiz106.jpg"
},
{
  kerdes: "Ki volt az első nő az űrben?",
  valaszok: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"],
  helyesIndex: 0,
  kep: "quiz107.jpg"
},
{
  kerdes: "Melyik ország híres a tulipánokról?",
  valaszok: [ "Franciaország", "Németország","Hollandia", "Olaszország"],
  helyesIndex: 2,
  kep: "quiz108.jpg"
},
{
  kerdes: "Melyik állat a leggyorsabb a szárazföldön?",
  valaszok: ["Gepárd", "Oroszlán", "Szarvas", "Tigris"],
  helyesIndex: 0,
  kep: "quiz109.jpg"
},
{
  kerdes: "Mi a kémiai jele a víznek?",
  valaszok: ["H2O", "O2", "CO2", "HO"],
  helyesIndex: 0,
  kep: "quiz110.jpg"
},
{
  kerdes: "Milyen irányban forog a Föld az északi féltekén?",
  valaszok: [ "Kelet-nyugat", "Észak-dél","Nyugat-kelet", "Dél-északi"],
  helyesIndex: 2,
  kep: "quiz111.jpg"
},
{
  kerdes: "Ki volt az első amerikai elnök?",
  valaszok: [ "Thomas Jefferson","George Washington", "Abraham Lincoln", "John Adams"],
  helyesIndex: 1,
  kep: "quiz112.jpg"
},
{
  kerdes: "Mi a legnagyobb állat a Földön?",
  valaszok: ["Kék bálna", "Elefánt", "Rosszcsont cápa", "Gyalogos teknős"],
  helyesIndex: 0,
  kep: "quiz113.jpg"
},
{
  kerdes: "Melyik anyagból készül a papír?",
  valaszok: [ "Műanyag", "Fém","Fa", "Üveg"],
  helyesIndex: 2,
  kep: "quiz114.jpg"
},
{
  kerdes: "Melyik szín keverékéből lesz a lila?",
  valaszok: ["Kék és piros", "Kék és sárga", "Sárga és piros", "Zöld és piros"],
  helyesIndex: 0,
  kep: "quiz115.jpg"
},
{
  kerdes: "Mi a villám leggyakoribb színe?",
  valaszok: [ "Kék", "Sárga", "Piros","Fehér"],
  helyesIndex: 3,
  kep: "quiz116.jpg"
},
{
  kerdes: "Melyik évben volt a berlini fal lebontása?",
  valaszok: ["1989", "1991", "1987", "1995"],
  helyesIndex: 0,
  kep: "quiz117.jpg"
},
{
  kerdes: "Milyen anyag alkotja a gyémántot?",
  valaszok: [ "Vas", "Arany", "Réz","Szén"],
  helyesIndex: 3,
  kep: "quiz118.jpg"
},
{
  kerdes: "Melyik országban található a Colosseum?",
  valaszok: [ "Görögország","Olaszország", "Spanyolország", "Franciaország"],
  helyesIndex: 1,
  kep: "quiz119.jpg"
},
{
  kerdes: "Mi a leggyakoribb nemesgáz a légkörben?",
  valaszok: [ "Hélium", "Neon","Argon", "Kripton"],
  helyesIndex: 2,
  kep: "quiz120.jpg"
},
{
  kerdes: "Mi az idő mértékegysége a fizikában?",
  valaszok: [ "Méret","Másodperc", "Súly", "Hőmérséklet"],
  helyesIndex: 1,
  kep: "quiz121.jpg"
},
{
  kerdes: "Mi az a legenda, hogy a macskák hány életük van?",
  valaszok: [ "Hét", "Tíz", "Öt","Kilenc"],
  helyesIndex: 3,
  kep: "quiz122.jpg"
},
{
  kerdes: "Mi a világ legnépesebb országa?",
  valaszok: [ "India", "USA","Kína", "Indonézia"],
  helyesIndex: 0,
  kep: "quiz123.jpg"
},
{
  kerdes: "Mi a földrajzi középpontja Magyarországnak?",
  valaszok: [ "Budapest", "Debrecen","Pusztavacs", "Szeged"],
  helyesIndex: 2,
  kep: "quiz124.jpg"
},
{
  kerdes: "Ki fedezte fel Amerikát?",
  valaszok: ["Kolumbusz Kristóf", "Vasco da Gama", "Magellán", "Amerigo Vespucci"],
  helyesIndex: 0,
  kep: "quiz125.jpg"
},
{
  kerdes: "Milyen állat a panda?",
  valaszok: ["Medve", "Macska", "Kutya", "Majom"],
  helyesIndex: 0,
  kep: "quiz126.jpg"
},
{
  kerdes: "Melyik híres épület Párizs jelképe?",
  valaszok: [ "Louvre", "Notre-Dame", "Sacré-Cœur","Eiffel-torony"],
  helyesIndex: 3,
  kep: "quiz127.jpg"
},
{
  kerdes: "Mi a leggyorsabb hal az óceánban?",
  valaszok: [ "Cápa", "Delfin","Vitorláshal", "Tonhal"],
  helyesIndex: 2,
  kep: "quiz128.jpg"
},
{
  kerdes: "Milyen bolygó a Mars?",
  valaszok: [ "Kék bolygó","Vörös bolygó", "Zöld bolygó", "Sárga bolygó"],
  helyesIndex: 1,
  kep: "quiz129.jpg"
},
{
  kerdes: "Melyik földrész a legkisebb területű?",
  valaszok: [ "Európa", "Antarktisz","Ausztrália", "Dél-Amerika"],
  helyesIndex: 2,
  kep: "quiz130.jpg"
},
{
  kerdes: "Mi a csillagászati egység (AU) mértéke nagyjából?",
  valaszok: [ "A Föld és a Hold távolsága", "A Nap átmérője", "A Hold átmérője","A Föld és a Nap távolsága"],
  helyesIndex: 3,
  kep: "quiz131.jpg"
},
{
  kerdes: "Ki írta a 'Harry Potter' könyveket?",
  valaszok: [ "Stephen King", "Tolkien","J.K. Rowling", "Agatha Christie"],
  helyesIndex: 2,
  kep: "quiz132.jpg"
},
{
  kerdes: "Milyen hangot ad ki a tehén?",
  valaszok: [ "Miau", "Vau", "Békít","Bőg"],
  helyesIndex: 3,
  kep: "quiz133.jpg"
},
{
  kerdes: "Melyik elem a legkönnyebb a periódusos rendszerben?",
  valaszok: [ "Hélium", "Nitrogén","Hidrogén", "Oxigén"],
  helyesIndex: 2,
  kep: "quiz134.jpg"
},
{
  kerdes: "Mi a 'biodiverzitás' jelentése?",
  valaszok: [ "Éghajlatváltozás","Élőlények változatossága", "Vízkészlet", "Talajminőség"],
  helyesIndex: 1,
  kep: "quiz135.jpg"
},
{
  kerdes: "Melyik városban található a Szabadság-szobor?",
  valaszok: [ "Washington D.C.","New York", "Chicago", "Los Angeles"],
  helyesIndex: 1,
  kep: "quiz136.jpg"
},
{
  kerdes: "Mi az Eiffel-torony anyaga?",
  valaszok: ["Vas", "Acél", "Alumínium", "Réz"],
  helyesIndex: 0,
  kep: "quiz137.jpg"
},
{
  kerdes: "Mi az emberi szem legfontosabb érzékszerve?",
  valaszok: [ "Lencse","Retina", "Írisz", "Szaruhártya"],
  helyesIndex: 1,
  kep: "quiz138.jpg"
},
{
  kerdes: "Melyik a legnagyobb bolygó a Naprendszerben?",
  valaszok: ["Jupiter", "Szaturnusz", "Neptunusz", "Uránusz"],
  helyesIndex: 0,
  kep: "quiz139.jpg"
},
{
  kerdes: "Mi a legfontosabb gáz az emberi légzéshez?",
  valaszok: [ "Nitrogén","Oxigén", "Szén-dioxid", "Hélium"],
  helyesIndex: 1,
  kep: "quiz140.jpg"
 },
 {
  kerdes: "Mi a legnagyobb szerv az emberi testben?",
  valaszok: [ "Máj", "Szív","Bőr", "Tüdő"],
  helyesIndex: 2,
  kep: "quiz141.jpg"
},
{
  kerdes: "Melyik országban található a Machu Picchu?",
  valaszok: [ "Mexikó", "Chile", "Brazília","Peru"],
  helyesIndex: 3,
  kep: "quiz142.jpg"
},
{
  kerdes: "Mi a legnagyobb emlős a szárazföldön?",
  valaszok: [ "Zsiráf", "Oroszlán", "Tigris","Elefánt"],
  helyesIndex: 3,
  kep: "quiz143.jpg"
},
{
  kerdes: "Melyik város az USA fővárosa?",
  valaszok: [ "New York", "Los Angeles", "Chicago","Washington D.C."],
  helyesIndex: 3,
  kep: "quiz144.jpg"
},
{
  kerdes: "Melyik gáz okozza a savas eső kialakulását?",
  valaszok: [ "Oxigén", "Nitrogén", "Szén-dioxid","Kén-dioxid"],
  helyesIndex: 3,
  kep: "quiz145.jpg"
},
{
  kerdes: "Ki írta a 'A kis herceg' című könyvet?",
  valaszok: [ "Jules Verne","Antoine de Saint-Exupéry", "Victor Hugo", "Charles Dickens"],
  helyesIndex: 1,
  kep: "quiz146.jpg"
},
{
  kerdes: "Mi az elektromos áram mértékegysége?",
  valaszok: ["Amper", "Volt", "Ohm", "Watt"],
  helyesIndex: 0,
  kep: "quiz147.jpg"
},
{
  kerdes: "Melyik a leghosszabb csont az emberi testben?",
  valaszok: ["Combcsont", "Felkarcsont", "Sípcsont", "Lapocka"],
  helyesIndex: 0,
  kep: "quiz148.jpg"
},
{
  kerdes: "Melyik a legnagyobb bolygó a Naprendszerben?",
  valaszok: ["Jupiter", "Szaturnusz", "Neptunusz", "Uránusz"],
  helyesIndex: 0,
  kep: "quiz149.jpg"
},
{
  kerdes: "Melyik évben kezdődött az első világháború?",
  valaszok: [ "1918", "1939","1914", "1945"],
  helyesIndex: 2,
  kep: "quiz150.jpg"
},
{
  kerdes: "Mi a víz fagyáspontja Celsius fokban?",
  valaszok: [ "100","0", "-10", "32"],
  helyesIndex: 1,
  kep: "quiz151.jpg"
},
{
  kerdes: "Mi a legkisebb egysége az élő szervezetnek?",
  valaszok: [ "Atom", "Molekula","Sejt", "Szerv"],
  helyesIndex: 2,
  kep: "quiz152.jpg"
},
{
  kerdes: "Milyen állat a delfin?",
  valaszok: [ "Hal", "Madár","Emlős", "Hüllő"],
  helyesIndex: 2,
  kep: "quiz153.jpg"
},
{
  kerdes: "Mi a legnagyobb óceán a világon?",
  valaszok: [ "Atlanti-óceán", "Indiai-óceán","Csendes-óceán", "Jeges-tenger"],
  helyesIndex: 2,
  kep: "quiz154.jpg"
},
{
  kerdes: "Melyik bolygó ismert vörös bolygóként?",
  valaszok: [ "Vénusz", "Jupiter","Mars", "Merkúr"],
  helyesIndex: 2,
  kep: "quiz155.jpg"
},
{
  kerdes: "Mi a fővárosa Ausztráliának?",
  valaszok: [ "Sydney", "Melbourne", "Brisbane","Canberra"],
  helyesIndex: 3,
  kep: "quiz156.jpg"
},
{
  kerdes: "Mi az a 'fotoszintézis'?",
  valaszok: ["Növények fényenergia általi szervesanyag-termelése", "Állatok táplálkozása", "Víz körforgása", "Földmozgások"],
  helyesIndex: 0,
  kep: "quiz157.jpg"
},
{
  kerdes: "Milyen színű a smaragd?",
  valaszok: [ "Kék", "Piros", "Sárga","Zöld"],
  helyesIndex: 3,
  kep: "quiz158.jpg"
},
{
  kerdes: "Melyik országban található a Szahara sivatag?",
  valaszok: [ "Niger", "Dél-Afrika", "Egyiptom","Algéria"],
  helyesIndex: 3,
  kep: "quiz159.jpg"
},
{
  kerdes: "Melyik kontinenshez tartozik Brazília?",
  valaszok: [ "Észak-Amerika", "Európa", "Ázsia","Dél-Amerika"],
  helyesIndex: 3,
  kep: "quiz160.jpg"
},
{
  kerdes: "Ki festette a Mona Lisát?",
  valaszok: [ "Michelangelo", "Raphael", "Donatello","Leonardo da Vinci"],
  helyesIndex: 3,
  kep: "quiz161.jpg"
},
{
  kerdes: "Melyik a legnagyobb sziget a világon?",
  valaszok: [ "Ausztrália","Grönland", "Madagaszkár", "Új-Guinea"],
  helyesIndex: 1,
  kep: "quiz162.jpg"
},
{
  kerdes: "Mi a legfontosabb energiaforrás a Nap számára?",
  valaszok: [ "Szén elégetése", "Vízkő oldódása","Hidrogén fúzió", "Nukleáris hasadás"],
  helyesIndex: 2,
  kep: "quiz163.jpg"
},
{
  kerdes: "Melyik ország ismert a piramisairól?",
  valaszok: [ "Mexikó", "Peru", "Irak","Egyiptom"],
  helyesIndex: 3,
  kep: "quiz164.jpg"
},
{
  kerdes: "Milyen állat a kaméleon?",
  valaszok: [ "Madár", "Emlős","Hüllő", "Hal"],
  helyesIndex: 2,
  kep: "quiz165.jpg"
},
{
  kerdes: "Mi a leghosszabb folyó Ázsiában?",
  valaszok: ["Jangce", "Indus", "Gangesz", "Mekong"],
  helyesIndex: 0,
  kep: "quiz166.jpg"
},
{
  kerdes: "Milyen vegyület a só?",
  valaszok: ["Nátrium-klorid", "Kálium-nitrát", "Kalcium-karbonát", "Magnézium-oxid"],
  helyesIndex: 0,
  kep: "quiz167.jpg"
},
{
  kerdes: "Mi az emberi test legfontosabb immunsejtje?",
  valaszok: ["Fehérvérsejt", "Vörösvértest", "Trombocita", "Neuron"],
  helyesIndex: 0,
  kep: "quiz168.jpg"
},
{
  kerdes: "Melyik kontinensen található az Amazonas esőerdő?",
  valaszok: [ "Afrika", "Ázsia","Dél-Amerika", "Ausztrália"],
  helyesIndex: 2,
  kep: "quiz169.jpg"
},
{
  kerdes: "Mi a legfontosabb tápanyag a növények számára?",
  valaszok: ["Nitrogén", "Kalcium", "Vas", "Magnézium"],
  helyesIndex: 0,
  kep: "quiz170.jpg"
},
{
  kerdes: "Mi a leggyorsabb szárazföldi állat?",
  valaszok: ["Gepárd", "Oroszlán", "Zsiráf", "Elefánt"],
  helyesIndex: 0,
  kep: "quiz171.jpg"
},
{
  kerdes: "Melyik bolygón van a legmagasabb hegy a Naprendszerben?",
  valaszok: ["Mars", "Jupiter", "Szaturnusz", "Vénusz"],
  helyesIndex: 0,
  kep: "quiz172.jpg"
},
{
  kerdes: "Ki volt az USA első elnöke?",
  valaszok: [ "Abraham Lincoln","George Washington", "Thomas Jefferson", "John Adams"],
  helyesIndex: 1,
  kep: "quiz173.jpg"
},
{
  kerdes: "Melyik országban született Ludwig van Beethoven?",
  valaszok: [ "Ausztria", "Franciaország","Németország", "Olaszország"],
  helyesIndex: 2,
  kep: "quiz174.jpg"
},
{
  kerdes: "Mi a H2O kémiai képlete?",
  valaszok: [ "Szén-dioxid", "Oxigén","Víz", "Nitrogén"],
  helyesIndex: 2,
  kep: "quiz175.jpg"
},
{
  kerdes: "Mi a legnagyobb kontinens?",
  valaszok: [ "Afrika", "Észak-Amerika", "Európa","Ázsia"],
  helyesIndex: 3,
  kep: "quiz176.jpg"
},
{
  kerdes: "Melyik város híres a 'Louvre' múzeumáról?",
  valaszok: [ "Róma", "London","Párizs", "Berlin"],
  helyesIndex: 2,
  kep: "quiz177.jpg"
},
{
  kerdes: "Melyik a legkisebb állatcsoport a következők közül?",
  valaszok: [ "Elefánt","Amőba", "Delfin", "Madarak"],
  helyesIndex: 1,
  kep: "quiz178.jpg"
},
{
  kerdes: "Mi a legfőbb anyag a gyémántban?",
  valaszok: [ "Vas", "Ezüst","Szén", "Arany"],
  helyesIndex: 2,
  kep: "quiz179.jpg"
},
{
  kerdes: "Melyik évben értek véget a második világháború harcai?",
  valaszok: [ "1941", "1939", "1950","1945"],
  helyesIndex: 3,
  kep: "quiz180.jpg"
},
{
  kerdes: "Melyik szerv termeli az inzulint az emberi testben?",
  valaszok: [ "Vese", "Máj", "Szív","Hasnyálmirigy"],
  helyesIndex: 3,
  kep: "quiz181.jpg"
},
{
  kerdes: "Mi a leghidegebb bolygó a Naprendszerben?",
  valaszok: [ "Merkúr", "Mars", "Jupiter","Neptunusz"],
  helyesIndex: 3,
  kep: "quiz182.jpg"
},
{
  kerdes: "Melyik a legnagyobb város Japánban?",
  valaszok: [ "Osaka", "Kiotó", "Hiroshima","Tokió"],
  helyesIndex: 3,
  kep: "quiz183.jpg"
},
{
  kerdes: "Mi a Föld legnagyobb sivataga?",
  valaszok: ["Antarktisz", "Szahara", "Gobi", "Kalahári"],
  helyesIndex: 0,
  kep: "quiz184.jpg"
},
{
  kerdes: "Melyik növényről származik a kakaó?",
  valaszok: [ "Cseresznyefa","Kakaófa", "Almafa", "Fügefa"],
  helyesIndex: 1,
  kep: "quiz185.jpg"
},
{
  kerdes: "Melyik évben volt a Holdra szállás?",
  valaszok: [ "1959", "1979","1969", "1989"],
  helyesIndex: 2,
  kep: "quiz186.jpg"
},
{
  kerdes: "Mi az emberi csontváz legkisebb csontja?",
  valaszok: [ "Üllőcsont", "Kalapács", "Kulcscsont","Kengyelcsont"],
  helyesIndex: 3,
  kep: "quiz187.jpg"
},
{
  kerdes: "Melyik országban található a Taj Mahal?",
  valaszok: [ "Pakisztán", "Nepál","India", "Banglades"],
  helyesIndex: 2,
  kep: "quiz188.jpg"
},
{
  kerdes: "Melyik évszak következik a tél után?",
  valaszok: [ "Nyár", "Ősz","Tavasz", "Tél"],
  helyesIndex: 2,
  kep: "quiz189.jpg"
},
{
  kerdes: "Mi a kémiai jele a nátriumnak?",
  valaszok: [ "N", "Ni", "Ne","Na"],
  helyesIndex: 3,
  kep: "quiz190.jpg"
},
{
  kerdes: "Melyik a legnépesebb ország a világon?",
  valaszok: [ "India","Kína", "USA", "Oroszország"],
  helyesIndex: 0,
  kep: "quiz191.jpg"
},
{
  kerdes: "Milyen színű a gyémánt?",
  valaszok: ["Általában átlátszó", "Fekete", "Zöld", "Piros"],
  helyesIndex: 0,
  kep: "quiz192.jpg"
},
{
  kerdes: "Mi a leghosszabb folyó Dél-Amerikában?",
  valaszok: ["Amazonas", "Mississippi", "Orinoco", "Paraná"],
  helyesIndex: 0,
  kep: "quiz193.jpg"
},
{
  kerdes: "Mi az emberi vér színe oxigénnel dúsítva?",
  valaszok: ["Vörös", "Kék", "Zöld", "Sárga"],
  helyesIndex: 0,
  kep: "quiz194.jpg"
},
{
  kerdes: "Ki volt az ókori görög istenek főistene?",
  valaszok: [ "Héra", "Poszeidón","Zeusz", "Hádész"],
  helyesIndex: 2,
  kep: "quiz195.jpg"
},
{
  kerdes: "Melyik ország zászlaján található vörös sárkány?",
  valaszok: [ "Kína", "Japán", "Skócia","Wales"],
  helyesIndex: 3,
  kep: "quiz196.jpg"
},
{
  kerdes: "Mi a leggyakoribb elem a Föld kéregében?",
  valaszok: [ "Vas","Oxigén", "Szén", "Alumínium"],
  helyesIndex: 1,
  kep: "quiz197.jpg"
},
{
  kerdes: "Milyen folyadék kering az emberi testben?",
  valaszok: [ "Tej", "Víz", "Szurok","Vér"],
  helyesIndex: 3,
  kep: "quiz198.jpg"
},
{
  kerdes: "Melyik bolygó a legkisebb a Naprendszerben?",
  valaszok: [ "Plútó", "Mars", "Vénusz","Merkúr"],
  helyesIndex: 3,
  kep: "quiz199.jpg"
},
{
  kerdes: "Mi a fővárosa Olaszországnak?",
  valaszok: [ "Milánó","Róma", "Velence", "Firenze"],
  helyesIndex: 1,
  kep: "quiz200.jpg"
},
 {
    kerdes: "Ki írta a Pinokkió történetét?",
    valaszok: ["Carlo Collodi", "Hans Christian Andersen", "Grimm testvérek", "Lewis Carroll"],
    helyesIndex: 0,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi történik Pinokkió orrával, amikor hazudik?",
    valaszok: ["Eltűnik", "Lehullik", "Megnő", "Vörös lesz"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Miből készült Pinokkió teste?",
    valaszok: ["Kőből", "Fából", "Papírból", "Vasból"],
    helyesIndex: 1,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi a neve Pinokkió 'apjának'?",
    valaszok: ["Giuseppe", "Carlo", "Geppetto", "Antonio"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi Pinokkió legnagyobb vágya?",
    valaszok: ["Gazdaggá válni", "Igazi fiúvá válni", "Híres lenni", "Táncosnak állni"],
    helyesIndex: 1,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Ki segíti tanácsokkal Pinokkiót a történetben?",
    valaszok: ["Egy tündér", "Egy varázsló", "Egy nyúl", "Egy sárkány"],
    helyesIndex: 0,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi történik, amikor Pinokkió rosszalkodik?",
    valaszok: ["Szárnya nő", "Megfázik", "Orrát megnöveszti", "Büntetést kap"],
    helyesIndex: 3,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Melyik állattá változnak azok a gyerekek, akik rosszak a Meseföldön?",
    valaszok: ["Macskává", "Szamárrá", "Békává", "Csigává"],
    helyesIndex: 1,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi a neve annak a helynek, ahová a gyerekek szórakozni mennek, de végül bajba kerülnek?",
    valaszok: ["Vidámföld", "Meseföld", "Lustaföld", "Játékország"],
    helyesIndex: 3,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Melyik állat beszél Pinokkió lelkiismereteként?",
    valaszok: ["Egér", "Sáska", "Tücsök", "Patkány"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Hogyan végződik Pinokkió története?",
    valaszok: ["Börtönbe kerül", "Tündérré válik", "Igazi fiúvá változik", "Elveszik az erdőben"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi Pinokkió legfőbb hibája a történet során?",
    valaszok: ["Lusta", "Hazudik és engedetlen", "Túl sokat beszél", "Irigy"],
    helyesIndex: 1,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Milyen állat a Kékszakáll Pinokkió meséjében?",
    valaszok: ["Hal", "Macska", "Kecske", "Nincs ilyen karakter"],
    helyesIndex: 3,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mit ajándékoz a Kék Tündér Pinokkiónak jutalomként?",
    valaszok: ["Egy sapkát", "Egy kardot", "Valódi testet", "Egy könyvet"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Hogyan tanul Pinokkió, hogy jófiúvá váljon?",
    valaszok: ["Varázslattal", "Könyvek olvasásával", "Iskolába jár", "Meditál"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Melyik stúdió készítette a híres 1940-es Pinokkió animációs filmet?",
    valaszok: ["DreamWorks", "Pixar", "Disney", "Warner Bros"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi történik Geppettóval, amikor keresni indul Pinokkiót?",
    valaszok: ["Megöregszik", "Egy cet nyeli le", "Elveszti az emlékezetét", "Börtönbe kerül"],
    helyesIndex: 1,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mi a mese egyik fontos tanulsága?",
    valaszok: ["Ne utazz egyedül", "A pénz boldogít", "Hazugság nem vezet jóra", "A barátság mindennél fontosabb"],
    helyesIndex: 2,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Melyik országban született a Pinokkió története?",
    valaszok: ["Franciaország", "Olaszország", "Németország", "Spanyolország"],
    helyesIndex: 1,
    kep: "pinokkio.jpg"
  },
  {
    kerdes: "Mit szimbolizál Pinokkió orrának növekedése?",
    valaszok: ["Örömöt", "Félelmet", "Bölcsességet", "Hazugságot"],
    helyesIndex: 3,
    kep: "pinokkio.jpg"
  },
   {
    kerdes: "Melyik magyar televíziós csatorna sugározta a Jóban Rosszbant?",
    valaszok: ["RTL Klub", "TV2", "Duna TV", "ATV"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Melyik kitalált városban játszódik a sorozat?",
    valaszok: ["Szentmárton", "Csillagkút", "Tiszakisfalud", "Kertváros"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Milyen intézmény áll a sorozat középpontjában?",
    valaszok: ["Rendőrség", "Kórház", "Ügyvédi iroda", "Szálloda"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Mi volt a sorozat indulásának éve?",
    valaszok: ["2003", "2005", "2008", "2010"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Ki volt dr. Pongrácz Péter?",
    valaszok: ["Rendőr", "Orvos", "Ügyvéd", "Tanár"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Mi a neve a Jóban Rosszban kórházának?",
    valaszok: ["Csillagkúti Egészségközpont", "Központi Kórház", "Csillagklinika", "Rózsadombi Klinika"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Ki volt Alexa Kinga?",
    valaszok: ["Recepciós", "Főorvos", "Ápolónő", "Ügyvezető"],
    helyesIndex: 0,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Melyik szereplőt alakította Szabó Zsófi?",
    valaszok: ["Betti", "Alexa", "Tilda", "Laura"],
    helyesIndex: 3,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Milyen műfajba sorolható a Jóban Rosszban?",
    valaszok: ["Hírműsor", "Szitkom", "Napi drámasorozat", "Vetélkedő"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Mi történik legtöbbször Csillagkúton?",
    valaszok: ["Zenei koncertek", "Orvosi beavatkozások, drámák", "Nyomozások", "Utazások"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Ki a sorozat egyik legismertebb gonosz karaktere?",
    valaszok: ["Berényi Miklós", "Bárány János", "Barta Zsolt", "Bodolai Bandi"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Mi volt Tilda foglalkozása?",
    valaszok: ["Rendőrnő", "Ápolónő", "Tanárnő", "Ügyvéd"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Melyik évben ért véget a sorozat?",
    valaszok: ["2021", "2022", "2023", "2024"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Mi volt a sorozat egyik fő témája?",
    valaszok: ["Szerelem és család", "Futball", "Ételkészítés", "Történelem"],
    helyesIndex: 0,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Hány évig futott a Jóban Rosszban?",
    valaszok: ["10 év", "15 év", "18 év", "20 év"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Milyen gyakran jelentkezett új epizóddal?",
    valaszok: ["Hetente", "Havonta", "Naponta", "Kéthetente"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Ki volt Betty férje?",
    valaszok: ["Péter", "Zoltán", "Roland", "Bandi"],
    helyesIndex: 3,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Melyik karakter volt rendőr a sorozatban?",
    valaszok: ["Vámos Zoli", "Alexa", "Tilda", "Roland"],
    helyesIndex: 0,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Ki volt az egyik legismertebb humoros karakter?",
    valaszok: ["Géza bácsi", "Bandi", "Varga Miklós", "Kinga"],
    helyesIndex: 1,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Milyen típusú jelenetek domináltak a sorozatban?",
    valaszok: ["Sci-fi és horror", "Politikai vita", "Orvosi dráma és párkapcsolati konfliktus", "Történelmi kaland"],
    helyesIndex: 2,
    kep: "jobanroszban.jpg"
  },
  {
    kerdes: "Melyik csatorna sugározta a Való Világot?",
    valaszok: ["TV2", "RTL Klub", "Viasat3", "Duna TV"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Milyen típusú műsor a Való Világ?",
    valaszok: ["Vetélkedő", "Valóságshow", "Talkshow", "Szappanopera"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi a Való Világban szereplők elnevezése?",
    valaszok: ["Lakók", "Versenyzők", "Szereplők", "Bérlők"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi volt a fődíj a Való Világ legtöbb szériájában?",
    valaszok: ["Utazás", "Autó", "Pénznyeremény", "Álommeló"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Hol élnek a szereplők a műsor alatt?",
    valaszok: ["Villában", "Szigeten", "Lakásban", "Hotelben"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Melyik műsorvezető volt hosszú ideig a Való Világ arca?",
    valaszok: ["Balázs", "Lilu", "Puzsér", "Sebestyén Balázs"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi a Való Világ párbaj lényege?",
    valaszok: ["Táncverseny", "Kihívás nyereményért", "Lakók szavazása a bentmaradásról", "Társasjáték"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Hogyan távozhat valaki a villából?",
    valaszok: ["Párbajon veszít", "Önként feladja", "Kizárják", "Mindhárom lehetőség"],
    helyesIndex: 3,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Hányadik évadnál jár a Való Világ 2020 után?",
    valaszok: ["9", "10", "11", "12"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi volt a Való Világ 10 szlogene?",
    valaszok: ["Az igazi arcok!", "Powered by Big Brother", "Valódi élet, valódi dráma", "Powered by Love Island"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi a neve a Való Világ internetes kísérőműsorának?",
    valaszok: ["VillaPlusz", "Online Live", "Villanet", "VV Extra"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Milyen napokon volt általában párbaj?",
    valaszok: ["Hétfő", "Csütörtök", "Szombat", "Vasárnap"],
    helyesIndex: 3,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mit kapott a győztes a VV10-ben?",
    valaszok: ["Lakást", "10 millió forintot", "36 millió forintot", "Autót"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Melyik évadban jelent meg először az úgynevezett 'lakókártya'?",
    valaszok: ["VV5", "VV7", "VV8", "VV9"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi volt VV Merci hivatása a villa előtt?",
    valaszok: ["Pultos", "Egyetemista", "Ápolónő", "Tanárnő"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mit csinál a villa 'kiválasztása' alatt?",
    valaszok: ["Mindenki szavaz valakire, akit párbajra küldene", "Nyerni lehet", "Feladatot kapnak", "Nézők döntik el"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Milyen életvitelt élnek a lakók a műsor alatt?",
    valaszok: ["Normális hétköznapi", "Teljesen elzárva a külvilágtól", "Csak online kommunikációval", "Szabadon közlekedhetnek"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Milyen kamerarendszer figyeli a villát?",
    valaszok: ["2 kamera", "8 biztonsági kamera", "Több tucat kamera, folyamatosan", "Rejtett kamerák"],
    helyesIndex: 2,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Ki volt a VV9 győztese?",
    valaszok: ["VV Soma", "VV Robi", "VV Vivien", "VV Hunor"],
    helyesIndex: 3,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Milyen feladatokat kapnak a lakók gyakran?",
    valaszok: ["Takarítás", "Heti kihívások, szórakoztató és közösségi játékok", "Tanórák", "Filmezés"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi a különbség a Való Világ és a Big Brother között?",
    valaszok: ["Semmi", "Való Világ magyar fejlesztés, Big Brother licenc", "VV zenés műsor", "Big Brother viccesebb"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Melyik lakó volt ismert botrányairól?",
    valaszok: ["VV Alekosz", "VV Soma", "VV Hunor", "VV Gina"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi történik a villán kívül a párbaj idején?",
    valaszok: ["Lakók elhagyják a villát", "Nézők szavaznak", "Új szereplők jönnek", "Nincs külön esemény"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Ki volt az egyik legmegosztóbb karakter VV10-ben?",
    valaszok: ["VV Dani", "VV Merci", "VV Robi", "VV Virág"],
    helyesIndex: 3,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Mi volt a VV szereplők mottója?",
    valaszok: ["„Harcolj a végsőkig!”", "„Csak a VV számít!”", "„Éld túl!”", "„A villa mindent megváltoztat!”"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Ki volt VV5 győztese?",
    valaszok: ["VV Attila", "VV Cristofel", "VV Gigi", "VV Kinga"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Volt-e híresség, aki vendégként bement a villába?",
    valaszok: ["Soha", "Igen, többször", "Egyszer, véletlenül", "Nem lehetett"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Milyen szereplőket keres a műsor válogatáskor?",
    valaszok: ["Különleges és megosztó karaktereket", "Csak híres embereket", "Csak sportolókat", "Csendes típusokat"],
    helyesIndex: 0,
    kep: "valovilag.jpg"
  },
  {
    kerdes: "Ki szokta vezetni a Való Világ párbajait?",
    valaszok: ["Puzsér Róbert", "Lilu és Bence", "Balázs és Nóra", "Ördög Nóra egyedül"],
    helyesIndex: 1,
    kep: "valovilag.jpg"
  },
   {
    kerdes: "Mennyi 7 × 8?",
    valaszok: ["54", "56", "58", "64"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 144 négyzetgyöke?",
    valaszok: ["11", "12", "13", "14"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mennyi 15% a 200-nak?",
    valaszok: ["25", "30", "35", "40"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 2³ értéke?",
    valaszok: ["6", "8", "9", "12"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 0-val való osztás eredménye?",
    valaszok: ["0", "1", "Végtelen", "Nincs értelmezve"],
    helyesIndex: 3,
    kep: "matek.jpg"
  },
  {
    kerdes: "Melyik szám prímszám?",
    valaszok: ["9", "15", "17", "21"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az első 3 természetes szám összege?",
    valaszok: ["3", "5", "6", "7"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mennyi 5²?",
    valaszok: ["10", "20", "25", "15"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 10% 250-ből?",
    valaszok: ["20", "25", "30", "35"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 1/2 + 1/4?",
    valaszok: ["3/4", "2/4", "5/4", "1/8"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a π (pi) megközelítő értéke?",
    valaszok: ["2.14", "3.14", "3.41", "4.13"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az átló hossza egy 3x4-es téglalapban?",
    valaszok: ["5", "6", "7", "4.5"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Hány fokos egy háromszög belső szögeinek összege?",
    valaszok: ["90°", "180°", "270°", "360°"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mennyi 1000 : 25?",
    valaszok: ["25", "40", "50", "75"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az átlagszámítás képlete?",
    valaszok: ["összeg × darabszám", "összeg ÷ darabszám", "összeg + darabszám", "darabszám ÷ összeg"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 9²?",
    valaszok: ["81", "72", "91", "99"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az algebra alapjele?",
    valaszok: ["∑", "√", "x", "π"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mennyi a 20%-a a 500-nak?",
    valaszok: ["50", "75", "100", "125"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Melyik NEM prímszám?",
    valaszok: ["2", "3", "4", "5"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az 1/3 + 1/6?",
    valaszok: ["1/2", "2/3", "3/6", "1/4"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mennyi a 6 × 12?",
    valaszok: ["72", "66", "70", "62"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 3⁴ értéke?",
    valaszok: ["81", "64", "27", "243"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az 5-ös szorzótábla 9. tagja?",
    valaszok: ["40", "45", "50", "55"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az 1/5 reciproka?",
    valaszok: ["5", "0.2", "1/5", "1/25"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Milyen szám a -3?",
    valaszok: ["Pozitív", "Negatív", "Prímszám", "Nulla"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 2. hatvány értéke 0 kitevővel?",
    valaszok: ["0", "1", "2", "Nincs értelmezve"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Hány centiméter egy méter?",
    valaszok: ["10", "100", "1000", "1"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az aránypár megoldásának fő lépése?",
    valaszok: ["Osszuk el a számokat", "Összeadjuk", "Keresztszorzás", "Kivonás"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az 1+2+3+...+10 összege?",
    valaszok: ["50", "55", "60", "65"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a valószínűség 0 és 1 közé eső értéke?",
    valaszok: ["Negatív", "Bármilyen szám", "0 ≤ p ≤ 1", "1 ≤ p ≤ 10"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mennyi 2.5 × 4?",
    valaszok: ["10", "12", "14", "15"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi a 20 négyzetgyöke?",
    valaszok: ["4", "4.5", "Nincs egész szám", "5"],
    helyesIndex: 2,
    kep: "matek.jpg"
  },
  {
    kerdes: "Milyen szöget zár be két merőleges egyenes?",
    valaszok: ["45°", "90°", "180°", "360°"],
    helyesIndex: 1,
    kep: "matek.jpg"
  },
  {
    kerdes: "Mi az 5% a 60-nak?",
    valaszok: ["3", "6", "9", "12"],
    helyesIndex: 0,
    kep: "matek.jpg"
  },
   {
    kerdes: "Hol rendezik meg a híres busójárást?",
    valaszok: ["Budapest", "Mohács", "Szeged", "Pécs"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Melyik népcsoport hagyománya a busójárás?",
    valaszok: ["Székely", "Szerb", "Horvát", "Bunyevác"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Melyik évszakban tartják a busójárást?",
    valaszok: ["Télen", "Tavasszal", "Nyáron", "Ősszel"],
    helyesIndex: 0,
    kep: "buso.jpg"
  },
  {
    kerdes: "Melyik ünnephez kapcsolódik a busójárás?",
    valaszok: ["Karácsony", "Húsvét", "Farsang", "Mindenszentek"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mit viselnek a busók az arcukon?",
    valaszok: ["Fémmaszkot", "Festést", "Faálarcot", "Semmit"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mit jelképez a busójárás?",
    valaszok: ["Téli álom", "Téltemetés, tavaszvárás", "Szüret", "Halál"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen hangszert használnak a busók?",
    valaszok: ["Citera", "Furulya", "Kürt", "Kolomp"],
    helyesIndex: 3,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mit szórnak a busók a tömeg közé?",
    valaszok: ["Cukorkát", "Lisztet", "Hamut", "Babot"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mi a neve a busójárás utolsó napjának?",
    valaszok: ["Húshagyókedd", "Nagypéntek", "Szilveszter", "Újév"],
    helyesIndex: 0,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen ruhát viselnek a busók?",
    valaszok: ["Fehér inget", "Bőrkabátot", "Birkabőrt", "Kimonót"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mikor került fel a busójárás az UNESCO listára?",
    valaszok: ["2003", "2009", "2012", "2018"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Hány napon át tart általában a busójárás?",
    valaszok: ["1", "3", "6", "10"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mi történik a busójárás végén?",
    valaszok: ["Elégetnek egy koporsót", "Zenélnek", "Körmenet indul", "Táncolnak"],
    helyesIndex: 0,
    kep: "buso.jpg"
  },
  {
    kerdes: "Miből készül a busómaszk?",
    valaszok: ["Akril", "Papír", "Fafaragás", "Textil"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mit viselnek a busók a lábukon?",
    valaszok: ["Bocskor", "Csizma", "Papucs", "Mezítláb"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mi jellemző a busók viselkedésére?",
    valaszok: ["Csendesek", "Tréfás, ijesztő", "Szomorú", "Halk"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen esemény nyitja meg a busójárást?",
    valaszok: ["Táncház", "Zászlófelvonás", "Busófelvonulás", "Maszkfaragás"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen hajóesemény része a busójárásnak?",
    valaszok: ["Hajós felvonulás", "Átkelés a Dunán", "Vízre szállás", "Csónakverseny"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Kik lehetnek busók?",
    valaszok: ["Csak férfiak", "Csak gyerekek", "Férfiak és nők is", "Csak turisták"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Hogyan nevezik a kisgyermek busókat?",
    valaszok: ["Mini-busó", "Busóka", "Apróbusó", "Kisbusó"],
    helyesIndex: 3,
    kep: "buso.jpg"
  },
  {
    kerdes: "Mi a busójárás egyik fő célja?",
    valaszok: ["A termés kérlelése", "A gonosz elűzése", "A halál megidézése", "A tél ünneplése"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen hangot ad ki a kolomp?",
    valaszok: ["Zümmögő", "Éles csengő", "Mélykongó", "Csendes zörgő"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen hangszer NEM jellemző a busójáráson?",
    valaszok: ["Dob", "Hegedű", "Gitár", "Kürt"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen figurákat készítenek el a busójárás alatt?",
    valaszok: ["Szalmabáb", "Papírsárkány", "Fadísz", "Cukorszobor"],
    helyesIndex: 0,
    kep: "buso.jpg"
  },
  {
    kerdes: "Hány éve létezik a busójárás hagyománya?",
    valaszok: ["Kb. 100", "Kb. 200", "Kb. 300", "Kb. 500"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen korú lehet a legrégebbi busómaszk?",
    valaszok: ["50 év", "100 év", "150 év", "200 év"],
    helyesIndex: 3,
    kep: "buso.jpg"
  },
  {
    kerdes: "Hogyan viszonyulnak a busók a turistákhoz?",
    valaszok: ["Elkerülik őket", "Csúfolják őket", "Tréfásan ijesztgetik", "Nem találkoznak velük"],
    helyesIndex: 2,
    kep: "buso.jpg"
  },
  {
    kerdes: "Milyen kézműves tevékenység kapcsolódik a busójáráshoz?",
    valaszok: ["Cipőkészítés", "Maszkfaragás", "Táskaszövés", "Gyöngyfűzés"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
  {
    kerdes: "Hogyan zárul a busójárás?",
    valaszok: ["Vacsorával", "Maszkégetéssel", "Álarcos bál", "Koporsóégetéssel"],
    helyesIndex: 3,
    kep: "buso.jpg"
  },
  {
    kerdes: "Melyik nemzetiség segítette a hagyomány fennmaradását?",
    valaszok: ["Szerb", "Horvát", "Német", "Szlovák"],
    helyesIndex: 1,
    kep: "buso.jpg"
  },
    {
    kerdes: "Milyen időszakban zajlik a farsang Magyarországon?",
    valaszok: ["Karácsony előtt", "Tavasz elején", "Nyár közepén", "Ősz végén"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Melyik ünnep követi közvetlenül a farsangot?",
    valaszok: ["Húsvét", "Pünkösd", "Advent", "Mindenszentek"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mi a farsang legjellegzetesebb tevékenysége?",
    valaszok: ["Búcsúzás a téltől", "Álarcos mulatság", "Szénagyűjtés", "Ünnepi böjt"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen hagyományos farsangi étel Magyarországon?",
    valaszok: ["Lángos", "Fánk", "Halászlé", "Töltött káposzta"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mit jelképez a farsang vége, a húshagyó kedd?",
    valaszok: ["Böjt kezdete", "Újév kezdete", "Tavasz kezdete", "Szüret kezdete"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen népi szokás kapcsolódik a farsanghoz?",
    valaszok: ["Maskarás felvonulás", "Szénagyűjtés", "Pünkösdi tánc", "Karácsonyi ének"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen álarcot viselnek gyakran farsangkor?",
    valaszok: ["Állatmaszkot", "Horrormaszkot", "Tréfás maszkot", "Hercegnői koronát"],
    helyesIndex: 2,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mi a farsangi bál lényege?",
    valaszok: ["Tánc és mulatság álarcban", "Szertartás az ősöknek", "Böjt kezdetének ünneplése", "Színházi előadás"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen anyagból készítik a farsangi maskarákat hagyományosan?",
    valaszok: ["Papírmaséból", "Műanyagból", "Fából", "Textilből"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mi a farsang utolsó napja?",
    valaszok: ["Hamvazószerda", "Húshagyó kedd", "Szenteste", "Mindenszentek"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mit szoktak csinálni farsang idején a gyerekek?",
    valaszok: ["Ajándékokat osztanak", "Csörgővel járják az utcát", "Tornáznak", "Képregényt olvasnak"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen jellemző farsangi játékok vannak?",
    valaszok: ["Álarcos felvonulás", "Petanque", "Labdajáték", "Lovaglás"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen színű ruhák a leggyakoribbak farsangkor?",
    valaszok: ["Feketék", "Színesek, élénkek", "Fehérek", "Kékek"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mi a farsangi időszak kezdőnapja?",
    valaszok: ["Vízkereszt", "Karácsony", "Újév", "Húsvét vasárnap"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen hangszerek szoktak megszólalni farsangi mulatságokon?",
    valaszok: ["Heveder, gitár", "Trombita, dob", "Hegedű, cimbalom", "Fuvola, szaxofon"],
    helyesIndex: 2,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen népi alakok jelennek meg farsangkor?",
    valaszok: ["Farsangi medve, jelmezbe öltözött figurák", "Télapó, Jézuska", "Boszorkányok, manók", "Szellemek, tündérek"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Melyik város híres farsangi karneváljáról Magyarországon?",
    valaszok: ["Debrecen", "Szeged", "Mohács", "Pécs"],
    helyesIndex: 2,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen népi énekeket szoktak énekelni farsangkor?",
    valaszok: ["Karácsonyi dalok", "Farsangi dalok, rigmusok", "Pünkösdi énekek", "Szüreti nóták"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mit jelent a 'maskarás' kifejezés?",
    valaszok: ["Álarcos, jelmezbe öltözött", "Táncoló", "Zenélő", "Mesélő"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen hagyományos farsangi édességet ismerünk Magyarországon?",
    valaszok: ["Kürtőskalács", "Fánk", "Rétes", "Dobos torta"],
    helyesIndex: 1,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mi a jelmezbál lényege?",
    valaszok: ["Álarcban és jelmezben táncolnak, mulatnak", "Áldozati szertartás", "Verseny a legjobb ételért", "Kézműves vásár"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Melyik napot nevezik hamvazószerdának?",
    valaszok: ["Farsang utáni első nap", "Karácsony előtti nap", "Újév napja", "Húsvét napja"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen hagyomány fűződik a farsangi busójáráshoz?",
    valaszok: ["Tél elűzése", "Szüret megünneplése", "Tavasz kezdete", "Születésnap"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen szokás tartozik a farsangi időszakhoz?",
    valaszok: ["Jelmezbe öltözés és felvonulás", "Böjt tartása", "Nagytakarítás", "Adventi gyertyagyújtás"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Mi a farsang egyik fő célja?",
    valaszok: ["Szórakozás és a tél búcsúztatása", "Aratás", "Karácsonyi előkészület", "Hálaadás"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen anyagból készülnek gyakran a farsangi álarcok?",
    valaszok: ["Papírmasé", "Fém", "Fa", "Üveg"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen típusú jelmezek a leggyakoribbak farsangkor?",
    valaszok: ["Állatos, mesefigurás", "Sportos", "Munkahelyi", "Katonai"],
    helyesIndex: 0,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Milyen tevékenység nem része a farsangi ünneplésnek?",
    valaszok: ["Jelmezbál", "Álarcos felvonulás", "Karácsonyi vásár", "Fánkevés"],
    helyesIndex: 2,
    kep: "farsang.jpg"
  },
  {
    kerdes: "Melyik szokás nem tartozik a farsanghoz?",
    valaszok: ["Húshagyó kedd", "Karnevál", "Pünkösd", "Álarcos bál"],
    helyesIndex: 2,
    kep: "farsang.jpg"
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