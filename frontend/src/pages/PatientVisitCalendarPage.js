import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const PatientVisitCalendarPage = () => {
    const getVisitCalendar = sendRequest('get', '/patientCard/patientcalendar');
    console.log(getVisitCalendar);

    return (
        <Container>

        </Container>
    );
};

export default PatientVisitCalendarPage;

