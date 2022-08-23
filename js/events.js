import {
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
  buttonMoon
} from "./elements.js"

export default function({controls, timer, sounds}) {

buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countdown()
  sounds.pressButton() 
 })
 
 buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
  sounds.pressButton() 
  })
 
 buttonStop.addEventListener("click", function (){
  controls.reset()
  timer.reset()
  sounds.pressButton() 
  controls.stop()
 })

 buttonIncrease.addEventListener("click", function () {
  timer.increase()
  sounds.pressButton() 
 })
 
 buttonDecrease.addEventListener("click", function (){
  timer.decrease()
  sounds.pressButton() 
 })

 buttonForest.addEventListener("click", function () {
  controls.forest()
  sounds.pressButton()
  sounds.forestPlay() 
 })
 
 buttonRain.addEventListener("click", function () {
  controls.rain()
  sounds.pressButton()
  sounds.rainPlay()  
 })
 
 buttonCoffeeshop.addEventListener("click", function () {
  controls.coffeeshop()
  sounds.pressButton() 
  sounds.coffeeshopPlay() 
 })
 
 buttonFire.addEventListener("click", function () {
  controls.fire()
  sounds.pressButton() 
  sounds.firePlay() 
 })

 buttonSun.addEventListener("click", function () {
  controls.sun()
  sounds.pressButton() 
 })

 buttonMoon.addEventListener("click", function () {
  controls.moon()
  sounds.pressButton() 
 })
}

