import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderInfo from "./HeaderInfo";

import "./style.css";

const Header = ({ alisher }) => {
    return (
        <header className='page-header'>
            <HeaderNav azizbek={alisher} />
            <HeaderInfo />
        </header>
    );
};
export default Header;
