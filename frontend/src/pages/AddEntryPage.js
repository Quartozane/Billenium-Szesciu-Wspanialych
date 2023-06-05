import React from "react";
import { sendRequest } from "../sendRequest";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";


const AddEntryPage = () => {
    const [entry, setEntry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = sendRequest('post', '/doctorCardAndDoctor/addEntry', {
            cardId: '6473f5088f4eff205749041c',
            entry: entry,
        });
        console.log(response);  

    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Opis</Form.Label>
                    <Form.Control type="text" onChange={(a) => setEntry(a.target.value)} value={entry} autoFocus />
                </Form.Group>
                <Button variant="primary" type="submit">Zapisz</Button>
                <Link to='..'><Button variant='secondary'>Anuluj</Button></Link>
            </Form>
        </Container>
    );
};

export default AddEntryPage;
