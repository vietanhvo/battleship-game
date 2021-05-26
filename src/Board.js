import Square from "./Square.js";

import { config } from "../config.js";
import water from "url:../assets/water.png";

export default class Board {
  #width;
  #height;
  #board; // Store the 2D array of square
  #phaser;

  constructor(phaser) {
    this.#width = config.board.width;
    this.#height = config.board.height;
    this.#phaser = phaser;
    this.#initialize();
  }

  // Create the 2D array of Square
  #initialize() {
    // Load img of Square first
    this.#phaser.load.image(config.square.name, water);
    // Create 2D array
    this.#board = new Array(this.#width);

    for (let i = 0; i < this.#width; i++) {
      this.#board[i] = new Array(this.#height);
    }
    // Initialize Square
    var xIncrease = 0;
    for (var i = 0; i < this.#width; i++) {
      var yIncrease = 0;
      for (var j = 0; j < this.#height; j++) {
        this.#board[i][j] = new Square(
          40 + xIncrease,
          50 + yIncrease,
          this.#phaser
        );
        yIncrease += config.square.height;
      }
      xIncrease += config.square.width;
    }
  }

  getWidth() {
    return this.#width;
  }

  getHeight() {
    return this.#height;
  }

  getBoard() {
    return this.#board;
  }

  getSquare(x, y) {
    return this.#board[x][y];
  }

  render() {
    for (var i = 0; i < this.#width; i++) {
      for (var j = 0; j < this.#height; j++) {
        this.#board[i][j].render();
      }
    }
  }
}
