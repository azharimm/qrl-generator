import React, {useEffect} from 'react'
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';
import Card from '../components/Card';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

const History = () => {
    const [{ histories }, dispatch] = useStateValue();

    useEffect(() => {
        const localHistories = localStorage.getItem('histories');
        if(localHistories) {
            dispatch({type: actionTypes.SET_HISTORIES, histories: JSON.parse(localHistories)});
        }
    }, [dispatch])

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
                                {histories.slice(0).reverse().map(history => (
                                    <tr key={history.code}>
                                        <td>{history.original_link}</td>
                                        <td>
                                            <a href={history.full_short_link2}>{history.short_link2}</a>
                                        </td>
                                        <td>
                                            <a href={history.full_short_link}>{history.short_link}</a>
                                        </td>
                                        <td>
                                            <img 
                                                src={`https://www.qrtag.net/api/qr_transparent_6.svg?url=${history.original_link}`}
                                                alt="qr"
                                                width="50"
                                                />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default History
