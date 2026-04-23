export default class FireManager {
    constructor(scene) {
        this.scene = scene;
        this.focs = scene.physics.add.group();
    }

    dispararFoc() {
        const xAleatoria = Phaser.Math.Between(0, 800);
        const foc = this.focs.create(xAleatoria, 100, 'foc');
        foc.setVelocityY(200);
    }

    getGroup() {
        return this.focs;
    }
}
