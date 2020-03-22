import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Detail from "./components/AlbumDetails";
import SongDetails from "./components/SongDetails";

function App() {
  let nom = "Hello Madagascar";
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/rock">Groupe Rock</Link>
        <Link to="/ui">Test Material UI</Link>
        <Link to="/album/Singles">Album details</Link>
        <Link to="/album/Singles/song/Motorbreath"> Detail songs</Link>
        &nbsp;
        <Link to="/photos">Photos</Link>
        &nbsp;
        <Link to="/username">Username</Link>
        <Route exact path="/" component={Home}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
        
        <Route path="/album/:albumname/song/:songname" component={SongDetails}></Route>
        <Route path="/album/:albumname" component={Detail}></Route>
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
        <Route path="/rock" component={GroupeRock} />
      </BrowserRouter>
    </div>
  );
}

export default App;
