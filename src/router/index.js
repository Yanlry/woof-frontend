import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import SplashScreen from "../components/SplashScreen.vue";
import HomePage from "../components/HomePage.vue";
import VisitorPage from "../components/VisitorPage.vue"; // Import de la page visiteur

const routes = [
  { path: "/", name: "Splash", component: SplashScreen },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage }, // Route pour la page visiteur
  { path: "/home", name: "Home", component: HomePage, meta: { requiresAuth: true } },
  { path: "/visitor", name: "Visitor", component: VisitorPage }, // Route pour la page visiteur

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Ajouter un middleware pour vérifier l'authentification avant d'accéder aux routes protégées
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // Récupère le token stocké
  if (to.meta.requiresAuth && !token) {
    // Si la route nécessite une authentification et qu'il n'y a pas de token, redirige vers la page de connexion
    next("/login");
  } else {
    // Sinon, continue vers la route demandée
    next();
  }
});

export default router;
