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
 
 userName = localStorage.getItem("User-Name");
document.getElementById("user_name").innerHTML = "Welcome " + userName + " !";

function addRoom(){
      room_name = document.getElementById("roomName").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding the room name"
      });
      localStorage.setItem("Room_name",room_name);
      window.location = "letschat_page.html";
}

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trending_output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +"onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + " </div> <hr>" ;
      document.getElementById("trending_output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location = "letschat_page.html";
}
function logOut(){
      localStorage.removeItem("User-Name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}
