import React from "react";
import PropTypes from "prop-types";

function NavItem(props) {
    return (
        <li className="nav-menu__item">
            <a href={props.href} className="nav-menu__link nav-menu__link">
                {props.title}
            </a>
        </li>
    );
}

NavItem.propTypes = {
    title: PropTypes.string.isRequired
};

export default NavItem;
