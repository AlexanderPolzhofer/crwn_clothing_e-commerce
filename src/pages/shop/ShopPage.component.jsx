import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => {

    let location = useLocation();

    const checkUrl = () => {
        if (location.pathname === '/shop') {
            return <CollectionsOverview />;
        } else {
            return <Outlet />;
        }
    }

    return (< div className="shop-page" >
        {checkUrl()}
    </div >);
}


export default ShopPage;