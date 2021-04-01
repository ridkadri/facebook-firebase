import { Avatar } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';
import React from 'react';
import './post.css';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Post = ({profilePic, message, timestamp, image, username}) => {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar'/>
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    
                </div> 
            </div>

            <div className='post_bottom'>
                <p>{message}</p>
            </div>

            
            <div className='post_image'>
                <img src={image} alt=''/>
            </div>
                

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
