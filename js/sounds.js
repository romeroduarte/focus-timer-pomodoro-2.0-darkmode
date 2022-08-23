export default function () {
  const forestaudio = document.querySelector(".forestaudio");
  const rainaudio = document.querySelector(".rainaudio");
  const coffeeshopaudio = document.querySelector(".coffeeshopaudio");
  const fireaudio = document.querySelector(".fireaudio");
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestslider = document.querySelector("#forestslider")
  const rainslider = document.querySelector("#rainslider")
  const coffeeshopslider = document.querySelector("#coffeeshopslider")
  const fireslider = document.querySelector("#fireslider")


    function forestPlay () {
    forestaudio.play()
    rainaudio.pause()
    coffeeshopaudio.pause()
    fireaudio.pause()
    forestaudio.loop = true
  }
 
  function rainPlay () {
    forestaudio.pause()
    rainaudio.play()
    coffeeshopaudio.pause()
    fireaudio.pause()
    rainaudio.loop = true
  }

  function coffeeshopPlay () {
    forestaudio.pause()
    rainaudio.pause()
    coffeeshopaudio.play()
    fireaudio.pause()
    coffeeshopaudio.loop = true
  }

  function firePlay () {
    forestaudio.pause()
    rainaudio.pause()
    coffeeshopaudio.pause()
    fireaudio.play()
    fireaudio.loop = true
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  } 

  forestslider.addEventListener("input", () => {
    forestaudio.volume = forestslider.value / 100;
  })

  rainslider.addEventListener("input", () => {
    rainaudio.volume = rainslider.value / 100;
  })

  coffeeshopslider.addEventListener("input", () => {
    coffeeshopaudio.volume = coffeeshopslider.value / 100;
  })

  fireslider.addEventListener("input", () => {
    fireaudio.volume = fireslider.value / 100;
  })

  return {
    forestPlay,
    rainPlay,
    coffeeshopPlay,
    firePlay,
    pressButton,
    timeEnd,
  }
}



