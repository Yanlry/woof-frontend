<template>
    <div class="splash-screen">
      <img src="@/assets/LoadingPage.png" alt="Logo" class="logo" /> <!-- Chemin vers ton logo -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SplashScreen',
    mounted() {

    setTimeout(() => {
        this.$router.push('/login'); // Tente de rediriger vers la page de connexion
    }, 3000);
}

  };
  </script>
  
  <style scoped>
  .splash-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5ede3; /* Modifie la couleur de fond si besoin */
  }
   
  .logo {
    flex: 1; /* Ajuste la taille du logo */
  }
  </style>
  