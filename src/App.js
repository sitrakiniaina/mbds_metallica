import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Detail from "./components/AlbumDetails";
import SongDetails from "./components/SongDetails";
import history from './history';
import member from './components/MemberDetails';
function App() {
  let nom = "Hello Madagascar";
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router history={history}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
        <Route path="/song/:albumname/:songname" component={SongDetails}></Route>
        <Route path="/album/:albumname" component={Detail}></Route>
        <Route path="/member/:membername" component={member}></Route>
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
        <Route path="/rock" component={GroupeRock} />
      </Router>
    </div>
  );
}

export default App;
