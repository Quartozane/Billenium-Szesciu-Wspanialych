import React from "react";
import api from '../api/axiosConfig';
import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";


const PatientPage = () => {
    useEffect(() => {
        getVisitation();
    }, [])
    
    const [visitation, setVisitation] = useState([]);

    const getVisitation = () => {
        api.get('/patientCard').then(
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
            <Table>
                <tbody>
                {
                    visitation.map(
                        visit => 
                        <tr key={visit.id}>
                            <td>
                                {visit.doctor === null ? '': visit.doctor.name + ' ' + visit.doctor.surname }
                            </td>
                            <td>
                                
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
