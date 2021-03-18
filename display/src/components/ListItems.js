import React from 'react'
import {Nav, NavItem, NavLink, 
    Card, CardGroup, CardHeader, CardTitle, CardBody, CardSubtitle, CardText, 
    Row, Col } from 'reactstrap';

const SightingItem = ({ item }) => {   
    return (
        <CardGroup>
        <Row>
            <Col>
                <Card color="secondary" className="text-center text-white">
                    <Nav tabs>
                        <NavItem>
                            <NavLink href="#" active>Active</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Details</NavLink>
                        </NavItem>
                    </Nav>
                    <CardHeader>
                        <CardTitle tag="h5">{item.comName}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2">{item.sciName}</CardSubtitle>
                        <CardText>{item.locName}<br></br>
                        {item.howMany}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </CardGroup>
    );
};

export default SightingItem;