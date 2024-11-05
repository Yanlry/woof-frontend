<template>
    <div class="visitor-page">
      <h1>Welcome, Visitor!</h1>
      <p>You will be redirected to the home page in {{ counter }} seconds...</p> <!-- Affiche le compteur -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisitorPage',
    data() {
      return {
        counter: 5, // Initialise le compteur à 5 secondes
      };
    },
    mounted() {
      // Démarre le compte à rebours
      this.startCountdown();
    },
    methods: {
      startCountdown() {
        const interval = setInterval(() => {
          if (this.counter > 0) {
            this.counter--; // Décrémente le compteur toutes les secondes
          } else {
            clearInterval(interval); // Arrête l'intervalle quand le compteur atteint 0
            this.$router.push('/home'); // Redirige vers la page d'accueil
          }
        }, 1000); // Intervalle de 1 seconde
      },
    },
  };
  </script>
  
  <style scoped>
  .visitor-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    background-color: #f5ede3;
  }
  
  .visitor-page h1 {
    font-size: 2rem;
    color: #6e9b76;
  }
  
  .visitor-page p {
    font-size: 1.2rem;
    color: #b2917d;
  }
  </style>
  