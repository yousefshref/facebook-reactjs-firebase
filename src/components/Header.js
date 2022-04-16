import { Avatar } from "@mui/material";
import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {RiGroupLine} from 'react-icons/ri'
import {BsFlag} from 'react-icons/bs'
import {RiGroup2Line} from 'react-icons/ri'
import {RiGamepadLine} from 'react-icons/ri'
import {RiApps2Line} from 'react-icons/ri'
import {FiMessageCircle} from 'react-icons/fi'
import {CgBell} from 'react-icons/cg'
import {BsArrowDownShort} from 'react-icons/bs'
import '../components/css/Header.css'
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";

const Header = ({user}) => {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="header">
      {user ? <>
        <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
        <i><AiOutlineSearch /></i>
        <input type='text' placeholder="Search Facebook"/>
        <h5 className="logout" onClick={logout}>Log Out</h5>
      </div>
      <div className="header__center">
        <i><AiOutlineHome /></i>
        <i><RiGroupLine /></i>
        <i><BsFlag /></i>
        <i><RiGroup2Line /></i>
        <i><RiGamepadLine /></i>
      </div>
      <div className="header__right">
        <div className="user">
          <i><Avatar src="" sx={{ width: 30, height: 30 }}/></i>
          <p>{user?.email}</p>
        </div>
        <div className="options">
          <i><RiApps2Line /></i>
          <i><FiMessageCircle /></i>
          <i><CgBell /></i>
          <i><BsArrowDownShort /></i>
        </div>
      </div>
      </> : <>
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
        <i><AiOutlineSearch /></i>
        <input type='text' placeholder="Search Facebook"/>
      </div>
      <div className="header__center">
        <i><AiOutlineHome /></i>
        <i><RiGroupLine /></i>
        <i><BsFlag /></i>
        <i><RiGroup2Line /></i>
        <i><RiGamepadLine /></i>
      </div>
      <div className="header__right">
        <div className="options">
          <i><RiApps2Line /></i>
          <i><FiMessageCircle /></i>
          <i><CgBell /></i>
          <i><BsArrowDownShort /></i>
        </div>
      </div>
      </>}
    </div>
  );
};

export default Header;
