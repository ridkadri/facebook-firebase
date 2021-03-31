import React from 'react';
import './sidebar.css';

import SidebarRow from '../sidebarRow/sidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://ridkadri.com/static/rid.5801c40167.jpg' title='Ridwan'/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={ExpandMoreIcon} title='More'/>
        </div>
    )
}

export default Sidebar;
