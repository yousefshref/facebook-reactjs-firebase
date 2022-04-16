import { Avatar } from "@mui/material";
import React from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai'
import '../components/css/Sponserd.css'


const Sponserd = () => {
  return (
    <div className="sponserd">
      <h3>Sponsoerd</h3>
      <hr></hr>
      <h4>Your Pages</h4>
      <div className="pages">
        <Avatar />
        <p>Your Page Name</p>
        </div>
        <div className="notes">
          <p>8 Notifications</p>
          <p>Create promotion</p>
        </div>
        <hr />
        <h3>Group conversations</h3>
        <div className="groups">
          <i><AiOutlinePlusCircle /></i>
          <p>Create new Group</p>
        </div>
    </div>
  );
};

export default Sponserd;
