export default class PlayScene extends Phaser.Scene {
  #battleship;
  #name = "Play";

  constructor(battleship) {
    super("PlayScene");
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
    var player = this.#battleship.getPlayer();

    if (computer.lose() || player.lose()) return;

    this.#battleship.getComputer().update(this.#name);
  }
}
