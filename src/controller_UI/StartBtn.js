import btnBackground from "url:../../assets/UI_Btn/button-bg.png";
import btnText from "url:../../assets/UI_Btn/button-text.png";

import { config } from "../../config.js";

const WIDTH = 300,
  HEIGHT = 110;

export default class StartBtn {
  #setupDone;
  #container;
  #phaser;

  constructor(phaser) {
    this.#setupDone = false;
    this.#phaser = phaser;
    this.preload();
  }

  setSetupDone(done) {
    this.#setupDone = done;
  }

  getSetupDone() {
    return this.#setupDone;
  }

  preload() {
    this.#phaser.load.image("btnBackground", btnBackground);
    this.#phaser.load.image("btnText", btnText);
  }

  create() {
    var bg = this.#phaser.add.image(0, 0, "btnBackground").setScale(0.5);
    var text = this.#phaser.add.image(0, 0, "btnText").setScale(0.5);

    this.#container = this.#phaser.add
      .container(config.phaser.width / 2, config.phaser.height - HEIGHT / 3, [
        bg,
        text,
      ])
      .setSize(WIDTH / 2, HEIGHT / 2)
      .setInteractive();

    this.#container.on("pointerover", () => {
      if (this.#setupDone) bg.setTint(0x44ff44);
      else bg.setTint(0xff44ff);
    });

    this.#container.on("pointerout", function () {
      bg.clearTint();
    });

    this.#container.on("pointerdown", () => {
      if (this.#setupDone) this.#phaser.scene.start("PlayScene");
    });
  }
}
