import React from 'react';
import CatList from './CatList';
import Total from './Total';


import './styles.css';

class Budget extends React.Component {
    constructor(props) {
        super();
        this.state = {
            catdata: [
                { 'name': 'Gas', 'amount': 180, 'period': '1st' },
                { 'name': 'Groceries', 'amount': 400, 'period': '1st' },
                { 'name': 'Mortgage', 'amount': 1265, 'period': '1st' },
                { 'name': 'Utilities', 'amount': 407, 'period': '1st' }
            ]
        }
    }

    total = function (data) {
        var tempt = 0;
        data.forEach((cat) => {
            tempt += cat.amount;
        })
        return tempt;
    };
    render() {
        {/* this.state.catdata => this.props.catdata */ }
        var total = this.total(this.state.catdata);
        return (
            <div className='Budget'>
                <h2>Budget</h2>
                {/* this.state.catdata => this.props.catdata */}
                <CatList catdata={this.state.catdata} />
                <Total total={total} />
            </div>
        );
    }
}
export default Budget;