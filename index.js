
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
  {
  kerdes: "Mit jelent a 'CPU' rövidítés?",
  valaszok: ["Central Processing Unit", "Computer Primary Unit", "Core Power Unit", "Central Performance Unit"],
  helyesIndex: 0,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Mi az operációs rendszer fő feladata?",
  valaszok: ["Internetezés", "Hardver vezérlése és szoftverek kezelése", "Grafika rajzolása", "Hang lejátszása"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Melyik cég fejlesztette a Windows operációs rendszert?",
  valaszok: ["Apple", "IBM", "Microsoft", "Google"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Mi a RAM feladata a számítógépben?",
  valaszok: ["Hosszú távú tárolás", "Ideiglenes adatok tárolása", "Processzor hűtése", "Internetes kapcsolatok kezelése"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Mire való a 'Ctrl + C' billentyűkombináció?",
  valaszok: ["Beillesztés", "Másolás", "Kivágás", "Mentés"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Mit jelent az SSD?",
  valaszok: ["System Software Disk", "Super Speed Drive", "Solid State Drive", "Secure Storage Device"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Melyik nyelv NEM programozási nyelv?",
  valaszok: ["Python", "HTML", "C++", "Photoshop"],
  helyesIndex: 3,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Mit csinál a 'Ctrl + Z' kombináció?",
  valaszok: ["Újraindít", "Bezár", "Visszavon", "Ment"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Melyik eszköz alkalmas bemeneti műveletre?",
  valaszok: ["Monitor", "Billentyűzet", "Nyomtató", "Hangszóró"],
  helyesIndex: 1,
  kep: "szamitogep.jpg"
},
{
  kerdes: "Mit jelent az URL?",
  valaszok: ["Unified Resource Locator", "Universal Random Link", "Uniform Resource Locator", "Unique Route Language"],
  helyesIndex: 2,
  kep: "szamitogep.jpg"
},
  {
    kerdes: "Mi a CPU fő feladata?",
    valaszok: ["Képek tárolása", "Programok futtatása", "Hang lejátszása", "Hálózat kezelése"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit jelent a RAM?",
    valaszok: ["Random Access Memory", "Read All Memory", "Rapid Access Machine", "Run After Mode"],
    helyesIndex: 0,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik eszköz nem bemeneti periféria?",
    valaszok: ["Billentyűzet", "Egér", "Monitor", "Webkamera"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a HTML szerepe a webfejlesztésben?",
    valaszok: ["Stílus hozzáadása", "Interaktivitás biztosítása", "Adatok tárolása", "Weboldal szerkezetének meghatározása"],
    helyesIndex: 3,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit csinál az operációs rendszer?",
    valaszok: ["Videók szerkesztése", "Játékokat fejleszt", "Hardvert és szoftvert irányít", "Internetes oldalak tárolása"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik fájlkiterjesztés jelöli a képeket?",
    valaszok: [".mp3", ".txt", ".jpg", ".exe"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a Google Chrome?",
    valaszok: ["Szövegszerkesztő", "Böngészőprogram", "Játék", "Operációs rendszer"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik eszköz menti el az adatokat hosszú távon?",
    valaszok: ["RAM", "Processzor", "Videókártya", "Merevlemez"],
    helyesIndex: 3,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi az IP-cím?",
    valaszok: ["Internet csatlakozó", "Számítógép azonosítója a hálózaton", "Hibakód", "Grafikus meghajtó"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit jelent az URL?",
    valaszok: ["Universal Resource Locator", "Unique RAM Loader", "User Ready Line", "Ultra Rapid Logic"],
    helyesIndex: 0,
    kep: "szamitogep.jpg"
  },

  // --- További 30 kérdés ---

  {
    kerdes: "Mi az alaplap feladata?",
    valaszok: ["Adatok tárolása", "Programok írása", "Hardverelemek összekapcsolása", "Hangkártya működtetése"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik program a Microsoft irodai csomag része?",
    valaszok: ["Excel", "Photoshop", "Chrome", "Visual Studio"],
    helyesIndex: 0,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a BIOS?",
    valaszok: ["Zenelejátszó", "Alap rendszerindító program", "Fájlszerkesztő", "Hálózati eszköz"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi az SSD előnye a HDD-vel szemben?",
    valaszok: ["Több adat fér rá", "Olcsóbb", "Gyorsabb adatelérés", "Nehezebb súly"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a Ctrl + C billentyűkombináció funkciója?",
    valaszok: ["Beillesztés", "Másolás", "Kivágás", "Bezárás"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit jelent az AI rövidítés?",
    valaszok: ["Auto Input", "Artificial Intelligence", "Advanced Interface", "Applied Index"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a programozás?",
    valaszok: ["Számítógépes játék", "Számítógép bekapcsolása", "Utasítások írása számítógépnek", "Képek szerkesztése"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mire jó a tűzfal?",
    valaszok: ["Videók vágására", "Internetszolgáltatásra", "Hálózati védelemre", "Nyomtatásra"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik nyelv nem programozási nyelv?",
    valaszok: ["Python", "JavaScript", "C++", "HTML"],
    helyesIndex: 3,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a Photoshop?",
    valaszok: ["Játék", "Képszerkesztő program", "Táblázatkezelő", "Videolejátszó"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
    {
    kerdes: "Mi az egér szerepe a számítógépen?",
    valaszok: ["Adatok tárolása", "Grafika létrehozása", "Mutató mozgatása", "Zenehallgatás"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit csinál a vírusirtó program?",
    valaszok: ["Zenelejátszást biztosít", "Megvédi a gépet a káros programoktól", "Videókat tölt le", "Memóriát bővít"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi az operációs rendszer célja?",
    valaszok: ["Weboldalak tervezése", "Hardver és szoftver kezelése", "Filmnézés", "Képnyomtatás"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi az internet?",
    valaszok: ["Nyomtató eszköz", "Globális számítógép-hálózat", "Programozási nyelv", "Belső memória"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik nem egy operációs rendszer?",
    valaszok: ["Windows", "macOS", "Linux", "Google"],
    helyesIndex: 3,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi az adathordozó?",
    valaszok: ["Zeneprogram", "Adatok tárolására alkalmas eszköz", "Kijelző", "Billentyűzet"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit jelent a PDF fájl?",
    valaszok: ["Portable Document Format", "Program Design File", "Picture Drawing File", "Power Data File"],
    helyesIndex: 0,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit csinál a 'formázás' egy meghajtón?",
    valaszok: ["Megvédi a fájlokat", "Eltávolít minden adatot", "Frissíti a rendszerfájlt", "Tömöríti a dokumentumokat"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik a legelterjedtebb grafikus operációs rendszer?",
    valaszok: ["DOS", "Unix", "Windows", "BIOS"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a képernyő frissítési gyakorisága?",
    valaszok: ["Másodpercenkénti képkockák száma", "Böngészési sebesség", "Letöltési idő", "Hálózati kapcsolat minősége"],
    helyesIndex: 0,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a pendrive másik neve?",
    valaszok: ["SSD", "USB meghajtó", "CD-ROM", "Modem"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit jelent a LAN rövidítés?",
    valaszok: ["Local Area Network", "Large Active Node", "Logical Access Name", "Linked Application Network"],
    helyesIndex: 0,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a 'bootolás'?",
    valaszok: ["Adatmentés", "Rendszerindítás", "Frissítés", "Billentyűzet váltása"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a célja a fájl tömörítésének?",
    valaszok: ["Olvasás gyorsítása", "Fájlméret csökkentése", "Grafika növelése", "Nyomtatási minőség javítása"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mit csinál a Ctrl + V billentyűkombináció?",
    valaszok: ["Másolás", "Beillesztés", "Kivágás", "Visszavonás"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi az e-mail?",
    valaszok: ["Számítógép típusa", "Elektronikus levél", "Programozási nyelv", "Adathordozó"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik a legelterjedtebb szövegszerkesztő?",
    valaszok: ["Excel", "Word", "Paint", "Access"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mire való a nyomtató?",
    valaszok: ["Képek szerkesztésére", "Fájlok mentésére", "Papírra nyomtatásra", "Videók vágására"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Melyik eszköz biztosítja az internetkapcsolatot?",
    valaszok: ["Processzor", "Modem", "Alaplap", "Nyomtató"],
    helyesIndex: 1,
    kep: "szamitogep.jpg"
  },
  {
    kerdes: "Mi a hacker?",
    valaszok: ["Számítógép-alkatrész", "Játékprogram", "Valaki, aki bejut más rendszerekbe", "Email szolgáltatás"],
    helyesIndex: 2,
    kep: "szamitogep.jpg"
  },
   {
    kerdes: "Melyik ország fővárosa Bécs?",
    valaszok: ["Ausztria", "Németország", "Svájc", "Csehország"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Madrid?",
    valaszok: ["Portugália", "Spanyolország", "Olaszország", "Franciaország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Kairó?",
    valaszok: ["Egyiptom", "Marokkó", "Tunézia", "Líbia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Párizs?",
    valaszok: ["Belgium", "Olaszország", "Franciaország", "Spanyolország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Róma?",
    valaszok: ["Olaszország", "Franciaország", "Görögország", "Szlovénia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Athén?",
    valaszok: ["Görögország", "Törökország", "Bulgária", "Ciprus"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Berlin?",
    valaszok: ["Ausztria", "Németország", "Hollandia", "Csehország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Prága?",
    valaszok: ["Szlovákia", "Csehország", "Lengyelország", "Ausztria"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Varsó?",
    valaszok: ["Litvánia", "Lengyelország", "Csehország", "Ukrajna"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Budapest?",
    valaszok: ["Magyarország", "Románia", "Szerbia", "Szlovákia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bukarest?",
    valaszok: ["Bulgária", "Románia", "Moldova", "Szerbia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Ljubljana?",
    valaszok: ["Szlovénia", "Horvátország", "Ausztria", "Csehország"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Zágráb?",
    valaszok: ["Bosznia", "Szerbia", "Horvátország", "Montenegró"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Oslo?",
    valaszok: ["Svédország", "Norvégia", "Finnország", "Dánia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Stockholm?",
    valaszok: ["Norvégia", "Svédország", "Dánia", "Finnország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Koppenhága?",
    valaszok: ["Finnország", "Dánia", "Svédország", "Norvégia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Helsinki?",
    valaszok: ["Dánia", "Finnország", "Svédország", "Norvégia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Dublin?",
    valaszok: ["Skócia", "Írország", "Wales", "Észak-Írország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa London?",
    valaszok: ["Írország", "Egyesült Királyság", "Franciaország", "Skócia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Lisszabon?",
    valaszok: ["Spanyolország", "Olaszország", "Portugália", "Franciaország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Brüsszel?",
    valaszok: ["Hollandia", "Belgium", "Luxemburg", "Franciaország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Amszterdam?",
    valaszok: ["Hollandia", "Belgium", "Dánia", "Németország"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bern?",
    valaszok: ["Svájc", "Ausztria", "Németország", "Liechtenstein"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Reykjavík?",
    valaszok: ["Norvégia", "Grönland", "Izland", "Finnország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Moszkva?",
    valaszok: ["Fehéroroszország", "Oroszország", "Ukrajna", "Kazahsztán"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Kijev?",
    valaszok: ["Ukrajna", "Oroszország", "Fehéroroszország", "Moldova"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Minszk?",
    valaszok: ["Litvánia", "Fehéroroszország", "Ukrajna", "Oroszország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Vilnius?",
    valaszok: ["Lettország", "Észtország", "Litvánia", "Fehéroroszország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Riga?",
    valaszok: ["Litvánia", "Észtország", "Lettország", "Finnország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Tallinn?",
    valaszok: ["Észtország", "Lettország", "Litvánia", "Finnország"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Ankara?",
    valaszok: ["Irán", "Törökország", "Szíria", "Görögország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Teherán?",
    valaszok: ["Irak", "Pakisztán", "Irán", "Törökország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bagdad?",
    valaszok: ["Irán", "Szíria", "Irak", "Jordánia"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Kabul?",
    valaszok: ["Irán", "Pakisztán", "Afganisztán", "India"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Islamabad?",
    valaszok: ["Pakisztán", "Afganisztán", "Irán", "India"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Újdelhi?",
    valaszok: ["India", "Nepál", "Banglades", "Srí Lanka"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Katmandu?",
    valaszok: ["India", "Nepál", "Bhután", "Banglades"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Dakka?",
    valaszok: ["Banglades", "India", "Pakisztán", "Srí Lanka"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Colombo?",
    valaszok: ["Malajzia", "Indonézia", "Srí Lanka", "India"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bangkok?",
    valaszok: ["Thaiföld", "Malajzia", "Kambodzsa", "Vietnam"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Hanoi?",
    valaszok: ["Laosz", "Vietnam", "Kambodzsa", "Thaiföld"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Phnompen?",
    valaszok: ["Kambodzsa", "Laosz", "Vietnam", "Thaiföld"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Kuala Lumpur?",
    valaszok: ["Malajzia", "Indonézia", "Brunei", "Fülöp-szigetek"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Jakarta?",
    valaszok: ["Indonézia", "Malajzia", "Brunei", "Szingapúr"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Manila?",
    valaszok: ["Fülöp-szigetek", "Thaiföld", "Indonézia", "Malajzia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Szingapúr?",
    valaszok: ["Szingapúr", "Malajzia", "Brunei", "Indonézia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Peking?",
    valaszok: ["Japán", "Kína", "Tajvan", "Dél-Korea"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Tokió?",
    valaszok: ["Kína", "Dél-Korea", "Japán", "Thaiföld"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Szöul?",
    valaszok: ["Észak-Korea", "Japán", "Kína", "Dél-Korea"],
    helyesIndex: 3,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Phenjan?",
    valaszok: ["Dél-Korea", "Észak-Korea", "Kína", "Japán"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Taipei?",
    valaszok: ["Kína", "Tajvan", "Japán", "Dél-Korea"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Canberra?",
    valaszok: ["Ausztrália", "Új-Zéland", "Fidzsi", "Pápua Új-Guinea"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Wellington?",
    valaszok: ["Ausztrália", "Fidzsi", "Új-Zéland", "Tonga"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Mexikóváros?",
    valaszok: ["Mexikó", "Spanyolország", "Kolumbia", "Peru"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Lima?",
    valaszok: ["Ecuador", "Chile", "Peru", "Bolívia"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bogotá?",
    valaszok: ["Kolumbia", "Venezuela", "Ecuador", "Peru"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Santiago?",
    valaszok: ["Chile", "Peru", "Brazília", "Argentína"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Buenos Aires?",
    valaszok: ["Argentína", "Brazília", "Chile", "Uruguay"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Montevideo?",
    valaszok: ["Paraguay", "Uruguay", "Argentína", "Chile"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Asunción?",
    valaszok: ["Paraguay", "Uruguay", "Chile", "Ecuador"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa La Paz?",
    valaszok: ["Bolívia", "Peru", "Chile", "Paraguay"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Brasília?",
    valaszok: ["Argentína", "Brazília", "Chile", "Peru"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Caracas?",
    valaszok: ["Venezuela", "Kolumbia", "Peru", "Ecuador"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Quito?",
    valaszok: ["Kolumbia", "Peru", "Ecuador", "Chile"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Havanna?",
    valaszok: ["Dominikai Köztársaság", "Kuba", "Mexikó", "Puerto Rico"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Nassau?",
    valaszok: ["Jamaica", "Barbados", "Bahamák", "Kuba"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Kingston?",
    valaszok: ["Haiti", "Jamaica", "Bahamák", "Trinidad és Tobago"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
   {
    kerdes: "Melyik ország fővárosa Port-au-Prince?",
    valaszok: ["Dominikai Köztársaság", "Haiti", "Kuba", "Jamaica"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Santo Domingo?",
    valaszok: ["Puerto Rico", "Haiti", "Kuba", "Dominikai Köztársaság"],
    helyesIndex: 3,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Ottawa?",
    valaszok: ["Kanada", "Egyesült Államok", "Mexikó", "Grönland"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Washington D.C.?",
    valaszok: ["Egyesült Államok", "Kanada", "Mexikó", "Brazília"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Reykjavík?",
    valaszok: ["Norvégia", "Izland", "Finnország", "Grönland"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Oslo?",
    valaszok: ["Norvégia", "Svédország", "Finnország", "Dánia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Stockholm?",
    valaszok: ["Finnország", "Norvégia", "Svédország", "Észtország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Helsinki?",
    valaszok: ["Svédország", "Finnország", "Észtország", "Norvégia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Koppenhága?",
    valaszok: ["Dánia", "Svédország", "Norvégia", "Finnország"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Tallinn?",
    valaszok: ["Észtország", "Lettország", "Litvánia", "Finnország"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Riga?",
    valaszok: ["Litvánia", "Észtország", "Lettország", "Finnország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Vilnius?",
    valaszok: ["Lettország", "Litvánia", "Észtország", "Fehéroroszország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Varsó?",
    valaszok: ["Lengyelország", "Ukrajna", "Csehország", "Litvánia"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Prága?",
    valaszok: ["Csehország", "Szlovákia", "Lengyelország", "Ausztria"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Pozsony?",
    valaszok: ["Csehország", "Magyarország", "Szlovákia", "Ausztria"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bécs?",
    valaszok: ["Svájc", "Ausztria", "Magyarország", "Németország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Budapest?",
    valaszok: ["Ausztria", "Románia", "Magyarország", "Horvátország"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Ljubljana?",
    valaszok: ["Szlovákia", "Szlovénia", "Horvátország", "Szerbia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Zágráb?",
    valaszok: ["Szerbia", "Szlovénia", "Horvátország", "Bosznia-Hercegovina"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Szarajevó?",
    valaszok: ["Montenegró", "Bosznia-Hercegovina", "Horvátország", "Albánia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Belgrád?",
    valaszok: ["Koszovó", "Szerbia", "Macedónia", "Montenegró"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Podgorica?",
    valaszok: ["Szerbia", "Koszovó", "Montenegró", "Bosznia-Hercegovina"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Tirana?",
    valaszok: ["Koszovó", "Albánia", "Macedónia", "Montenegró"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Szkopje?",
    valaszok: ["Albánia", "Macedónia", "Koszovó", "Szerbia"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Pristina?",
    valaszok: ["Macedónia", "Koszovó", "Albánia", "Montenegró"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Athén?",
    valaszok: ["Görögország", "Törökország", "Bulgária", "Ciprus"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Ankara?",
    valaszok: ["Törökország", "Görögország", "Irán", "Szíria"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Nicosia?",
    valaszok: ["Ciprus", "Görögország", "Törökország", "Libanon"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Moszkva?",
    valaszok: ["Fehéroroszország", "Ukrajna", "Oroszország", "Kazahsztán"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Kijev?",
    valaszok: ["Oroszország", "Fehéroroszország", "Ukrajna", "Moldova"],
    helyesIndex: 2,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Minszk?",
    valaszok: ["Ukrajna", "Oroszország", "Moldova", "Fehéroroszország"],
    helyesIndex: 3,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Chisinau?",
    valaszok: ["Románia", "Moldova", "Ukrajna", "Fehéroroszország"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Bern?",
    valaszok: ["Svájc", "Ausztria", "Németország", "Liechtenstein"],
    helyesIndex: 0,
    kep: "foldrajz.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Vaduz?",
    valaszok: ["Svájc", "Liechtenstein", "Ausztria", "Luxemburg"],
    helyesIndex: 1,
    kep: "foldrajz.jpg"
  },
    {
    kerdes: "Melyik sorozatban játszott Szabó Győző a legismertebb szerepében?",
    valaszok: ["Barátok közt", "Valami Amerika", "Terápia", "Tűzvonalban"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Kinek a nevéhez fűződik a 'Kincsem' című film főszerepe?",
    valaszok: ["Kulka János", "Nagy Ervin", "Oroszlán Szonja", "Scherer Péter"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta Mágenheim doktort a Szomszédok című sorozatban?",
    valaszok: ["Jordán Tamás", "Pusztaszeri Kornél", "Lengyel Ferenc", "Szőke Zoltán"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színésznő játszott a Kontroll című filmben?",
    valaszok: ["Péterfy Bori", "Balsai Móni", "Pálmai Anna", "Eszenyi Enikő"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik filmben szerepelt Kamarás Iván?",
    valaszok: ["Valami Amerika", "Állítsátok meg Terézanyut!", "Made in Hungária", "Örökség"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Kinek a nevéhez köthető a 'Testről és lélekről' című film főszerepe?",
    valaszok: ["Tenki Réka", "Balsai Móni", "Borbély Alexandra", "Tóth Ildikó"],
    helyesIndex: 2,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki a 'Süsü, a sárkány' hangja?",
    valaszok: ["Sinkovits Imre", "Bodrogi Gyula", "Garas Dezső", "Kállai Ferenc"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta a Tanár urat a 'Tanár úr kérem' színpadi feldolgozásában?",
    valaszok: ["Gálvölgyi János", "Kern András", "Eperjes Károly", "Szervét Tibor"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész alakította a legismertebb Hacsekot?",
    valaszok: ["Makláry Zoltán", "Bánhidi László", "Kállai Ferenc", "Kazal László"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította az Üvegtigris című film sorozatban Lali karakterét?",
    valaszok: ["Rudolf Péter", "Reviczky Gábor", "Kálloy Molnár Péter", "Szervét Tibor"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színésznő szerepelt a 'Barátok közt' című sorozatban Berényi Claudia szerepében?",
    valaszok: ["Ábrahám Edit", "Pap Vera", "Tordai Teri", "Bánsági Ildikó"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította Minarik Edét az 'Októberi vasárnap' című filmben?",
    valaszok: ["Eperjes Károly", "Garas Dezső", "Kulka János", "Kállai Ferenc"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész ismert Kabos Gyula karakterének modern megformálásáról?",
    valaszok: ["Fábry Sándor", "Maksa Zoltán", "Gálvölgyi János", "Bödőcs Tibor"],
    helyesIndex: 2,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Kinek az alakításához fűződik a 'Hyppolit, a lakáj' modern feldolgozása?",
    valaszok: ["Rudolf Péter", "Kern András", "Reviczky Gábor", "Kolovratnik Krisztián"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a főszereplője a 'Tűzvonalban' című sorozatnak?",
    valaszok: ["Nagy Zsolt", "Lengyel Tamás", "Kovács Lajos", "Szabó Győző"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította a Tanárnőt az 'Abigél' című sorozatban?",
    valaszok: ["Halász Judit", "Dömsödi Janka", "Kovács Nóra", "Szabó Éva"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a 'Linda' című sorozat főszereplője?",
    valaszok: ["Kovács Patrícia", "Kékkovács Mara", "Bujtor István", "Görbe Nóra"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik filmben játszott együtt Rudolf Péter és Nagy-Kálózy Eszter?",
    valaszok: ["Üvegtigris", "Valami Amerika", "Ámbár tanár úr", "Sose halunk meg"],
    helyesIndex: 2,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki az alábbiak közül Jászai Mari-díjas színész?",
    valaszok: ["Hujber Ferenc", "Kulka János", "Stohl András", "Ganxsta Zolee"],
    helyesIndex: 2,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Kinek a nevéhez fűződik a 'Meseautó' 2000-es feldolgozásának főszerepe?",
    valaszok: ["Kulka János", "Rudolf Péter", "Kern András", "Szabó Győző"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta a Társas játék sorozat főszereplőjét?",
    valaszok: ["Lengyel Tamás", "Száraz Dénes", "Nagy Zsolt", "Mucsi Zoltán"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színésznő szerepelt a 'Made in Hungária' című filmben?",
    valaszok: ["Ónodi Eszter", "Tenki Réka", "Balsai Móni", "Kovács Patrícia"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Kinek a hangja volt 'Vuk' a híres magyar rajzfilmben?",
    valaszok: ["Bodrogi Gyula", "Gyabronka József", "Gyulai István", "Mikó István"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki a 'Zimmer Feri' című film főszereplője?",
    valaszok: ["Reviczky Gábor", "Kulka János", "Szervét Tibor", "Gáspár Sándor"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta Csocsót a 'Csocsó, avagy éljen május elseje!' című filmben?",
    valaszok: ["Koltay Gábor", "Reviczky Gábor", "Eperjes Károly", "Kern András"],
    helyesIndex: 2,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Kinek a nevéhez fűződik a 'Sose halunk meg' című film főszerepe?",
    valaszok: ["Garas Dezső", "Koltai Róbert", "Rudolf Péter", "Reviczky Gábor"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színész volt a főszereplője a 'Macskafogó 2'-nek?",
    valaszok: ["Stohl András", "Kulka János", "Szabó Győző", "Kern András"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította a fiatal Zolit a 'Valami Amerika' első részében?",
    valaszok: ["Hujber Ferenc", "Csányi Sándor", "Szabó Győző", "Nagy Ervin"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színésznő volt a 'Megáll az idő' női főszereplője?",
    valaszok: ["Pap Vera", "Eszenyi Enikő", "Bánsági Ildikó", "Pécsi Ildikó"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki szerepelt a legtöbbször a Mikroszkóp Színpadon?",
    valaszok: ["Gálvölgyi János", "Boncz Géza", "Kern András", "Kabos László"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész volt a Katona József Színház egyik legismertebb arca?",
    valaszok: ["Máté Gábor", "Zsótér Sándor", "Gálffi László", "Alföldi Róbert"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
   {
    kerdes: "Ki játszotta a főszerepet a 'Tüskevár' című filmben?",
    valaszok: ["Szakácsi Sándor", "Bujtor István", "Eperjes Károly", "Kovács Lajos"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színésznő kapta meg a Jászai Mari-díjat 2010-ben?",
    valaszok: ["Ábrahám Edit", "Tenki Réka", "Csányi Edit", "Halász Judit"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a címszereplő a 'Szindbád' című filmben?",
    valaszok: ["Bujtor István", "Rátóti Zoltán", "Mészáros Béla", "Jancsó Miklós"],
    helyesIndex: 2,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színész játszotta el a Rózsa Sándort a 'Valahol Európában' című filmben?",
    valaszok: ["Ifj. Vidnyánszky Attila", "Lázár Ervin", "Nagy Feró", "Székely B. Miklós"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította a főszerepet a 'Légy jó mindhalálig' filmben?",
    valaszok: ["Bujtor István", "Ruttkai Éva", "Gálffi László", "Szabó István"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész játszott a legtöbbször a Vígszínházban?",
    valaszok: ["Kulka János", "Lukács Sándor", "Rudolf Péter", "Jankovics József"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki az a színész, aki főként komikus szerepeiről ismert, és játszott a 'Misi mókus kalandjai'-ban?",
    valaszok: ["Hujber Ferenc", "Gálvölgyi János", "Reviczky Gábor", "Stohl András"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította a címszereplőt a 'Kincsem' című filmben?",
    valaszok: ["Várkonyi András", "Dévényi István", "Csányi Sándor", "Nagy Ervin"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész játszott a 'Tóth János' című magyar film főszerepében?",
    valaszok: ["Rudolf Péter", "Kulka János", "Stohl András", "Csányi Sándor"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta a 'Pál utcai fiúk' film egyik főszereplőjét?",
    valaszok: ["Farkas Gyula", "Eperjes Károly", "Hajdu Steve", "Koltai Róbert"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színésznő kapott Kossuth-díjat 2005-ben?",
    valaszok: ["Bánsági Ildikó", "Hámori Gabriella", "Császár Előd", "Halász Judit"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta a főszerepet a 'Sorstalanság' című filmben?",
    valaszok: ["Gáspár Sándor", "Nagy Ervin", "Koltai Róbert", "Földes Eszter"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a címszereplő a 'Máglyák Firenzében' című színdarabban?",
    valaszok: ["Gábor Miklós", "Törőcsik Mari", "Ács János", "Jászai Mari"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész volt a főszereplője az 'Indul a bakterház' című filmnek?",
    valaszok: ["Nagy Feró", "Hajduk Károly", "Kulka János", "Hujber Ferenc"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította a főszereplőt az 'A Pál utcai fiúk' című filmben?",
    valaszok: ["Farkas Gyula", "Koltai Róbert", "Eperjes Károly", "Kulka János"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a főszereplője a 'Sose halunk meg' című filmnek?",
    valaszok: ["Garas Dezső", "Rudolf Péter", "Bujtor István", "Kern András"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színész játszotta a 'Tanú' című film főszerepét?",
    valaszok: ["Szeleczky Zita", "Bujtor István", "Mucsi Zoltán", "Radványi Géza"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta a címszerepet a 'A kőszívű ember fiai' filmben?",
    valaszok: ["Bujtor István", "Eperjes Károly", "Nagy Feró", "Farkas Gyula"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész volt az egyik főszereplője az 'Állítsátok meg Terézanyut!' című filmnek?",
    valaszok: ["Kulka János", "Bujtor István", "Rudolf Péter", "Stohl András"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a főszereplője a 'Hannibál tanár úr' című filmnek?",
    valaszok: ["Stohl András", "Nagy Ervin", "Bánsági Ildikó", "Garas Dezső"],
    helyesIndex: 1,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színésznő játszotta a főszerepet a 'Szerelem első vérig' című filmben?",
    valaszok: ["Pap Vera", "Kovács Patrícia", "Dömsödi Janka", "Halász Judit"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a 'Tanár úr kérem' című film főszereplője?",
    valaszok: ["Bujtor István", "Rudolf Péter", "Stohl András", "Kulka János"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színész játszotta a 'Valami Amerika' film egyik főszerepét?",
    valaszok: ["Csányi Sándor", "Szabó Győző", "Hujber Ferenc", "Nagy Ervin"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a 'Tűzvonalban' című sorozat egyik főszereplője?",
    valaszok: ["Lengyel Tamás", "Kovács Lajos", "Szabó Győző", "Nagy Zsolt"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki alakította a 'Linda' című sorozat címadó szerepét?",
    valaszok: ["Görbe Nóra", "Kovács Patrícia", "Kékkovács Mara", "Pap Vera"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki játszotta a 'Barátok közt' sorozatban Berényi Claudiát?",
    valaszok: ["Ábrahám Edit", "Pap Vera", "Tordai Teri", "Bánsági Ildikó"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik magyar színész játszotta a 'Macskafogó 2' című film egyik főszerepét?",
    valaszok: ["Kulka János", "Stohl András", "Szabó Győző", "Kern András"],
    helyesIndex: 3,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Ki volt a főszereplője az 'Abigél' című sorozatnak?",
    valaszok: ["Halász Judit", "Dömsödi Janka", "Kovács Nóra", "Szabó Éva"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
  {
    kerdes: "Melyik színész játszotta a 'Hyppolit, a lakáj' modern feldolgozásának főszerepét?",
    valaszok: ["Rudolf Péter", "Kern András", "Reviczky Gábor", "Kolovratnik Krisztián"],
    helyesIndex: 0,
    kep: "magyarceleb.jpg"
  },
   {
    kerdes: "Melyik filmben játszotta Leonardo DiCaprio a főszerepet?",
    valaszok: ["Titanic", "Avatar", "Inception", "The Matrix"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki a híres énekes, aki az 'Thriller' című albumot adta ki?",
    valaszok: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik ország származik a futballista Cristiano Ronaldo?",
    valaszok: ["Spanyolország", "Olaszország", "Portugália", "Brazília"],
    helyesIndex: 2,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki volt az első nő, aki vezette az Egyesült Államok NASA űrprogramját?",
    valaszok: ["Sally Ride", "Mae Jemison", "Kalpana Chawla", "Valentina Tereshkova"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres zenész alapította a 'The Beatles' zenekart?",
    valaszok: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres színész, aki a 'Pirates of the Caribbean' filmek Jack Sparrow kapitányát alakítja?",
    valaszok: ["Johnny Depp", "Brad Pitt", "Tom Cruise", "Robert Downey Jr."],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik énekesnő adta ki a '1989' című albumot?",
    valaszok: ["Ariana Grande", "Katy Perry", "Taylor Swift", "Beyoncé"],
    helyesIndex: 2,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki a híres kosárlabdázó, aki 6 NBA bajnoki címet nyert a Chicago Bulls csapatával?",
    valaszok: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"],
    helyesIndex: 2,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik színésznő játszotta el Hermione Grangert a 'Harry Potter' filmekben?",
    valaszok: ["Emma Watson", "Natalie Portman", "Emma Stone", "Scarlett Johansson"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekes, aki az 'I'm Yours' című slágert adta ki?",
    valaszok: ["Jason Mraz", "Ed Sheeran", "Bruno Mars", "Sam Smith"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik országban született a popsztár Beyoncé?",
    valaszok: ["USA", "Kanada", "Anglia", "Ausztrália"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta Tony Stark / Vasember szerepét a Marvel filmekben?",
    valaszok: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres sportoló az első nő, aki megnyerte az összes Grand Slam teniszbajnokságot?",
    valaszok: ["Serena Williams", "Venus Williams", "Martina Navratilova", "Steffi Graf"],
    helyesIndex: 3,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres rendező, aki a 'Jurassic Park' és a 'E.T.' filmeket készítette?",
    valaszok: ["James Cameron", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik énekesnő adta elő a 'Like a Virgin' című slágert?",
    valaszok: ["Madonna", "Lady Gaga", "Celine Dion", "Whitney Houston"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta Forrest Gumpot a 'Forrest Gump' című filmben?",
    valaszok: ["Tom Hanks", "Brad Pitt", "Matt Damon", "Johnny Depp"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik ország származik a focista Lionel Messi?",
    valaszok: ["Brazília", "Argentína", "Spanyolország", "Portugália"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a brit énekes, aki kiadta a 'Shape of You' című slágert?",
    valaszok: ["Ed Sheeran", "Sam Smith", "Adele", "Harry Styles"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik színész alakította a Joker karakterét a 2008-as 'The Dark Knight' filmben?",
    valaszok: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki a híres rapper, aki az 'Empire State of Mind' című slágert adta elő?",
    valaszok: ["Jay-Z", "Kanye West", "Drake", "Eminem"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik országban született a modell és színésznő Scarlett Johansson?",
    valaszok: ["Kanada", "USA", "Anglia", "Ausztrália"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta a főszerepet a 'Gladiátor' című filmben?",
    valaszok: ["Russell Crowe", "Joaquin Phoenix", "Tom Hardy", "Brad Pitt"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik énekesnőnek a színpadi neve Lady Gaga?",
    valaszok: ["Stefani Germanotta", "Robyn Fenty", "Alicia Augello", "Katheryn Hudson"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a sportoló, aki 23 NBA All-Star meccset játszott?",
    valaszok: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Tim Duncan"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik színésznő játszotta el Black Widow karakterét a Marvel filmekben?",
    valaszok: ["Scarlett Johansson", "Emily Blunt", "Natalie Portman", "Elizabeth Olsen"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekes, aki a 'Shape of You' és 'Perfect' című slágereket adta ki?",
    valaszok: ["Ed Sheeran", "Bruno Mars", "Shawn Mendes", "Justin Bieber"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik ország származik az autóversenyző Lewis Hamilton?",
    valaszok: ["USA", "Anglia", "Ausztrália", "Kanada"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta a főszerepet a 'Titanic' című filmben Rose-ként?",
    valaszok: ["Kate Winslet", "Natalie Portman", "Keira Knightley", "Sandra Bullock"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik rapper adott ki albumot 'The Marshall Mathers LP' címmel?",
    valaszok: ["Eminem", "Jay-Z", "Drake", "Kanye West"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a brit énekesnő, aki az 'Hello' című dalt énekelte?",
    valaszok: ["Adele", "Amy Winehouse", "Ellie Goulding", "Lorde"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik ország szülötte Novak Djokovic teniszbajnok?",
    valaszok: ["Horvátország", "Szerbia", "Szlovénia", "Montenegró"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki volt a Harry Potter filmek főszereplője?",
    valaszok: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Matthew Lewis"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik színész játszotta el Wolverine-t az X-Men filmekben?",
    valaszok: ["Hugh Jackman", "Ryan Reynolds", "Chris Evans", "Robert Downey Jr."],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres színész, aki a 'Mission Impossible' filmek Ethan Hunt karakterét játssza?",
    valaszok: ["Tom Cruise", "Brad Pitt", "Matt Damon", "Johnny Depp"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik zenekar tagja Paul McCartney?",
    valaszok: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekes, aki a 'Bad Romance' című számot adta ki?",
    valaszok: ["Lady Gaga", "Katy Perry", "Madonna", "Rihanna"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik országban született az énekes Justin Bieber?",
    valaszok: ["USA", "Kanada", "Anglia", "Ausztrália"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta a Joker szerepét a 2019-es azonos című filmben?",
    valaszok: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres futballcsapat játékosa Lionel Messi?",
    valaszok: ["Real Madrid", "Manchester United", "Barcelona", "Bayern München"],
    helyesIndex: 2,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki volt az első ember, aki a Holdra lépett?",
    valaszok: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    helyesIndex: 2,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik énekesnő adta ki a 'Lemonade' albumot?",
    valaszok: ["Beyoncé", "Adele", "Rihanna", "Taylor Swift"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta a főszerepet a 'Deadpool' filmben?",
    valaszok: ["Ryan Reynolds", "Chris Evans", "Hugh Jackman", "Tom Holland"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik országban született a teniszjátékos Serena Williams?",
    valaszok: ["USA", "Ausztrália", "Nagy-Britannia", "Dél-Afrika"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki a 'Game of Thrones' sorozatból ismert Jon Snow karaktert alakító színész?",
    valaszok: ["Kit Harington", "Emilia Clarke", "Peter Dinklage", "Nikolaj Coster-Waldau"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik énekes adott ki albumot '25' címmel?",
    valaszok: ["Adele", "Beyoncé", "Taylor Swift", "Lady Gaga"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki volt a híres színésznő a 'La La Land' című filmben?",
    valaszok: ["Emma Stone", "Jennifer Lawrence", "Natalie Portman", "Anne Hathaway"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres sportoló nyerte meg 7-szer a Tour de France kerékpárversenyt?",
    valaszok: ["Chris Froome", "Eddy Merckx", "Lance Armstrong", "Miguel Indurain"],
    helyesIndex: 2,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekes, aki az 'Uptown Funk' című slágert adta elő?",
    valaszok: ["Bruno Mars", "Pharrell Williams", "Justin Timberlake", "Usher"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik ország származik a színész Keanu Reeves?",
    valaszok: ["USA", "Kanada", "Ausztrália", "Anglia"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki a 'Pirates of the Caribbean' filmek szereplője, aki Jack Sparrow kapitányt alakítja?",
    valaszok: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Javier Bardem"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres énekesnő énekelte a 'Rolling in the Deep' című slágert?",
    valaszok: ["Adele", "Beyoncé", "Sia", "Katy Perry"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki volt a főszereplő a 'The Matrix' filmekben?",
    valaszok: ["Keanu Reeves", "Laurence Fishburne", "Hugo Weaving", "Carrie-Anne Moss"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik ország származik a színész Tom Hanks?",
    valaszok: ["USA", "Anglia", "Ausztrália", "Kanada"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekes, aki az 'Hello' című számot adta ki?",
    valaszok: ["Adele", "Beyoncé", "Lady Gaga", "Katy Perry"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik sportágban híres Usain Bolt?",
    valaszok: ["Úszás", "Atlétika", "Futball", "Kosárlabda"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta a 'Jack Sparrow' karakterét?",
    valaszok: ["Johnny Depp", "Orlando Bloom", "Jude Law", "Brad Pitt"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres énekes adott ki 'Lover' című albumot?",
    valaszok: ["Taylor Swift", "Katy Perry", "Ariana Grande", "Selena Gomez"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a színész, aki a 'Deadpool' szerepét játszotta?",
    valaszok: ["Ryan Reynolds", "Chris Evans", "Tom Holland", "Robert Downey Jr."],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik országban született Novak Djokovic?",
    valaszok: ["Horvátország", "Szerbia", "Szlovénia", "Montenegró"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekesnő, aki a 'Poker Face' című slágert énekelte?",
    valaszok: ["Lady Gaga", "Katy Perry", "Madonna", "Rihanna"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres színész játszotta el a 'Batman' szerepét a 2005-ös filmben?",
    valaszok: ["Christian Bale", "Ben Affleck", "Michael Keaton", "Val Kilmer"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres énekes, aki a 'Happy' című számot adta ki?",
    valaszok: ["Pharrell Williams", "Bruno Mars", "Justin Timberlake", "Ed Sheeran"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik országban született a színész Hugh Jackman?",
    valaszok: ["USA", "Ausztrália", "Kanada", "Anglia"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki játszotta a főszerepet a 'The Revenant' című filmben?",
    valaszok: ["Leonardo DiCaprio", "Tom Hardy", "Matt Damon", "Brad Pitt"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres énekesnőnek a színpadi neve Rihanna?",
    valaszok: ["Robyn Fenty", "Stefani Germanotta", "Katheryn Hudson", "Alicia Augello"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a híres focista, aki 5 alkalommal nyerte meg a Ballon d'Or-t?",
    valaszok: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Zlatan Ibrahimović"],
    helyesIndex: 1,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Melyik híres rendező készítette a 'Pulp Fiction' című filmet?",
    valaszok: ["Quentin Tarantino", "Steven Spielberg", "Martin Scorsese", "James Cameron"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
  {
    kerdes: "Ki az a színésznő, aki a 'Black Widow' szerepét alakítja?",
    valaszok: ["Scarlett Johansson", "Emily Blunt", "Natalie Portman", "Elizabeth Olsen"],
    helyesIndex: 0,
    kep: "globalstar.jpg"
  },
   {
    kerdes: "Hány kontinens van a Földön?",
    valaszok: ["5", "6", "7", "8"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a fővárosa Magyarországnak?",
    valaszok: ["Bécs", "Budapest", "Prága", "Varsó"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen alakú egy háromszög?",
    valaszok: ["Négy oldalú", "Három oldalú", "Kör alakú", "Öt oldalú"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik bolygó a Naprendszerünk legnagyobb bolygója?",
    valaszok: ["Föld", "Mars", "Jupiter", "Vénusz"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszak következik a tavasz után?",
    valaszok: ["Nyár", "Ősz", "Tél", "Nyár vége"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a 10-es számrendszerben a 101 bináris szám értéke?",
    valaszok: ["3", "4", "5", "6"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a magyar nyelv hivatalos nyelve?",
    valaszok: ["Magyar", "Angol", "Német", "Francia"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat tud repülni?",
    valaszok: ["Elefánt", "Bagoly", "Ló", "Kutya"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik ország zászlaja piros, fehér és zöld színekből áll?",
    valaszok: ["Magyarország", "Németország", "Franciaország", "Olaszország"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az 5 + 3 eredménye?",
    valaszok: ["7", "8", "9", "6"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban hullanak a levelek a fákról?",
    valaszok: ["Tavasz", "Nyár", "Ősz", "Tél"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány órából áll egy nap?",
    valaszok: ["12", "24", "48", "36"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen formájú a Föld?",
    valaszok: ["Gömb", "Kocka", "Henger", "Piramisszerű"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az év első hónapja?",
    valaszok: ["Január", "Február", "Március", "December"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat él a vízben?",
    valaszok: ["Cápa", "Oroszlán", "Macska", "Elefánt"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a 3 x 4 eredménye?",
    valaszok: ["7", "11", "12", "14"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik hónapban van a karácsony?",
    valaszok: ["December", "November", "Október", "Január"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik az a szerv, ami a vért pumpálja az emberi testben?",
    valaszok: ["Tüdő", "Máj", "Szív", "Gyomor"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik az a három alapszín?",
    valaszok: ["Piros, kék, sárga", "Zöld, narancs, lila", "Fekete, fehér, szürke", "Rózsaszín, barna, türkiz"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a 15 - 7 eredménye?",
    valaszok: ["8", "7", "9", "10"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány lába van a póknak?",
    valaszok: ["6", "8", "10", "12"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az alapanyaga a papírnak?",
    valaszok: ["Fém", "Fa", "Műanyag", "Üveg"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Ki volt az első magyar király?",
    valaszok: ["Szent István", "Mátyás király", "IV. Béla", "Károly Róbert"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen anyagból készül a kenyér?",
    valaszok: ["Liszt", "Cukor", "Só", "Olaj"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban esik a legtöbb hó?",
    valaszok: ["Tél", "Ősz", "Tavasz", "Nyár"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány perc van egy órában?",
    valaszok: ["50", "60", "70", "80"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik bolygó a Naphoz legközelebb?",
    valaszok: ["Merkúr", "Vénusz", "Föld", "Mars"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat nem tud repülni?",
    valaszok: ["Madár", "Denevér", "Pingvin", "Bagoly"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik szám következik a 9 után?",
    valaszok: ["7", "8", "10", "11"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen állat a kaméleon?",
    valaszok: ["Hüllő", "Madár", "Emlős", "Hal"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik bolygó a 'vörös bolygó' néven ismert?",
    valaszok: ["Mars", "Vénusz", "Jupiter", "Szaturnusz"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban nyílnak a virágok leggyakrabban?",
    valaszok: ["Tél", "Ősz", "Tavasz", "Nyár"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az angol nyelvben a 'kutya' szó?",
    valaszok: ["Dog", "Cat", "Bird", "Fish"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány hónapból áll egy év?",
    valaszok: ["10", "11", "12", "13"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik a legnagyobb szerv az emberi testben?",
    valaszok: ["Szív", "Máj", "Bőr", "Tüdő"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen alakú a stop tábla?",
    valaszok: ["Kör", "Négyzet", "Nyolcszög", "Háromszög"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a Föld körül keringő égitestnek?",
    valaszok: ["Nap", "Hold", "Mars", "Jupiter"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az a napszak, amikor felkel a nap?",
    valaszok: ["Reggel", "Este", "Dél", "Éjjel"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a 7 + 6 eredménye?",
    valaszok: ["11", "12", "13", "14"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik anyagból készül a ruházat leggyakrabban?",
    valaszok: ["Fa", "Pamut", "Fém", "Kő"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány színű a magyar zászló?",
    valaszok: ["2", "3", "4", "5"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik a legkisebb egész szám?",
    valaszok: ["0", "-1", "1", "-10"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak az országának, ahol a piramisok találhatók?",
    valaszok: ["Mexikó", "Egyiptom", "Görögország", "India"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen állat a panda?",
    valaszok: ["Medve", "Macska", "Kutya", "Elefánt"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a 100-as szám tízesek és egyesek összege?",
    valaszok: ["1", "10", "0", "100"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány lába van egy bogárnak?",
    valaszok: ["4", "6", "8", "10"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak az évnek, amelyben karácsony van?",
    valaszok: ["Karácsony", "December", "Év", "Hét"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban van a leghidegebb idő?",
    valaszok: ["Ősz", "Tél", "Tavasz", "Nyár"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
   {
    kerdes: "Mi az alma színe leggyakrabban?",
    valaszok: ["Piros", "Kék", "Zöld", "Sárga"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány másodperc van egy percben?",
    valaszok: ["30", "45", "60", "90"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik ország zászlaja piros, fehér és kék színekből áll?",
    valaszok: ["Franciaország", "Olaszország", "Németország", "Spanyolország"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a fővárosa Franciaországnak?",
    valaszok: ["Berlin", "Róma", "Párizs", "Madrid"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat adja a tejet?",
    valaszok: ["Disznó", "Kecske", "Ló", "Szamár"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak a bolygónak, amelyiknek gyűrűi vannak?",
    valaszok: ["Jupiter", "Mars", "Szaturnusz", "Neptunusz"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány nap van egy szökőévben?",
    valaszok: ["365", "366", "364", "367"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban kezdődik az iskolaév Magyarországon?",
    valaszok: ["Nyár", "Ősz", "Tavasz", "Tél"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a Föld legnagyobb óceánjának?",
    valaszok: ["Atlanti-óceán", "Csendes-óceán", "Indiai-óceán", "Jeges-tenger"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány nap van egy hétben?",
    valaszok: ["5", "6", "7", "8"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az angol nyelvben a 'köszönöm' szó?",
    valaszok: ["Hello", "Please", "Thanks", "Goodbye"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen színű a narancs?",
    valaszok: ["Piros", "Narancssárga", "Zöld", "Kék"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik a legkisebb szám a következők közül?",
    valaszok: ["-5", "0", "3", "10"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak az állatnak, amelyik mézet gyűjt?",
    valaszok: ["Méhecske", "Lepke", "Hangya", "Szúnyog"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a legnagyobb szárazföldi emlősnek?",
    valaszok: ["Elefánt", "Orrszarvú", "Zsiráf", "Medve"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen alakú a négyszög?",
    valaszok: ["Négy oldalú", "Három oldalú", "Kör alakú", "Öt oldalú"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa London?",
    valaszok: ["Anglia", "Franciaország", "Németország", "Olaszország"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az emberi test legnagyobb szerve?",
    valaszok: ["Szív", "Máj", "Bőr", "Tüdő"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen színű az ég általában napsütéses időben?",
    valaszok: ["Zöld", "Kék", "Piros", "Fekete"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a következő szám: 10, 20, 30, ...?",
    valaszok: ["35", "40", "45", "50"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat a leggyorsabb szárazföldi állat?",
    valaszok: ["Oroszlán", "Gepárd", "Tigris", "Leopárd"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik égitest kering a Föld körül?",
    valaszok: ["Nap", "Hold", "Mars", "Jupiter"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány hónapból áll a nyár?",
    valaszok: ["1", "2", "3", "4"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az évszak, amikor hullanak a falevelek?",
    valaszok: ["Tavasz", "Nyár", "Ősz", "Tél"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a magyar nemzeti himnusznak?",
    valaszok: ["Szózat", "Himnusz", "Székely Himnusz", "Nemzeti Dal"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a folyónak, amelyik Budapesten folyik keresztül?",
    valaszok: ["Tisza", "Duna", "Dráva", "Rába"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszak következik a nyár után?",
    valaszok: ["Ősz", "Tél", "Tavasz", "Nyár"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány kereke van egy kerékpárnak?",
    valaszok: ["1", "2", "3", "4"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az emberi test központi idegrendszerének része?",
    valaszok: ["Szív", "Agy", "Máj", "Gyomor"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat a háziállat, amelyik ugat?",
    valaszok: ["Macska", "Kutya", "Ló", "Tyúk"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen színű a traktor általában?",
    valaszok: ["Piros", "Zöld", "Sárga", "Kék"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a leghíresebb magyar költőnek?",
    valaszok: ["Ady Endre", "Petőfi Sándor", "József Attila", "Arany János"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen anyagból készül a szék?",
    valaszok: ["Fa", "Fém", "Műanyag", "Papír"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak a városnak, amelyik a magyar Parlament otthona?",
    valaszok: ["Debrecen", "Szeged", "Budapest", "Pécs"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen sportág az, ahol labdát rúgnak a kapuba?",
    valaszok: ["Kosárlabda", "Foci", "Röplabda", "Tenisz"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik az az évszak, amikor a gyerekek nyári szünetre mennek?",
    valaszok: ["Tavasz", "Nyár", "Ősz", "Tél"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a színek keveréséből keletkező új színnek?",
    valaszok: ["Fekete", "Fehér", "Lila", "Barna"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány kontinens található a Földön?",
    valaszok: ["5", "6", "7", "8"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik testrészünk használjuk a halláshoz?",
    valaszok: ["Szem", "Fül", "Száj", "Kéz"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban szüretelik a szőlőt?",
    valaszok: ["Tavasz", "Nyár", "Ősz", "Tél"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen irányba halad a nap a délután folyamán?",
    valaszok: ["Kelet", "Nyugat", "Észak", "Dél"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány ujjunk van összesen a két kezünkön?",
    valaszok: ["8", "10", "12", "14"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a legismertebb magyar dalnak, amelyet általában az iskolákban énekelnek?",
    valaszok: ["Székely Himnusz", "Himnusz", "Tavaszi szél", "Tavaszi szél vizet áraszt"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik ország fővárosa Washington D.C.?",
    valaszok: ["Kanada", "Mexikó", "Egyesült Államok", "Brazília"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik a legnagyobb szárazföldi állat?",
    valaszok: ["Elefánt", "Orrszarvú", "Zsiráf", "Medve"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
   {
    kerdes: "Mi a legkisebb természetes szám?",
    valaszok: ["0", "1", "2", "-1"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban virágoznak a fák?",
    valaszok: ["Ősz", "Tél", "Tavasz", "Nyár"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány hét van egy évben?",
    valaszok: ["52", "48", "50", "45"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a fővárosa Olaszországnak?",
    valaszok: ["Párizs", "Róma", "Berlin", "Madrid"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik bolygó a Naprendszer legnagyobb bolygója?",
    valaszok: ["Föld", "Mars", "Jupiter", "Szaturnusz"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen anyagból készül a papír?",
    valaszok: ["Fém", "Fa", "Műanyag", "Üveg"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az évszak, amikor általában havazik Magyarországon?",
    valaszok: ["Ősz", "Tél", "Tavasz", "Nyár"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a magyar nemzeti ital?",
    valaszok: ["Bor", "Pálinka", "Sör", "Kávé"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat él a vízben és van pikkelye?",
    valaszok: ["Kutya", "Hal", "Macska", "Madár"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik a legismertebb magyar vár?",
    valaszok: ["Visegrád", "Eger", "Budai Vár", "Sümeg"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen színű a magyar zászló?",
    valaszok: ["Piros, fehér, zöld", "Kék, fehér, piros", "Fekete, sárga, piros", "Zöld, sárga, fehér"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a magyar népmesék legismertebb figurája?",
    valaszok: ["Ludas Matyi", "Piroska", "Hamupipőke", "Jancsi"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik bolygó kering a Naphoz legközelebb?",
    valaszok: ["Mars", "Föld", "Merkúr", "Vénusz"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak az anyagnak, amit könyvekben olvasunk?",
    valaszok: ["Papír", "Fa", "Fém", "Üveg"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen testrészünkkel ízlelünk?",
    valaszok: ["Szem", "Fül", "Nyelv", "Kéz"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a legismertebb magyar népdalnak, amit az iskolában is énekelnek?",
    valaszok: ["Tavaszi szél", "Boci, boci tarka", "Hej, Dunáról fúj a szél", "Cifra palota"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak az állatnak, amelyik csiripel?",
    valaszok: ["Kutya", "Macska", "Madár", "Hal"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a magyar fizikai mértékegység, amit a súly mérésére használunk?",
    valaszok: ["Kilogramm", "Liter", "Méterr", "Másodperc"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak az évszaknak, amikor a természet megújul?",
    valaszok: ["Ősz", "Tél", "Tavasz", "Nyár"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a legnagyobb szervünk?",
    valaszok: ["Bőr", "Szív", "Tüdő", "Máj"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a színkeverés alapvető színei az RGB színmodellben?",
    valaszok: ["Piros, zöld, kék", "Fekete, fehér, szürke", "Sárga, kék, piros", "Fehér, fekete, piros"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik a legnagyobb kontinens?",
    valaszok: ["Afrika", "Ázsia", "Európa", "Dél-Amerika"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen évszakban szoktak karácsonyt ünnepelni?",
    valaszok: ["Tél", "Ősz", "Tavasz", "Nyár"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány lába van egy póknak?",
    valaszok: ["6", "8", "4", "10"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat mondja, hogy 'miau'?",
    valaszok: ["Kutya", "Macska", "Ló", "Tehén"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik szín nem szerepel a magyar zászlóban?",
    valaszok: ["Piros", "Fehér", "Zöld", "Kék"],
    helyesIndex: 3,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az a háromszög?",
    valaszok: ["Három oldalú síkidom", "Négy oldalú síkidom", "Kör", "Ötszög"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a fővárosa Németországnak?",
    valaszok: ["Bécs", "Berlin", "Párizs", "Róma"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik évszakban van a legtöbb napsütés?",
    valaszok: ["Tavasz", "Nyár", "Ősz", "Tél"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az emberi test legfontosabb energiaforrása?",
    valaszok: ["Fehérje", "Zsír", "Szénhidrát", "Vitamin"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve a legismertebb magyar focicsapatnak?",
    valaszok: ["Ferencváros", "Újpest", "Debrecen", "Honvéd"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Milyen irányba süt a nap reggel?",
    valaszok: ["Észak", "Dél", "Kelet", "Nyugat"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Hány óra van egy napban?",
    valaszok: ["24", "12", "18", "20"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi az a növény, amelyik tavasszal virágzik és sárga színű?",
    valaszok: ["Tulipán", "Nárcisz", "Rózsa", "Orchidea"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik állat ismert a hosszú nyakáról?",
    valaszok: ["Elefánt", "Zsiráf", "Orrszarvú", "Medve"],
    helyesIndex: 1,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Melyik bolygó a Föld testvére, méretben és távolságban a Naptól?",
    valaszok: ["Mars", "Merkúr", "Vénusz", "Jupiter"],
    helyesIndex: 2,
    kep: "iskola.jpg"
  },
  {
    kerdes: "Mi a neve annak a magyar népdalnak, amelyik így kezdődik: 'Tavaszi szél vizet áraszt'?",
    valaszok: ["Tavaszi szél", "Boci, boci tarka", "Hej, Dunáról fúj a szél", "Cifra palota"],
    helyesIndex: 0,
    kep: "iskola.jpg"
  },
   {
    kerdes: "Melyik videojátékban szerepel Mario karaktere?",
    valaszok: ["Sonic", "Zelda", "Super Mario", "Pac-Man"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik cég fejlesztette a Minecraft nevű játékot?",
    valaszok: ["Mojang", "Epic Games", "Ubisoft", "Valve"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a fő cél a Tetris játékban?",
    valaszok: ["Autóverseny", "Kártyák rendezése", "Kockák elhelyezése", "Lövöldözés"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főhőse egy elektromos egér?",
    valaszok: ["Sonic", "Crash Bandicoot", "Pikachu", "Donkey Kong"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a neve a League of Legends játék fejlesztőjének?",
    valaszok: ["Riot Games", "Valve", "Activision", "Rockstar"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a 'Creeper' nevű ellenség?",
    valaszok: ["Terraria", "Minecraft", "Roblox", "Fortnite"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik videojáték-sorozatban található meg a Hyrule Királyság?",
    valaszok: ["Final Fantasy", "The Legend of Zelda", "Dark Souls", "Assassin’s Creed"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a cél a Pac-Man játékban?",
    valaszok: ["Szörnyeket legyőzni", "Lövöldözni", "Pöttyöket megenni", "Kockákat pakolni"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatunk zombik ellen egy nyitott világban?",
    valaszok: ["Minecraft", "Stardew Valley", "The Sims", "Portal"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Ki a főszereplő a God of War játékokban?",
    valaszok: ["Kratos", "Zeusz", "Herkules", "Ares"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
   {
    kerdes: "Melyik játékban szerepel a karakter Mario?",
    valaszok: ["Zelda", "Minecraft", "Super Mario", "Fortnite"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatunk Creeper ellen?",
    valaszok: ["Call of Duty", "Minecraft", "Valorant", "PUBG"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főhőse Geralt of Rivia?",
    valaszok: ["Dark Souls", "The Witcher", "Skyrim", "Diablo"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban gyűjthetsz pokémonokat?",
    valaszok: ["Digimon", "Yu-Gi-Oh!", "Pokémon", "Tamagotchi"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a fő cél a Tetris játékban?",
    valaszok: ["Szörnyek legyőzése", "Sorok eltüntetése", "Kockák gyűjtése", "Időmérés"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található Hyrule királysága?",
    valaszok: ["Zelda", "Elden Ring", "Final Fantasy", "Dragon Age"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játéksorozatban szerepel Master Chief?",
    valaszok: ["Halo", "DOOM", "Call of Duty", "Half-Life"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a cél a Pac-Man játékban?",
    valaszok: ["Szellemek elkapása", "Gyümölcsök felszedése", "Pontok gyűjtése és menekülés", "Kijutás a labirintusból"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel egy térkép nevű Erangel?",
    valaszok: ["Warzone", "PUBG", "Free Fire", "Apex Legends"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a karakter: Lara Croft?",
    valaszok: ["Uncharted", "Tomb Raider", "Assassin’s Creed", "Far Cry"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a főszereplő neve a GTA V-ben?",
    valaszok: ["Carl", "Tommy", "Franklin", "Ezio"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék híres a 'Victory Royale' kifejezésről?",
    valaszok: ["Fortnite", "League of Legends", "Valorant", "CS:GO"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban irányíthatsz egy farmot?",
    valaszok: ["Harvest Moon", "FIFA", "The Sims", "DOOM"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik karakter nem szerepel a Super Smash Bros játékban?",
    valaszok: ["Link", "Mario", "Pikachu", "Kratos"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék híres a portálfegyverről?",
    valaszok: ["Half-Life", "Portal", "BioShock", "Prey"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a fő cél a Sims játékban?",
    valaszok: ["Karakterek építése és irányítása", "Autók versenyeztetése", "Űrhajó irányítása", "Fegyverek fejlesztése"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatsz zombik ellen?",
    valaszok: ["The Sims", "Resident Evil", "Tetris", "Gran Turismo"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék fejlesztője a Mojang?",
    valaszok: ["Terraria", "Minecraft", "Roblox", "Among Us"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik karakter szerepel a League of Legends-ben?",
    valaszok: ["Tracer", "Jinx", "Master Chief", "Geralt"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a cél az Among Us játékban?",
    valaszok: ["Föld meghódítása", "Űrhajó vezetése", "Imposztor megtalálása", "Pénz gyűjtése"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van 'Battle Pass' rendszer?",
    valaszok: ["Valorant", "Minecraft", "Tetris", "Skyrim"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék híres a 'Nuke' nevű pályáról?",
    valaszok: ["CS:GO", "Overwatch", "League of Legends", "Dota 2"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik videojátékban szerepel Kratos?",
    valaszok: ["Halo", "God of War", "Uncharted", "Far Cry"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet házakat építeni kockákból?",
    valaszok: ["Minecraft", "Fortnite", "Roblox", "The Sims"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a fő cél a Call of Duty játékokban?",
    valaszok: ["Túlélés", "Kézművesség", "Lövöldözés és küldetések", "Versenyzés"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban versenyezhetsz autókkal?",
    valaszok: ["Need for Speed", "CS:GO", "The Witcher", "Minecraft"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban létezik a karakter: Ezio Auditore?",
    valaszok: ["Skyrim", "Assassin's Creed", "Overwatch", "FIFA"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet focizni?",
    valaszok: ["NBA 2K", "FIFA", "GTA", "Sims"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van legendás karakter: Link?",
    valaszok: ["Mario Kart", "Zelda", "Halo", "League of Legends"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a térkép: Verdansk?",
    valaszok: ["PUBG", "Warzone", "Apex Legends", "Overwatch"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főhőse Nathan Drake?",
    valaszok: ["The Last of Us", "Uncharted", "Far Cry", "God of War"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban használhatsz ender pearl-t?",
    valaszok: ["Roblox", "Minecraft", "Among Us", "Terraria"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a karakter: Aloy?",
    valaszok: ["God of War", "Horizon Zero Dawn", "Tomb Raider", "Destiny"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van a 'Dust 2' nevű pálya?",
    valaszok: ["Valorant", "Call of Duty", "CS:GO", "Overwatch"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban irányíthatsz egy bányászt karaktert?",
    valaszok: ["Terraria", "Stardew Valley", "Deep Rock Galactic", "The Forest"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a karakter: Sonic?",
    valaszok: ["Mario", "Rayman", "Crash Bandicoot", "Sonic the Hedgehog"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a Vault Boy kabalafigura?",
    valaszok: ["Metro", "Fallout", "Half-Life", "Borderlands"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel egy kockás világ, amit felfedezhetsz?",
    valaszok: ["Minecraft", "Roblox", "Terraria", "Lego Worlds"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet Pokémonokat harcoltatni egymás ellen?",
    valaszok: ["Yu-Gi-Oh!", "Pokémon", "Digimon", "Animal Crossing"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel Tracer karakter?",
    valaszok: ["Valorant", "Overwatch", "Paladins", "Apex Legends"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a karakter: Arthur Morgan?",
    valaszok: ["Red Dead Redemption 2", "GTA V", "Far Cry 5", "The Witcher 3"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatsz sárkányokkal egy fantasy világban?",
    valaszok: ["Fallout", "Skyrim", "Valorant", "PUBG"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban használhatsz glidert ugrás után?",
    valaszok: ["CS:GO", "Minecraft", "Fortnite", "Valorant"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van kalózos témájú világ?",
    valaszok: ["Sea of Thieves", "Skyrim", "Far Cry 4", "Cyberpunk 2077"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepelnek inkling nevű karakterek?",
    valaszok: ["Splatoon", "Mario Kart", "Sonic", "Mega Man"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a Vault rendszer?",
    valaszok: ["Apex Legends", "Borderlands", "Fallout", "Gears of War"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet tárgyakat kraftolni túléléshez?",
    valaszok: ["The Forest", "FIFA", "Among Us", "Need for Speed"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található Nook nevű karakter?",
    valaszok: ["Pokémon", "Minecraft", "Animal Crossing", "Zelda"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék szól egy posztapokaliptikus fertőzésről?",
    valaszok: ["The Last of Us", "League of Legends", "Cyberpunk", "Minecraft"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban irányíthatod Sackboy karaktert?",
    valaszok: ["Ratchet & Clank", "LittleBigPlanet", "God of War", "Knack"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főleg szörnyek vadászatáról szól?",
    valaszok: ["Horizon", "Monster Hunter", "Bloodborne", "DOOM"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet zenét játszani műanyag gitárral?",
    valaszok: ["Just Dance", "Guitar Hero", "Rock Band", "Beat Saber"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a karakter: Ellie?",
    valaszok: ["The Last of Us", "Life is Strange", "Detroit", "Beyond: Two Souls"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban kell parkourozni és zombi támadásokat túlélni?",
    valaszok: ["Dead Island", "Left 4 Dead", "Dying Light", "Back 4 Blood"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban használhatsz különleges képességeket lövöldözés közben?",
    valaszok: ["Valorant", "Minecraft", "Among Us", "Fall Guys"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet horgászni és termeszteni?",
    valaszok: ["FIFA", "Hades", "Stardew Valley", "Overcooked"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet különböző kasztok közül választani, mint pl. varázsló vagy harcos?",
    valaszok: ["World of Warcraft", "The Sims", "Need for Speed", "FIFA"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet egy várost irányítani és építeni?",
    valaszok: ["Cities: Skylines", "Tetris", "Rocket League", "Dark Souls"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
   {
    kerdes: "Melyik játékban versenyezhetsz autókkal egy nyílt világban?",
    valaszok: ["Need for Speed", "Gran Turismo", "Forza Horizon", "Trackmania"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van a 'Battle Royale' játékmód?",
    valaszok: ["FIFA", "Overwatch", "Fortnite", "Assassin’s Creed"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban játszhatsz egy szamuráj harcossal?",
    valaszok: ["Ghost of Tsushima", "Sekiro", "Nioh", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a 'Creeper' ellenség?",
    valaszok: ["Terraria", "Minecraft", "Rust", "Roblox"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatsz görög istenek ellen?",
    valaszok: ["The Witcher", "God of War", "Assassin’s Creed Odyssey", "Hades"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet saját karaktert létrehozni egy fantasy világban?",
    valaszok: ["GTA V", "The Sims", "Skyrim", "CS:GO"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban találkozhatsz Geralt of Rivia-val?",
    valaszok: ["The Witcher", "Skyrim", "Dark Souls", "Red Dead Redemption"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban irányíthatsz egy szamurájt Mongol invázió alatt?",
    valaszok: ["Sekiro", "Ghost of Tsushima", "Nioh 2", "Dynasty Warriors"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban választhatsz hőst, és képességekkel harcolhatsz online csapatban?",
    valaszok: ["Valorant", "Overwatch", "Apex Legends", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a 'Nuka-Cola' ital?",
    valaszok: ["Cyberpunk 2077", "Half-Life", "Fallout", "GTA V"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban fedezhetsz fel egy víz alatti várost?",
    valaszok: ["Subnautica", "BioShock", "Aquanox", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel Bowser mint főellenség?",
    valaszok: ["Zelda", "Donkey Kong", "Mario", "Crash Bandicoot"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban kell elbújni a gyilkos elől és javítani generátorokat?",
    valaszok: ["Phasmophobia", "Dead by Daylight", "The Forest", "Outlast"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék sorozatban szerepel Kratos?",
    valaszok: ["Halo", "God of War", "Doom", "Assassin's Creed"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban versenyezhetsz rakéta-hajtású autókkal fociban?",
    valaszok: ["WipeOut", "Trackmania", "Rocket League", "Split/Second"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban kell ügyességi pályákon átrohanni több játékossal?",
    valaszok: ["Among Us", "Fall Guys", "Human Fall Flat", "Overcooked"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szórakoztathatsz állatokat egy kávézóban?",
    valaszok: ["Stardew Valley", "Neko Atsume", "Animal Crossing", "Cafe Simulator"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban építhetsz parkokat és hullámvasutakat?",
    valaszok: ["Zoo Tycoon", "RollerCoaster Tycoon", "Planet Coaster", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék sorozatban van Master Chief?",
    valaszok: ["Gears of War", "Call of Duty", "Halo", "Mass Effect"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban kell egy űrhajón túlélni és leleplezni a csalókat?",
    valaszok: ["Among Us", "Starbound", "Dead Space", "Outer Wilds"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel Claptrap nevű robot?",
    valaszok: ["Destiny", "Borderlands", "Mass Effect", "Titanfall"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet alkimista italokat készíteni?",
    valaszok: ["Potion Craft", "Skyrim", "Witcher 3", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van főszerepben egy francia forradalmár?",
    valaszok: ["Assassin's Creed Unity", "Red Dead Redemption", "Kingdom Come", "Valiant Hearts"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel egy rózsaszín szörny: Kirby?",
    valaszok: ["Donkey Kong", "Kirby", "Yoshi's Island", "Zelda"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban kell hackelni rendszereket?",
    valaszok: ["Watch Dogs", "Cyberpunk 2077", "Deus Ex", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban lehet bázist építeni a túléléshez egy idegen bolygón?",
    valaszok: ["Astroneer", "Subnautica", "No Man’s Sky", "Mindhárom"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban élnek gombalények és teknősök?",
    valaszok: ["Zelda", "Sonic", "Mario", "Pikmin"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel egy zombis város neve: Raccoon City?",
    valaszok: ["Resident Evil", "Dying Light", "Left 4 Dead", "The Evil Within"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a karakter: Ezio Auditore?",
    valaszok: ["God of War", "The Witcher", "Assassin's Creed", "Elden Ring"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
    {
    kerdes: "Melyik videojátékban szerepel a karakter: Mario?",
    valaszok: ["Sonic", "Zelda", "Mario Bros", "Halo"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Milyen típusú játék a Minecraft?",
    valaszok: ["Verseny", "Túlélő-sandbox", "Stratégiai", "Kártyajáték"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék sorozat főhőse Master Chief?",
    valaszok: ["Call of Duty", "Halo", "Doom", "Overwatch"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatunk Creeper ellen?",
    valaszok: ["Terraria", "Minecraft", "Roblox", "Fortnite"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik stúdió készítette a The Witcher játékokat?",
    valaszok: ["Bethesda", "CD Projekt Red", "Ubisoft", "EA"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főhőse Kratos?",
    valaszok: ["God of War", "Dark Souls", "Assassin's Creed", "Tomb Raider"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban van a 'Nuke' nevű pálya?",
    valaszok: ["Call of Duty", "PUBG", "CS:GO", "Valorant"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a Triforce?",
    valaszok: ["Final Fantasy", "Zelda", "Skyrim", "God of War"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik karakter NEM szerepel a Fortnite-ban?",
    valaszok: ["Lara Croft", "Batman", "Peach hercegnő", "Spider-Man"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik évben jelent meg a GTA V?",
    valaszok: ["2011", "2013", "2015", "2017"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
 {
    kerdes: "Melyik videojátékban szerepel Mario, a vízvezeték-szerelő?",
    valaszok: ["Zelda", "Sonic", "Mario", "Donkey Kong"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik cég készítette a PlayStation konzolt?",
    valaszok: ["Microsoft", "Sony", "Nintendo", "Sega"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban harcolhatunk creeper-ek ellen?",
    valaszok: ["Terraria", "Roblox", "Minecraft", "Fortnite"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a fő cél a Tetris játékban?",
    valaszok: ["Építkezés", "Lövöldözés", "Sorok eltüntetése", "Színek párosítása"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főszereplője egy kék sündisznó?",
    valaszok: ["Mario", "Crash", "Kirby", "Sonic"],
    helyesIndex: 3,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban találkozhatunk a Pokémonszörnyekkel?",
    valaszok: ["Zelda", "Digimon", "Pokemon", "Yu-Gi-Oh!"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Hány játékos lehet egyszerre egy Among Us meccsben?",
    valaszok: ["4", "10", "8", "6"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel Kratos?",
    valaszok: ["Halo", "God of War", "Doom", "Elden Ring"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik videojátékban kell túlélni egy zombiapokalipszist?",
    valaszok: ["Forza", "Resident Evil", "Stardew Valley", "Mario Kart"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a Fortnite játékmódja?",
    valaszok: ["Battle Royale", "RPG", "Kártyajáték", "Puzzle"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik stúdió készítette a Grand Theft Auto sorozatot?",
    valaszok: ["Rockstar Games", "Ubisoft", "EA", "Activision"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Milyen műfaj a League of Legends?",
    valaszok: ["FPS", "MOBA", "Platform", "Kaland"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék főszereplője Link?",
    valaszok: ["Mario", "Zelda", "Final Fantasy", "Metroid"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a neve a híres kockaépítő játéknak?",
    valaszok: ["Roblox", "Minecraft", "Lego Worlds", "Sims"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik sorozatban szerepel Master Chief?",
    valaszok: ["Call of Duty", "Halo", "Gears of War", "Overwatch"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Milyen típusú játék a FIFA?",
    valaszok: ["Verseny", "Fociszimulátor", "Puzzle", "RPG"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban szerepel a Triforce?",
    valaszok: ["Zelda", "Final Fantasy", "Skyrim", "Dark Souls"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játéksorozatban gyűjthetsz csillagokat?",
    valaszok: ["Sonic", "Minecraft", "Super Mario", "Halo"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban építhetsz és harcolhatsz egy szigeten?",
    valaszok: ["Call of Duty", "Fortnite", "Overwatch", "CS:GO"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a fő cél a The Sims játékban?",
    valaszok: ["Felfedezés", "Harcolás", "Életszimuláció", "Kincskeresés"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik karakter híres a Street Fighter sorozatból?",
    valaszok: ["Ryu", "Mario", "Kirby", "Link"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban használsz Pokélabdát?",
    valaszok: ["Digimon", "Pokemon", "Zelda", "Yu-Gi-Oh!"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Milyen játékműfaj a Call of Duty?",
    valaszok: ["RPG", "Stratégia", "FPS", "MOBA"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található a Hyrule királyság?",
    valaszok: ["Skyrim", "Zelda", "Final Fantasy", "Dark Souls"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Ki a főgonosz a Bowser nevű karakterrel szemben?",
    valaszok: ["Mario", "Zelda", "Luigi", "Donkey Kong"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban gyűjthetünk bányászati nyersanyagokat?",
    valaszok: ["Sims", "Minecraft", "Roblox", "Valorant"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Mi a cél a Pac-Man játékban?",
    valaszok: ["Zombik lövöldözése", "Szellemek gyűjtése", "Pontok gyűjtése és menekülés", "Főzés"],
    helyesIndex: 2,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játék szól egy poszt-apokaliptikus világban való túlélésről?",
    valaszok: ["The Last of Us", "Super Mario", "Tetris", "FIFA"],
    helyesIndex: 0,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Milyen műfajba tartozik az Animal Crossing?",
    valaszok: ["Akció", "Életszimulátor", "Lövöldözős", "Logikai"],
    helyesIndex: 1,
    kep: "gamer.jpg"
  },
  {
    kerdes: "Melyik játékban található meg a 'Redstone' nevű anyag?",
    valaszok: ["Zelda", "Minecraft", "FIFA", "Halo"],
    helyesIndex: 1,
    kep: "gamer.jpg"
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