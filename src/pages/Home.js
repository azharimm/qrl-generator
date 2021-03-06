import React, { useEffect } from 'react';
import axios from 'axios';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';
import Card from '../components/Card';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Loading from '../components/Loading'
import Error from '../components/Error'

import './Home.css';

const Home = () => {
    const [{ isLoading, error, link, result, histories }, dispatch] = useStateValue();

    useEffect(() => {
        const localHistories = localStorage.getItem('histories');
        if(localHistories) {
            dispatch({type: actionTypes.SET_HISTORIES, histories: JSON.parse(localHistories)});
        }
    }, [dispatch])

    const fetchData = async () => {
        try {
            dispatch({type: actionTypes.SET_IS_LOADING, loading: true});
            dispatch({type: actionTypes.SET_ERROR, error: null});
            dispatch({type: actionTypes.SET_RESULT, result: null});
            const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
            return response.data.result;
        } catch (error) {
            dispatch({type: actionTypes.SET_ERROR, error: error.response});
            return new Error(error.response);
        }
    }

    const isValidURL = () => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
          '((\\d{1,3}\\.){3}\\d{1,3}))'+
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
          '(\\?[;&a-z\\d%_.~+=-]*)?'+
          '(\\#[-a-z\\d_]*)?$','i');
        return !!pattern.test(link);
    }

    const submit = async (e, link) => {
        e.preventDefault();
        if(!isValidURL()) {
            const err = {
                data: {
                    error: 'Please input a valid URL!'
                }
            }
            dispatch({type: actionTypes.SET_IS_LOADING, loading: false});
            dispatch({type: actionTypes.SET_ERROR, error: err});
            return;
        }
        try {
            const data = await fetchData();
            const updateHistories = [...histories, data];
            dispatch({type: actionTypes.SET_RESULT, result: data});
            dispatch({type: actionTypes.SET_HISTORIES, histories: updateHistories});
            localStorage.setItem('histories', JSON.stringify(updateHistories));
        }catch(e){}
        dispatch({type: actionTypes.SET_IS_LOADING, loading: false});
    };
    
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
                            <form onSubmit={(event) => submit(event, link)} className="mt-2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control search__input"
                                        placeholder="Your URL"
                                        value={link}
                                        required
                                        onChange={(e) =>
                                            dispatch({type: actionTypes.SET_LINK ,link: e.target.value})
                                        }
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <button disabled={isLoading} className="btn btn-primary btn-block">
                                        Generate
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {result && (
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col className="col-md-6 offset-md-3">
                            <Card className="card">
                                <div className="text-center">
                                    <small>Result:</small> <br />
                                    <br />
                                    <img
                                        src={`https://www.qrtag.net/api/qr_transparent_6.svg?url=${result.original_link}`}
                                        width="140"
                                        alt="logo"
                                    />
                                </div>
                                <ul
                                    className="list-group mt-3"
                                    style={{ fontSize: 'small' }}
                                >
                                    <li className="list-group-item">
                                        Short URL :{' '}
                                        <a href={result.full_short_link2}>
                                            {result.short_link2}
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        Alternative :{' '}
                                        <a href={result.full_short_link}>
                                            {result.short_link}
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        Original URL :{' '}
                                        <a href={result.original_link}>
                                            {result.original_link}
                                        </a>
                                    </li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )}
            {isLoading && !result && 
                <Loading />
            }
            {error &&
                <Error error={error} />
            }
        </React.Fragment>
    );
};

export default Home;
