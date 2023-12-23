// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC0gpheZGgqdkB2jMUjWlPlTitWTFzXYPk",
	authDomain: "movie-app-3f43c.firebaseapp.com",
	projectId: "movie-app-3f43c",
	storageBucket: "movie-app-3f43c.appspot.com",
	messagingSenderId: "179218851091",
	appId: "1:179218851091:web:bac8f913584166249a26e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
