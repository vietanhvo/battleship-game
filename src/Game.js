import Board from "./Board.js";
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
    // Create ships
    this.#initializeShips();
  }

  // Initialize total of ships
  #initializeShips() {
     
  }

  render() {
    this.#board.render();
  }
}
