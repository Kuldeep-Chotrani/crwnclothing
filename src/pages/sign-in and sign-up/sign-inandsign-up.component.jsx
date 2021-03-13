import React from 'react';
import './sign-inandsign-up.styles.scss';
import SignIN from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

class SignInandSignUpPage extends React.Component{


    render() {
        return(
            <div className = 'sign-in-and-sign-up'>
            <SignIN />
  
            <SignUp />
            </div>
           
        )
    }
}
export default SignInandSignUpPage;