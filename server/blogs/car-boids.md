# Car Boids
![Unity](https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white)
![C#](https://img.shields.io/badge/c%23-512BD4?style=for-the-badge&logo=csharp&logoColor=white)
![Aseprite](https://img.shields.io/badge/Aseprite-7D929E?style=for-the-badge&logo=aseprite&logoColor=white)

![still frame of the boids simulation](assets/main.jpg)

For a class project, I made a world of simple car boids (coids?). There are two different types of cars adhering to different rules. You can see it in action [here](https://maffiemaffie.github.io/car-boids/)!

## Car Varieties
There are two different types of cars with two states each: normal cars and student drivers.

### Normal (boring) Car \[SUV\]

Drives. Sucks. Isn't cool. No one likes it. Isn't even quirky.

#### State 1:  Stupid freeway car \[yellow\]

![yellow SUV](assets/yellow-car.jpg)

Car tries to drive on the freeway even though the ramp is closed. Car transitions to this state if it gets far from the ramp it wanted to go on or has driven too long without a goal.
   
#### State 2: Depression (realized the freeway was inaccessible) \[green\]

![green SUV](assets/green-car.jpg)

Car drives away from the freeway, enlightened with the knowledge that the freeway ramp is closed. Car transitions to this state if it gets close its freeway ramp target.

### STUDENT DRIVER STUPID DUMB STUDENT DRIVER UH OH STUDENT DRIVER \[sedan\]

DRIVES ERRATICALLY AND IS STUPID AND AVOIDS ALL FREEWAY RAMPS BECAUSE IT'S TOO SCARED AND DUMB.

#### State 1: PANIC (panic) \[purple\]

![purple sedan](assets/purple-car.jpg)

Car flees all other cars in a desparate attempt not to crash. Car transitions to this state when it gets too close to another car or a freeway ramp.
   
#### State 2: anxiety ._. \[blue\]

![blue sedan](assets/blue-car.jpg)

Car attemps to blend in and not get hit by another car. Car transitions to this state when it's panicked long enough to calm down or is far away from the rest of the cars.

## User Interaction
Click to place traffic cones. Cars avoid traffic cones.

![traffic cones](assets/cones.jpg)