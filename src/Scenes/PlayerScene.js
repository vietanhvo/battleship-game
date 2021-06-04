// PlayerScene in Computer's turn
export default class PlayerScene extends Phaser.Scene {
  #battleship;
  #name = "PlayerScene";

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
    var computer = this.#battleship.getComputer();

    if (player.lose()) return;
    if (computer.getTurn()) this.#shoot();
    computer.update(this.#name);
  }

  #shoot() {
    console.log("Shoot");

    // After shoot change to player turn => change scene
    this.#battleship.swapTurn();
    setTimeout(() => this.scene.switch("ComputerScene"), 2000);
  }
}
