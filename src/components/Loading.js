import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import './Loading.css';

const Loading = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col className="col-md-6 offset-md-3">
                    <Card className="card">
                        <div className="text-center">
                            <div className="title_result loading"></div>
                            <div className="qr_result loading mt-2"></div>
                        </div>
                        <ul
                            className="list-group mt-3"
                            style={{ fontSize: 'small' }}
                        >
                            <li className="list-group-item-load loading">
                            </li>
                            <li className="list-group-item-load loading">
                            </li>
                            <li className="list-group-item-load loading">
                            </li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Loading;
