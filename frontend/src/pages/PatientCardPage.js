import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const PatientCardPage = () => {

    const getPatientCard = sendRequest('get', '/doctorCardAndDoctor/patientcard/6473f5088f4eff205749041c');

    console.log(getPatientCard);

    return (
        <Container>

        </Container>
    );
}

export default PatientCardPage;
