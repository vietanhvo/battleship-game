import Board from "./Board.js";
import Ship from "./Ship.js";
import DirectionSwt from "./controller_UI/DirectionSwt.js";

import { config } from "../config.js";

export default class Game {
  // Array of squares
  #board;
  // Array of ships
  #ships;
  #directionSwt;
  #phaser;

  constructor(phaser) {
    this.#phaser = phaser;
    // Create the board
    this.#board = new Board(phaser);
    // Initialize ships
    this.#ships = [];
    this.#initializeShips();
    // Preload UI
    this.#directionSwt = new DirectionSwt(phaser);
  }

  // Initialize total of ships
  #initializeShips() {
    var increaseHeight = 50;
    config.shipsArr.map((ship) => {
      const [key, value] = Object.entries(ship)[0];
      this.#ships.push(
        new Ship(
          key,
          value,
          this.#phaser,
          config.phaser.width - config.ship.width / 2,
          increaseHeight
        )
      );
      increaseHeight += 40 + config.ship.height;
    });
  }

  #setupShips(selectShip, selectSquare) {
    const length = selectShip.getLength();
    const xStart = selectSquare.getX();
    const yStart = selectSquare.getY();

    var arrSquareSetup = [];

    // TODO: VERTICAL

    // Setup HORIZONTAL
    // Check valid in board first
    if (xStart + length <= this.#board.getWidth()) {
      // Check the select square array valid
      for (var i = xStart; i < xStart + length; i++) {
        const square = this.#board.getBoard()[i][yStart];
        if (
          square.getShip() &&
          !selectShip.getPos().some((sqr) => sqr == square)
        ) {
          return;
        }

        arrSquareSetup.push(square);
      }
    }
    // Remove the selected square before
    this.#board.getSquareSelecting().setSelect(false);
    // Remove the position setted before
    selectShip.setPos(arrSquareSetup);
  }

  getShipSelecting() {
    var selectingShip;
    this.#ships.map((ship) => {
      if (ship.getSelect()) return (selectingShip = ship);
    });
    return selectingShip;
  }

  create() {
    this.#board.create();
    // render ship
    this.#ships.map((ship) => ship.create(this.#ships));
    this.#directionSwt.create();
  }

  update4Setup() {
    var selectingShip = this.getShipSelecting();
    var selectingSqr = this.#board.getSquareSelecting();
    // Handle when select square before select ship
    if (selectingSqr && !selectingShip) {
      selectingSqr.setSelect(false);
    }

    this.#board.update4Setup();
    this.#ships.map((ship) => ship.update4Setup());
    this.#directionSwt.update();

    // Handle all thing setup board
    if (selectingShip && selectingSqr) {
      this.#setupShips(selectingShip, selectingSqr);
    }
  }
}
