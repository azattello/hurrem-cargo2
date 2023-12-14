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




let phone =  document.getElementById('phone');
let paswd =  document.getElementById('paswd');
let button = document.querySelector('.button');

phone.addEventListener('input', ()=>{
    if (phone.value != '' && paswd.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;


    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
paswd.addEventListener('input', ()=>{
    if (phone.value != '' && paswd.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})




document.querySelector('.button').addEventListener('click', ()=>{
    
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('paswd').value;
    
    let i = 1;

    onValue(ref(db, 'users/'), (snapshot) => {



        while ( i <= Object.keys(snapshot.val()).length){
            const data = snapshot.val();
            
            onValue(ref(db, `users/user_id_${i}`), (snapshot) => {
                const phoneDB = snapshot.val().phone;
                const passwordDB = snapshot.val().password;
              
                console.log(phoneDB)
                console.log(passwordDB)
                
                if (phone === phoneDB && password === passwordDB ) {
                    console.log('Вы авторизованы')
                    window.location.replace("./index.html");
                    localStorage.setItem('user', `user_id_${i}`);

                }else{
                    console.log('Вы не авторизованы')
                    location.reload();
                }
                
            });
            
            i++

        }
    });

});