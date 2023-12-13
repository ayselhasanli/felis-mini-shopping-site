import React from "react";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Menu, Dropdown } from "antd";
import "./../assets/css/header/header.css";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <div className="text-center">
        <Link className="black" to="/jewelry">
          Jewelry
        </Link>
      </div>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/shoes">Shoes</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/bags">Bags</Link>
    </Menu.Item>
    <Menu.Item key="4" path="/sweaters">
      <Link to="/sweaters">Sweaters</Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/eyewears">Eyewears</Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link to="/shirts">Shirts</Link>
    </Menu.Item>
  </Menu>
);

const userMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/login">
        <div className="d-flex justify-center">
          <button
            onClick={() => window.location.replace("/login")}
            className="userBtn btn"
          >
            Login
          </button>
        </div>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/register">
        <div className="d-flex justify-center">
          <button className="userBtn btn">Register</button>
        </div>
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section id="header">
      <div
        className={
          isTabletOrMobile
            ? "header font d-flex justify-between align-items-center d-none"
            : "header font d-flex justify-between align-items-center"
        }
      >
        <div>
          <ul className="list-unstyled d-flex bold">
            <li
              className="pointer"
              onClick={() => window.location.replace("/#about")}
            >
              ABOUT
            </li>
            <li className="pointer">
              <Dropdown overlay={menu}>
                <span onClick={(e) => e.preventDefault()} className="black">
                  SHOP NOW
                </span>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className="logo">
          <h1 className="bold">
            <div
              className="link pointer mt-2"
              to="/"
              onClick={() => window.location.replace("/#news")}
            >
              FELIS
            </div>
          </h1>
        </div>
        <div>
          <ul className="icon-list list-unstyled d-flex bold">
            <li
              className="pointer"
              onClick={() => window.location.replace("/#favorites")}
            >
              <FaHeart />
            </li>
            <li>
              <Dropdown overlay={userMenu}>
                <FaUserAlt
                  onClick={(e) => e.preventDefault()}
                  className="black"
                />
              </Dropdown>
            </li>
            <li className="link">
              <div class="cart">
                <FaShoppingCart />
                <span class="badge">2</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isTabletOrMobile
            ? "header font d-flex justify-between align-items-center"
            : "header font d-flex justify-between align-items-center d-none"
        }
      >
        <div className="header d-flex justify-between">
          <div className="logo">
            <h1 className="bold">
              <Link className="link" to="/">
                FELIS
              </Link>
            </h1>
          </div>
          <div className="menu">
            <button className="btn pointer">
              <VscMenu />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
