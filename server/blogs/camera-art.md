# "Camera" Art
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Processing](https://img.shields.io/badge/Processing-006699?style=for-the-badge&logo=processingfoundation&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)

![still frame from the visualizer](assets/main.jpg)

"Camera" Art is a generative art project I made for an Arduino class. It uses photoresistors to control a visualizer I wrote using Processing.

You can access the code [on my github](https://github.com/maffiemaffie/arduino-camera-art#readme)!

## Circuit
The electronics are dead simple: four photoresistors in a square, each connected to an analog pin.

![tinkercad mockup of the breadboard circuit](assets/breadboard-mockup.jpg)

![the real-life breadboard circuit](assets/final-breadboard.jpg)

## Functionality
I use the four photoresistors to detect motion. I can then move light to "drag around" the dots in the visualizer. 

![Arduino connected to my laptop](assets/connected-to-laptop.jpg)