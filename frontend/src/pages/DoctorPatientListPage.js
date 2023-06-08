import React from "react";
import { Container } from "react-bootstrap";
import { sendRequest } from "../sendRequest";


const PatientList = () => {

    const user = getUser();
    const getPatientList = sendRequest('get', '/doctorCardAndDoctor/patientlist');

    console.log(getPatientList);

    return (
        <Container>
            
        </Container>
    );
};

export default PatientList;
