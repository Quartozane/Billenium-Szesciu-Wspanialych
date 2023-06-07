import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const PatientPatientCardPage = () => {
    const getPatientCard = sendRequest('get', '/patientCard/patientcard');
    console.log(getPatientCard);

    return (
        <Container>

        </Container>
    );
}

export default PatientPatientCardPage;
