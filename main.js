const btnMode = document.querySelector(".btn-mode");
const iconMode = document.querySelector(".icon-mode");
const btnEffect = document.querySelectorAll('input[type="radio"]');
let theme = false;
var audio = new Audio();

function audioPlay(value){
  audio.src = `./assets/sound/${value}.wav`
  audio.play()
  audio.loop = true;
}

function verifyEffect(value){
  switch(value.id){
    case 'rain':
      audioPlay(value.id)
      break
    case 'forest':
      audioPlay(value.id)
      break
    case 'coffee':
      audioPlay(value.id)
      break
    case 'fire':
      audioPlay(value.id)
      break
  }
}

btnEffect.forEach((card) => {
  card.addEventListener('change', () => {
    if (card.checked == true) {
      verifyEffect(card)
    }
  })
});

function LightDarkTheme() {
  if (theme) {
    iconMode.setAttribute("src", "assets/images/moon.svg");
    document.querySelector("body").style.background = "#29292E";
  } else {
    iconMode.setAttribute("src", "assets/images/sun.svg");
    document.querySelector("body").style.background = "#e5e5e5";
  }
}

btnMode.addEventListener("click", () => {
  theme == true ? (theme = false) : (theme = true);
  LightDarkTheme();
});
