export default class Player extends Phaser.Physics.Arcade.Sprite {
   constructor(scene, x, y) {
       super(scene, x, y, 'jordi');
      
       // Configuración de físicas
       scene.add.existing(this);
       scene.physics.add.existing(this);
       this.setCollideWorldBounds(true);

       // Controles
       this.cursors = scene.input.keyboard.createCursorKeys();
   }

   update() {
       // Movimiento a la izquierda
       if (this.cursors.left.isDown) {
           this.setVelocityX(-300);
           this.setFlipX(true);  // Efecto espejo: mira a la izquierda
       } 
       // Movimiento a la derecha
       else if (this.cursors.right.isDown) {
           this.setVelocityX(300);
           this.setFlipX(false); // Imagen normal: mira a la derecha
       } 
       // Si no pulsamos nada, se detiene
       else {
           this.setVelocityX(0);
       }

       // Salto (Flecha ARRIBA)
       // Solo salta si la flecha está presionada Y el personaje toca el suelo
       if (this.cursors.up.isDown && this.body.onFloor()) {
           this.setVelocityY(-400); // Impulso hacia arriba
       }
   }

   onHit() {
       // Poseu el personatge de color vermell (tint) per indicar que ha rebut
       this.setTint(0xff0000);
   }
}
