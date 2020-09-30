import React from 'react'
import Card from '../components/Card';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

const History = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="col-md-10 offset-md-1">
                    <Card>
                        <h4>Histories</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Original URL</th>
                                    <th>Short URL</th>
                                    <th>Alternative</th>
                                    <th>QR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>https://www.youtube.com/watch?v=J9wVHMGdUh8</td>
                                    <td>
                                        <a href="https://9qr.de/Kldjp">9qr.de/Kldjp</a>
                                    </td>
                                    <td>
                                        <a href="https://shrtco.de/Kldjp">shrtco.de/Kldjp</a>
                                    </td>
                                    <td>
                                        <img 
                                            src="https://www.qrtag.net/api/qr_transparent_6.svg?url=https://www.youtube.com/watch?v=J9wVHMGdUh8&ab_channel=AbdelAchrian"
                                            alt="qr"
                                            width="50"
                                            />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default History
