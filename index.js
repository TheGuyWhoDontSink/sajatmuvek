document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const kerdesSzoveg = document.getElementById("kerdesSzoveg");
  const valaszGombok = document.querySelectorAll(".valasz-gomb");
  const kerdesBlokk = document.getElementById("kerdes-blokk");

  const pipakElem = document.getElementById("pipak");
  const pontokElem = document.getElementById("pontokSzama");
  const eletekElem = document.getElementById("eletek");
  const ujrainditGomb = document.getElementById("ujrainditGomb");
const vegeSzoveg = document.getElementById("vegeSzoveg");
const eredmenyPont = document.getElementById("eredmenyPont");
const vegsoPontszam = document.getElementById("vegsoPontszam");

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
    kerdes: "Ki festette a Mona Lisát?",
    valaszok: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    helyesIndex: 0,
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
    kerdes: "Melyik kontinensen található a Sahara-sivatag?",
    valaszok: ["Afrika", "Ázsia", "Ausztrália", "Dél-Amerika"],
    helyesIndex: 0,
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
    kerdes: "Melyik országban található a Machu Picchu?",
    valaszok: ["Peru", "Chile", "Brazília", "Argentína"],
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
    kerdes: "Melyik a legnagyobb szerv az emberi testben?",
    valaszok: [ "Máj", "Szív", "Tüdő","Bőr"],
    helyesIndex: 3,
    kep: "quiz74.jpg"
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
    kerdes: "Melyik országban van a Taj Mahal?",
    valaszok: ["India", "Pakisztán", "Nepál", "Banglades"],
    helyesIndex: 0,
    kep: "quiz79.jpg"
  },
  {
    kerdes: "Mi a leggyakoribb elem a Föld kéregében?",
    valaszok: ["Oxigén", "Szilícium", "Vas", "Alumínium"],
    helyesIndex: 0,
    kep: "quiz80.jpg"
  },
  {
    kerdes: "Mi az emberi test legnagyobb csontja?",
    valaszok: [ "Gerinc", "Koponya", "Felkarcsont","Combcsont"],
    helyesIndex: 3,
    kep: "quiz81.jpg"
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
    kerdes: "Melyik a legnagyobb sivatag a világon?",
    valaszok: [ "Gobi","Sahara", "Kalahári", "Arab-sivatag"],
    helyesIndex: 1,
    kep: "quiz85.jpg"
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
    kerdes: "Melyik országban van a Szabadság-szobor?",
    valaszok: [ "Franciaország", "Németország", "Olaszország","USA"],
    helyesIndex: 3,
    kep: "quiz90.jpg"
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
}
];

  let aktualisKerdesIndex = 0;
  let kevertKerdesek = [];

  // Játék állapot változók
  let pipak = 0;
  let pontok = 0;
  let eletek = 3;

  startButton.addEventListener("click", startGame);

  function startGame() {
    // Szabályok és start gomb elrejtése
    document.getElementById("szabalyCim").classList.add("hidden4");
    document.getElementById("szabaly1").classList.add("hidden4");
    document.getElementById("szabalyLista").classList.add("hidden4");
    document.getElementById("szabaly2").classList.add("hidden4");
    startButton.classList.add("hidden4");
  

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
document.querySelector(".image1")?.classList.add("hidden3");
document.querySelector(".kerdesek")?.classList.add("hidden3");
document.querySelector(".kerdesszam")?.classList.add("hidden3");
document.querySelector(".elet")?.classList.add("hidden3");
document.querySelector(".helyes")?.classList.add("hidden3");
document.querySelector(".valasz-gomb")?.classList.add("hidden3");
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

          // Pipák növelése
          pipak++;
          pipakElem.textContent = pipak;

          // Pontok növelése
          pontok++;
          pontokElem.textContent = pontok;

          // Ha pipák elérik az 5-öt, pipák nullázása és élet +1
          if (pipak === 5) {
            pipak = 0;
            eletek++;
            pipakElem.textContent = pipak;
            eletekElem.textContent = eletek;
          }

        } else {
          gomb.classList.add("rossz");
          valaszGombok[aktKerdes.helyesIndex].classList.add("helyes");

          // Pipák nullázása
          pipak = 0;
          pipakElem.textContent = pipak;

          // Élet csökkentése
          eletek--;
          eletekElem.textContent = eletek;
        }

        setTimeout(() => {
          aktualisKerdesIndex++;
          mutatKerdes();
        }, 1500);
      };
    });
  }
});
ujrainditGomb.addEventListener("click", function () {
  location.reload();
});