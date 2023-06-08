import React from "react";
import { Container } from "react-bootstrap";
import { sendRequest } from "../sendRequest";
import { getUser } from "../currentUserStorage";


const DoctorCardPage = () => {
    const user = getUser();
    const getDoctorCard = sendRequest('get', '/doctorCardAndDoctor/doctorcard');

    console.log(getDoctorCard);

    return (
        <Container>
            xD
        </Container>
    );
};

export default DoctorCardPage;
