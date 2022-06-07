import React from "react";
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <Link to='/'>home</Link>
      <Link to='/contact'>contact</Link>
    </nav>
  );
}