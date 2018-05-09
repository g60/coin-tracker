import React, { Component } from 'react';
import './CoinListItem.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

class CoinListItem extends Component {

    constructor (props) {
        super(props)
    }

    render(props) {
        return (
/*
            <div className="coin-data-item" >
                <div >
                    <div md={6}>
                        <span className="coin-symbol">{this.props.symbol}</span> | {this.props.name}
                    </div>
                    <div md={6}>
                        {this.props.price_gbp}
                    </div>
                </div>
                <div>
                    24h: {this.props.percentChange_24hr}
                    7d: {this.props.percentChange_7d}
                </div>
            </div>
*/

            <Grid>
                <Row className="coin-data-row-1">
                    <Col md={4}></Col>
                    <Col md={2}>
                        <span className="coin-symbol">{this.props.symbol}</span> | {this.props.name}
                    </Col>
                    <Col md={2}>£ {Math.round(this.props.price_gbp * 100) / 100} </Col>
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

export default CoinListItem;