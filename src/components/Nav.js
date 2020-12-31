import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ()=>{
    return(
        <div className='myNav'>
            <div class='navItems'>
                <NavLink to='/'><p>HOME</p></NavLink>
                <NavLink to='/posts'><p>POSTS</p></NavLink>
            </div>          
        </div>
    )
}

export default Nav