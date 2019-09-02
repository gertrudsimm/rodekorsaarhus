

// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }

}

// sets active tabbar/ menu item
function showPro() {
      document.getElementById('projects').style.left = "0";
      document.getElementById('home').style.left = "-100vw";
      document.getElementById('projects').style.opacity = "1";
}

function showHomePro() {
      document.getElementById('projects').style.left = "100vw";
      document.getElementById('home').style.left = "0";
      setTimeout(function () {
        document.getElementById('projects').style.opacity = "0";
      }, 500);

	setTimeout(function () {
        document.getElementById('me-wrap').scrollTop = 0;
      }, 500);

}

//---------------------------------

function showCV() {
      document.getElementById('cv').style.left = "0";
      document.getElementById('home').style.left = "100vw";
      document.getElementById('cv').style.opacity = "1";
      document.getElementsByTagName('navback').style.opacity = "1";
}


function showHomeCV() {
      document.getElementById('cv').style.left = "-100vw";
      document.getElementById('home').style.left = "0";
      setTimeout(function () {
        document.getElementById('cv').style.opacity = "0";
      }, 500);


	setTimeout(function () {
        let tabs = document.querySelectorAll(".slide");
  for (let tab of tabs) {
    tab.className="slide";
  }
      }, 500);

	setTimeout(function () {
        document.getElementById('content-nav').style.display = "none";
      }, 500);

}

//---------------------------------

function showAbout() {
      document.getElementById('about').style.top = "0";
      document.getElementById('home').style.top = "-100vh";
      document.getElementById('about').style.opacity = "1";
}

function showHomeAbout() {
      document.getElementById('about').style.top = "100vh";
      document.getElementById('home').style.top = "0";
      setTimeout(function () {
        document.getElementById('about').style.opacity = "0";
      }, 500);
	setTimeout(function () {
        document.getElementById('cv-wrap').scrollTop = 0;
      }, 500);
}

setDefaultPage();





//FACTS

let facts = [
  'Røde Kors Aarhus har 33 aktiviteter i Aarhus lokalområde',
  'Røde Kors har allerede over 680 frivilluge i Aarhus alene',
  'Vores aktiviteter i Røde Kors Aarhus spænder bredt fra ensomhed til genbrug',
  'Senest har vi indgået et samarbejde med Aarhus Kommune om åbningen af omsorgscenteret Pitstop',
  'I 2017 samarbejdede vi med andre frivillige organisationer om at åbne Aarhus Vinterherberg',
  'Vores nørklere sender hvert år flere tons strik til udlandet',
  'Røde Kors i Aarhus er centralt beliggende på Nørre Allé 32',
  'Vores frivillighus samlingssted for aktiviteter for frivillige samt huser vores førstehjælpskurser',
  'Vi er en frivillig organisation, som arbejder målrettet på at gøre en indsats i det aarhusianske lokalsamfund',
  'Den daglige drift og udviklingen af Røde Kors Aarhus varetages af en bestyrelse',
  'Bestyrelsen i Røde KorsAarhus består af 11 bestyrelsesmedlemmer. Bestyrelsen er på valg hvert andet år',
  'Det daglige arbejde i Røde Kors Aarhus varetages af aktivitetsledere og sekretariatet',
  'Røde Kors Aarhus primære indtægter kommer fra vores fem genbrugsbutikker: Egå, Holme, Aabyhøj, Oddervej og Krydsfelt på Nørre Allé',
  'Røde Kors Aarhus udbyder førstehjælpskurser hver weekend og vores samaritter kan bookes til diverse arrangementer',
  'Sidste år tjente vores genbrugsbutikker 1.515.634 kr.',
  '34% af vores årlige indtægt bliver overført til Røde Kors Landsforeningen. I 2017 svarede det til 500.665 kr.',
  'Røde Kors Aarhus er en af Røde Kors mere end 200 lokalafdelinger i Danmark',
  'Røde Kors blev stiftet i 1863 og er som den eneste nødhjælpsorganisation skrevet ind i Geneve-konventionen',
  'I 1876 blev Foreningen af Syge og Såredes Pleje oprettet i Danmark - foreningen skiftede navn til Dansk Røde Kors i 1917',
  'Røde Kors er en demokratisk medlemsorganisation, hvis daglige drift varetages af en hovedbestyrelse'
];

//AKTIVITETER

