import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../preview-collection/PreviewCollection.component';
import './collections-overview.styles.scss';

const CollectionsOverviewComponent = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) =>
                (<CollectionPreview key={id} {...otherCollectionProps} />)
            )}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverviewComponent);
