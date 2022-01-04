import React from 'react';

import CollectionItem from '../../components/collection-item/CollectionItem.component';

import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';

import './collection.styles.scss';

const CollectionPage = () => {

    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));

    return (
        <div className='collection-page'>
            <h2 className='title'>{collectionId}</h2>
            <div className='items'>
                {collection.items.map(item =>
                    <CollectionItem key={item.id} item={item} />)}
            </div>

        </div>
    );
}

export default CollectionPage;
