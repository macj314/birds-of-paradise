import React from 'react'
import ListItems from './ListItems';
import { Container, Row, Col } from 'reactstrap'

const Sightings = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="sighting-list">
        {items.map(item => (
            <Container className="m-1">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ListItems key={item.speciesCode} item={item}></ListItems>
                    </Col>
                </Row>
            </Container>
            ))}
    </section>)
}

export default Sightings