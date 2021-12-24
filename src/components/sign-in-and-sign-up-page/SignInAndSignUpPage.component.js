import React from 'react';

import SignIn from '../sign-in/SignIn.component';
import SignUp from '../sign-up/SignUp.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
    return (

        <div className='sign-in-and-sign-up'>
            <SignIn />

            <SignUp />
        </div>



    );
}

export default SignInAndSignUp;
