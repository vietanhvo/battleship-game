export default class Computer {
  #ships;
  #phaser;

  constructor(phaser) {
    this.#phaser = phaser;
    this.#ships = [];
    this.#initializeShips();
  }

  #initializeShips() {

  }
}
