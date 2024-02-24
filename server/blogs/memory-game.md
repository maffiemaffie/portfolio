# Memory Game
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)

![the memory game box](assets/main.jpg)

For a class project, I built a memory game using an Arduino. Each turn, the game displays a pattern and the player repeats it back. Every turn, the pattern grows one step longer.

You can access the code [on my github](https://github.com/maffiemaffie/arduino-memory-game#readme).

## Circuit
The electronics are dead simple: four photoresistors in a square, each connected to an analog pin.

![tinkercad mockup of the breadboard circuit](assets/board-mockup.jpg)

![the real-life breadboard circuit](assets/breadboard-final.jpg)

## Functionality
I used a resistor ladder to map the row of buttons to a single analog signal. The code handles the button inputs and tells the LEDs when to flash and the piezo when to buzz.

![the game in action](assets/demo.gif)