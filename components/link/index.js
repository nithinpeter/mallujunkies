import React from "react";

const Link = ({ children, onFilterLinkClick, filter }) => {
    console.log(onFilterLinkClick);
    return <a onClick={ () => onFilterLinkClick(filter) } >{children}</a>
}

export default Link;