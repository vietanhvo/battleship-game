export default class PlayerScene extends Phaser.Scene {
  #battleship;
  #name = "Player";

  constructor(battleship) {
    super("PlayerScene");
    this.#battleship = battleship;
  }

  preload() {
    this.#battleship.preload(this);
  }

  create() {
    this.#battleship.create(this.#name);
  }

  update() {
    var player = this.#battleship.getPlayer();
    if (player.lose()) return;
  }
}
