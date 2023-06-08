import { Button, Col, Container, Row, Table } from "react-bootstrap";
import './DoctorPage.css';
import { useNavigate } from "react-router-dom";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { React, useState, useEffect } from "react";
import api from '../api/axiosConfig';
import { getUserId } from "../currentUserStorage";


const DoctorPage = () => {
    const calendarLink = () => useNavigate('./VisitCalendar');
    const patientListLink = () => useNavigate('./PatientList');

    useEffect(() => {
        getVisitation();
    }, []);
    
    const [visitation, setVisitation] = useState([]);

    const getVisitation = () => {
        api({
            url:'/visADocAPat',
            method: 'get',
            params: {
                id: getUserId(),
            }
        }).then(
            (response) => {
                setVisitation(response.data);
                console.log(response);
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
            <Row>
                <WhereAreYou mainPageLink='/DoctorPage'>
                </WhereAreYou>
            </Row>
            <Row>
                <Table>
                    <tbody>
                    {
                        visitation.map(
                            entry => 
                            <tr key={entry.visitation.id}>
                                <td>
                                    {entry.patient.name+' '+entry.patient.surname}
                                </td>
                                <td>
                                    {entry.visitation.appointmentDate}
                                </td>
                                <td>
                                    {entry.visitation.appointmentDate}
                                </td>
                            </tr>
                        )
                        
                    }
                    </tbody>
                    
                </Table>
            </Row>
            <Row>
                <Col>
                    <Button className="position-relative start-50 translate-middle-x" onClick={calendarLink}>
                        Wyświetl kalendarz wizyt
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" className="position-relative start-50 translate-middle-x">
                        Wyświetl listę pacjentów
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" className="position-relative start-50 translate-middle-x" onClick={useNavigate('./DoctorCard')}>
                        Wyświetl kartę lekarza
                    </Button>
                </Col>
            </Row>
            
        </Container>
    );
};

export default DoctorPage;
