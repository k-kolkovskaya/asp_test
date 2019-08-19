import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header className="header">
      <div className="header__main">
        <div className="page-wrapper">
          <div className="header__main-inner">
            <div className="header__logo">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className="nav-menu">
              <nav className="nav-menu__wrapper">
                <ul className="nav-menu__list">
                  {props.navItems.map(item => {
                      return <NavItem title={item.title} href={item.href} key={item.id} />;
                  })}
                  <li className="nav-menu__item">
                    <a href="/" className="btn">
                      En
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Header;
