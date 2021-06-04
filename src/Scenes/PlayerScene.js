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

  nextShoot = 0;
  update() {
    var player = this.#battleship.getPlayer();
    var computer = this.#battleship.getComputer();

    if (player.lose()) return;
    //this.shoot();
    computer.update(this.#name);
  }

  shoot() {
    if (this.nextShoot > this.time.now) return;
    console.log("Shoot");
    this.nextShoot = this.time.now + 1000;
  }
}
