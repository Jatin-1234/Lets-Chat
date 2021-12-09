
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDTi_Hage4YPunscMewiZFnZOr59lisiMY",
      authDomain: "practicehikaroga.firebaseapp.com",
      databaseURL: "https://practicehikaroga-default-rtdb.firebaseio.com",
      projectId: "practicehikaroga",
      storageBucket: "practicehikaroga.appspot.com",
      messagingSenderId: "776949814531",
      appId: "1:776949814531:web:cec028fd2126166cc04536",
      measurementId: "${config.measurementId}"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

