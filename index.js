// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC76RxQgpsJx4CJaXtBVNLlAy0Hv_rtqh4",
    authDomain: "estacion-meteorologica-3d31b.firebaseapp.com",
    databaseURL: "https://estacion-meteorologica-3d31b-default-rtdb.firebaseio.com",
    projectId: "estacion-meteorologica-3d31b",
    storageBucket: "estacion-meteorologica-3d31b.appspot.com",
    messagingSenderId: "457196943411",
    appId: "1:457196943411:web:7fbc88bf881cc195c90b46",
    measurementId: "G-ZSSFGPJ5EN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const exampleRef = ref(db, 'DatosClima');
const temperatura = document.getElementById("temperatura");
const humedad = document.getElementById("Humedad");
const dth11 = document.getElementById("DTH11");
const actualizar = document.getElementById("actualizar");
const cielo = document.getElementById("Cielo");
const estado = document.getElementById("Estado");
const imagen = document.getElementById("imgEstado");

// Ejemplo de cómo acceder a un nodo secundario y obtener datos
get(exampleRef).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
        temperatura.innerHTML = data.TemperaturaC + " °C<br> "+data.TemperaturaF + " °F";
        humedad.innerHTML = data.Humedad + " g/kg a.s";
        dth11.innerHTML = data.TemperaturaDTH11 + " °C";
        cielo.innerHTML = data.Cielo;
        estado.innerHTML = data.Estado;
        if(data.Estado == "despejado"){
            imagen.setAttribute("src", "./IMG/despejado.jpg");
        }else{
            imagen.setAttribute("src", "./IMG/lluvioso.jpg");
        }
    } else {
        console.log("No hay datos disponibles");
    }
}).catch((error) => {
console.error("Error al obtener datos:", error);
});
actualizar.addEventListener("click", function(){
    location.reload();
})