import React from "react";
import '../homepage.styles.scss';

export const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h3>HATS</h3>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h3>JACKETS</h3>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h3>SNEAKERS</h3>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h3>WOMEN</h3>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h3>MEN</h3>
                        <span>SHOP NOW</span>
                    </div>
                </div>

            </div>
        </div>);
}