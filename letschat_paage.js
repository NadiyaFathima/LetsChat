const firebaseConfig = {
    apiKey: "AIzaSyBtwZHHBg89I4k3ZVndaSoZaMoeY5yQPjI",
    authDomain: "letschat-debaf.firebaseapp.com",
    databaseURL: "https://letschat-debaf-default-rtdb.firebaseio.com",
    projectId: "letschat-debaf",
    storageBucket: "letschat-debaf.appspot.com",
    messagingSenderId: "1088548066882",
    appId: "1:1088548066882:web:145f09508eacac13307fdb"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User-Name");
room_name = localStorage.getItem("Room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logOut(){
      localStorage.removeItem("User_Name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
   } });  }); }
getData();
