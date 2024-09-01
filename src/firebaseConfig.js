import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD0RCSzF3EqDGVN4hJrp2D725Qtq1UlOTg",
  authDomain: "moviefy-993ed.firebaseapp.com",
  projectId: "moviefy-993ed",
  storageBucket: "moviefy-993ed.appspot.com",
  messagingSenderId: "445086944009",
  appId: "1:445086944009:web:43785a27506ae4100ca1d8",
  measurementId: "G-8Z8ZM1H7H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };