// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
          onDoubleClick={toggleLike}
        />
        {liked ? 
        (<div>
          <i className="fas fa-heart fa-4x big-heart" style={{ color: "red" }}/>
        </div>) : null}
      </div>
      <LikeSection likes={likes} liked={liked} toggleLike={toggleLike} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
