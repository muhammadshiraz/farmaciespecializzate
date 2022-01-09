import React from 'react';
import Logo from '../../logo.svg';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><img src={Logo} alt="Farmacie Specializzate" /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Specializations</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>THE RELATIONSHIP WITH YOU</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Scientific insights</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
