import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage.component.js';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import CheckoutPage from './pages/checkout/checkout-page.component';


import SignInAndSignUp from './components/sign-in-and-sign-up-page/SignInAndSignUpPage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './pages/collection/collection.component';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()
          });
        })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className='body' >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/shop/:collectionId' element={<CollectionPage />} />
          <Route path="/signin" element={this.props.currentUser ? <Navigate to='/' /> : <SignInAndSignUp />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
