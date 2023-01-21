const btnMode = document.querySelector(".btn-mode")
const iconMode = document.querySelector(".icon-mode")
let theme = false;

function LightDarkTheme(){
  if(theme){
    iconMode.setAttribute("src", "assets/images/moon.svg")
    document.querySelector("body").style.background = '#29292E'
  } else {
    iconMode.setAttribute("src", "assets/images/sun.svg")
    document.querySelector("body").style.background = '#e5e5e5'
  }
}

btnMode.addEventListener('click',() => {
  theme == true ? theme = false : theme = true
  LightDarkTheme()
})
