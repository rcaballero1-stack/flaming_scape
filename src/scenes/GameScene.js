import Player from '../entities/Player.js';
import Dragon from '../entities/Dragon.js';
import FireManager from '../entities/FireManager.js';
import GameUI from '../ui/GameUI.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // Ja us donem els assets carregats:
        this.load.spritesheet('jordi', 'assets/image_10.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('drac', 'assets/drac.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('foc', 'assets/foc.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        // Inicialitzem els components del joc:
        this.player = new Player(this, 400, 500);
        this.drac = new Dragon(this, 400, 100);
        this.fireManager = new FireManager(this);
        this.ui = new GameUI(this);

        // Iniciem el mecanisme de tret:
        this.generadorFoc = this.drac.startShooting(this.fireManager.dispararFoc, this.fireManager);

        // 🔴 REPTE: Configureu la col·lisió (overlap) entre el jugador i els focs
        // Pista: useu this.physics.add.overlap(..., ..., this.gameOver, null, this)
    }

    update() {
        this.player.update();
    }

    gameOver() {
        this.physics.pause();
        this.player.onHit();
        this.ui.stop();
        alert("Fi de la partida!");
    }
}
