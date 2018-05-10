import React, { Component } from 'react';
//import './CoinTransactions.css';
import CoinTransaction from './CoinTransaction';
import {Grid, Row, Col, Table} from 'react-bootstrap';

class CoinTransactions extends Component {

    constructor(props){
        super(props);

        //console.log("currentPrice: " + this.props.currentPrice);

        this.state = {
            
            allTransactions: [
                {
                    symbol: "BTC",
                    date: "19/01/2018", 
                    amountBought: 4,
                    priceBoughtAt: 3,
                },
                {
                    symbol: "BTC",
                    date: "20/01/2018", 
                    amountBought: 4,
                    priceBoughtAt: 3,
                },
            ],
        };


    }

    componentWillMount() {
        console.log("currentPrice: " + this.props.currentPrice);
        this.setState({currentPrice: this.props.currentPrice});
    }

    render(props) {

        var self = this;

        return (
            <div>
                <h3>Transactions for {this.props.symbol}</h3>
                <Grid>
                    <Row className="">
                        <Col md={3}></Col>
                        <Col md={6}>

                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Date of Transaction</th>
                                        <th>Amount Bought</th>
                                        <th>Price Bought</th>
                                        <th>Total</th>
                                        <th>Current Value</th>
                                        <th>Profit / Loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.allTransactions.map(function(item, i){
                                        //console.log('test: '+self.state.currentPrice);
                                        return <CoinTransaction key={i} 
                                                                symbol={item.symbol}
                                                                date={item.date}
                                                                amountBought={item.amountBought}
                                                                priceBoughtAt={item.priceBoughtAt}
                                                                currentPrice={self.state.currentPrice}/>
                                    })}
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
            </div>
        );
    }


}

export default CoinTransactions;