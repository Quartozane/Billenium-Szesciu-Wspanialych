import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";
import { getUser } from "../currentUserStorage";


const PatientUpdateCardPage = () => {
    const getPatientCard = sendRequest('put', '/patientCard/updatecard', null, {
        patientId: getUser()['id'],
        patientCardAndPatient: {
            userPatient: {
                address: "ul. Nowa 7, Łódź",
                phoneNumber: "234567890",
            }, 
            patientCard: {
                activePackage: "",
                allergies: "",
                conditions: "",
                ewusstatus: "",
                medications: [],
                NFZDepartment: "Chirurgia",
                osozcard: "",
                patientId: {}
            },
        },
        patientId: getUser()['id'],
    });
    console.log(getPatientCard);

    return (
        <Container>

        </Container>
    );
}

export default PatientUpdateCardPage;
