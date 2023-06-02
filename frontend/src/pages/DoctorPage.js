import React from "react";
import { Button, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import api from '../api/axiosConfig';
import './DoctorPage.css';
import { getUser } from "../currentUserStorage";


const DoctorPage = () => {
    
    let currentUser = getUser();
    // currentUser = JSON.stringify(currentUser);
    // currentUser = encodeURI(JSON.stringify(currentUser));

    async function getUpcomingVisitations () {
        try {
            const response = await api({
                url: '/visADocAPat',
                method: 'get',
                params: {
                    mail: currentUser['mail'],
                    password: currentUser['password'],
                    userType: currentUser['userType'],
                }
            });

            if (response.status === 200) {
                return response['data'];
            } else {
                console.log('Błąd, response status:', response.status);
            }
        } catch (error) {
          console.log('Błąd żądania:', error);
        }
    };

    console.log(getUpcomingVisitations());

    return (
        <Container>
            <Navigate to='/VisitCalendar'>
                <Button>
                    Pokaż kalendarz wizyt
                </Button>
            </Navigate>
        </Container>
    );
};

export default DoctorPage;
