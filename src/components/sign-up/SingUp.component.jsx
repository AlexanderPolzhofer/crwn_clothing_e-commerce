import React from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { auth, createUserProfilDocument } from '../../firebase/firebase.utils';
import './SignUp.styles.scss';


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        return (
            <div className='sign-up'>

            </div>
        );
    }

}

export default SignUp;
