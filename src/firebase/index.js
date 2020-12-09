import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA849MZSG95t8Y7TTzElwCnYnw7skV1RiY",
    authDomain: "coder-ecommerce-3071b.firebaseapp.com",
    projectId: "coder-ecommerce-3071b",
    storageBucket: "coder-ecommerce-3071b.appspot.com",
    messagingSenderId: "426557186374",
    appId: "1:426557186374:web:211201333435cdf0518547"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

// Export other firebase integrations




