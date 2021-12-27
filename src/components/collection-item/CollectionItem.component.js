import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton.component';
import { addItem } from '../../redux/cart/cart.action';
import './collection-item.styles.scss';


const CollectionitemComponent = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;

    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='title'>{name}</span>
                <span className='title'>$ {price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,
    mapDispatchToProps
)(CollectionitemComponent);
