function addUser(){
    user_name = document.getElementById("userName").value;
    localStorage.setItem("User-Name", user_name);
    window.location = "letschat_room.html";
}