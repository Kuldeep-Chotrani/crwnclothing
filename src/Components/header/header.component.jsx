import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
const Header = ({currentUser, hidden}) =>
(
    <div className ='header'>
        <Link className ='logo-container' to = "/">
        <Logo className = 'logo'>
        </Logo>
        </Link>
       
        <div className ='options'>   
          
            <Link className ="option" to ='/shop'>Shop</Link>
            <Link className = "option" to = '/shop'>Contact</Link>
            {
                currentUser ?
                (
                    <div className = "option" onClick = {()=> auth.signOut()}>SignOut</div>):
                    (  <Link className = "option" to = '/signin'>SignIn</Link>)
            }
            <CartIcon />
            
        </div>
       { hidden ?
        null:
        (<CartDropdown />)
       }
    </div>
)
const mapStateToProps =createStructuredSelector
({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});
export default connect(mapStateToProps)(Header);