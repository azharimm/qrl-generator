import React from 'react';
import Card from '../components/Card';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

import './Home.css';

const Home = () => {
    return (
        <React.Fragment>
            <Container className="mt-5">
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <Card className="card">
                            <div className="text-center">
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png"
                                    width="140"
                                    alt="logo"
                                />{' '}
                                <br />
                                <small>
                                    QRcode and URL Shortener Generator
                                </small>
                            </div>
                            <form action="" className="mt-2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control search__input"
                                        placeholder="Your URL"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">
                                        Generate
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="col-md-6 offset-md-3">
                        <Card className="card">
                            <div className="text-center">
                                <small>Result:</small> <br />
                                <br />
                                <img
                                    src="https://www.qrtag.net/api/qr_transparent_6.svg?url=https://www.youtube.com/watch?v=J9wVHMGdUh8&ab_channel=AbdelAchrian"
                                    width="140"
                                    alt="logo"
                                />
                            </div>
                            <ul class="list-group mt-3" style={{fontSize: 'small'}}>
                                <li class="list-group-item">
                                    Short URL : <a href="https://9qr.de/Kldjp">9qr.de/Kldjp</a>
                                </li>
                                <li class="list-group-item">
                                    Alternative : <a href="https://shrtco.de/Kldjp">shrtco.de/Kldjp</a>
                                </li>
                                <li className="list-group-item">
                                    Original URL : <a href="https://www.youtube.com/watch?v=J9wVHMGdUh8">https://www.youtube.com/watch?v=J9wVHMGdUh8</a>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Home;
