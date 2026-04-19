## 🔥 Esquiva la Flamarada

Un joc de supervivència on la velocitat de reacció és la clau.

* **Mecànica:**

En Sant Jordi està a la part inferior de la pantalla. El Drac (estàtic a la part superior o movent-se de costat a costat) va llançant boles de foc aleatòriament cap avall.

---

* **Objectiu:**

Aguantar el màxim de temps possible sense que cap bola de foc et toqui. De tant en tant, cau una rosa que et dona "escut" o punts extra.

---

* **Lògica Phaser:**
    * Crea un `Group` per a les boles de foc.
    * Fes servir un `Timed Event` (`this.time.addEvent`) per generar foc cada X mil·lisegons.
