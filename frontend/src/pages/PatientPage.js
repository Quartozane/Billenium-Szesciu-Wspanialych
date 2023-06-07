import React from "react";
import api from '../api/axiosConfig';
import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";


const PatientPage = () => {
    useEffect(() => {
        getUser();
    }, [])
    
    const [visitation, setVisitation] = useState([]);

    const getUser = () => {
        api.get('/patientCard').then(
            (response) => {
                setVisitation(response.data);
                console.log(response);
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        )
    };

    return (
        <Container>
            <Table>
                <tbody>
                {
                    visitation.map(
                        visit => 
                        <tr key={visit.id}>
                            <td>
                                {visit.doctor === null ? '': visit.doctor.name + ' ' + visit.doctor.surname }
                            </td>
                        </tr>
                    )
                    
                }
                </tbody>
                
            </Table>
        </Container>
    );
};

export default PatientPage;
