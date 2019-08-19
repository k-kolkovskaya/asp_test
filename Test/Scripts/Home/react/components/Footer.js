import React from "react";
import NavItem from "./NavItem";
import PropTypes from "prop-types";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="page-wrapper">
                    <div className="footer__main-inner">
                        <div className="nav-menu">
                            <nav className="nav-menu__wrapper">
                                <ul className="nav-menu__list">
                                    {props.navItems.map(item => {
                                        return (
                                            <NavItem
                                                title={item.title}
                                                href={item.href}
                                                key={item.id}
                                            />
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Footer;
