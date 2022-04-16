import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import "../components/css/Posts.css";
import Avatar from "@mui/material/Avatar";
import {FcLike} from 'react-icons/fc'
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentAdd} from 'react-icons/bi'
import { Link } from "react-router-dom";

const Posts = ({user}) => {
  //recive datat
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getPost();
  });
  //recive datat

  const posts = postList.sort(function(a, b) {
    if(a.date.date < b.date.date) {return 1}
    if(a.date.date > b.date.date) {return -1}
    return 0
  })

  var current = new Date()
  // {console.log(posts)}

  return (
    <div className="posts">
      {user ? <>
        <div className="post">
        {posts.map((post) => {
          return (
            <div className="post__insid">
              <div className="post__up">
                <i>
                  <Avatar />
                </i>
                <p>{post.name.name}</p>
              </div>
                <div className="date">
                  <p>{post.date.date}</p>
                </div>
              <div className="post__content">
                <h5>{post.post}</h5>
                <div className="reacts">
                  <i>15 <FcLike /></i>
                  <p>3 Comments</p>
                </div>
                </div>
                <hr />
                <div className="likes">
                  <div className="likes__like">
                    <i><AiOutlineLike /></i>
                    <p>Likes</p>
                  </div>
                  <div className="likes__comment">
                    <i><BiCommentAdd /></i>
                    <p>Comment</p>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
      </>: 
      <>
      <div className="notuser">
      <h1>you should login in to see posts and make your own posts</h1>
      <Link className="notuser-logs" to='/login'>Log In</Link>
      <Link className="notuser-logs" to='/register'>Sign Up</Link>
      </div>
      </>
      }
    </div>
  );
};

export default Posts;
