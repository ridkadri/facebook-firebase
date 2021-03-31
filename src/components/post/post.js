import { Avatar } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';
import React from 'react';
import './post.css';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Post = ({profilePic, message, timestamp, imgName, username}) => {
    console.log(timestamp)
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar'/>
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                    
                </div> 
            </div>

            <div className='post_bottom'>
                <p>{message}</p>
            </div>

            {
                imgName ? (
                    <div className='post_image'>
                        <img src={`http://localhost:9000/retrieve/images/single?name=${imgName}`} alt=''/>
                    </div>
                ) : (
                    console.log('DEBUG >>> no image here')
                )
            }

            
            
            <div className='post_options'>
                        <div className='post_option'>
                            <ThumbUpIcon/>
                            <p>Like</p>
                        </div>
                        <div className='post_option'>
                            <ChatBubbleOutlineIcon/>
                            <p>Comment</p>
                        </div>
                        <div className='post_option'>
                            <NearMeIcon/>
                            <p>Share</p>
                        </div>
                        <div className='post_option'>
                            <AccountCircleIcon/>
                            <ExpandMoreOutlined/>
                        </div>
                    </div>
        </div>
    )
}

export default Post
