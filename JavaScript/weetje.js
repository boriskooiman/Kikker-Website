var audio = new Audio('/Resources/Sounds/bless.mp3');
var talkAudio = new Audio('/Resources/Sounds/blessingSpeech.mp3');

NiewWeetje();

var lastWeetje = -1;

function NiewWeetje() {
  var x = document.getElementById("InhoudWeetje");
            
  const weetjes = ["A frog has four legs", "A frog can jump, a rock can't", "Frogs are green only some of the time", "I like Frogs", "RIBBIT", "The common frog can get 10 - 12 years old", "A group of frogs is called an army", "The Egypt god of fertility is a frog. (She's my girlfriend UwU)", "When you see a colorful frog, Please don't touch it (that wouldn't be pog)", "CROAK", "Nothing... Frogs don't talk", "When frogs want to drink They drink through their skin.", "A frog can lay 4000 eggs you can't lmao"];
  var index = Math.floor(Math.random() * weetjes.length)
  if(lastWeetje == index){
    NiewWeetje();
    return;
  }

  lastWeetje = index;
  
  setTxt = "";
  txt = weetjes[index];
  i = 0;
  clearTimeout();
  typeWriter();

  //PlaySound
  audio.currentTime = 0;
  audio.play();
}

var timeout = null;
var i = 0;
var txt = 'Press the button, To make me say something wise.'
var setTxt = '';
var speed = 40; /* The speed/duration of the effect in milliseconds */
var doFrogSound = false;
 
function typeWriter() {
 if (i < txt.length) {
   doFrogSound = true;

   setTxt += txt.charAt(i);
   document.getElementById("InhoudWeetje").innerHTML = '"' + setTxt + '"';

   if(txt.charAt(i) == ','.charAt(0) || txt.charAt(i) == '.'.charAt(0)){
    timeout = setTimeout(typeWriter, speed * 10);
   }else{
    timeout = setTimeout(typeWriter, speed);
   }

   i++;
 }else{
   doFrogSound = false;
 }
}
 
function MakeTalkSound(){
  if(doFrogSound == true){
    talkAudio.currentTime=0;
    talkAudio.play();
  }

  setTimeout(MakeTalkSound, 1000);
}


