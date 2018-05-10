import React, { Component } from 'react';
import './CoinListDataItem.css';
import {Grid, Row, Col} from 'react-bootstrap';

class CoinListDataItem extends Component {

    

    render(props) {
        return (

            <Grid>
                <Row className="coin-data-row-1">
                    <Col md={4}></Col>
                    <Col md={2}>
                        <span className="coin-symbol">{this.props.symbol}</span> | {this.props.name}
                    </Col>
                    <Col md={2}>£{Math.round(this.props.price_gbp * 100) / 100} </Col>
                    <Col md={4}></Col>
                </Row>

                <Row className="coin-data-row-2">
                    <Col md={4}></Col>
                    <Col md={2}>
                        24h: {this.props.percentChange_24hr}
                    </Col>
                    <Col md={2}>7d: {this.props.percentChange_7d}</Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>

        );
    }


}

export default CoinListDataItem;