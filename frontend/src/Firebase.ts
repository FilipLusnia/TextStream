import firebase from "firebase/app";

function fbInit (){
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_fbapiKey,
        authDomain: process.env.REACT_APP_fbauthDomain,
        databaseURL: process.env.REACT_APP_fbdatabaseURL,
        projectId: process.env.REACT_APP_fbprojectId,
        storageBucket: process.env.REACT_APP_fbstorageBucket,
        messagingSenderId: process.env.REACT_APP_fbmessagingSenderId,
        appId: process.env.REACT_APP_fbappId
    };

    firebase.initializeApp(firebaseConfig);
}

export { fbInit };
