import React from 'react';
import { useNavigate } from 'react-router-dom';

import './MenuItem.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${linkUrl}`);
    }

    return (
        <div className={`${size} menu-item`} onClick={() => handleClick()}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image' />
            <div className='content'>
                <h3 className='title'>{title.toUpperCase()}</h3>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>

    );
}

export default MenuItem;
