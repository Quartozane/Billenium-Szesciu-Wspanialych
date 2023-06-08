import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const DoctorVisitationPage = () => {
    
    const patientId = '';
    const visitationId = '';
    const getVisitation = sendRequest('get', '/doctorCardAndDoctor/visitations/64749183ee5d89e1a257e1ea');

    console.log(getVisitation);

    return (
        <Container>

        </Container>
    );
};

export default DoctorVisitationPage;
