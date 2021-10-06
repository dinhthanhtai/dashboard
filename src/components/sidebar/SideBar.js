import React from 'react';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import './styles.scss';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__wrapper'>
                <div className='sidebar__menu'>
                    <h3 className='sidebar__menu--title'> Dashboard </h3>
                    <ul className='sidebar__menu--list'>
                        <li className='sidebar__menu--listItem active'>
                            <LineStyleIcon className='sidebar__icon' />
                            Home
                        </li>
                        <li className='sidebar__menu--listItem'>
                            <TimelineIcon className='sidebar__icon' />
                            Analytics
                        </li>
                        <li className='sidebar__menu--listItem'>
                            <TrendingUpIcon className='sidebar__icon' />
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
