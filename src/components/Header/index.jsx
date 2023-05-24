import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderInfo from "./HeaderInfo";

import "./style.css";

const Header = ({ alisher, name }) => {
    return (
        <header className='page-header'>
            <HeaderNav azizbek={alisher} />
            <HeaderInfo name={name} />
        </header>
    );
};
export default Header;
