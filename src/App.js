import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PostContainer from "./container/PostContainer";
import Modal from "./components/PostModal";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ProfileView from './components/ProfileView'

function App() {
  const [isOpenState, setIsOpen] = useState(false);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact >
        <div className="App">
          
          <PostContainer />
          <Modal
            isopen={isOpenState}
            openState={(item) => {
              setIsOpen(item);
            }}
          />

          <button
            id="Add__Post__Btn"
            onClick={() => {
              setIsOpen(true);
              console.log(isOpenState);
            }}
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>

        </Route>
        <Route path="/profile/:id">
          <ProfileView />
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
