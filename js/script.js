new Vue({
  el: '#app',
  data: {
    score: 0,
    progressBarWidth: 90,
    emojis: ['😭', '😔', '😐', '😊', '😄', '💰'],
    achievements: [
      { name: 'Presente de Aniversário', value: 100, unlocked: true, isAchievement: true },
      { name: 'Trabalho da Faculdade', value: 100, unlocked: true, isAchievement: true },
      { name: 'Aposta de Dado', value: 4, unlocked: true, isAchievement: true },
      { name: 'Criação de Bot', value: 50, unlocked: true, isAchievement: true },
      { name: 'Trabalho Freelance - 4 Gráficos', value: 150, unlocked: true, isAchievement: true },
      { name: 'Trabalho da Faculdade', value: 100, unlocked: true, isAchievement: true },
      { name: 'Presente', value: 150, unlocked: true, isAchievement: true },
      { name: 'Trabalho da Faculdade', value: 100, unlocked: true, isAchievement: true },
      { name: 'Trabalho da Faculdade', value: 100, unlocked: true, isAchievement: true },
      { name: 'Trabalho com Gráficos', value: 100, unlocked: true, isAchievement: true },
      { name: 'Mesada', value: 20, unlocked: true, isAchievement: true },
      { name: 'Rendimentos', value: 28, unlocked: true, isAchievement: 'opposite-achievement' },
    ]
  }, created() {
    this.sumValuesToScore();
    this.setProgressBarWidth((parseFloat(this.score / 3000) * 100).toFixed(0));
    this.calculateTimeLeft();
    setInterval(this.calculateTimeLeft, 1000);
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
    calculateTimeLeft() {
      const targetDate = new Date();
      targetDate.setFullYear(targetDate.getFullYear() + 4);
      const currentDate = new Date();

      const timeDiff = targetDate - currentDate;

      const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

      this.timeLeft = `Tempo Restante: ${years} anos, ${months} meses, ${days} dias`;

      if (!this.timeAchievement.unlocked && timeDiff <= 0) {
        this.timeAchievement.unlocked = true;
      }
    }
    
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
  }
});