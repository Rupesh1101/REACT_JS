import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu  = () => {

    return(
        <>
            <h4>Without Reloading the page</h4>
            <NavLink exact activeClassName="active_class" to='/'>About us</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'> Contact us</NavLink>
            <br/>
            <h4>With Reloading the page</h4>
            <a href='/'> About us </a>
            <a href='/contact'>  Contact us</a>
        </>
    )
}

export default Menu;