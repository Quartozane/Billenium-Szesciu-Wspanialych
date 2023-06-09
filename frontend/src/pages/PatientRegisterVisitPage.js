import React from "react";
import api from '../api/axiosConfig';
import { getUserId } from "../currentUserStorage";
import { Container, Form, Button, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";

const PatientRegisterVisitPage = () => {
    const naviage = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        fetchDoctors();
    }, []);
    const fetchDoctors = async () => {
        try {
            const response = await api({
                url:'/patientCard/doctors',
                method: 'get',
            });
            console.log(response.data);
            setDoctors(response.data);
        } catch (e) {
            alert(e);
        }
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // useEffect(() => {
        //     getNewVisit();
        // }, []);
        console.log(selectedDate);

        const getNewVisit = await api({
                url:'/patientCard/patientVisit',
                method: 'post',
                params: {
                    idPatient: getUserId(),
                    idDoctor: selectedDoctor.valueOf(),
                    appointmentDate: selectedDate,
                },
            }).then(
                (response) => {
                    alert('Zarejestrowano na wizytę!');
                    console.log(response.data);
                }
            ).catch(
                (e) => {
                    alert(e);
                }
            )
    };

    return (
        <Container>
            <Row>
                <WhereAreYou mainPageLink='/PatientPage'>
                    <Link to='.'>Zarejestruj się na wizytę</Link>
                </WhereAreYou>
            </Row>
            <Row>
                <Form method="post" id="register-visit-form" name="register-visit-form" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Lekarz</Form.Label>
                            <Form.Select name="doctor" onChange={(e)=> setSelectedDoctor(e.target.value)} autoFocus>
                                {
                                    doctors.map(
                                        entry => 
                                            <option key={entry.doctorCard.id.timestamp+entry.doctorCard.id.date} value={entry.doctorId}>{entry.userDoctor.name} {entry.userDoctor.surname} - {entry.doctorCard.specialization}</option>
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                    <FormGroup>
                        <Form.Label>Data wizyty</Form.Label>
                        <Form.Control type="datetime-local" name="password" onChange={(e)=> setSelectedDate(e.target.value)} value={selectedDate}/>
                        </FormGroup>
                    <br />
                    <Button variant="primary" type="submit">Zarejestruj się</Button>
                </Form>
            </Row>
        </Container>
    );
}

export default PatientRegisterVisitPage;
