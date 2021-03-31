import React from 'react';

/*Material UI Icons */
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';

import { Avatar, IconButton} from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './header.css';



const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.jpg'
                alt='facebook-logo'/>
            </div>

            <div className='header_input'>
                <SearchIcon/>
                <input placeholder='Search Facebook' type='text'/>
            </div>

            <div className='header_center'>
                <div className='header_option header_option--active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <SubscriptionsOutlinedIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <StoreOutlinedIcon fontSize='large'/>
                </div>
            </div>

            <div className='header_right'>
                <div className='header_info'>
                    <Avatar src="https://ridkadri.com/static/rid.5801c40167.jpg"/>
                    <h4>Ridwan</h4>

                    <IconButton>
                        <AddOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <ForumOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>

                </div>
            </div>

        </div>
    )
}

export default Header;