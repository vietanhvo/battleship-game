export default class PlayScene extends Phaser.Scene {
  #battleship;

  constructor(battleship) {
    super("PlayScreen");
    this.#battleship = battleship;
  }

  preload() {
    this.#battleship.preload(this);
  }

  create() {
    this.#battleship.create4Play();
  }

  update() {}
}