let aktIV = [
  {
    "navn" : "Vinterherberg",
    "beskrivelse" : "Aarhus Vinterherberg hjælper aarhusianske hjemløse i årets koldeste måneder. Formålet er at dække behovet for nattesøvn, mad og fællesskab til hjemløse migranter, der ikke har været i stand til at finde en stabil boligsituation for vinteren.",
    "dag" : false,
    "uge" : true,
    "måned": true,
    "url" : "http://aarhus.drk.dk/aarhus-vinterherberg/"
  },
  {
    "navn" : "Vinterherberg",
    "beskrivelse" : "Aarhus Vinterherberg hjælper aarhusianske hjemløse i årets koldeste måneder. Formålet er at dække behovet for nattesøvn, mad og fællesskab til hjemløse migranter, der ikke har været i stand til at finde en stabil boligsituation for vinteren.",
    "dag" : false,
    "uge": true,
    "url" : "http://aarhus.drk.dk/aarhus-vinterherberg/"
  },
  {
    "navn" : "Pitstop",
    "beskrivelse" : "Hver uge udskrives misbrugere og hjemløse fra de aarhusianske hospitaler uden et sted at bo eller mulighed for at restituere i trygge omgivelser. PitStop er et akut omsorgscenter, som giver hjemløse voksne og udsatte patienter mulighed for at komme til hægterne i hjemlige og trygge rammer.",
    "dag" : false,
    "uge" : true,
    "måned": true,
    "url" : "http://aarhus.drk.dk/omsorgscenter-pitstop-2/"
  },
  {
    "navn" : "Pitstop",
    "beskrivelse" : "Hver uge udskrives misbrugere og hjemløse fra de aarhusianske hospitaler uden et sted at bo eller mulighed for at restituere i trygge omgivelser. PitStop er et akut omsorgscenter, som giver hjemløse voksne og udsatte patienter mulighed for at komme til hægterne i hjemlige og trygge rammer.",
    "dag" : false,
    "uge": true,
    "url" : "http://aarhus.drk.dk/omsorgscenter-pitstop-2/"
  },
  {
    "navn" : "Hjem til dig",
    "beskrivelse" : "Projektet er målrettet unge der bor derhjemme, men under kritiske forhold, og unge der på skift overnatter ved familie, venner eller bekendte. Derudover bliver der også taget hånd om de unge, der allerede er kommet til det punkt, hvor de står uden bolig eller et sted at sove.",
    "dag" : false,
    "uge" : true,
    "måned": false,
    "url" : "http://aarhus.drk.dk/hjem-til-dig-2/"
  },
  {
    "navn" : "Nørklerne",
    "beskrivelse" : "Nørklerne strikker, syr og hækler tøj og tæpper til nødlidende og katastroferamte områder i hele verden. I Danmark støtter nørklerne sårbare på asylcentrer samt strikker bamser til børn af indsatte.",
    "dag" : false,
    "uge" : false,
    "måned": true,
    "url" : "http://aarhus.drk.dk/noerklere/"
  },
  {
    "navn" : "Røde Kors Butikker",
    "beskrivelse" : "Røde Kors' genbrugsbutikker er en vigtig forudsætning for at vi i Røde Kors kan udføre vores sociale hjælpearbejde. Indtægten fra salget af tøj i butikkerne bliver først og fremmest brugt til vore sociale aktiviteter i Aarhus området, og dernæst til Røde Kors’ sociale arbejde i Danmark.",
    "dag" : false,
    "uge" : true,
    "måned": true,
    "url" : "http://aarhus.drk.dk/genbrugsbutikker/"
  },
  {
    "navn" : "Røde Kors Butikker",
    "beskrivelse" : "Røde Kors' genbrugsbutikker er en vigtig forudsætning for at vi i Røde Kors kan udføre vores sociale hjælpearbejde. Indtægten fra salget af tøj i butikkerne bliver først og fremmest brugt til vore sociale aktiviteter i Aarhus området, og dernæst til Røde Kors’ sociale arbejde i Danmark.",
    "dag" : false,
    "uge": true,
    "url" : "http://aarhus.drk.dk/genbrugsbutikker/"
  },
  {
    "navn" : "Røde Kors-indsamling",
    "beskrivelse" : "Hvert år samler danskerne ind til Røde Kors' hjælpearbejde. Det foregår altid den første søndag i oktober måned. Røde Kors-indsamlingen er Danmarks største humanitære husstandsindsamling og bliver organiseret af frivillige i alle 210 lokale Røde Kors-afdelinger landet over.",
    "dag" : true,
    "uge" : false,
    "måned": false,
    "url" : "http://aarhus.drk.dk/indsamling/"
  },
  {
    "navn" : "Mere Mad - Mere Mening",
    "beskrivelse" : "Projektet er udviklet for at komme flere samfundsproblemer til livs på samme tid. To fluer med ét smæk.Det bunder først og fremmest i ønsket om at hjælpe flygtninge og udsatte borgere med at få varieret og billig mad. Samtidigt er det et forsøg på at bekæmpe madspild.",
    "dag" : false,
    "uge" : false,
    "måned": true,
    "url" : "http://aarhus.drk.dk/aktiviteter/mere-mad-mere-mening/"
  },  {
      "navn" : "MFI",
      "beskrivelse" : "Mange børn og unge kommer til Danmark alene, for at søge asyl. Der er hverken forældre eller anden voksen til at tage vare på en. Børn og unge får tilknyttet en voksen ledsager igennem Midlertidig Forældremyndighedsindehaver (MFI). De voksne der bliver knyttet til flygtninge er frivillige, som hjælper den unge med rettigheder, netværk og omsorg.",
      "dag" : false,
      "uge" : true,
      "måned": false,
      "url" : "http://aarhus.drk.dk/mfi-2/"
    },
    {
        "navn" : "Værket",
        "beskrivelse" : "Værket er et netværk for ensomme voksne, hvor de kan mødes i trygge rammer og erfaringsudveksle, socialisere, og få snakket om de følelser, som fylder enormt meget i hverdagen. Omdrejningspunktet for Værket er at bringe mennesker sammen og styrke dem i at skabe et stærkt og varigt lokalt, socialt netværk, hvor de kan være sammen om gode fælles oplevelser.",
        "dag" : false,
        "uge" : false,
        "måned": true,
        "url" : "http://aarhus.drk.dk/aktiviteter/vaerket/"
      },
    {
      "navn" : "Q-net",
        "beskrivelse" : "33.000 kvinder i Danmark udsættes hvert år for partnervold, og hvert år søger ca. 2.000 kvinder ophold på et af landets 43 krisecentre. Q-net er Røde Kors tilbud om efterværn for kvinder, der har været udsat for vold, og som i tiden efter f.eks. et ophold på krisecenter, har brug for social eller praktisk støtte samt fællesskab med andre kvinder i samme situation.",
        "dag" : false,
        "uge" : false,
        "måned": true,
        "url" : "http://aarhus.drk.dk/aktiviteter/q-net/"
      },
    {
        "navn" : "Primus Motor",
        "beskrivelse" : "Primus Motor er en mentorordning for løsladte fanger, som skal sikre en god overgang fra fængsel til frihed. I Danmark bliver der hvert år løsladt mere end 8000 personer og målinger viser at hver tredje begår ny kriminalitet efter løsladelse. Dette skyldes ofte, at den løsladte har dårlig eller ingen tilknytning til arbejdsmarkedet, ringe økonomi, usikre boligforhold, sundhedsproblemer samt et begrænset socialt netværk.",
        "dag" : false,
        "uge" : true,
        "måned": false,
        "url" : "http://aarhus.drk.dk/primusmotor/"
      },
 {
        "navn" : "Familienetværket",
        "beskrivelse" : "Familienetværket er et tilbud til familier, der står i en svær livssituation. Nogle familier kan føle sig alene eller har ikke ressourcer nok til at give deres børn oplevelser. Familienetværket er med til at skabe fællesskab og oplevelser på tværs af familierne. Der er mulighed for samvær med andre familier, samt deltage i aktiviteter. Både familier og frivillige er sammen om planlægningen af aktiviteter, som kan være alt fra samtalemøder til udflugter.",
        "dag" : false,
        "uge" : false,
        "måned": true,
        "url" : "http://aarhus.drk.dk/familienetvaerket/"
      },
];

