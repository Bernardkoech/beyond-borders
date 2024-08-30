import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJGoNIgLZzTOvOqvmBnXBX0_W5EC0WuI",
  authDomain: "beyond-borders-a11bc.firebaseapp.com",
  projectId: "beyond-borders-a11bc",
  storageBucket: "beyond-borders-a11bc.appspot.com",
  messagingSenderId: "670665892920",
  appId: "1:670665892920:web:573b2625aae64ce34d72cd",
  measurementId: "G-ZVG75ZXZ8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app); // Export Firebase Storage
