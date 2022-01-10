import { Gpio } from "pigpio";
const { exec } = require("child_process");

const BUTTON_PIN = 22;

const button = new Gpio(BUTTON_PIN, {
  mode: Gpio.INPUT,
  edge: Gpio.RISING_EDGE,
  pullUpDown: Gpio.PUD_DOWN,
});

button.on("interrupt", () => {
  console.log("hello");
  //exec("sudo shutdown -h now");
});
