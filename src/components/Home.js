import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase-config";
import Header from "./Header";
import SideBare from "./SideBare";
import Story from "./Story";
import '../components/css/Home.css'
import Sponserd from "./Sponserd";
import Feeds from './Feeds'


const Home = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  


  return (
    <div>
      <Header user={user} />
      <div className="content">
        <SideBare user={user} />
        <Story />
        <Sponserd />
      </div>
      <div className="c">
        <Feeds user={user}/>
      </div>
    </div>
  );
};

export default Home;
