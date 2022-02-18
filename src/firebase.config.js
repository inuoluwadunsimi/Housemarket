
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxNp8xfxXJjD1Jdb4TRfSzWqrn_0dT4i0",
  authDomain: "house-marketplace-app-3eda8.firebaseapp.com",
  projectId: "house-marketplace-app-3eda8",
  storageBucket: "house-marketplace-app-3eda8.appspot.com",
  messagingSenderId: "536101027728",
  appId: "1:536101027728:web:987efd2b563706e19bbd15"
};

//Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()