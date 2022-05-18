import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_g7SLqa4L9Et6dliVl_7VwVg71S4J5Nk',
  authDomain: "creat-808d4.firebaseapp.com",
  projectId: "creat-808d4",
  storageBucket: "creat-808d4.appspot.com",
  messagingSenderId: "423080115243",
  appId: "1:423080115243:web:136ffb6bd5b8e29a6bbe6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
