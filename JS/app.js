import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { initDashboard, handleAuthChange } from "./dashboard.js";

const firebaseConfig = {
    apiKey: "SUA_API_KEY", 
    authDomain: "camec-6a988.firebaseapp.com",
    projectId: "camec-6a988",
    appId: "1:37119733437:web:49241324e93e303e30a5d2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    
    // Escuta mudanças de Login
    onAuthStateChanged(auth, (user) => {
        handleAuthChange(user);
    });

    // Delegar Navegação
    document.getElementById('main-nav').addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-btn');
        if (btn) switchView(btn.dataset.view);
    });
});

function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`view-${viewId}`).classList.add('active');
    document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
}