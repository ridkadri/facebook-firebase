import { Avatar, Input } from '@material-ui/core';
import React,{useState} from 'react';
import './messageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import {useStateValue} from '../../context/StateProvider';
import db from '../../firebase';
import firebase from 'firebase';


const MessageSender = () => {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setImageUrl('');
        setInput('');
    }


    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        className='messageSender_input'
                        placeholder={`Whats on your mind, ${user.displayName}?`}
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />
                    <input 
                        value={imageUrl}
                        placeholder='Image URL(Optional)'
                        onChange={(e)=> setImageUrl(e.target.value)}
                    />
                        
                    <button 
                        onClick={handleSubmit} 
                        type='submit'></button>
                </form>
            </div>

            <div className='messageSender_bottom'>
                <div className='messageSender_option'>
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender_option'>
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender_option'>
                    <InsertEmoticonIcon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
