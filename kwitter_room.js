
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCmPcQ6BwFR0uUoCXUSYAE8ryWpLJXU1Yo",
      authDomain: "kwitter-app-a452e.firebaseapp.com",
      databaseURL: "https://kwitter-app-a452e.firebaseio.com",
      projectId: "kwitter-app-a452e",
      storageBucket: "kwitter-app-a452e.appspot.com",
      messagingSenderId: "107879470222",
      appId: "1:107879470222:web:997897cc4a88aa3c4025df"
    };
    //Initalize Firebase
    firebase.initalizeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
