import React from 'react'
import './post.css'
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { Users } from "../../dumydata";

import { useState } from "react"
export default function Post({ Post }) {

   
    const [like , setLike] = useState(Post.like)
    const [isLiked, setIsLiked] = useState(false)
    const likedHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }

    return (


        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">

                        <img className="postLEftimage" alt="" src={Users.filter((u) => u.id === Post.userId)[0].profilePicture} />
                        <span className="postusername">{Users.filter((u) => u.id === Post.userId)[0].username}</span>
                        <span className="posttime">{Post.date}</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVertSharpIcon />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{Post?.desc}</span>
                    <img src={Post.photo} alt="" className="postimg" />
                </div>
                <div className="postBottom"    >



                    <div className="postBottomLeft">
                        <img className="likeicon" alt="" onClick={likedHandler}  src="images/add/like.png" />
                        <img className="likeicon" alt="" onClick={likedHandler}   src="images/add/heart.png"  />
                        <span className="postlikeCounter">{like}  People Liked </span>


                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{Post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

