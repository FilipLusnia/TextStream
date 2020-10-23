import React from "react";
import './Styles/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import BookList from "./Components/BookList";
import { fbInit } from './Firebase';

function App() {

  fbInit();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>
          <Route path={"/book-list"}>
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;