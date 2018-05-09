import React, { Component } from 'react';
//import './CoinTransactions.css';
import CoinTransaction from './CoinTransaction';
import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';

class CoinTransactions extends Component {

    

    render(props) {
        return (

            <Grid>
                <Row className="">
                    <Col md={3}></Col>
                    <Col md={6}>

                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Date of Transaction#</th>
                                    <th>Amount Bought</th>
                                    <th>Price Bought</th>
                                    <th>Total</th>
                                    <th>Current Value</th>
                                    <th>Profit / Loss</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CoinTransaction />
                                <CoinTransaction />
                                <CoinTransaction />
                            </tbody>
                        </Table>;

                    </Col>
                    <Col md={3}></Col>
                </Row>

                <Row className="coin-data-row-2">
                    <Col md={4}></Col>
                    <Col md={4}>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>

        );
    }


}

export default CoinTransactions;