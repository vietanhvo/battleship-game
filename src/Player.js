import { config } from "../config.js";
import Ship from "./Ship.js";
import Board from "./Board.js";

export default class Player {
  #ships;
  #board;

  constructor() {
    this.#ships = [];
    this.#board = new Board();
    this.#initializeShips();
  }

  #initializeShips() {
    // Create ships
    config.shipsArr.map((ship) => {
      const [key, value] = Object.entries(ship)[0];
      this.#ships.push(new Ship(key, value));
    });
  }

  preload(phaser) {
    //Preload panel for the setup screen
    this.#board.preload(phaser);
    this.#ships.map((ship) => ship.preload(phaser));
  }

  getShips() {
    return this.#ships;
  }

  getBoard() {
    return this.#board;
  }

  setupShips(selectShip, selectSquare, direction) {
    const length = selectShip.getLength();
    const xStart = selectSquare.getX();
    const yStart = selectSquare.getY();

    // Remove the selected square before
    selectSquare.setSelect(false);
    var arrSquareSetup = [];

    if (direction) {
      // TODO: VERTICAL
      if (yStart + length <= config.board.height) {
        for (var i = yStart; i < yStart + length; i++) {
          const square = this.#board.getBoard()[xStart][i];
          if (
            square.getShip() &&
            !selectShip.getPos().some((sqr) => sqr == square)
          ) {
            return;
          }

          arrSquareSetup.push(square);
        }
      }
    } else {
      // TODO: HORIZONTAL
      // Check valid in board first
      if (xStart + length <= config.board.width) {
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
    }

    // Remove the position setted before
    selectShip.setPos(arrSquareSetup);
  }

  // Get the ship is selecting in setup screen
  getPanelSelecting() {
    var selectingShip;
    this.#ships.map((ship) => {
      if (ship.getPanel().getSelect()) return (selectingShip = ship);
    });
    return selectingShip;
  }

  // Create the img for ship panels
  create4Setup() {
    this.#board.create4Setup(40, 50);
    var increaseHeight = 50;
    this.#ships.map((ship) => {
      ship.createPanel(
        this.#ships,
        config.phaser.width - config.ship.width / 2,
        increaseHeight
      );
      increaseHeight += 40 + config.ship.height;
    });
  }
}
