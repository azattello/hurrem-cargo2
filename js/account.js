// Import the functions you need from the SDKs you need
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



const userID = localStorage.getItem('user');
    
onValue(ref(db, `users/${userID}`), (snapshot) => {
        
        const name = snapshot.val().name;
        const phone = snapshot.val().phone;
        const surname = snapshot.val().surname;
        const city = snapshot.val().city;
        const password = snapshot.val().password;

        console.log(city)

        document.querySelector('.surname').innerHTML = surname;
        document.querySelector('.name').innerHTML = name;
        document.querySelector('.phone').innerHTML = phone;
        document.querySelector('.city').innerHTML = city;
        document.querySelector('.passwd').innerHTML = password;

});

document.querySelector('.exit').addEventListener('click', ()=>{
    
    if(confirm("Выйти из аккаунта?")){
        localStorage.removeItem('user');
        location.reload();
    }else{
        console.log('hmm...')
    }


});