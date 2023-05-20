const controls = document.querySelectorAll(".controls");
const alarm = new Audio("../assets/sound/kichen-timer.mp3");
const click = new Audio("../assets/sound/button-press.wav")
const time = document.querySelector(".time");
const imgIconPlayPause = document.querySelector(".play-pause");
let isPlaying = false;
let minutes = 0;
let seconds = 0;
let timeId

function verifyTimer(m,s){
  if(s<1 && m>9){
    time.textContent = `${m}:00`
  }else if(m < 10 && s < 1){
    time.textContent = `0${m}:00`
  } else if(s<10 && m>9){
    time.textContent = `${m}:0${s}`
  } else if(m<1 && s<10){
    time.textContent = `00:0${s}`
  } else if(m<10 && s>9){
    time.textContent = `0${m}:${s}`
  } else if(m<10 && s<10){
    time.textContent = `0${m}:0${s}`
  } else {
    time.textContent = `${m}:${s}`
  }  
}


controls.forEach((control) => {
  control.addEventListener("click", () => {
    var timeInicial = time.textContent;
    var timeResult = timeInicial.split(":");
    minutes = parseFloat(timeResult[0]);
    seconds = parseFloat(timeResult[1]);
    click.play(alarm)

    if (control.id == "up") {
      minutes = minutes + 1;
      time.textContent = `${minutes < 10 ? `0${minutes.toString()}` : minutes.toString()}:${
        seconds <= 0 ? "00" : seconds.toString()
    }`
    } else if (control.id == "down") {
      minutes = minutes - 1;
      time.textContent = `${minutes < 10 ? `0${minutes.toString()}` : minutes.toString()}:${
        seconds <= 0 ? "00" : seconds.toString()
    }`;  

    } else if (control.id == "play") {
      isPlaying ? (isPlaying = false) : (isPlaying = true);
      if (isPlaying) {
        imgIconPlayPause.setAttribute("src", "../assets/images/pause.svg");
        timeId = setInterval(() => {
          verifyTimer(minutes, seconds)
          seconds--

          if(seconds < 1){
            minutes--
            seconds = 59
          }
          
          // Verificando se o contador atingiu um determinado valor
          if (minutes < 0) {
            console.log("Contagem concluída!");
            clearInterval(timeId);
            alarm.play()
            imgIconPlayPause.setAttribute("src", "../assets/images/play.svg");
            isPlaying = false
            time.textContent = "25:00"
          }
        }, 1000);
      } else {
        imgIconPlayPause.setAttribute("src", "../assets/images/play.svg");
        clearInterval(timeId);
      }
    }

    if (control.id == "stop") {
      time.textContent = "25:00";
      clearInterval(timeId);
      imgIconPlayPause.setAttribute("src", "../assets/images/play.svg");
      isPlaying = false
      // teste(minutes)
    }
  });
});
