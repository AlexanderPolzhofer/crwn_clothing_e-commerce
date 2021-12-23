import React from 'react';
import SignIn from '../sign-in/SignIn.component';
import './SignInAndSignUpPage.component.scss';

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <h3>SIGN IN</h3>
            <SignIn />
        </div>
    );
}

export default SignInAndSignUp;
