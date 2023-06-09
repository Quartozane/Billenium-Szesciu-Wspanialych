import React from "react";
import logo from "../images/logo.png";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { Navbar, NavbarBrand, Container, Image } from "react-bootstrap";
import { getUser } from "../currentUserStorage";

const Header = () => {

    return (
        <Navbar bg="primary">
            <Container fluid >
                <NavbarBrand className="text-light fw-semibold" href="#" id="header-brand">
                    <Image src={logo} width={36} />
                    Przychodnia studencka Wielkie Serce
                </NavbarBrand>
                <Sidebar>
                    {
                        () => {
                            if(getUser === null) {
                                
                            }
                        }
                    }
                    <SidebarItem> Opcja 1 </SidebarItem>
                </Sidebar>
            </Container>
        </Navbar>
    )
}

export default Header;
