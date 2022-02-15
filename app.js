const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerHealth + "%" };
        },
    },
    methods: {
        getRandowmValue(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        attackMonster() {
            const attackValue = this.getRandowmValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = this.getRandowmValue(8, 15);
            this.playerHealth -= attackValue;
        },
    },
});

app.mount("#game");
