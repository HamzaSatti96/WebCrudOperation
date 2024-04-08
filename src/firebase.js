import * as firebase from 'firebase';
import 'firebase/database';

let config = {
  apiKey: 'AIzaSyATlhmK5jf19-HJ-wFg2-NXVWmR_0colYA',
  authDomain: 'cyse1008-c35fa.firebaseapp.com',
  projectId: 'cyse1008-c35fa',
  storageBucket: 'cyse1008-c35fa.appspot.com',
  messagingSenderId: '82290819786',
  databaseURL: 'https://cyse1008-c35fa-default-rtdb.firebaseio.com/',
  appId: '1:82290819786:web:fa32f7b803b85055022a33',
};

firebase.initializeApp(config);

export default firebase.database();
