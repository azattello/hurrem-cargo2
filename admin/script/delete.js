import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
  get,
  ref,
  set,
  onValue, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBuLKsRiALWbo_RyG9QcqgpmEfZlwadNwE",
    authDomain: "hurrem-cargo.firebaseapp.com",
    databaseURL: "https://hurrem-cargo-default-rtdb.firebaseio.com",
    projectId: "hurrem-cargo",
    storageBucket: "hurrem-cargo.appspot.com",
    messagingSenderId: "268726134346",
    appId: "1:268726134346:web:5ea19baed6e14c68c168b3",
    measurementId: "G-WKZJEC5ERW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



export function showClass(element) {
    // var className = element.className;
    let confirmed = window.confirm("Вы точно хотите удалить трек?");
    if (confirmed){
        
        let deleteStatus = 'true';

        set(ref(db, `parcels/${element}/delete`),deleteStatus)
            .then(() => {
                console.log('Трек добавлен')
                location.reload();
                input.value = ''
            })
            .catch((error) => {
                location.reload();
                console.log("Ошибка записи в базу данных: ", error);
            });
    
        
 
 
    }
}