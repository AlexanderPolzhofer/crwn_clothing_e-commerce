import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const publishableKey = 'pk_test_51KO2cDAyF09YQ8FuG86QwGyfnhHlqAqhXI6EPusfD6Hw9Lnf25uO9biLJzLNIPhYOb6uaVaLrBW03JnQNtPNPGZJ005qdJbZ7r';
    const priceForStripe = price * 100;

    const onToken = token => {
        console.log('Thats the token: ', token)
        alert('Your payment was successful!')
    }

    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panellabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
}

export default StripeButton;
