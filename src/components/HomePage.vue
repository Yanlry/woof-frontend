<template>
  <div class="home-page">
    <!-- En-tête avec le logo et le slogan -->
    <header class="navigation-home">
      <img src="@/assets/woof-logo.png" alt="Woof Logo" class="logo-home" />
      <button class="main-button-home">Rencontres</button>
      <button class="main-button-home">Disparus</button>
      <button class="main-button-home">Promenade</button>
      <button class="main-button-home">Consultations</button>
      <button class="main-button-home">Éducation</button>

    <div class="search-container-home">
      <input type="text" v-model="searchQuery" placeholder="Rechercher..." class="search-input-home" />
      <button @click="performSearch" class="search-button-home">Rechercher</button>
    </div>
    </header>
<section>
  <img src="@/assets/hero.png" alt="hero" class="hero-home">
</section>
    <!-- Section principale avec les cartes -->
    <section class="main-section-home">
      <div class="card-home" v-for="(item, index) in cards" :key="index">
        <img :src="require(`@/assets/${item.image}`)" alt="" class="card-image-home" />
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
      searchQuery: '', // Stocke la requête de recherche
    };
  },
  methods: {
    performSearch() {
      if (this.searchQuery) {
        // Logique de recherche ici (par exemple, rediriger vers une page de résultats ou appeler une API)
        console.log("Recherche effectuée pour:", this.searchQuery);
        // Réinitialiser le champ de recherche après l'envoi
        this.searchQuery = '';
      } else {
        alert("Veuillez entrer un terme de recherche.");
      }
    }
  }
};
</script>


<style >

/* ------------------------------------------------------------------------------------------ STYLE PRINCIPAL ------------------------------------------------------------------------------------------*/
html, body {
  margin: 0;
  padding: 0;
}

.home-page {
  position: relative; /* Changement de fixed à relative */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eae7de;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px; /* Ajuste cette valeur en fonction de la hauteur de ta barre */
  overflow-y: auto; /* Activation du défilement vertical */
}


/* ------------------------------------------------------------------------------------------ HEADER # NAVIGATION ------------------------------------------------------------------------------------------ */

.navigation-home {
  display: flex;
  align-items: center;
  background-color: #8b5e3c; /* Marron foncé */
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.logo-home {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.main-button-home {
  background-color: transparent;
  color: #f5ede3;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px 10px;
  transition: color 0.3s;
}

.main-button-home:hover {
  color: #d3b89d; /* Couleur plus claire au survol */
}

.search-container-home {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 50px
}

.search-input-home {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius:30px;
  outline: none;
  width: 15vw;
}

.search-button-home {
  padding: 5px 15px;
  background-color: #8b5e3c; /* Marron foncé pour correspondre à la barre */
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;
  font-weight: bold;
}

.search-button-home:hover {
  background-color: #b29078; /* Variation du marron foncé pour le hover */
}

.hero-home {
  width: 100vw;
}
/* ------------------------------------------------------------------------------------------ CARTES ------------------------------------------------------------------------------------------ */
.main-section-home {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card-home {
  background-color: white;
  width: 250px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
}

.card-home:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.card-image-home {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 20px 20px 0 0 ;

}

.card-home h3 {
  color: #4a4a4a;
  font-size: 1.5em;
  margin: 10px 0;
}

.card-home p {
  color: #7a7a7a;
  font-size: 0.9rem;
  padding:20px
}
</style>
