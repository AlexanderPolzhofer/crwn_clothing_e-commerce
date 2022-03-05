import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage = () => {

    //const unsubscribeFromSnapshot = null;

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(snapshot => {
            convertCollectionsSnapshotToMap(snapshot);
        })
    }, []);

    let location = useLocation();

    const checkUrl = () => {
        if (location.pathname === '/shop') {
            return <CollectionsOverview />;
        }
        return <Outlet />;
    }

    return (< div className="shop-page" >
        {checkUrl()}
    </div >);
}


export default ShopPage;