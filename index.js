// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT2sU2BMT--3DNXacnFDJadEgLvzM8g0M",
  authDomain: "climaapp-79455.firebaseapp.com",
  projectId: "climaapp-79455",
  storageBucket: "climaapp-79455.appspot.com",
  messagingSenderId: "524570460935",
  appId: "1:524570460935:web:006f176eb727bbe1333ba2",
  measurementId: "G-NFQ4P23S92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const exampleRef = ref(db, 'Temperatura');
const temperatura = document.getElementById("temperatura");
const humedad = document.getElementById("Humedad");
const actualizar = document.getElementById("actualizar");

// Ejemplo de cómo acceder a un nodo secundario y obtener datos
get(exampleRef).then((snapshot) => {
if (snapshot.exists()) {
    const data = snapshot.val();
    temperatura.textContent = data.Celcius;
    humedad.textContent = data.Humedad;
} else {
    console.log("No hay datos disponibles");
}
}).catch((error) => {
console.error("Error al obtener datos:", error);
});
actualizar.addEventListener("click", function(){
    location.reload();
})