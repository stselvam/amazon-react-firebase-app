// Start Node imports
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// End Node imports

// Start State Providers
import {useStateValue} from "../../Services/StateProvider"
import { auth } from '../../Services/Firebase';
// End State Providers

// Start Components
// End Components

// Start Stylesheet
import "./Header.css";
// End Stylesheet

function Header({Link}) {

    const [{cart, user}, dispath] = useStateValue();

    const handleSignOutAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="page__header">
            <Link to="/">
                <img src="/images/logo/full_logo.webp" alt="Amamzon" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/sign-in'} className="header__option" onClick={handleSignOutAuthentication}>
                    <span className="header__optionLineOne">Hello {user? user.email : 'Guest'}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in' }</span>
                </Link>
                <Link to="/orders" className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">&amp; Orders</span>
                </Link>
                <Link to="/prime" className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </Link>
                <Link to="/checkout" className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                </Link>
            </div>
        </div>
    )
}

export default Header
