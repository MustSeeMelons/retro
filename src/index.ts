import { Gpio } from "pigpio";
const { exec } = require("child_process");

const BUTTON_PIN = 22;

const button = new Gpio(BUTTON_PIN, {
  mode: Gpio.INPUT,
  edge: Gpio.FALLING_EDGE,
  pullUpDown: Gpio.PUD_DOWN,
});

button.on("interrupt", () => {
  exec("sudo shutdown -h now");
});
