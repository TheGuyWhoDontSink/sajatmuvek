document.addEventListener("DOMContentLoaded", function () {
  // === SEGÉDFÜGGVÉNYEK ===
  function getRealValue(elem) {
    return parseInt(elem.innerText) || 0;
  }

  function updateDisplay(elem, value) {
    elem.innerText = value;
    elem.setAttribute("data-value", value);
  }

  // === ELEM KONSTANSOK ===
  const jatekLeiras = document.getElementById("jatekLeiras");
  const startGomb = document.getElementById("startGomb");
  const jatekSzabaly = document.getElementById("jatekSzabaly");
  const penz = document.getElementById("penz");
  const eletresz1 = document.getElementById("eletresz1");
  const eletresz2 = document.getElementById("eletresz2");
  const eletresz3 = document.getElementById("eletresz3");
  const eletresz4 = document.getElementById("eletresz4");
  const eletresz5 = document.getElementById("eletresz5");
  const anyagkep = document.getElementById("anyagkep");
  const anyagkep1 = document.getElementById("anyagkep1");
  const eredetilegRejtettElemek = [...document.querySelectorAll('.hidden2')];
  const sebzes = document.getElementById("sebzes");
  const ertek = document.getElementById("ertek");
  const maradoelet = document.getElementById("maradoelet");
  const teljeselet = document.getElementById("teljeselet");
  const eszkoz = document.getElementById("eszkoz");
  const toborzas = document.getElementById("toborzas");
  const terulet = document.getElementById("terulet");
  const eletdoboz = document.getElementById("eletdoboz");
  const felsorr1 = document.getElementById("felsorr1");
  const vetel = document.getElementById("vetel");
  const arertek1 = document.getElementById("arertek1");
  const felsor = document.getElementById("felsor");
  const felsorr = document.getElementById("felsorr");
  const gombgame = document.getElementById("gombgame");
  const sebzes1 = document.getElementById("sebzes1");
  const vetel1 = document.getElementById("vetel1");
  const vetel2 = document.getElementById("vetel2");
  const egysor = document.getElementById("egysor");
const egysor1 = document.getElementById("egysor1");
const egysor2 = document.getElementById("egysor2");
const egysor3 = document.getElementById("egysor3");
 const jatekVege = document.getElementById("jatekVege");
  const vetel3 = document.getElementById("vetel3");
  const arertek2 = document.getElementById("arertek2");
  const arertek3 = document.getElementById("arertek3");
  const arertek4 = document.getElementById("arertek4");
  const munkasero = document.getElementById("munkasero");
   const faertek = document.getElementById("faertek");
   const cuttingTreeSound = new Audio('./audio/cuttingTree.mp3');
   const backGroundMusic = new Audio('./audio/backGroundGame.mp3');
backGroundMusic.loop = true;
backGroundMusic.volume = 0.5; // opcionális, halkabb háttérzene

  const alapSzín = "red";
  const feketeSzín = "black";
  const tel = 0;

  // === AUTOMATIKUS SEBZÉS MÁSODPERCENKÉNT ===
  setInterval(() => {
    let jelenlegiElet = getRealValue(maradoelet);
    let aktualisSebzes1 = getRealValue(sebzes1);

    jelenlegiElet -= aktualisSebzes1;
    if (jelenlegiElet < 0) jelenlegiElet = 0;

    updateDisplay(maradoelet, jelenlegiElet);
    frissitEletreszek();
  }, 1000);

  // === ÉLETRESZEK FRISSÍTÉSE ===
  function frissitEletreszek() {
    const maxElet = getRealValue(teljeselet);
    const jelenlegiElet = getRealValue(maradoelet);
    const szazalek = (jelenlegiElet / maxElet) * 100;

    [eletresz1, eletresz2, eletresz3, eletresz4, eletresz5].forEach(elem => {
      elem.style.backgroundColor = alapSzín;
    });

    if (szazalek <= 0) {
      [eletresz1, eletresz2, eletresz3, eletresz4, eletresz5].forEach(elem => {
        elem.style.backgroundColor = feketeSzín;
      });

      if (anyagkep1) {
        anyagkep1.classList.add("hiddened");

        const aktualisPenz = getRealValue(penz);
        const hozzaadottErtek = getRealValue(ertek);
        updateDisplay(penz, aktualisPenz + hozzaadottErtek);

        setTimeout(() => {
          anyagkep1.classList.remove("hiddened");
          const ujElet = getRealValue(teljeselet) - tel;
          updateDisplay(maradoelet, ujElet);
          frissitEletreszek();
        }, 100);
      }
    } else if (szazalek < 20) {
      [eletresz2, eletresz3, eletresz4, eletresz5].forEach(elem => elem.style.backgroundColor = feketeSzín);
    } else if (szazalek < 40) {
      [eletresz3, eletresz4, eletresz5].forEach(elem => elem.style.backgroundColor = feketeSzín);
    } else if (szazalek < 60) {
      [eletresz4, eletresz5].forEach(elem => elem.style.backgroundColor = feketeSzín);
    } else if (szazalek < 80) {
      eletresz5.style.backgroundColor = feketeSzín;
    }
  }
   if (vetel2) {
    vetel2.addEventListener("click", () => {
      // a kattintáskezelő kódja
    });
  }
  
vetel2.addEventListener("click", () => {
  let aktualisPenz = parseInt(penz.innerText);
  let ar = parseInt(arertek3.innerText);
  let jelenlegiErtek = parseInt(ertek.innerText);
  let faErtek = parseFloat(faertek.innerText); // ha tört lehet
  let jelenlegiTeljesElet = parseInt(teljeselet.innerText);
  let jelenlegiMaradoElet = parseInt(maradoelet.innerText);

  if (aktualisPenz >= ar) {
    // Pénz levonása
    penz.innerText = aktualisPenz - ar;

    // Érték növelése faértékkel
    ertek.innerText = jelenlegiErtek + Math.round(faErtek);

    // Ár duplázása
    arertek3.innerText = ar * 2;

    // Faérték növelése 1.5-szeresére (kerekítve)
    let ujFaErtek = Math.round(faErtek * 1.5 * 10) / 10;
    faertek.innerText = ujFaErtek;

    // Élet duplázása
    teljeselet.innerText = jelenlegiTeljesElet * 2;
    maradoelet.innerText = jelenlegiMaradoElet * 2;

    frissitEletreszek(); // életcsík frissítése
  }
});
  // === VÁSÁRLÁS SEBZÉS1 NÖVELÉSÉRE ===
  vetel1.addEventListener("click", () => {
    let aktualisPenz = getRealValue(penz);
    let ar = getRealValue(arertek2);
    let jelenlegiSebzes1 = getRealValue(sebzes1);
    let jelenlegiMunkasero = getRealValue(munkasero);

    if (aktualisPenz >= ar) {
      updateDisplay(penz, aktualisPenz - ar);
      updateDisplay(sebzes1, jelenlegiSebzes1 + jelenlegiMunkasero);
      updateDisplay(arertek2, ar * 2);
      updateDisplay(munkasero, jelenlegiMunkasero * 2);
    }
  });
vetel3.addEventListener("click", () => {
  let aktualisPenz = getRealValue(penz);
  let ar = getRealValue(arertek4);

  if (aktualisPenz >= ar) {
    updateDisplay(penz, aktualisPenz - ar);

    // Összes elem, amin EREDETILEG rajta volt a "hidden2"
   eredetilegRejtettElemek.forEach(elem => {
      elem.classList.add("hidden2");
    });

    // A jatekVege elemről levesszük a "hidden" osztályt
    jatekVege.classList.remove("hidden");
  }
});
  // === VÁSÁRLÁS SIMA SEBZÉSRE ===
  vetel.addEventListener("click", () => {
    let aktualisPenz = getRealValue(penz);
    let ar = getRealValue(arertek1);

    if (aktualisPenz >= ar) {
      updateDisplay(penz, aktualisPenz - ar);
      updateDisplay(sebzes, getRealValue(sebzes) + 1);
      updateDisplay(arertek1, Math.ceil(ar * 1.5));
    }
  });

  // === ESZKÖZ MENÜ BEZÁRÁS ===
 

  // === START GOMB ===
  startGomb.addEventListener("click", () => {
  // Zene indítása loopolva
  backGroundMusic.play();

  // Elrejtendő elemek
  jatekLeiras.classList.add("hiddened");
  startGomb.classList.add("hiddened");
  jatekSzabaly.classList.add("hiddened");

  // Minden "hidden2" osztályú elem megjelenítése
  document.querySelectorAll('.hidden2').forEach(elem => {
    elem.classList.remove('hidden2');
     egysor.classList.add("felsor2");
  egysor1.classList.add("felsor2");
  egysor2.classList.add("felsor2");
  egysor3.classList.add("felsor2");
  eletdoboz.classList.add("eletdoboz");
  });
});
  // === ANYAGKÉPRE KATTINTÁS (SEBZÉS) ===
  anyagkep.addEventListener("click", () => {
    let aktualisElet = getRealValue(maradoelet);
    aktualisElet -= getRealValue(sebzes);
    if (aktualisElet < 0) aktualisElet = 0;
    updateDisplay(maradoelet, aktualisElet);
     cuttingTreeSound.play();
    frissitEletreszek();
  });

  // === KEZDETI ÉRTÉKEK BEÁLLÍTÁSA ===
  updateDisplay(penz, getRealValue(penz));
  updateDisplay(sebzes, getRealValue(sebzes));
  updateDisplay(arertek1, getRealValue(arertek1));

  frissitEletreszek();
});