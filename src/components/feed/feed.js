import React,{useState, useEffect} from 'react';
import StoryReel from '../storyReel/storyReel';
import MessageSender from '../messageSender/messageSender';
import Post from '../post/post';
import './feed.css';

import axios from '../../axios';
import Pusher from 'pusher-js';

const pusher = new Pusher('f46500a5505adda273fa', {
    cluster: 'us3'
});

const Feed = () => {
    const [profilePic, setProfilePic] = useState('');
    const [postsData, setPostsData] = useState([]);

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
        })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed();
        });
    }, [])

    useEffect(() => {
        syncFeed()
    }, [])

    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName = {entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed
