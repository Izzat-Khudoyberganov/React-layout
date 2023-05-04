import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderInfo from "./HeaderInfo";

import "./style.css";

const Header = () => {
    return (
        <header className='page-header'>
            <HeaderNav />
            <HeaderInfo />
        </header>
    );
};
export default Header;
