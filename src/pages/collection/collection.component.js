import React from 'react';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';
import './collection.styles.scss';


const CollectionPage = () => {


    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));

    console.log(collection)

    return (
        <div className='collection-page'>
            <h1>{collectionId}</h1>
            {collection.items.map(item => item.name)}
        </div>
    );
}


export default CollectionPage;
