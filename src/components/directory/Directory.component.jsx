import React from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import './Directory.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {

    const handleClick = () => {
        console.log('clicked: ')
    }

    return (
        <div className='directory-menu' onClick={() => handleClick()}>
            {sections.map(({ title, imageUrl, id, size }) =>
                (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
            )
            }
        </div>);
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);