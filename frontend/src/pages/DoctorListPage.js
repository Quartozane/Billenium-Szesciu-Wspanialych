import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const DoctorListPage = () => {
    const getDoctorList = sendRequest('get', '/patientCard/doctors');

    console.log(getDoctorList);
    return (
        <Container>

        </Container>
    );
};

export default DoctorListPage;
