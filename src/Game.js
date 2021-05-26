import Board from "./Board.js";
import Ship from "./Ship.js";

import { config } from "../config.js";

export default class Game {
  // Array of squares
  #board;
  // Array of ships
  #ships;
  #phaser;

  constructor(phaser) {
    this.#phaser = phaser;
    // Create the board
    this.#board = new Board(phaser);
    // Initialize ships
    this.#ships = [];
    this.#initializeShips();
  }

  // Initialize total of ships
  #initializeShips() {
    var increaseHeight = 50;
    config.shipsArr.map((ship) => {
      const [key, value] = Object.entries(ship)[0];
      this.#ships.push(
        new Ship(
          key,
          value[0],
          this.#phaser,
          config.phaser.width - config.ship.width / 2,
          increaseHeight
        )
      );
      increaseHeight += 40 + config.ship.height;
    });
  }

  run() {
    this.#setupShip();
  }

  // Only handle render now
  #setupShip() {}

  render() {
    this.#board.render();
    // render ship
    this.#ships.map((ship) => ship.render());
  }

  renderUpdate() {
    this.#ships.map((ship) => ship.renderUpdate(this.#ships));
  }
}
