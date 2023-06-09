import React from "react";
import { Container, Form, FormControl, FormGroup, FormLabel, Row, Col, Table, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../api/axiosConfig';
import { getUser, getUserId } from "../currentUserStorage";


const DoctorVisitationPage = () => {
    const [searchParams] = useSearchParams();
    let [appointmentPurpose, setAppointmentPurpose] = useState('');
    let [symptoms, setSymptoms] = useState('');
    let [tests, setTests] = useState('');
    let [meds, setMeds] = useState('');
    let [diagnosis, setDiagnosis] = useState('');
    let [desc, setDesc] = useState('');
    let [dosage, setDosage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getFormData();
    }, []);
    
    const [formData, setFormData] = useState([]);

    const getFormData = () => {
        api({
            url: '/doctorCardAndDoctor/visitations/'+searchParams.get('id'),
            method: 'get',
        }).then(
            (response) => {
                setFormData(response.data);
                setAppointmentPurpose(response.data.appointmentPurpose);
                setSymptoms(response.data.symptoms);
                setTests(response.data.medicalTests);
                setMeds(response.data.prescribedMedications);
                setDiagnosis(response.data.diagnosis);
                setDesc(response.data.appointmentDescription);
                setDosage(response.data.medicationDosage);
            }
        ).catch(
            (e) => {
                alert(e);
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
      
            const response = await api({
                url: '/doctorCardAndDoctor/doctorVisit',
                method: 'put',
                params: {
                    doctorId: getUserId(),
                    visitId: searchParams.get('id'),
                },
                data: {
                    appointmentPurpose: appointmentPurpose,
                    symptoms: symptoms,
                    medicalTests: tests,
                    prescribedMedications: meds,
                    diagnosis: diagnosis,
                    medicationDosage: dosage,
                    appointmentDescription: desc,
                },
            });
        
            if (response.status === 200) {
                alert('Sukces');
            }
        } catch (error) {
            alert('Błąd: '+ error);
          }
    }

    return (
        <Container>
            <Row>
                <WhereAreYou mainPageLink='/DoctorPage'>
                    <Link to='/DoctorPage/VisitCalendar'>Kalendarz wizyt</Link>
                    <Link to={'?id='+searchParams.get('id')}>Szczegóły wizyty</Link>
                </WhereAreYou>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Data umówienia wizyty</td>
                                <td>{formData.appointmentBookingDate}</td>
                            </tr>
                            <tr>
                                <td>Data wizyty</td>
                                <td>{formData.appointmentDate}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel>
                                Cel wizyty
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setAppointmentPurpose(e.target.value)} value={appointmentPurpose} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Opis wizyty
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setDesc(e.target.value)} value={desc} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Objawy
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setSymptoms(e.target.value)} value={symptoms} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Diagnoza
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setDiagnosis(e.target.value)} value={diagnosis} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Skierowanie na badania
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setTests(e.target.value)} value={tests} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Przypisane lekarstwa
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setMeds(e.target.value)} value={meds} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Dawkowanie
                            </FormLabel>
                            <FormControl type="text" onChange={(e)=> setDosage(e.target.value)} value={dosage} />
                        </FormGroup>
                        <Button className="m-3" type="submit">Zapisz</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorVisitationPage;
