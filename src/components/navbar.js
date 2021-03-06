import React from 'react';

const Navbar = (props) => (
    <nav>
       <h2><a className="logo-link" href="#">{props.title}</a></h2>
       <ul className="nav-menu">
         <li><a className="nav-menu__link" href="#">Home</a></li>
         <li><a className="nav-menu__link" href="#">Best Actor</a></li>
         <li><a className="nav-menu__link" href="#">Best Actress</a></li>
         <li><a className="nav-menu__link" href="#">Best Films</a></li>
       </ul>
     </nav>

);

export default Navbar;