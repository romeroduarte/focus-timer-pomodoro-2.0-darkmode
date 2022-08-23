import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
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
  minutesDisplay,
  secondsDisplay,
  buttonSun,
  buttonMoon,
  bodyWeight
} from "./elements.js";

const controls = Controls ({
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
})

const timer = Timer ({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sounds = Sounds()

Events({controls, timer, sounds})