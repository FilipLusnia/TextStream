import React from "react";
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

export default function Login() {
  const history = useHistory();
  const fbauth = firebase.auth();

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    fbauth.signInWithPopup(provider)
    .then(
      async result => {
        const token = await fbauth.currentUser?.getIdToken(true);

        if(token) {
          localStorage.setItem("@token", token); //token at localStorage for future requests
          history.push("/book-list");
        }
      }
    );
  }

  return (
    <div className="login-container">
      <h1>Login to see your list of books.</h1>
      <button onClick={googleLogin} className="login-button">
        LOGIN WITH GOOGLE
      </button>
    </div>
  );
}
