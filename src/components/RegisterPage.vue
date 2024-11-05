<template>
    <div class="register-page">
      <h1>Inscription à Woof</h1>
      <form @submit.prevent="handleRegister">
        <input type="text" placeholder="Nom d'utilisateur" v-model="username" required />
        <input type="email" placeholder="Email" v-model="email" required />
        <input type="password" placeholder="Mot de passe" v-model="password" required />
        <button type="submit">S'inscrire</button>
      </form>
      <div class="options">
        <button @click="goToLogin">Déjà inscrit ? Connexion</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async handleRegister() {
        try {
          // Envoie les données d'inscription au backend
          const response = await axios.post('http://localhost:3000/auth/register', {
            username: this.username,
            email: this.email,
            password: this.password
          });
  
          // Optionnel : Si l'API renvoie un token après l'inscription, stocke-le
          const token = response.data.token;
          if (token) {
            localStorage.setItem('token', token);
          }
  
          // Redirige vers la page d'accueil
          this.$router.push('/home');
        } catch (error) {
          alert("Échec de l'inscription. Veuillez réessayer.");
        }
      },
      goToLogin() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5ede3;
    border-radius: 20px;
    padding: 2rem;
    max-width: 400px;
    margin: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  h1 {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    color: #6e9b76;
  }
  
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  input {
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: 2px solid #d1c4b1;
    border-radius: 10px;
    font-size: 1rem;
  }
  
  button {
    padding: 0.8rem;
    background-color: #6e9b76;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background-color: #5a7d61;
  }
  
  .options {
    margin-top: 1rem;
  }
  
  .options button {
    background-color: transparent;
    color: #6e9b76;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
  }
  </style>
  