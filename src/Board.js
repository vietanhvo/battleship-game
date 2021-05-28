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
          i,
          j,
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

  getSquareSelecting() {
    var selectingSqr;
    this.#board.map((row) => {
      return row.map((cell) => {
        if (cell.getSelect()) return selectingSqr = cell;
      });
    });
    return selectingSqr;
  }

  create() {
    for (var i = 0; i < this.#width; i++) {
      for (var j = 0; j < this.#height; j++) {
        this.#board[i][j].create();
      }
    }
  }

  renderSetup() {
    // Get the ship is selecting
    //var selectedShip = listOfShips.filter(ship => ship.getSelect())
    //var length;
    //if (selectedShip.length) {
    //length = selectedShip[0].getLength();
    //};

    // Get the square which is selected
    var selectingSqr = this.getSquareSelecting();

    for (var i = 0; i < this.#width; i++) {
      for (var j = 0; j < this.#height; j++) {
        // Render each square
        this.#board[i][j].renderSetup(selectingSqr);
      }
    }
  }
}
