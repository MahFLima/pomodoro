const controls = document.querySelectorAll(".controls");
const alarm = new Audio("../assets/sound/kichen-timer.mp3");
const time = document.querySelector(".time");
let isPlaying = false;
let minutes = 0;
let seconds = 0;
let teste = 10;
let timeId

function startTimer(m) {

  timerId = setInterval(updateTimer(m), 1000);

  function updateTimer(value) {
    console.log("Contador:", value);
    value--;
  
    // Verificando se o contador atingiu um determinado valor
    if (value < 0) {
      console.log("Contagem concluída!");
      clearInterval(intervalId);
    }
  }
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    var timeInicial = time.textContent;
    var timeResult = timeInicial.split(":");
    var intervalId
    minutes = parseFloat(timeResult[0]);
    seconds = parseFloat(timeResult[1]);

    if (control.id == "up") {
      minutes = minutes + 1;
      time.textContent = `${minutes.toString()}:${
        seconds <= 0 ? "00" : seconds.toString()
      }`;
    } else if (control.id == "down") {
      minutes = minutes - 1;
      time.textContent = `${minutes.toString()}:${
        seconds <= 0 ? "00" : seconds.toString()
      }`;
    } else if (control.id == "play") {
      isPlaying ? (isPlaying = false) : (isPlaying = true);
      const imgIcon = control.querySelector("img");
      if (isPlaying) {
        imgIcon.setAttribute("src", "assets/images/pause.svg");
        const intervalId = setInterval(() => {
          console.log("Contador:", minutes);
          minutes--;
        
          // Verificando se o contador atingiu um determinado valor
          if (minutes < 0) {
            console.log("Contagem concluída!");
            clearInterval(intervalId);
          }
        }, 1000);
      } else {
        imgIcon.setAttribute("src", "assets/images/play.svg");
      }
    }

    if (control.id == "stop") {
      time.textContent = "25:00";
      clearInterval(intervalId);
      // teste(minutes)
    }
  });
});
