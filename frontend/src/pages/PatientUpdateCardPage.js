import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";


const PatientUpdateCardPage = () => {
    const getPatientCard = sendRequest('put', '/patientCard/updatecard', {
        patientId: '6473f4b78f4eff2057490419',
    }, {
        patientCardAndPatient: {
            userPatient: {
                address: "Nowy adres456",
                phoneNumber: "991222333",
            },
            patientCard: {
                NFZDepartment: "Nowy oddział123",
            },
        },
    });
    console.log(getPatientCard);

    return (
        <Container>

        </Container>
    );
}

export default PatientUpdateCardPage;
