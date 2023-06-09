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
    const [meds, setMeds] = useState('');
    const [symptoms, setSymptoms] = useState('');

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
        if(selectedDoctor == null || selectedDoctor == '') {
            alert("Należy wybrać lekarza");
            return;
        }
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
                    prescribedMedications: meds,
                    symptoms: symptoms,
                },
            }).then(
                (response) => {
                    alert(response.data);
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
                            <Form.Select name="doctor" onChange={(e)=> setSelectedDoctor(e.target.value)} value={selectedDoctor} autoFocus>
                                <option value=''>Wybierz lekarza...</option>
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
                        <Form.Control type="datetime-local" min={new Date()} step='1800' onChange={(e)=> setSelectedDate(e.target.value)} value={selectedDate}/>
                        </FormGroup>
                    <FormGroup>
                        <Form.Label>Objawy</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setSymptoms(e.target.value)} value={symptoms} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Aktualnie stosowane leki</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setMeds(e.target.value)} value={meds} />
                    </FormGroup>
                    <br />
                    <Button variant="primary" type="submit">Zarejestruj się</Button>
                </Form>
            </Row>
        </Container>
    );
}

export default PatientRegisterVisitPage;
