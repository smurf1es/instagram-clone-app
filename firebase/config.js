import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCRNxaRVWH1gEbNkT44k9SpyLjBRFpd0F8',
  authDomain: 'instagram-v2-clone-app.firebaseapp.com',
  projectId: 'instagram-v2-clone-app',
  storageBucket: 'instagram-v2-clone-app.appspot.com',
  messagingSenderId: '12479319326',
  appId: '1:12479319326:web:b1b93e6ff1d36499830d0f',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
