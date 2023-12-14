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


let i = 1;

onValue(ref(db, 'parcels/'), (snapshot) => {
  
  
    let dataLenght = (Object.keys(snapshot.val()).length); 

    while ( i  <= dataLenght){
        const data = snapshot.val();
        // console.log(data)
        
        onValue(ref(db, `parcels/`),(snapshot)=>{
          let parTex = 'parcels_id_' + i;
       

          if (snapshot.val()[parTex] !== undefined) {

            let parTex1 = 'parcels_id_' + i;
            // console.log(snapshot.val()[parTex1])

            onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
            const track = snapshot.val().track != undefined ? snapshot.val().track : '';
            // const track = snapshot.val().track ;
            // console.log(track)
              // console.log(snapshot.val().delete)
              // if (snapshot.val().delete == undefined) {
              //   console.log(snapshot.val().track)
              // }

              const parentContainer = document.querySelector('.list__wrapper');
              let newDiv = document.createElement('div');
              newDiv.classList.add('el__list');

              // Задаем текст или другое содержимое для нового элемента
              newDiv.innerHTML = `
                  <div class="el__title" data-info="Данные блока ">${track}</div>
                  <ion-icon class="restoreIcon" onclick="importAndShowClass('parcels_id_${i}')" id="close" name="git-compare-outline"></ion-icon>
                `;

              // Добавляем новый элемент в родительский контейнер

              if (snapshot.val().delete === 'true') {
                parentContainer.appendChild(newDiv);
              }

              i++
              
            });

          }else{
            dataLenght++
            i++
          }

        })
        
        
    }
});
    

