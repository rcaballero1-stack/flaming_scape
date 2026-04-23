export default class GameUI {
    constructor(scene) {
        this.scene = scene;
        this.tempsSupervivencia = 0;
        this.textTemps = scene.add.text(16, 16, 'Temps: 0', { fontSize: '32px', fill: '#fff' });

        this.timer = scene.time.addEvent({
            delay: 1000,
            callback: this.incrementarTemps,
            callbackScope: this,
            loop: true
        });
    }

    incrementarTemps() {
        this.tempsSupervivencia++;
        this.textTemps.setText('Temps: ' + this.tempsSupervivencia);
    }

    stop() {
        if (this.timer) this.timer.remove();
    }
}
