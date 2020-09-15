import React, { useEffect } from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'
import { useStateProviderValue } from '../../../StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateProviderValue();
    console.log(user);
    return (
        <div className="header">
            <div className="header__left">
            <SearchIcon />
            <input
                 placeholder="Search for Artits, songs..."
                 type="text"
            />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header
