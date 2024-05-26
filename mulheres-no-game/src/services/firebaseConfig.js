import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXIZUiX0jH2XsEOaB5bT_-QZ5bvOiPWSw",
  authDomain: "mulheres-no-game.firebaseapp.com",
  projectId: "mulheres-no-game",
  storageBucket: "mulheres-no-game.appspot.com",
  messagingSenderId: "807579256806",
  appId: "1:807579256806:web:ab8fdacb3adc1672c3b827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);