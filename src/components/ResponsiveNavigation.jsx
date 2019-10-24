import React, { useState } from 'react';
import { Link } from '@reach/router';

function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo})  {
    const [ hoverIndex, setHoverIndex ] = useState(-1);
    const [ navOpen, setNavOpen ] = useState(false);
console.log( navOpen, linkColor, logo)

  return (
      <nav
        className="responsive-toolbar"
        style={{ background }}> 
          <ul 
            style={{ background }}
            className={ navOpen ? 'active' : '' }>
          <figure onClick={ () => setNavOpen(!navOpen)}>
            <img src={logo} height="40px" width="40px" alt="logo-nav-toggler"/>
          </figure>
              {navLinks.map((link, index) => 
                <li
                  onMouseEnter={ () => setHoverIndex(index)}
                  onMouseLeave={ () => setHoverIndex(-1)}
                  style={{ background: hoverIndex === index ? ( hoverBackground || 'rgb(83, 119, 75)') : '' }}                 
                > 
                  <Link
                    to={link.path}
                    style={{ color: linkColor || '#DDD'}}
                  >
                  { link.text }
                    <i className= { link.icon } />
                  </Link>
                </li>
              )}
              
          </ul>
      </nav>
  )    
}

export default ResponsiveNavigation 