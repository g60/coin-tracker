import React, { Component } from 'react';
//import './CoinTransaction.css';
//import {Bootstrap, Grid, Row, Col, Table} from 'react-bootstrap';

class CoinTransaction extends Component {

    

    render(props) {
        return (

            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.amountBought}</td>
                <td>£{this.props.priceBoughtAt}</td>
                <td>£{this.props.amountBought * this.props.priceBoughtAt}</td>
                <td>£{Math.round( ((this.props.amountBought * this.props.currentPrice) * 100) / 100)}</td>
                <td>@mdo</td>
            </tr>

        );
    }


}

export default CoinTransaction;