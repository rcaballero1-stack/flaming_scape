export default class GameUI {
    constructor(scene) {
        this.scene = scene;
        this.tempsSupervivencia = 0;
        this.textTemps = scene.add.text(16, 16, 'Temps: 0', { fontSize: '32px', fill: '#fff' });
        
        // 🔴 REPTE: Afegiu un temporitzador per cridar a 'incrementarTemps' cada segon
    }

    incrementarTemps() {
        // 🔴 REPTE: Incrementeu el contador i actualitzeu el text (setText)
    }

    stop() {
        // Aturem el temps quan acaba la partida
    }
}
