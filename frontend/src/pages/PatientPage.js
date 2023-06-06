import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const PatientPage = () => {

    const getPatientPage = sendRequest('get', '/patientCard');
    console.log(getPatientPage);

    return (
        <Container>

        </Container>
    );
};

export default PatientPage;
