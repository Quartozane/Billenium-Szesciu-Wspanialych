import React from "react";
import { useState } from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, OffcanvasTitle, ListGroup, Button } from "react-bootstrap";
import { RxHamburgerMenu } from 'react-icons/rx';

const Sidebar = ({children}) => {
    const [is_shown, setShow] = useState(false);

    const closeSidebar = () => setShow(false);
    const showSidebar = () => setShow(true);

    return (
        <>
            <Button onClick={showSidebar} variant="outline-light">
                <RxHamburgerMenu />
            </Button>

            <Offcanvas show={is_shown} placement="end" onHide={closeSidebar}>
                <OffcanvasHeader closeVariant="white" className="bg-primary" closeButton>
                    <OffcanvasTitle className="text-light">
                        Strona główna
                    </OffcanvasTitle>
                    
                </OffcanvasHeader>
                <OffcanvasBody>
                    <ListGroup variant="flush">
                        {children}
                    </ListGroup>
                </OffcanvasBody>
            </Offcanvas>
        </>
        
    )
}

export default Sidebar;