//VIS AKTIVITER EFTER TID

for (i = 0; i < aktIV.length; i++) {

  if(aktIV[i].måned){
  window.document.getElementById("me-content").innerHTML += "<div class='activ'><img src='img/" + aktIV[i].navn + ".png' alt='Røde Kors Aarhus aktivitet: " + aktIV[i].navn + "'><div class='tekstDiv'><h3>" + aktIV[i].navn + "</h3><p>" + aktIV[i].beskrivelse + "</p></div><div class='knapDiv'><a href='" + aktIV[i].url + "'><button type='button'>Læs mere</button></a></div></div>";
}

else

  if(aktIV[i].dag){
  window.document.getElementById("cv-content").innerHTML += "<div class='activ'><img src='img/" + aktIV[i].navn + ".png' alt='Røde Kors Aarhus aktivitet: " + aktIV[i].navn + "'><div class='tekstDiv'><h3>" + aktIV[i].navn + "</h3><p>" + aktIV[i].beskrivelse + "</p></div><div class='knapDiv'><a href='" + aktIV[i].url + "'><button type='button'>Læs mere</button></a></div></div>";
}

else

  if(aktIV[i].uge){
  window.document.getElementById("about-content").innerHTML += "<div class='activ'><img src='img/" + aktIV[i].navn + ".png' alt='Røde Kors Aarhus aktivitet: " + aktIV[i].navn + "'><div class='tekstDiv'><h3>" + aktIV[i].navn + "</h3><p>" + aktIV[i].beskrivelse + "</p></div><div class='knapDiv'><a href='" + aktIV[i].url + "'><button type='button'>Læs mere</button></a></div></div>";

}
}
