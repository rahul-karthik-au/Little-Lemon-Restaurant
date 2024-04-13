import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCw79eq9fSURvWPnZBqZfsMH5zNxJaXohc",
    authDomain: "todo-list-react-sample.firebaseapp.com",
    databaseURL: "https://todo-list-react-sample-default-rtdb.firebaseio.com",
    projectId: "todo-list-react-sample",
    storageBucket: "todo-list-react-sample.appspot.com",
    messagingSenderId: "961134072941",
    appId: "1:961134072941:web:dc9242c7c7f3273c9e9b64",
    measurementId: "G-JW8V9KBTEQ"
};


export const app = initializeApp(firebaseConfig);

