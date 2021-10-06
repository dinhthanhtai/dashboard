import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

import imageAvatar from './assets/12.jpg';

import './styles.scss';

const TopBar = () => {
    return (
        <div className='topBar'>
            <div className='topBar__wrapper'>
                <div className='topBar__wrapper--Left'>
                    <span className='topBar__logo'>
                        Hong Hanh 
                    </span>
                </div>
                <div className='topBar__wrapper--right'>
                    <div className='topBar__iconContainer'>
                        <NotificationsNoneIcon /> 
                        <span className='topBar__iconContainer--badge'>2</span>
                    </div>
                    <div className='topBar__iconContainer'>
                        <LanguageIcon /> 
                        <span className='topBar__iconContainer--badge'>2</span>
                    </div>
                    <div className='topBar__iconContainer'>
                        <SettingsIcon /> 
                    </div>
                    <img className='topBar__avatar' src={imageAvatar} alt="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
