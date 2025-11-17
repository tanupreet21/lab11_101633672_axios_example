import React from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";

class PersonList extends React.Component {

    state = {
        persons: []
    };

    componentDidMount(){
        axios
            .get("https://randomuser.me/api/?results=10")
            .then((res) => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch((err) => console.error(err));

    }

    render(){
        return(
            <Container class ="mt-4">
                <h2 className="mb-4">User Profiles</h2>
                <Row>
                    {this.state.persons.map((p, index) => (
                        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                            <Card className="shadow-sm">
                                <Card.Img variant="top" src={p.picture.large} />
                                <Card.Body>
                                    <Card.Title>
                                        {p.name.title}. {p.name.first} {p.name.last}
                                    </Card.Title>
                                    <Card.Text>
                                        <strong>Email: </strong> {p.email} <br />
                                        <strong>Phone:</strong> {p.phone} <br />
                                        <strong>City:</strong> {p.location.city} <br />
                                        <strong>Country:</strong> {p.location.country}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default PersonList;