import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage.component.js';
import ShopPage from './components/shop/ShopPage.component';
import Header from './components/header/Header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up-page/SignInAndSignUpPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          });
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='body' >
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign" element={<SignInAndSignUp />} />
        </Routes>

      </div>
    );
  }
}

export default App;
