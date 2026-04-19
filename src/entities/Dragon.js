export default class Dragon extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'drac');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setImmovable(true);
        this.body.allowGravity = false; 
    }

    startShooting(callback, scope) {
        // 🔴 REPTE: Creeu un esdeveniment temporal (this.scene.time.addEvent) 
        // que cridi al 'callback' cada 1000ms de forma infinita (loop: true)
    }
}
