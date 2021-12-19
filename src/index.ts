import { Gpio } from "pigpio";

const LED_PIN = 4;
const BUTTON_PIN = 22;

const led = new Gpio(LED_PIN, { mode: Gpio.OUTPUT });

const button = new Gpio(BUTTON_PIN, {
  mode: Gpio.INPUT,
  edge: Gpio.EITHER_EDGE,
  pullUpDown: Gpio.PUD_DOWN,
});

button.on("interrupt", (level) => {
  led.digitalWrite(level);
});
