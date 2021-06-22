import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4DlMXqyzbL2ySh6mvOMZ4Is6zJLjTWTc",
  authDomain: "agendapodcast-5276e.firebaseapp.com",
  projectId: "agendapodcast-5276e",
  storageBucket: "agendapodcast-5276e.appspot.com",
  messagingSenderId: "736073000986",
  appId: "1:736073000986:web:e2f0b2b3e815b37ba009a3",
  measurementId: "G-B3YRLYLJ9K",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();
