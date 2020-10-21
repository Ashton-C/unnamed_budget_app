import React, { Component } from 'react';

import './styles.css';

export class NavBar extends Component {
    handleNavChange = (e) => {
        console.log(e);
        this.props.onNavChange(e);
    }
    render() {
        return (
            <div className='NavBar'>
                <a href='#Income' id='Income' onClick={() => { this.handleNavChange('Income') }} className='NavBtn'>Income</a>
                <a href='#Transactions' id='Transactions' onClick={() => { this.handleNavChange('Transactions') }} className='NavBtn active'>Transactions</a>
                <a href='#Budget' id='Budget' onClick={() => { this.handleNavChange('Budget') }} className='NavBtn'>Budget</a>
            </div>
        )
    }
}

export default NavBar;
