import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import api from '../api/axiosConfig';
import './MainDoctorPage.css';
import { getUser } from "../currentUserStorage";


const MainDoctorPage = () => {
    
    let currentUser = getUser();
    // currentUser = JSON.stringify(currentUser);
    // currentUser = encodeURI(JSON.stringify(currentUser));

    async function getUpcomingVisitations () {
        try {
            const response = await api({
                url: '/MainDoctorPage',
                method: 'get',
                // loggedInUser: currentUser,
                // data: {
                //     loggedInUser: currentUser,
                // },
                params: {
                    loggedInUser: {currentUser},
                }
            });

            if (response.status === 200) {
                return response['data']
            } else {
                console.log('Błąd, response status:', response.status);
            }
        } catch (error) {
          console.log('Błąd żądania:', error);
        }
    };

    // console.log(getUpcomingVisitations());

    return (
        <Container>
            {getUpcomingVisitations()['data']}
        </Container>
    );
};

export default MainDoctorPage;
