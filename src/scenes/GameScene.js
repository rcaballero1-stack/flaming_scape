import Player from '../entities/Player.js';
import Dragon from '../entities/Dragon.js';
import FireManager from '../entities/FireManager.js';
import GameUI from '../ui/GameUI.js';

export default class GameScene extends Phaser.Scene {
   constructor() {
       super('GameScene');
   }

   preload() {
       this.load.image('background', 'assets/fons.png');
       this.load.image('rosa', 'assets/rosa.png');
       this.load.image('jordi', 'assets/image_10.png'); // Jordi como imagen normal
       
       // El dragón cortado en cuadritos (20px de ancho y 23px de alto)
       this.load.spritesheet('drac', 'assets/drac.png', { frameWidth: 150, frameHeight: 200 });
       
       this.load.image('foc', 'assets/foc.png');
   }

   create() {
       // 1. Fondo (siempre lo primero)
       this.add.image(400, 300, 'background').setDisplaySize(800, 600);

       // 2. Entidades
       this.player = new Player(this, 400, 500);
       this.drac = new Dragon(this, 400, 100);
       this.fireManager = new FireManager(this);
       this.ui = new GameUI(this);

       // 3. Lógica de disparo y rosas
       this.drac.startShooting(this.fireManager.dispararFoc, this.fireManager);

       this.roses = this.physics.add.group();
       this.time.addEvent({
           delay: 10000,
           callback: () => {
               const x = Phaser.Math.Between(50, 750);
               this.roses.create(x, 0, 'rosa').setVelocityY(150);
           },
           loop: true
       });

       // 4. Colisiones y Overlaps
       this.physics.add.overlap(this.player, this.fireManager.getGroup(), this.gameOver, null, this);
       this.physics.add.overlap(this.player, this.roses, (p, r) => {
           r.destroy();
           this.ui.tempsSupervivencia += 5;
           this.ui.textTemps.setText('Temps: ' + this.ui.tempsSupervivencia);
       }, null, this);
   }

   update() {
       this.player.update();
   }

   gameOver() {
       this.physics.pause();
       this.player.onHit();
       this.ui.stop();
       this.cameras.main.shake(250, 0.015); // Efecto Pro del PDF
      
       this.time.delayedCall(500, () => {
           alert("Fi de la partida! Temps: " + this.ui.tempsSupervivencia);
           this.scene.restart();
       });
   }
}
