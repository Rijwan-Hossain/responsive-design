import React from 'react'
import Link from 'next/link'

import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem 
} from 'reactstrap'; 

class Header extends React.Component { 
  constructor(props) { 
    super(props); 

    this.toggle = this.toggle.bind(this); 
    this.state = { 
      isOpen: false 
    }; 
  }  
  toggle() { 
    this.setState({ 
      isOpen: !this.state.isOpen 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <Navbar className="container" color="white" light expand="md"> 
          <NavbarBrand href="/">My Porto</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} /> 
          <Collapse isOpen={this.state.isOpen} navbar> 
            <Nav className="ml-auto" navbar> 
              <NavItem> 
                  <Link href="/"> 
                      <a style={{fontSize: '20px'}} className="nav-link text-primary">Home</a> 
                  </Link> 
              </NavItem> 
              <NavItem> 
                  <Link href="about"> 
                      <a style={{fontSize: '20px'}} className="nav-link text-primary">About</a> 
                  </Link> 
              </NavItem> 
            </Nav> 
          </Collapse> 
        </Navbar> 
      </div> 
    ); 
  } 
} 

export default Header; 
