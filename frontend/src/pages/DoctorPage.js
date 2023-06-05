import React from "react";
import { Button, Container } from "react-bootstrap";
import './DoctorPage.css';
import { getUser } from "../currentUserStorage";
import { sendRequest } from "../sendRequest";
import { Link } from "react-router-dom";


const DoctorPage = () => {
    
    let currentUser = getUser();

    const getUpcomingVisitations = sendRequest('get', '/visADocAPat');

    console.log(getUpcomingVisitations); 

    return (
        <Container>
            <Link to='/VisitCalendar'>
                <Button vars>
                    Pokaż kalendarz wizyt
                </Button>
            </Link>
        </Container>
    );
};

export default DoctorPage;
