import React from "react";
import { Container } from "react-bootstrap";
import { sendRequest } from "../sendRequest";
import { getUser } from "../currentUserStorage";


const VisitCalendarPage = () => {
    const user = getUser();
    const getVisitCalendar = sendRequest('get', '/doctorCardAndDoctor/calendars');
    
    console.log(getVisitCalendar);

    return (
        <Container>
            
        </Container>
    );
};

export default VisitCalendarPage;
