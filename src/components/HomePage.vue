<template>
    <div class="home-page">
      <!-- En-tête avec le logo et le slogan -->
      <header class="header">
        <h1>Woof</h1>
        <p>Find playmates for your pet</p>
        <button class="main-button">Find Woof</button>
      </header>
  
      <!-- Barre de navigation -->
      <nav class="navigation">
        <button>About</button>
        <button>Find Matches</button>
        <button>Health Tracker</button>
        <button>Forum</button>
      </nav>
  
      <!-- Section principale avec les cartes -->
      <section class="main-section">
        <div class="card" v-for="(item, index) in cards" :key="index">
          <img :src="item.image" alt="" class="card-image" />
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
          { title: 'Find Matches', description: 'Find playmates for your pet nearby', image: 'path/to/match-image.png' },
          { title: 'Hatch Matches', description: 'Help matches hatch for your pet', image: 'path/to/hatch-image.png' },
          { title: 'Health Tracker', description: 'Track your pet\'s health', image: 'path/to/health-image.png' },
          { title: 'Forum', description: 'Join the community forum', image: 'path/to/forum-image.png' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .home-page {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    padding: 20px;
    background-color: #f7f4ef;
  }
  
  /* En-tête */
  .header {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 3rem;
    color: #6e9b76;
  }
  
  .header p {
    font-size: 1.5rem;
    color: #b2917d;
  }
  
  .main-button {
    padding: 10px 20px;
    background-color: #ec6b6b;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  /* Barre de navigation */
  .navigation {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
  }
  
  .navigation button {
    background-color: #6e9b76;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  /* Section principale avec les cartes */
  .main-section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .card img {
    width: 100%;
    border-radius: 15px;
  }
  
  .card h3 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-top: 10px;
  }
  
  .card p {
    font-size: 0.9rem;
    color: #b2917d;
  }
  </style>
  