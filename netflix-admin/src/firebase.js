import { initializeApp } from 'firebase/app'; // Import initializeApp from firebase/app
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDuIDoEkXu3YLskvA434libJ-w-uWGDyeY",
    authDomain: "netflix-209ab.firebaseapp.com",
    projectId: "netflix-209ab",
    storageBucket: "netflix-209ab.appspot.com",
    messagingSenderId: "641053211187",
    appId: "1:641053211187:web:c89b2ecff4472047274146",
    measurementId: "G-SMCZPBKHW4"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app); // Get the storage instance from the initialized app
  
  export default storage;