import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import api from '../api/axiosConfig';
import { getUserId } from "../currentUserStorage";


const PatientVisitCalendarPage = () => {

    useEffect(() => {
        getVisitation();
    }, []);
    
    const [visitation, setVisitation] = useState([]);

    const getVisitation = () => {
        api({
            url:'/patientCard/calendars',
            method: 'get',
            params: {
                id: getUserId(),
            }
        }).then(
            (response) => {
                setVisitation(response.data);
            }
        ).catch(
            (e) => {
                alert(e);
            }
        )
    };
    console.log(visitation);

    return (
        <Container>
            
        </Container>
    );
};

export default PatientVisitCalendarPage;

