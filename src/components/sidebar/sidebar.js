import React from 'react';
import './sidebar.css';

import SidebarRow from '../sidebarRow/sidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {useStateValue} from '../../context/StateProvider';

const Sidebar = () => {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={ExpandMoreIcon} title='More'/>
        </div>
    )
}

export default Sidebar;
