export default class ComputerScene extends Phaser.Scene {
  #battleship;
  #name = "Computer";

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
  }
}
