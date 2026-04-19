export default class FireManager {
    constructor(scene) {
        this.scene = scene;
        // Ja us donem el grup de boles de foc creat:
        this.focs = scene.physics.add.group();
    }

    dispararFoc() {
        // 🔴 REPTE: Creeu una bola de foc en una posició 'x' aleatòria (Phaser.Math.Between)
        // El foc ha de caure cap avall (setVelocityY)
    }

    getGroup() {
        return this.focs;
    }
}
