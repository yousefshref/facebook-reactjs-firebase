import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../components/css/Feeds.css";
import { MdLiveTv } from "react-icons/md";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import { getDatabase, ref, set } from "firebase/database";
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { async } from "@firebase/util";
import { auth, db } from "../firebase-config";
import Posts from '../components/Posts'

const Feeds = ({ user }) => {
    //send datat
    const [post, setPost] = useState('')
    const postCollectionRef = collection(db, 'posts')
    //send datat

    
    var current = new Date()
    
    //send datat
    const createPost = async (e) => {
        await addDoc(postCollectionRef, {
            date:{date:current.toLocaleString()},
            name:{name:auth.currentUser.email, id:auth.currentUser.uid},
            post,
        })
      }
    //send datat



  return (
    <>
      <div className="feeds">
        <div className="feeds__up">
          <div className="wts1">
            <i>
              <Avatar src="" />
            </i>
            <input className="wts1In" placeholder={`What's in your mind, ${user?.email}`} 
              onChange={(e) => {setPost(e.target.value)}}/>
            <input className="ss" type='submit' onClick={createPost} value='Post Now'/>
          </div>
        </div>
        <br />
        <hr className="hr" />
        <br />
        <div className="feeds__down">
          <div className="feeds__down__item">
            <i className="red">
              <MdLiveTv />
            </i>
            <p>Live video</p>
          </div>
          <div className="feeds__down__item">
            <i className="green">
              <MdOutlinePhotoSizeSelectActual />
            </i>
            <p>Photo/vieo</p>
          </div>
          <div className="feeds__down__item">
            <i className="yellow">
              <BsEmojiSmile />
            </i>
            <p>Feelings/activaty</p>
          </div>
        </div>
      </div>
      <div className="room">
        <div className="room__create">
          <i>
            <RiLiveLine />
          </i>
          <p>Create room</p>
        </div>
      </div>
      <div>
        <Posts user={user}/>
      </div>
    </>
  );
};

export default Feeds;
