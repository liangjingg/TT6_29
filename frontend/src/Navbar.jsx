import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li>
          <Link to="/transaction">Transaction</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;