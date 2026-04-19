export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'jordi');
        
        // Ja us donem el jugador configurat amb físiques:
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);

        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {
        // 🔴 REPTE: Implementeu el moviment d'en Sant Jordi (tecles cursors)
        // Pista: useu this.setVelocityX(...)
    }

    onHit() {
        // 🔴 REPTE: Poseu el personatge de color vermell (tint) per indicar que ha rebut
    }
}
