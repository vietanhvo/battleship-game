import ShipPanel from "./controller_UI/ShipPanel.js";

export default class Ship {
  #name;
  #length; // length of the board
  #phaser;
  #pos; // Array[Square, Square, ...]. The coordianate of ship is belong to this Square
  #sink; // true if all pos is shooted
  #panel; // the panel for user choose to setup ships

  constructor(name, length, phaser) {
    this.#phaser = phaser;
    this.#sink = false;
    this.#name = name;
    this.#length = length;
    this.#pos = [];
  }

  setPos(listOfSquare) {
    this.#pos.map((sqr) => sqr.setShip(false));
    this.#pos = listOfSquare;
    listOfSquare.map((sqr) => sqr.setShip(true));
  }

  getPos() {
    return this.#pos;
  }

  getLength() {
    return this.#length;
  }

  getName() {
    return this.#name;
  }
  
  // Panel for player setup ---------------------------------
  getPanel() {
    return this.#panel;
  }

  preloadPanel() {
    this.#panel = new ShipPanel(this.#name, this.#phaser);
  }

  // Create in phaser
  createPanel(listOfShips, x, y) {
    this.#panel.create(listOfShips, x, y);
  }
  // --------------------------------------------------------
}
