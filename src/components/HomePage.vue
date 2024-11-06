<template>
  <div class="home-page">
    <!-- En-tête avec le logo et le slogan -->
    <header class="header">
      <img src="@/assets/woof-logo.png" alt="Woof Logo" class="logo" />
      <p class="slogan">Trouvez des compagnons de jeu pour votre animal</p>
      <button class="main-button">Trouver un compagnon</button>
    </header>

    <!-- Barre de navigation -->
    <nav class="navigation">
      <button class="nav-button">À propos</button>
      <button class="nav-button">Rechercher des matchs</button>
      <button class="nav-button">Suivi de santé</button>
      <button class="nav-button">Forum</button>
    </nav>

    <!-- Section principale avec les cartes -->
    <section class="main-section">
      <div class="card" v-for="(item, index) in cards" :key="index">
        <img :src="require(`@/assets/${item.image}`)" alt="" class="card-image" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      cards: [
        { title: 'Rechercher des matchs', description: 'Trouvez des compagnons de jeu pour votre animal à proximité', image: 'match-image.png' },
        { title: 'Faire éclore des matchs', description: 'Aidez les liens à se renforcer pour votre animal', image: 'hatch-image.png' },
        { title: 'Suivi de santé', description: 'Suivez la santé de votre animal', image: 'health-image.png' },
        { title: 'Forum', description: 'Rejoignez le forum de la communauté', image: 'forum-image.png' },
      ],
    };
  },
};
</script>

<style scoped>
/* Style de la page principale */

.home-page {
  font-family: Arial, sans-serif;
  background-color: #eae7de;
  text-align: center;
  padding: 20px;
  height: 100vh;
  width: 100vw;
}

/* En-tête */
.header {
  margin-bottom: 20px;
}

.logo {
  width: 400px;
  height: auto;
}

.slogan {
  font-size: 1.5rem;
  color: #6e9b76;
  margin-bottom: 15px;
}

.main-button {
  background-color: #e57373;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.main-button:hover {
  background-color: #d35f5f;
}

/* Barre de navigation */
.navigation {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.nav-button {
  background-color: #6e9b76;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #5a7d61;
}

/* Cartes */
.main-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  padding: 15px;
  width: 180px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.card h3 {
  color: #4a4a4a;
  font-size: 1rem;
  margin: 10px 0;
}

.card p {
  color: #7a7a7a;
  font-size: 0.9rem;
}
</style>
