<template>
  <div class="login-page">
    <div class="header">
      <!-- Remplace le h1 par l'image -->
      <img src="@/assets/woof-logo.png" alt="Woof Logo" class="logo" />
      <p>Animal Matchmaking App</p>
    </div>
    <form @submit.prevent="handleLogin">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit" class="login-button">Login Up</button>
    </form>
    <div class="options">
      <button @click="signUp" class="option-button">Sign Up</button>
      <button @click="forgotPassword" class="option-button">Forgot Password</button>
      <button @click="enterAsGuest" class="guest-button">Enter as Guest</button> <!-- Bouton visiteur -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          email: this.email,
          password: this.password
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.$router.push('/home');
      } catch (error) {
        alert('Login failed: Invalid credentials');
      }
    },
    signUp() {
      this.$router.push('/register');
    },
    forgotPassword() {
      // Logique pour la redirection vers la page de mot de passe oublié
    },
    enterAsGuest() {
      this.$router.push('/visitor'); // Redirection vers la page visiteur
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.email = '';
      vm.password = '';
    });
  }
};
</script>

<style scoped>
.logo {
  width: 400px; /* Ajustez la taille selon vos besoins */
  height: auto;
  
}
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6ddbe;
  padding: 3rem;
  max-width: 400px;
  margin: auto;
  border-radius: 30px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
}

.header h1 {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #5e8d68;
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  text-align: center;
}

.header p {
  color: #b2917d;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

input {
  width: 90%;
  padding: 0.8rem;
  margin: 0.6rem 0;
  border: 2px solid #d1c4b1;
  border-radius: 20px;
  font-size: 1rem;
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  
}

.login-button {
  width: 90%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #5e8d68;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.1s ease, background-color 0.3s;
}

.login-button:hover {
  border-color: #5e8d68;
  background-color: #4c7156;
  transform: translateY(-2px);
}

.options {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1.5rem;
  
}

.option-button, .guest-button{
  background-color: transparent;
  color: #5e8d68;
  border: 1px solid #f1f0ec;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s, color 0.3s;
  background-color: #f7f7f7;
}

.option-button:hover, .guest-button:hover {
  background-color: #5e8d68;
  color: white;
}

body {
  background: #f4e4d3;
}
</style>

