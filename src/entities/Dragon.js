export default class Dragon extends Phaser.Physics.Arcade.Sprite {
   constructor(scene, x, y) {
       super(scene, x, y, 'drac');
       scene.add.existing(this);
       scene.physics.add.existing(this);
       this.setImmovable(true);
       this.body.allowGravity = false;

       // Hacemos el dragón 3 veces más grande para que se vea bien
       this.setScale(3);

       // Crear la animación usando los cuadritos 0, 1 y 2
       if (!scene.anims.exists('volar_drac')) {
           scene.anims.create({
               key: 'volar_drac',
               frames: scene.anims.generateFrameNumbers('drac', { start: 0, end: 2 }),
               frameRate: 8, // Velocidad a la que aletea
               repeat: -1    // Bucle infinito
           });
       }
       
       // Empieza a volar
       this.play('volar_drac');

       // Patrulla de lado a lado
       scene.tweens.add({
           targets: this,
           x: 700,
           duration: 3000,
           ease: 'Linear',
           yoyo: true,
           loop: -1
       });
   }

   startShooting(callback, scope) {
       return this.scene.time.addEvent({
           delay: 1000,
           callback: callback,
           callbackScope: scope,
           loop: true
       });
   }
}
