import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import api from '../api/axiosConfig';
import './MainDoctorPage.css';


const MainDoctorPage = () => {
    

    const getUpcomingVisitations = async () => {
        const response = await api({
            method: 'get',
            url: '/MainDoctorPage',
        });
    };

    return (
        <Container />
    );
};

export default MainDoctorPage;
