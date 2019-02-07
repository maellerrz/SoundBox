// TODO :
// 1 - Select corresponding audio file
// 2 - Play audio file
// 3 - Rewind audio file
// 4 - Select key divs
// 5 - Transitionend listener
// 6 - Remove transition

const body = document.querySelector('body');
var message = document.querySelector('input');

window.addEventListener("keydown", function(key){

    var audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    if (!audio) return;
    audio.play();
    var keyLetter = key.key;

    if (key.keyCode != 13){
        audio.currentTime = 0;

        var keyPlayed = document.querySelector(`.key[data-key="${key.keyCode}"]`);
        keyPlayed.classList.add('playing');

        message.value += keyLetter.toUpperCase();

    } else if (key.keyCode == 13){
        var keyPlayed = document.querySelector(`.enter[data-key="${key.keyCode}"]`);
        keyPlayed.classList.add('playing');

        body.style.backgroundImage = 'url("il0000B5-fr-robot-humanoide-nao2.jpg")';
        body.style.backgroundPosition = 'top';

        message.value = "";
        message.style.display = "none";
    }
});
window.addEventListener("keyup", function(key){
    if (key.keyCode == 13){
        body.style.backgroundImage = 'url("WALL-E-wall-e-34551214-1920-1080.jpg")';
        body.style.backgroundPosition = 'center';

        message.style.display = "block";
    }
});

function removeClass(trans) {
    if(trans.propertyName !== "transform") return;
    trans.currentTarget.classList.remove('playing');
}

const allKeys = document.querySelectorAll(".key");
allKeys.forEach((key)=>{
    key.addEventListener("transitionend", removeClass)
});
const enter = document.querySelector(".enter");
enter.addEventListener("transitionend", removeClass);
