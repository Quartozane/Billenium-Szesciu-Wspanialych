import React from "react";
import { Form, Button, Container, FormGroup, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./LoginPage.css";
import api from '../api/axiosConfig';
import { useNavigate } from "react-router-dom";
import { setUser } from "../currentUserStorage";


const LoginPage = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState('');
  // Niebezpieczne, można podejrzeć wpisane hasło w F12 <input value...
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
  
      const response = await api({
        url: '/signin',
        method: 'post',
        params: {
          mail: mail,
          password: password,
        },
      });
  
      if (response.status === 200) {
        const user = response['data']
        setUser(user);
        switch(user['userType']) {
          case "Lekarz":
            navigate('/MainDoctorPage');
            break;
          default:
            console.log('userType invalid');
        }
        
      } else {
        console.log('Błąd logowania, response status:', response.status);
      }
    } catch (error) {
      console.log('Błąd logowania:', error);
    }
  };
/*
  const signin = (e) => {
    e.preventDefault();
    const sign = {
      mail: mail,
      password: password,
    };

    const response = 
    if()
  } ;
*/
    return (
        <Container fluid className="w-25 pt-3">
          <Row>
            <Card>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Form method="post" id="login-form" name="login-form" onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="email" name="mail" onChange={(a) => setMail(a.target.value)} value={mail} autoFocus/>
                      </Form.Group>
                      <FormGroup>
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password" name="password" onChange={(a) => setPassword(a.target.value)} value={password} />
                      </FormGroup>
                      <br />
                      <Button variant="primary" type="submit">Zaloguj się</Button>
                    </Form>
                  </Container>
                  
                </Card.Text>
                
              </Card.Body>
              
            </Card>
          </Row>
          
        </Container>
      
    );
};

export default LoginPage;