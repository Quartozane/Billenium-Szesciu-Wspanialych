import React, { useState } from "react";
import logo from "../images/logo.png";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { Navbar, NavbarBrand, Container, Image } from "react-bootstrap";
import { getUser } from "../currentUserStorage";
import { Navigate, Link } from "react-router-dom";

const Header = () => {
    const [sidebarContent, setSidebarContent] = useState();
    if(getUser() == null) {
        // return(<Navigate to={'/'}/>);
    } else if(getUser() == "Pacjent") {
        (<SidebarItem><Link>xd</Link></SidebarItem>);
    } else if(getUser() == "Lekarz") {
        
    } else if(getUser() == "Recepcjonista") {
        
    }

    return (
        <Navbar bg="primary">
            <Container fluid >
                <NavbarBrand className="text-light fw-semibold" href="#" id="header-brand">
                    <Image src={logo} width={36} />
                    Przychodnia studencka Wielkie Serce
                </NavbarBrand>
                <Sidebar>
                    {}
                    <SidebarItem><Link></Link></SidebarItem>
                </Sidebar>
            </Container>
        </Navbar>
    )
}

export default Header;
