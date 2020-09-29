import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="col-md-6 offset-3">
                    <Card>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="Url">Your URL</label>
                                <input type="text" className="form-control" autoComplete="off"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Generate</button>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
