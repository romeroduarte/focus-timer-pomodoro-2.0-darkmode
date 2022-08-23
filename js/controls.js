export default function Controls ({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFire,
  buttonSun,
  buttonMoon,
  bodyWeight
}) {

function play () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonIncrease.classList.add('hide')
  buttonDecrease.classList.add('hide')
}

function pause () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function stop () {
  buttonIncrease.classList.remove('hide')
  buttonDecrease.classList.remove('hide')
}

function reset () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function forest () {
  buttonForest.classList.add('selected')
  buttonRain.classList.remove('selected')
  buttonCoffeeshop.classList.remove('selected')
  buttonFire.classList.remove('selected')
}

function rain () {
  buttonForest.classList.remove('selected')
  buttonRain.classList.add('selected')
  buttonCoffeeshop.classList.remove('selected')
  buttonFire.classList.remove('selected')
}

function coffeeshop () {
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  buttonCoffeeshop.classList.add('selected')
  buttonFire.classList.remove('selected')
}

function fire () {
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  buttonCoffeeshop.classList.remove('selected')
  buttonFire.classList.add('selected')
}

function sun () {
  buttonSun.classList.add('hide')
  buttonMoon.classList.remove('hide')
  bodyWeight.classList.remove('light')
  bodyWeight.classList.add('dark')
}

function moon () {
  buttonSun.classList.remove('hide')
  buttonMoon.classList.add('hide')
  bodyWeight.classList.add('light')
  bodyWeight.classList.remove('dark')
}

return {
  play,
  pause,
  stop,
  reset,
  forest,
  rain,
  coffeeshop,
  fire,
  sun,
  moon
}
}