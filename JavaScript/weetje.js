var audio = new Audio('/Resources/Sounds/bless.mp3');


NiewWeetje();


var lastWeetje = -1;

function NiewWeetje() {
  var x = document.getElementById("InhoudWeetje");
            
  const weetjes = ["A frog has four legs", "A frog can jump, a rock can't", "Frogs are green only some of the time", "I like Frogs", "RIBBIT", "The common frog can get 10 - 12 years old", "A group of frogs is called an army", "The Egypt god of fertility is a frog. <br> (She's my girlfriend UwU)", "When you see a colorful frog, <br> Please don't touch it (that wouldn't be pog)", "CROAK", "Nothing... Frogs don't talk", "When frogs want to drink, <br> They drink through their skin."];
  var index = Math.floor(Math.random() * weetjes.length)
  if(lastWeetje == index){
    NiewWeetje();
    return;
  }

  lastWeetje = index;
  
  x.innerHTML = '"' + weetjes[index] + '"';

  //PlaySound
  audio.currentTime = 0;
  audio.play();
}