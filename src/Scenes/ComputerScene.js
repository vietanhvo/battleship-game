// ComputerScene in player's turn
export default class ComputerScene extends Phaser.Scene {
  #battleship;
  #name = "ComputerScene";

  constructor(battleship) {
    super("ComputerScene");
    this.#battleship = battleship;
  }

  preload() {
    this.#battleship.preload(this);
  }

  create() {
    this.#battleship.create(this.#name);
  }

  update() {
    //this.#battleship.getComputer().getBoard().moveToBack();
    var computer = this.#battleship.getComputer();

    if (computer.lose()) return;

    computer.update(this.#name);
    // Switch screen
    if (computer.getTurn()) {
      setTimeout(() => this.scene.switch("PlayerScene"), 2000);
    }
  }
}
