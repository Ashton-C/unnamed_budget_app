import React, { Component } from 'react';

import './styles.css';

export class Transactions extends Component {
    constructor(props) {
        super();
        this.state = {
            transdata: [
                { 'name': 'Gas', 'amount': 38.98, 'date': '09-29-2020T11:17:23.148Z' },
                { 'name': 'Fast Food', 'amount': 7.75, 'date': '10-11-2020T15:34:40.456Z' },
                { 'name': 'Home', 'amount': 12.89, 'date': '10-08-2020T21:50:40.456Z' },
                { 'name': 'Utilities', 'amount': 92.50, 'date': '10-03-2020T18:30:45.456Z' }
            ]
        }
    }
    render() {
        return (
            <div className='Transactions scene_element scene_element--fadein scene_element--fadeout'>
                This is transactions. user is: {this.props.user}.
                Here is our transaction data: {JSON.stringify(this.state.transdata)}
            </div>
        )
    }
}

export default Transactions;
