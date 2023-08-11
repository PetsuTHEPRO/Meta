new Vue({
  el: '#app',
  data: {
      score: 0,
      progressBarWidth: 90,
      emojis: ['😭', '😔', '😐', '😊', '😄', '💰'],
      achievements: [
          { name: 'Presente de Aniversário', value: 100, unlocked: true },
          { name: 'Trabalho da Faculdade', value: 100, unlocked: true },
          { name: 'Aposta de Dado', value: 4, unlocked: true },
          { name: 'Criação de Bot', value: 50, unlocked: true }

      ]
  }, created() {
      this.sumValuesToScore();
      this.setProgressBarWidth( (parseFloat(this.score/3000) * 100 ).toFixed(0) );
  },
  methods: {
      sumValuesToScore() {
          this.score = this.achievements.reduce((total, achievement) => {
              return total + (achievement.unlocked ? achievement.value : 0);
          }, 0);
      },
      setProgressBarWidth(newValue) {
        this.progressBarWidth = newValue;
      },
  },
  computed: {
      currentEmoji() {
          if (this.progressBarWidth < 30) {
              return this.emojis[0];
          } else if (this.progressBarWidth < 50) {
              return this.emojis[1];
          } else if (this.progressBarWidth < 60) {
              return this.emojis[2];
          } else if (this.progressBarWidth < 80) {
              return this.emojis[3];
          } else if (this.progressBarWidth < 100) {
              return this.emojis[4];
          } else {
              return this.emojis[5];
          }
      },
      progressBarText() {
          return `${this.progressBarWidth}%`;
      }
  }});