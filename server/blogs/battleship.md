# Battleship
![NodeJS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![battleship game](assets/battleship-main-image.jpg)

This is a project I wrote for a class. It contains an API I wrote for playing multiplayer battleship and a web app that uses it. The API is written using the HTTP module in Node.js. The web app is written in JavaScript and utilizes the Fetch API.

## Play battleship! 🚤
The app is being hosted [here](https://glitch.com/~elia-battleship)!

## How to play 🛳️
In battleship, you and your opponent place five "battleships" on your grid. Players take turns guessing a cell to shoot at, and their opponent confirms if they hit a ship or missed. The game ends when a player's battleships are all sunk.

### Start a game 🚢
You can start a new game by clicking the "New Game" button or join an existing game by typing the id into the `game id` field and clicking "Join Game".

![new game and join game options](assets/new-game.jpg)

Place battleships on the board by selecting each battleship and placing its start and end.

![placing battleships](assets/place-ships.gif)

### Launch your attack ⛴️
Select a cell on your attack board and click "Launch Attack!" to fire at your opponent.

![selecting a target](assets/select-target.jpg)

You can see all of your and your opponent's attacks in the sidebar.

![lists of attacks](assets/attack-lists.jpg)

## How to use
The server API is included in [the github repo](https://github.com/maffiemaffie/battleship-api/) in the `src/` folder and the endpoint documentation is in the `docs/` folder. 

Any app that uses the API can be used to play battleship. If you'd prefer to write your own endpoints, the model code is at `src/battleship.ts`. See `src/jsonResponses.js` for an example of how to implement a controller.