import React, { Component } from "react";
import Menu from "./images/bars-solid.svg";
import Close from "./images/times-solid.svg";
import CartIcon from "./images/shopping-cart-solid.svg";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return(
      <header>
        <div className="menu">
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Nike</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Login / Register</Link></li>
            <li><Link to="/">Home</Link></li>
            <li className="close">
                <img src={Close} alt="" width="20"/>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;